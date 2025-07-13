"use client";

import TextInput from "@/elements/TextInput";

const EditProfilePage = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-7">فرم تغییر اطلاعات حساب کاربری.</h2>
      <form>
        <TextInput
          title="نام و نام خانوادگی"
          type="text"
          name="fullName"
          value=""
          error=""
          blur
          changeHandler={() => {}}
          blurHandler={() => {}}
          divClass="max-w-[400px]"
        />
        <TextInput
          title="نامی که به کاربران نشان داده میشود:"
          type="text"
          name="showName"
          value=""
          error=""
          blur
          changeHandler={() => {}}
          blurHandler={() => {}}
          divClass="max-w-[400px]"
        />
        <TextInput
          title="شماره تماس"
          type="text"
          name="phone"
          value=""
          error=""
          blur
          changeHandler={() => {}}
          blurHandler={() => {}}
          divClass="max-w-[400px]"
        />
        <TextInput
          title="درباره من"
          type="text"
          name="phone"
          value=""
          error=""
          blur
          changeHandler={() => {}}
          blurHandler={() => {}}
          textarea={true}
        />
        <div className="flex items-center justify-between mb-8">
          <button className="bg-emerald-500 hover:bg-emerald-500/80 text-white py-0.5 px-2.5 rounded-md">
            ثبت تغییرات
          </button>
          <button className="bg-neutral-300 hover:bg-neutral-300/80 border border-neutral-400/70 py-0.5 px-2.5 rounded-md">
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;
