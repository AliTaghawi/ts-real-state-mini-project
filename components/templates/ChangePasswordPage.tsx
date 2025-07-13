"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "@/elements/TextInput";
import { ChangePasswordType } from "@/types/types";

const initialValues: ChangePasswordType = {
  password: "",
  newPassword: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "رمز عبور باید 8 کارکتر یا بیشتر باشد")
    .required("الزامی!"),
  newPassword: Yup.string()
    .min(8, "رمز عبور جدید باید 8 کارکتر یا بیشتر باشد")
    .required("الزامی!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "تکرار رمز عبور جدید همخوانی ندارد!")
    .required("الزامی!"),
});

const onSubmit = (values: object, { resetForm }: { resetForm: () => void }) => {
  console.log(values);
};

const ChangePasswordPage = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <h2 className="text-xl font-bold mt-1">فرم تغییر رمز عبور</h2>
      <form onSubmit={formik.handleSubmit} className="max-w-[400px] mt-8">
        <TextInput
          title="رمز عبور"
          placeholder="رمز عبور"
          type="password"
          name="password"
          value={formik.values.password}
          error={formik.errors.password}
          blur={formik.touched.password}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
        />
        <TextInput
          title="رمز عبور جدید"
          placeholder="رمز عبور جدید"
          type="password"
          name="newPassword"
          value={formik.values.newPassword}
          error={formik.errors.newPassword}
          blur={formik.touched.newPassword}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
        />
        <TextInput
          title="تکرار رمز عبور جدید"
          placeholder="تکرار رمز عبور جدید"
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          error={formik.errors.confirmPassword}
          blur={formik.touched.confirmPassword}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
        />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-emerald-500 text-white py-0.5 px-2.5 rounded-md hover:bg-emerald-500/80"
          >
            تغییر رمز عبور
          </button>
          <button
            type="button"
            className="bg-neutral-300 text-neutral-800 border border-neutral-400/70 py-0.5 px-2.5 rounded-md hover:bg-neutral-300/80"
          >
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
