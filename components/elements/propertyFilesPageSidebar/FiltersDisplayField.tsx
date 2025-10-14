import React from "react";

const FiltersDisplayField = () => {
  return (
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
  );
};

export default FiltersDisplayField;
