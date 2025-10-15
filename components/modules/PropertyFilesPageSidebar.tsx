"use client";

import { ChangeEvent, useState } from "react";
import FilterInput from "@/elements/propertyFilesPageSidebar/FilterInput";
import FilterItems from "@/elements/propertyFilesPageSidebar/FilterItems";
import PriceRangeFilter from "@/elements/propertyFilesPageSidebar/PriceRangeFilter";
import FiltersDisplayField from "@/elements/propertyFilesPageSidebar/FiltersDisplayField";
import { categoryText, fileTypesText } from "@/utils/constants";
import { FiltersType } from "@/types/types";

const PropertyFilesPageSidebar = () => {
  const [filters, setFilters] = useState<FiltersType>({});

  const categoryKeys = Object.keys(categoryText) as Array<
    keyof typeof categoryText
  >;
  const fileTypesKeys = Object.keys(fileTypesText) as Array<
    keyof typeof fileTypesText
  >;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <aside className="border-2 border-sky-400 dark:border-sky-800 rounded-lg w-[200px] min-h-[400px] p-1.5">
      <h3 className="text-center my-2 text-lg font-semibold">فیلترها</h3>
      <FiltersDisplayField filters={filters} setFilters={setFilters} />
      <div className="bg-sky-100 dark:bg-sky-950 rounded-md p-1.5">
        <FilterItems title="نوع آگهی">
          {fileTypesKeys.map((item) => (
            <FilterInput
              key={item}
              title={fileTypesText[item]}
              type="radio"
              name="fileType"
              value={item}
              data={filters}
              checking={true}
              onChange={changeHandler}
            />
          ))}
        </FilterItems>
        <FilterItems title="نوع ملک">
          {categoryKeys.map((item) => (
            <FilterInput
              key={item}
              title={categoryText[item]}
              type="radio"
              name="category"
              value={item}
              data={filters}
              checking={true}
              onChange={changeHandler}
            />
          ))}
        </FilterItems>
        <FilterItems title="متراژ">
          <FilterInput
            title="از (متر):"
            className="bg-white dark:bg-gray-950 py-0.5 px-1.5 rounded-md border border-sky-400 dark:border-sky-700 w-full"
            type="number"
            name="areaMeterStart"
            value={filters.areaMeterStart ?? ""}
            onChange={changeHandler}
          />
          <FilterInput
            title="تا (متر):"
            className="bg-white dark:bg-gray-950 py-0.5 px-1.5 rounded-md border border-sky-400 dark:border-sky-700 w-full"
            type="number"
            name="areaMeterEnd"
            value={filters.areaMeterEnd ?? ""}
            onChange={changeHandler}
          />
        </FilterItems>
        <FilterItems title="قیمت">
          <PriceRangeFilter filters={filters} setFilters={setFilters} />
        </FilterItems>
      </div>
    </aside>
  );
};

export default PropertyFilesPageSidebar;
