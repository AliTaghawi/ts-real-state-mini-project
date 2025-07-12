import { useFormik } from "formik";
import * as Yup from "yup";
import { MdDeleteForever } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import TextInput from "@/elements/TextInput";

const initialValues = {
  password: "",
};

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "مرز عبور باید 8 کارکتر یا بیشتر باشد")
    .required("الزامی!"),
});

const onSubmit = (values: object, { resetForm }: { resetForm: () => void }) => {
  console.log(values);
};
const DeletePopup = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="mb-[50%] fixed top-0 left-0 z-20 w-full h-full backdrop-blur-xs ">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-4 border-2 border-red-400 rounded-xl block w-fit mt-[150px] mx-auto"
      >
        <span className="bg-red-400 text-white size-6 flex items-center justify-center rounded-md mr-auto">
          <IoClose className="text-2xl" />
        </span>
        <p>از رفتن شما بسیار متاسفیم. </p>
        <p>اگر از حذف حساب کاربری خود مطمئنید، رمز عبور خود را وارد کنید.</p>
        <TextInput
          title=""
          type="password"
          name="password"
          placeholder="رمز عبور"
          value={formik.values.password}
          error={formik.errors.password}
          blur={formik.touched.password}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
        />
        <div className="flex items-center justify-between">
          <button className="bg-emerald-500 py-0.5 px-2.5 text-white rounded-md">
            انصراف
          </button>
          <button className="bg-red-400 py-0.5 px-1.5 text-white rounded-md flex items-center">
            <MdDeleteForever className="text-xl" />
            حذف حساب کاربری
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeletePopup;
