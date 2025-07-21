"use client";

import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "@/elements/TextInput";
import { ChangePasswordType } from "@/types/types";
import toast, { Toaster } from "react-hot-toast";

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

const onSubmit = async (
  values: object,
  { resetForm }: { resetForm: () => void }
) => {
  const result = await fetch("/api/user/password", {
    method: "PATCH",
    body: JSON.stringify(values),
    headers: { "Content-Type": "application/json" },
  });
  const res = await result.json();
  if (res.error) {
    toast.error(res.error);
  } else {
    toast.success(res.message);
    resetForm();
  }
};

const ChangePasswordPage = () => {
  const router = useRouter();
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
            className="bg-emerald-500 text-white py-0.5 px-2.5 rounded-md hover:bg-emerald-500/80 dark:text-emerald-500 dark:bg-emerald-950 dark:hover:bg-emerald-900 transition ease-linear"
          >
            تغییر رمز عبور
          </button>
          <button
            type="button"
            onClick={() => router.replace("/dashboard/profile")}
            className="bg-neutral-300 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 border border-neutral-400/70 dark:border-neutral-700 py-0.5 px-2.5 rounded-md hover:bg-neutral-300/80  dark:hover:bg-neutral-700 transition ease-linear"
          >
            انصراف
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default ChangePasswordPage;
