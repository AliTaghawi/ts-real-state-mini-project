"use client";

import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "@/elements/TextInput";
import { RootState } from "@/redux/stor";
import { FrontUser } from "@/models/RSUser";
import CheckBox from "@/elements/profilePage/CheckBox";

const validationSchema = Yup.object({
  fullname: Yup.string().nullable(),
  showName: Yup.string().nullable(),
  phone: Yup.string().nullable(),
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
  console.log(values);
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
          title="نام و نام خانوادگی"
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
          title="شماره تماس"
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
              checked={formik.values.showSocials?.email}
              onChange={formik.handleChange}
              name="showSocials.email"
            />
            <CheckBox
              title="شماره تماس"
              checked={formik.values.showSocials?.phone}
              onChange={formik.handleChange}
              name="showSocials.phone"
            />
            {/* <div className="flex items-center gap-1 bg-neutral-200 py-0.5 px-1.5 rounded-md">
              <label htmlFor="email">ایمیل</label>
              <input type="checkbox" name="showSocials.email" id="email" checked={formik.values.showSocials?.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
            <div className="flex items-center gap-1 bg-neutral-200 py-0.5 px-1.5 rounded-md">
              <label htmlFor="phone">شماره تماس</label>
              <input type="checkbox" name="showSocials.phone" id="phone" checked={formik.values.showSocials?.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div> */}
          </div>
        </div>
        <TextInput
          title="درباره من"
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
    </div>
  );
};

export default EditProfilePage;
