import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const CustomDatePicker = () => {
  return (
    <div className=" mt-2 mb-7">
      <p>تاریخ ساخت:</p>
      <DatePicker
        inputClass="py-1 px-2 border border-sky-400 outline-sky-400 rounded-md mt-1"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        placeholder="تاریخ ساخت بنا"
      />
    </div>
  );
};

export default CustomDatePicker;
