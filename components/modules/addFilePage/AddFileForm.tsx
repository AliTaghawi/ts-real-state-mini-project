import TextInput from "@/elements/TextInput";
import CategoryList from "@/modules/addFilePage/CategoryList";
import CustomDatePicker from "@/modules/addFilePage/CustomDatePicker";
import FileTypeList from "@/modules/addFilePage/FileTypeList";
import TextList from "@/modules/addFilePage/TextList";

const AddFileForm = ({ formik }: { formik: any }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        divClass="w-full max-w-[390px]"
        dir="rtl"
        title="عنوان:"
        placeholder="عنوان آگهی"
        type="text"
        name="title"
        value={formik.values.title}
        blur={formik.touched.title}
        error={formik.errors.title}
        changeHandler={formik.handleChange}
        blurHandler={formik.handleBlur}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        dir="rtl"
        title="توضیحات:"
        placeholder="توضیحات آگهی"
        type="text"
        name="description"
        value={formik.values.description}
        blur={formik.touched.description}
        error={formik.errors.description}
        changeHandler={formik.handleChange}
        blurHandler={formik.handleBlur}
        textarea={true}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        title="متراژ:"
        placeholder="به عدد"
        type="number"
        name="areaMeter"
        value={formik.values.areaMeter}
        blur={formik.touched.areaMeter}
        error={formik.errors.areaMeter}
        changeHandler={formik.handleChange}
        blurHandler={formik.handleBlur}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        dir="rtl"
        title="موقعیت:"
        placeholder="مثال: تهران محدوده ستارخان"
        type="text"
        name="location"
        value={formik.values.location}
        blur={formik.touched.location}
        error={formik.errors.location}
        changeHandler={formik.handleChange}
        blurHandler={formik.handleBlur}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        dir="rtl"
        title="آدرس:"
        placeholder="آدرس کامل"
        type="text"
        name="address"
        value={formik.values.address}
        blur={formik.touched.address}
        error={formik.errors.address}
        changeHandler={formik.handleChange}
        blurHandler={formik.handleBlur}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        dir="rtl"
        title="بنگاه:"
        placeholder="آگهی شخصی یا نام بنگاه آگهی دهنده"
        type="text"
        name="realState"
        value={formik.values.realState}
        blur={formik.touched.realState}
        error={formik.errors.realState}
        changeHandler={formik.handleChange}
        blurHandler={formik.handleBlur}
      />
      <TextInput
        divClass="w-full max-w-[390px]"
        title="شماره تماس:"
        placeholder="شماره ایران"
        type="text"
        name="phone"
        value={formik.values.phone}
        blur={formik.touched.phone}
        error={formik.errors.phone}
        changeHandler={formik.handleChange}
        blurHandler={formik.handleBlur}
      />
      <FileTypeList formik={formik} />
      {formik.values.fileType === "rent" ? (
        <div className=" flex flex-wrap justify-between min-[410px]:gap-4 w-full max-w-[390px]">
          <TextInput
            divClass="w-full min-[410px]:w-[170px]"
            title="اجاره (تومان):"
            placeholder="به عدد"
            type="number"
            name="rent"
            value={formik.values.rent}
            blur={formik.touched.rent}
            error={formik.errors.rent}
            changeHandler={formik.handleChange}
            blurHandler={formik.handleBlur}
          />
          <TextInput
            divClass="w-full min-[410px]:w-[170px]"
            title="رهن (تومان):"
            placeholder="به عدد"
            type="number"
            name="mortgage"
            value={formik.values.mortgage}
            blur={formik.touched.mortgage}
            error={formik.errors.mortgage}
            changeHandler={formik.handleChange}
            blurHandler={formik.handleBlur}
          />
        </div>
      ) : (
        <TextInput
          divClass="w-full max-w-[390px]"
          title="قیمت (تومان):"
          placeholder="به عدد"
          type="number"
          name="price"
          value={formik.values.price}
          blur={formik.touched.price}
          error={formik.errors.price}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
        />
      )}
      <CategoryList formik={formik} />
      <CustomDatePicker formik={formik} />
      <TextList title="امکانات رفاهی:" />
      <TextList title="قوانین:" />
      <button
        type="submit"
        className="py-1 mb-12 mt-5 w-full max-w-[390px] rounded-md border border-sky-500 bg-sky-200 hover:bg-sky-300 transition ease-linear"
      >
        ثبت آگهی
      </button>
    </form>
  );
};

export default AddFileForm;
