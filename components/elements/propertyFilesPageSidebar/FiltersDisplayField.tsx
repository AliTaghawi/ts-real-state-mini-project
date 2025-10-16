import { PriceRangeFilterProps } from "@/types/types";
import React from "react";
import FilterTag from "./FilterTag";
import { categoryText, fileTypesText } from "@/utils/constants";
import { sp } from "@/utils/replaceNumber";
import {
  maxRent,
  maxPrice,
} from "@/elements/propertyFilesPageSidebar/PriceRangeFilter";

const FiltersDisplayField = ({
  filters,
  setFilters,
}: PriceRangeFilterProps) => {
  return (
    <div className="bg-sky-100 dark:bg-sky-950 px-2 py-1.5 rounded-md mb-3">
      <button
        className="w-full text-xs font-semibold p-1 bg-white border dark:bg-gray-900 border-sky-300 dark:border-sky-700 hover:bg-white/70 dark:hover:bg-gray-800 rounded-sm transition-all ease-in"
        onClick={() => setFilters({})}
      >
        حذف تمامی فیلترها
      </button>
      <div className="mt-1.5 flex items-center gap-1.5 flex-wrap transition-all ease-in">
        {filters.fileType ? (
          <FilterTag
            filterOf="fileType"
            tag={`${fileTypesText[filters.fileType]}`}
            setFilters={setFilters}
          />
        ) : null}
        {filters.category ? (
          <FilterTag
            filterOf="category"
            tag={`${categoryText[filters.category]}`}
            setFilters={setFilters}
          />
        ) : null}
        {filters.areaMeterStart || filters.areaMeterEnd ? (
          <FilterTag
            filterOf="areaMeter"
            tag={`متراژ: ${filters.areaMeterStart || "0"} تا ${
              filters.areaMeterEnd || "+~"
            }`}
            setFilters={setFilters}
          />
        ) : null}
        {filters.minRent || filters.maxRent ? (
          <FilterTag
            filterOf="rent"
            setFilters={setFilters}
            tag={`اجاره: از ${sp(filters.minRent || "0")} تا ${
              filters.maxRent && +filters.maxRent < maxRent
                ? sp(filters.maxRent)
                : "+~"
            }`}
          />
        ) : null}
        {filters.minPrice || filters.maxPrice ? (
          <FilterTag
            filterOf="price"
            setFilters={setFilters}
            tag={`قیمت/رهن: از ${sp(filters.minPrice || "0")} تا ${
              filters.maxPrice && +filters.maxPrice < maxPrice
                ? sp(filters.maxPrice)
                : "+~"
            }`}
          />
        ) : null}
      </div>
    </div>
  );
};

export default FiltersDisplayField;
