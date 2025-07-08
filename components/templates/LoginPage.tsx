"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  async function onSubmit(
    values: object,
    { resetForm }: { resetForm: () => void }
  ) {
    console.log(values)
  }
  return <LoginRegisterForm formik={formik} type="login" />;
};

export default LoginPage;
