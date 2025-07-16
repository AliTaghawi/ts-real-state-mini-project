"use client"

import TextInput from "@/elements/TextInput";

const AddFilePage = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-7">فرم ثبت آگهی</h2>
      <div>
        <TextInput divClass=" w-fit min-w-[300px]" title="عنوان:" type="text" name="title" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        <TextInput divClass="w-fit min-w-[300px]" title="توضیحات:" type="text" name="description" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} textarea={true} />
        <TextInput divClass=" w-fit min-w-[300px]" title="متراژ:" type="text" name="areaMeter" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        <TextInput divClass=" w-fit min-w-[300px]" title="موقعیت:" type="text" name="location" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        <TextInput divClass=" w-fit min-w-[300px]" title="آدرس:" type="text" name="address" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        <TextInput divClass=" w-fit min-w-[300px]" title="بنگاه:" type="text" name="realState" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        <TextInput divClass=" w-fit min-w-[300px]" title="شماره تماس:" type="text" name="phone" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
      </div>
    </div>
  );
};

export default AddFilePage;