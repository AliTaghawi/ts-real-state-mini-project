"use client";

import { redirect, RedirectType } from "next/navigation";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import TextInput from "@/elements/TextInput";
import { RootState } from "@/redux/stor";
import { FrontUser } from "@/models/RSUser";
import CheckBox from "@/elements/profilePage/CheckBox";

const validationSchema = Yup.object({
  fullname: Yup.string().nullable(),
  showName: Yup.string().nullable(),
  phone: Yup.string()
    .matches(
      /(((^(\+|00)(98)([- ]?))|^(0))(9\d{2})([- ]?)(\d{3})([- ]?)(\d{4})$)|((^(\+|00)(98)([- ]?))|^(0))([1-9]{2}[0-9]{8})$/,
      "شماره تلفن معتبر نیست!"
    )
    .nullable(),
  bio: Yup.string().nullable(),
  showSocials: Yup.object({
    email: Yup.boolean().required("الزامی!"),
    phone: Yup.boolean().required("الزامی!"),
  }),
});

const onSubmit = async (
  values: FrontUser,
  { resetForm }: { resetForm: () => void }
) => {
  const result = await fetch('/api/user', {
    method: "PATCH",
    body: JSON.stringify(values),
    headers: {"Content-Type": "application/json"}
  })
  const res = await result.json()
  if (res.error) {
    toast.error(res.error)
  } else {
    toast.success(res.message)
    resetForm()
    redirect("/dashboard/profile", RedirectType.replace)
  }
};

const EditProfilePage = () => {
  const user = useSelector((store: RootState) => store.user.user);
  const initialValues: FrontUser = {
    fullName: "",
    showName: "",
    phone: "",
    bio: "",
    ...user,
    showSocials: {
      email: false,
      phone: false,
      ...user?.showSocials,
    },
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <h2 className="text-xl font-bold mb-7">فرم تغییر اطلاعات حساب کاربری.</h2>
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          title="نام و نام خانوادگی:"
          placeholder="نام و نام خانوادگی"
          dir="rtl"
          type="text"
          name="fullName"
          value={formik.values.fullName ?? ""}
          error={formik.errors.fullName}
          blur={formik.touched.fullName}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
          divClass="max-w-[400px]"
        />
        <TextInput
          title="نامی که به کاربران نشان داده میشود:"
          placeholder="نامی که به کاربران نشان داده میشود"
          dir="rtl"
          type="text"
          name="showName"
          value={formik.values.showName ?? ""}
          error={formik.errors.showName}
          blur={formik.touched.showName}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
          divClass="max-w-[400px]"
        />
        <TextInput
          title="شماره تماس:"
          placeholder="شماره تماس"
          dir="ltr"
          type="text"
          name="phone"
          value={formik.values.phone ?? ""}
          error={formik.errors.phone}
          blur={formik.touched.phone}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
          divClass="max-w-[400px]"
        />
        <div className="max-w-[400px]">
          <p>نمایش اطلاعات تماس:</p>
          <div className="flex items-center justify-between mt-2 mb-5">
            <CheckBox
              title="ایمیل"
              id="email"
              checked={formik.values.showSocials?.email}
              onChange={formik.handleChange}
              name="showSocials.email"
            />
            <CheckBox
              title="شماره تماس"
              id="phone"
              checked={formik.values.showSocials?.phone}
              onChange={formik.handleChange}
              name="showSocials.phone"
            />
          </div>
        </div>
        <TextInput
          title="درباره من:"
          placeholder="درباره من"
          dir="rtl"
          type="text"
          name="bio"
          value={formik.values.bio ?? ""}
          error={formik.errors.bio}
          blur={formik.touched.bio}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
          textarea={true}
        />
        <div className="flex items-center justify-between mb-8">
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-500/80 text-white py-0.5 px-2.5 rounded-md"
          >
            ثبت تغییرات
          </button>
          <button
            type="button"
            className="bg-neutral-300 hover:bg-neutral-300/80 border border-neutral-400/70 py-0.5 px-2.5 rounded-md"
          >
            انصراف
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default EditProfilePage;
