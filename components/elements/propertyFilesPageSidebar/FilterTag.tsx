import { Dispatch, SetStateAction } from "react";
import { FiltersType } from "@/types/types";

const FilterTag = ({
  tag,
  filterOf,
  setFilters
}: {
  tag: string;
  filterOf: string;
  setFilters: (Dispatch<SetStateAction<FiltersType>>);
}) => {
  return (
    <div className="text-xs font-bold flex items-center py-0.5 px-1 bg-sky-200/80 dark:bg-sky-800/80 rounded-xs w-fit gap-1">
      <button className="text-sky-500 dark:text-sky-400 cursor-pointer">
        ✕
      </button>
      <span>{tag}</span>
    </div>
  );
};

export default FilterTag;
