"use client";

import FilterItems from "@/elements/propertyFilesPageSidebar/FilterItems";
import { ChangeEvent, ReactEventHandler, useEffect, useState } from "react";

const PropertyFilesPageSidebar = () => {
  const [filters, setFilters] = useState({});
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
          <label className="flex gap-1 items-center text-sm font-semibold">
            اجاره
            <input
              type="radio"
              name="fileType"
              value="rent"
              onChange={changeHandler}
            />
          </label>
          <label className="flex gap-1 items-center text-sm font-semibold">
            رهن
            <input
              type="radio"
              name="fileType"
              value="mortgage"
              onChange={changeHandler}
            />
          </label>
          <label className="flex gap-1 items-center text-sm font-semibold">
            فروش
            <input
              type="radio"
              name="fileType"
              value="buy"
              onChange={changeHandler}
            />
          </label>
        </FilterItems>
        <div>
          <p>نوع ملک:</p>
        </div>
        <div>
          <p>متراژ:</p>
        </div>
        <div>
          <p>قیمت:</p>
        </div>
        <div>
          <p>تاریخ ساخت:</p>
        </div>
      </div>
    </aside>
  );
};

export default PropertyFilesPageSidebar;
