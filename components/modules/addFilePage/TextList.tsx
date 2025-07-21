import { ChangeEvent } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { TextListProps } from "@/types/types";

const TextList = ({ title, value, formik, field }: TextListProps) => {
  const addHandler = () => {
    const newList = [...value, ""];
    formik.setFieldValue(field, newList);
  };

  const changeHandler = (e: ChangeEvent<any>, index: number) => {
    formik.setFieldValue(`${field}[${index}]`, e.target.value);
  };

  const deleteHandler = (index: number) => {
    const list = value.filter((_, i) => i !== index);
    formik.setFieldValue(field, list);
  };

  return (
    <div className="mb-8">
      <p className="mb-2">{title}</p>
      {value.map((item, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          <input
            type="text"
            value={item}
            onChange={(e) => changeHandler(e, index)}
            className="py-0.5 px-1.5 border focus:border-sky-700 border-dashed border-sky-400 dark:border-sky-800 rounded-md outline-0 w-full max-w-[390px]"
          />
          <button
            type="button"
            onClick={() => deleteHandler(index)}
            className="flex items-center gap-0.5 py-0.5 px-1.5 rounded-md border-1 text-red-700 dark:text-red-800 border-red-400 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-400/20 text-sm transition ease-linear"
          >
            حذف <MdDeleteForever className="text-lg" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addHandler}
        className="flex items-center gap-1 py-0.5 px-1.5 text-emerald-900 dark:text-emerald-400 rounded-md border border-emerald-400 bg-emerald-100 dark:bg-emerald-950 hover:bg-emerald-200 dark:hover:bg-emerald-900 transition ease-linear"
      >
        افزودن <BiSolidAddToQueue />
      </button>
    </div>
  );
};

export default TextList;
