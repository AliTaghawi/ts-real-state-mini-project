"use client";

import { ChangeEvent, useState } from "react";
import FilterInput from "@/elements/propertyFilesPageSidebar/FilterInput";
import FilterItems from "@/elements/propertyFilesPageSidebar/FilterItems";
import { categoryText, fileTypesText } from "@/utils/constants";
import { FiltersType } from "@/types/types";
import PriceRangeFilter from "@/elements/propertyFilesPageSidebar/PriceRangeFilter";

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
      <div className="bg-sky-100 px-2 py-1.5 rounded-md mb-3">
        <button className="w-full text-xs font-semibold p-1 bg-white border border-sky-300 rounded-sm">
          حذف تمامی فیلترها
        </button>
        <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
          <div className="text-xs font-bold flex items-center py-0.5 px-1 bg-sky-200/80 rounded-xs w-fit gap-1">
            <span className="text-sky-500">✕</span>جدیدترین
          </div>
        </div>
      </div>
      <div className="bg-sky-100 rounded-md p-1.5">
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
            className="bg-white py-0.5 px-1.5 rounded-md border border-sky-400"
            type="number"
            name="areaMeter"
            value={filters.areaMeter ?? ""}
            onChange={changeHandler}
          />
        </FilterItems>
        <FilterItems title="قیمت">
          <PriceRangeFilter filters={filters} setFilters={setFilters} />
        </FilterItems>
        <FilterItems title="تاریخ ساخت"></FilterItems>
      </div>
    </aside>
  );
};

export default PropertyFilesPageSidebar;
