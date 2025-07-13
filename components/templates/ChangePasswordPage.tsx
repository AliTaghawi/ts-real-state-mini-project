"use client";

import TextInput from "@/elements/TextInput";
import React from "react";

const ChangePasswordPage = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mt-1">فرم تغییر رمز عبور</h2>
      <form className="max-w-[400px] mt-8">
        <TextInput
          title="رمز عبور"
          placeholder="رمز عبور"
          type="password"
          name="password"
          value=""
          error=""
          blur
          changeHandler={() => {}}
          blurHandler={() => {}}
        />
        <TextInput
          title="رمز عبور جدید"
          placeholder="رمز عبور جدید"
          type="password"
          name="newPassword"
          value=""
          error=""
          blur
          changeHandler={() => {}}
          blurHandler={() => {}}
        />
        <TextInput
          title="تکرار رمز عبور جدید"
          placeholder="تکرار رمز عبور جدید"
          type="password"
          name="confirmPassword"
          value=""
          error=""
          blur
          changeHandler={() => {}}
          blurHandler={() => {}}
        />
        <div className="flex items-center justify-between">
          <button className="bg-emerald-500 text-white py-0.5 px-2.5 rounded-md hover:bg-emerald-500/80">
            تغییر رمز عبور
          </button>
          <button className="bg-neutral-300 text-neutral-800 border border-neutral-400/70 py-0.5 px-2.5 rounded-md hover:bg-neutral-300/80">
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
