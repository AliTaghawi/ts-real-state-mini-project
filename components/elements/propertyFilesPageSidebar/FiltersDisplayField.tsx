import React from "react";

const FiltersDisplayField = () => {
  return (
    <div className="bg-sky-100 dark:bg-sky-950 px-2 py-1.5 rounded-md mb-3">
      <button className="w-full text-xs font-semibold p-1 bg-white border dark:bg-gray-900 border-sky-300 dark:border-sky-700 hover:bg-white/70 dark:hover:bg-gray-800 rounded-sm transition-all ease-in">
        حذف تمامی فیلترها
      </button>
      <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
        <div className="text-xs font-bold flex items-center py-0.5 px-1 bg-sky-200/80 dark:bg-sky-800/80 rounded-xs w-fit gap-1">
          <span className="text-sky-500 dark:text-sky-400">✕</span>جدیدترین
        </div>
      </div>
    </div>
  );
};

export default FiltersDisplayField;
