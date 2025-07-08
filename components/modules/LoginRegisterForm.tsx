"use client";
import TextInput from "@/elements/TextInput";

const LoginRegisterForm = ({ type }: { type: "login" | "register" }) => {
  const changeHandler = () => {};
  return (
    <div className="mx-auto my-10 max-w-[500px]">
      <h2 className="text-2xl font-bold text-center mb-4">
        {type === "register" ? "فرم ثبت نام" : "فرم ورود"}
      </h2>
      <form className="border-sky-400 border-2 py-4 px-8 rounded-lg">
        <TextInput
          placeholder="ایمیل"
          title="ایمیل:"
          error=""
          name="email"
          type="email"
          value=""
          changeHandler={changeHandler}
          blurHandler={changeHandler}
        />
        <TextInput
          placeholder="رمز عبور"
          title="رمز عبور:"
          error=""
          name="password"
          type="password"
          value=""
          changeHandler={changeHandler}
          blurHandler={changeHandler}
        />
        <TextInput
          placeholder="تکرار رمز عبور"
          title="تکرار رمز عبور:"
          error=""
          name="confirmPassword"
          type="password"
          value=""
          changeHandler={changeHandler}
          blurHandler={changeHandler}
        />
      </form>
    </div>
  );
};

export default LoginRegisterForm;
