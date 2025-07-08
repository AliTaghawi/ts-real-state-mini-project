"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import LoginRegisterForm from "@/modules/LoginRegisterForm";
import { RegisterType } from "@/types/types";

const initialValues: RegisterType = {
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("لطفا ایمیل معتبر وارد کنید").required("الزامی!"),
  password: Yup.string()
    .min(8, "حداقل کارکتر مجاز 8 کارکتر میباشد")
    .required("الزامی!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "تکرار رمز عبور همخوانی ندارد")
    .required("الزامی!"),
});

const onSubmit = (values: object, { resetForm }: { resetForm: () => void }) => {
  console.log(values);
  resetForm();
};

const RegisterPage = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return <LoginRegisterForm formik={formik} type="register" />;
};

export default RegisterPage;
