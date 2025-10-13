import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FilterItemsProps } from "@/types/types";

const FilterItems = ({ title, children }: FilterItemsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-1 transition-all ease-in">
      <button
        className="flex items-center gap-1 text-sm font-extrabold hover:bg-sky-200/30 rounded-xs p-0.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>
          <FaChevronUp
            className={`transition-all ease-in ${
              isOpen ? "rotate-none" : "rotate-180"
            }`}
          />
        </span>
      </button>
      <div
        className={`grid mt-1 transition-all duration-300 ease-in-out ${
          isOpen ? `grid-rows-[1fr]` : "grid-rows-[0fr]"
        }`}
      >
        <div className="flex flex-col gap-1 overflow-hidden ms-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FilterItems;
