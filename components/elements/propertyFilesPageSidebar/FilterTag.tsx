import { FilterTagProps } from "@/types/types";

const FilterTag = ({ tag, filterOf, setFilters }: FilterTagProps) => {
  const deleteFilterHandler = () => {
    switch (filterOf) {
      case "areaMeter":
        setFilters((prev) => ({ ...prev, areaMeterEnd: 0, areaMeterStart: 0 }));
        break;
      case "rent":
        setFilters((prev) => ({
          ...prev,
          minRent: undefined,
          maxRent: undefined,
          fileType: undefined,
        }));
        break;
      case "price":
        setFilters((prev) => ({
          ...prev,
          minPrice: undefined,
          maxPrice: undefined,
        }));
        break;
      default:
        setFilters((prev) => {
          const filters = { ...prev };
          if (filterOf === "fileType" && filters.fileType === "rent") {
            delete filters.maxRent;
            delete filters.minRent;
          }
          return { ...filters, [filterOf]: "" };
        });
        break;
    }
  };

  return (
    <div className="text-xs font-bold flex items-center py-0.5 px-1 bg-sky-200/80 dark:bg-sky-800/80 rounded-xs w-fit gap-1">
      <button
        className="text-sky-500 dark:text-sky-400 cursor-pointer"
        onClick={deleteFilterHandler}
      >
        ✕
      </button>
      <span>{tag}</span>
    </div>
  );
};

export default FilterTag;
