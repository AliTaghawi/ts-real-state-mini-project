import RadioInput from "@/elements/addFilePage/RadioInput";

const FileTypeList = () => {
  return (
    <div>
      <p>نوع آگهی:</p>
      <div className="flex items-center justify-between gap-4 mt-3 mb-8 max-w-[300px]">
        <RadioInput
          title="اجاره"
          value="rent"
          name="fileType"
          checked
          blur
          error=""
          onChange={() => {}}
          onBlur={() => {}}
        />
        <RadioInput
          title="رهن"
          value="mortgage"
          name="fileType"
          checked
          blur
          error=""
          onChange={() => {}}
          onBlur={() => {}}
        />
        <RadioInput
          title="خرید"
          value="buy"
          name="fileType"
          checked
          blur
          error=""
          onChange={() => {}}
          onBlur={() => {}}
        />
      </div>
    </div>
  );
};

export default FileTypeList;
