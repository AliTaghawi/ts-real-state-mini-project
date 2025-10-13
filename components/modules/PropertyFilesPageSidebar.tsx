"use client";

import { ChangeEvent, useEffect, useState } from "react";
import FilterInput from "@/elements/propertyFilesPageSidebar/FilterInput";
import FilterItems from "@/elements/propertyFilesPageSidebar/FilterItems";

const PropertyFilesPageSidebar = () => {
  const [filters, setFilters] = useState({
    fileType: ""
  });
  // useEffect(() => {
  //   console.log(filters)
  // }, [filters])
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
          <FilterInput title="اجاره" type="radio" name="fileType" value="rent" data={filters} onChange={changeHandler} />
          <FilterInput title="رهن" type="radio" name="fileType" value="mortgage" data={filters} onChange={changeHandler} />
          <FilterInput title="فروش" type="radio" name="fileType" value="buy" data={filters} onChange={changeHandler} />
        </FilterItems>
        <FilterItems title="نوع ملک"></FilterItems>
        <FilterItems title="متراژ"></FilterItems>
        <FilterItems title="قیمت"></FilterItems>
        <FilterItems title="تاریخ ساخت"></FilterItems>
      </div>
    </aside>
  );
};

export default PropertyFilesPageSidebar;
