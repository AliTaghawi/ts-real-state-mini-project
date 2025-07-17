"use client"

import RadioInput from "@/elements/addFilePage/RadioInput";
import TextInput from "@/elements/TextInput";
import CustomDatePicker from "@/modules/addFilePage/CustomDatePicker";
import TextList from "@/modules/addFilePage/TextList";

const AddFilePage = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-7">فرم ثبت آگهی</h2>
      <form>
        <TextInput divClass="w-full max-w-[390px]" dir="rtl" title="عنوان:" type="text" name="title" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        <TextInput divClass="w-full max-w-[390px]" dir="rtl" title="توضیحات:" type="text" name="description" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} textarea={true} />
        <TextInput divClass="w-full max-w-[390px]" title="متراژ:" placeholder="به عدد" type="text" name="areaMeter" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        <TextInput divClass="w-full max-w-[390px]" dir="rtl" title="موقعیت:" type="text" name="location" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        <TextInput divClass="w-full max-w-[390px]" dir="rtl" title="آدرس:" type="text" name="address" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        <TextInput divClass="w-full max-w-[390px]" dir="rtl" title="بنگاه:" type="text" name="realState" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        <TextInput divClass="w-full max-w-[390px]" title="شماره تماس:" type="text" name="phone" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
          <div>
            <p>نوع آگهی:</p>
            <div className="flex items-center justify-between gap-4 mt-3 mb-8 max-w-[300px]">
              <RadioInput title="اجاره" value="rent" name="fileType" checked blur error="" onChange={() => {}} onBlur={() => {}} />
              <RadioInput title="رهن" value="mortgage" name="fileType" checked blur error="" onChange={() => {}} onBlur={() => {}} />
              <RadioInput title="خرید" value="buy" name="fileType" checked blur error="" onChange={() => {}} onBlur={() => {}} />
            </div>
          </div>
        <TextInput divClass="w-full max-w-[390px]" dir="rtl" title="قیمت (تومان):" type="text" name="price" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        <div className=" flex flex-wrap justify-between min-[410px]:gap-4 w-full max-w-[390px]">
          <TextInput divClass="w-full min-[410px]:w-[170px]" dir="rtl" title="اجاره (تومان):" type="text" name="price" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
          <TextInput divClass="w-full min-[410px]:w-[170px]" dir="rtl" title="رهن (تومان):" type="text" name="price" value="" blur error="" changeHandler={() => {}} blurHandler={() => {}} />
        </div>
        <div>
          <p>نوع ملک:</p>
          <div className="flex flex-col items-start min-[350px]:flex-row min-[350px]:items-center justify-between gap-4 mt-3 mb-8 max-w-[400px] ">
            <RadioInput title="ویلا" value="villa" name="category" checked blur error="" onChange={() => {}} onBlur={() => {}} />
            <RadioInput title="آپارتمان" value="apartment" name="category" checked blur error="" onChange={() => {}} onBlur={() => {}} />
            <RadioInput title="مغازه" value="store" name="category" checked blur error="" onChange={() => {}} onBlur={() => {}} />
            <RadioInput title="دفتر" value="office" name="category" checked blur error="" onChange={() => {}} onBlur={() => {}} />
          </div>
        </div>
        <CustomDatePicker />
        <TextList title="امکانات رفاهی:" />
        <TextList title="قوانین:" />
      </form>
    </div>
  );
};

export default AddFilePage;