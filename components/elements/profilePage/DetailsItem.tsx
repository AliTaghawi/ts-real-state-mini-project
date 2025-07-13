import { DetailsItemType } from "@/types/types";

const DetailsItem = ({ title, property, bioType }: DetailsItemType) => {
  return (
    <div
      className={`min-w-[250px] flex gap-1 flex-wrap flex-col items-stretch ${
        bioType ? "flex-col" : "min-[375px]:items-center min-[375px]:flex-row"
      }`}
    >
      <label className="text-sm font-semibold text-sky-900 mb-0.5">
        {title}:
      </label>
      <p
        className={`text-neutral-800 bg-neutral-100 border border-neutral-200 py-0.5 px-1.5 rounded-sm ${
          bioType && "min-h-24 whitespace-pre-line"
        }`}
      >
        {property || (
          <span className="text-neutral-500">هنوز این قسمت را کامل نکردید</span>
        )}
      </p>
    </div>
  );
};

export default DetailsItem;
