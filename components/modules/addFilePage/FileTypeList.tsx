import RadioInput from "@/elements/addFilePage/RadioInput";

const FileTypeList = ({ formik }: { formik: any }) => {
  return (
    <div>
      <p>نوع آگهی:</p>
      <div className="flex items-center justify-between gap-4 mt-3 mb-8 max-w-[300px]">
        <RadioInput
          title="اجاره"
          value="rent"
          name="fileType"
          checked={formik.values.fileType === "rent"}
          blur={formik.touched.fileType}
          error={formik.errors.fileType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <RadioInput
          title="رهن"
          value="mortgage"
          name="fileType"
          checked={formik.values.fileType === "mortgage"}
          blur={formik.touched.fileType}
          error={formik.errors.fileType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <RadioInput
          title="خرید"
          value="buy"
          name="fileType"
          checked={formik.values.fileType === "buy"}
          blur={formik.touched.fileType}
          error={formik.errors.fileType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
    </div>
  );
};

export default FileTypeList;
