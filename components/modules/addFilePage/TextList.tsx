import { BiSolidAddToQueue } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

type PropsType = {
  title: string;
};

const TextList = ({ title }: PropsType) => {
  return (
    <div className="mb-8">
      <p>{title}</p>
      <div className="flex items-center gap-4 mb-4 mt-2">
        <input
          type="text"
          className="py-0.5 px-1.5 border focus:border-sky-700 border-dashed border-sky-400 rounded-md outline-0 w-full max-w-[390px]"
        />
        <button className="flex items-center gap-0.5 py-0.5 px-1.5 rounded-md border-1 text-red-700 border-red-400 hover:bg-red-50 text-sm transition ease-linear">
          حذف <MdDeleteForever className="text-lg" />
        </button>
      </div>
      <button className="flex items-center gap-1 py-0.5 px-1.5 text-emerald-900 rounded-md border border-emerald-400 bg-emerald-100 hover:bg-emerald-200 transition ease-linear">
        افزودن <BiSolidAddToQueue />
      </button>
    </div>
  );
};

export default TextList;
