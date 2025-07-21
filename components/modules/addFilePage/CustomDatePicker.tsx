import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const CustomDatePicker = ({ formik }: { formik: any }) => {
  return (
    <div className=" mt-2 mb-7 relative w-fit">
      <p>تاریخ ساخت:</p>
      <DatePicker
        inputClass="py-1 px-2 border border-sky-400 outline-sky-400 rounded-md mt-1 dark:border-sky-800 dark:outline-sky-800"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        placeholder="تاریخ ساخت بنا"
        value={formik.values.constructionDate}
        onChange={(date) => {
          // تبدیل تاریخ به فرمت قابل ذخیره
          formik.setFieldValue(
            "constructionDate",
            date?.toDate?.() || date // بسته به خروجی پلاگین
          );
        }}
      />
      {formik.errors.constructionDate && (
        <span className="absolute -bottom-6 right-0 text-xs bg-red-200 dark:bg-red-400/20 w-full rounded-sm py-0.5 px-2.5 text-red-800 dark:text-red-400">
          {formik.errors.constructionDate}
        </span>
      )}
    </div>
  );
};

export default CustomDatePicker;
