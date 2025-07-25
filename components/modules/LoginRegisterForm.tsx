import Link from "next/link";
import TextInput from "@/elements/TextInput";

const LoginRegisterForm = ({
  formik,
  type,
}: {
  formik: any;
  type: "login" | "register";
}) => {
  return (
    <div className="mx-auto my-10 max-w-[500px]">
      <h2 className="text-2xl font-bold text-center mb-4">
        {type === "register" ? "فرم ثبت نام" : "فرم ورود به حساب کاربری"}
      </h2>
      <form onSubmit={formik.handleSubmit} className="border-sky-400 dark:border-sky-800 border-2 py-4 px-8 rounded-lg">
        <TextInput
          placeholder="ایمیل"
          title="ایمیل:"
          name="email"
          type="email"
          blur={formik.touched.email}
          error={formik.errors.email}
          value={formik.values.email}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
        />
        <TextInput
          placeholder="رمز عبور"
          title="رمز عبور:"
          name="password"
          type="password"
          blur={formik.touched.password}
          error={formik.errors.password}
          value={formik.values.password}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
        />
        {type === "register" ? (
          <TextInput
            placeholder="تکرار رمز عبور"
            title="تکرار رمز عبور:"
            name="confirmPassword"
            type="password"
            blur={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
            value={formik.values.confirmPassword}
            changeHandler={formik.handleChange}
            blurHandler={formik.handleBlur}
          />
        ) : null}
        <button
          type='submit'
          className="bg-emerald-500 hover:bg-emerald-500/80 mt-2 text-white dark:border dark:border-emerald-400 dark:text-emerald-400 dark:bg-emerald-950 dark:hover:bg-emerald-900 w-full py-1 px-2.5 rounded-md"
        >
          {type === "register" ? "ثبت نام" : "ورود به حساب کاربری"}
        </button>
      </form>
      <p className="text-center mt-4 text-neutral-600 dark:text-inherit">
        {type === "register" ? "حساب کاربری دارید؟ " : "حساب کاربری ندارید؟ "}
        <Link
          href={type === "register" ? "/login" : "/register"}
          className="text-emerald-700 dark:text-emerald-500 hover:underline underline-offset-4"
        >
          {type === "register" ? "ورود" : "ثبت نام"}
        </Link>
      </p>
    </div>
  );
};

export default LoginRegisterForm;
