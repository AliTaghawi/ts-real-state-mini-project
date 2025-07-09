"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { LoginType } from "@/types/types";
import LoginRegisterForm from "@/modules/LoginRegisterForm";

const initialValues: LoginType = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("لطفا ایمیل معتبر وارد کنید").required("الزامی!"),
  password: Yup.string()
    .min(8, "حداقل کارکتر مجاز 8 کارکتر میباشد")
    .required("الزامی!"),
});

const LoginPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  async function onSubmit(
    values: object,
    { resetForm }: { resetForm: () => void }
  ) {
    const res = await signIn("credentials", {
      ...values,
      redirect: false,
    });
    if (res?.status === 200) {
      resetForm();
      router.replace("/");
    } else if (res?.error) {
      toast.error(res.error);
    }
  }
  return (
    <>
      <LoginRegisterForm formik={formik} type="login" />
      <Toaster />
    </>
  );
};

export default LoginPage;
