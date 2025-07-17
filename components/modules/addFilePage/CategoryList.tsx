import RadioInput from "@/elements/addFilePage/RadioInput";

const CategoryList = ({ formik }: { formik: any }) => {
  return (
    <div>
      <p>نوع ملک:</p>
      <div className="grid grid-cols-3 min-[460px]:grid-cols-5 min-[640px]:grid-cols-3 min-[710px]:grid-cols-5 gap-4 mt-3 mb-8 max-w-[460px] ">
        <RadioInput
          title="آپارتمان"
          value="apartment"
          name="category"
          checked={formik.values.category === "apartment"}
          blur={formik.touched.category}
          error={formik.errors.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <RadioInput
          title="ویلایی"
          value="villa"
          name="category"
          checked={formik.values.category === "villa"}
          blur={formik.touched.category}
          error={formik.errors.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <RadioInput
          title="مغازه"
          value="store"
          name="category"
          checked={formik.values.category === "store"}
          blur={formik.touched.category}
          error={formik.errors.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <RadioInput
          title="دفتر"
          value="office"
          name="category"
          checked={formik.values.category === "office"}
          blur={formik.touched.category}
          error={formik.errors.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <RadioInput
          title="زمین"
          value="land"
          name="category"
          checked={formik.values.category === "land"}
          blur={formik.touched.category}
          error={formik.errors.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
    </div>
  );
};

export default CategoryList;
