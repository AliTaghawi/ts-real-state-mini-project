import TextInput from "@/elements/TextInput";
import CategoryList from "@/modules/addFilePage/CategoryList";
import CustomDatePicker from "@/modules/addFilePage/CustomDatePicker";
import FileTypeList from "@/modules/addFilePage/FileTypeList";
import TextList from "@/modules/addFilePage/TextList";

const AddFileForm = () => {
  return (
    <form>
      <TextInput
        divClass="w-full max-w-[390px]"
        dir="rtl"
        title="عنوان:"
        placeholder="عنوان آگهی"
        type="text"
        name="title"
        value=""
        blur
        error=""
        changeHandler={() => {}}
        blurHandler={() => {}}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        dir="rtl"
        title="توضیحات:"
        placeholder="توضیحات آگهی"
        type="text"
        name="description"
        value=""
        blur
        error=""
        changeHandler={() => {}}
        blurHandler={() => {}}
        textarea={true}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        title="متراژ:"
        placeholder="به عدد"
        type="text"
        name="areaMeter"
        value=""
        blur
        error=""
        changeHandler={() => {}}
        blurHandler={() => {}}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        dir="rtl"
        title="موقعیت:"
        placeholder="مثال: تهران محدوده ستارخان"
        type="text"
        name="location"
        value=""
        blur
        error=""
        changeHandler={() => {}}
        blurHandler={() => {}}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        dir="rtl"
        title="آدرس:"
        placeholder="آدرس کامل"
        type="text"
        name="address"
        value=""
        blur
        error=""
        changeHandler={() => {}}
        blurHandler={() => {}}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        dir="rtl"
        title="بنگاه:"
        placeholder="آگهی شخصی یا نام بنگاه آگهی دهنده"
        type="text"
        name="realState"
        value=""
        blur
        error=""
        changeHandler={() => {}}
        blurHandler={() => {}}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        title="شماره تماس:"
        placeholder="شماره ایران"
        type="text"
        name="phone"
        value=""
        blur
        error=""
        changeHandler={() => {}}
        blurHandler={() => {}}
      />
      <FileTypeList />
      <TextInput
        divClass="w-full max-w-[390px]"
        title="قیمت (تومان):"
        placeholder="به عدد"
        type="text"
        name="price"
        value=""
        blur
        error=""
        changeHandler={() => {}}
        blurHandler={() => {}}
      />
      <div className=" flex flex-wrap justify-between min-[410px]:gap-4 w-full max-w-[390px]">
        <TextInput
          divClass="w-full min-[410px]:w-[170px]"
          title="اجاره (تومان):"
          placeholder="به عدد"
          type="text"
          name="price"
          value=""
          blur
          error=""
          changeHandler={() => {}}
          blurHandler={() => {}}
        />
        <TextInput
          divClass="w-full min-[410px]:w-[170px]"
          title="رهن (تومان):"
          placeholder="به عدد"
          type="text"
          name="price"
          value=""
          blur
          error=""
          changeHandler={() => {}}
          blurHandler={() => {}}
        />
      </div>
      <CategoryList />
      <CustomDatePicker />
      <TextList title="امکانات رفاهی:" />
      <TextList title="قوانین:" />
      <button className="py-1 mb-12 mt-5 w-full max-w-[390px] rounded-md border border-sky-500 bg-sky-200 hover:bg-sky-300 transition ease-linear">
        ثبت آگهی
      </button>
    </form>
  );
};

export default AddFileForm;
