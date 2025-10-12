const PropertyFilesPageSidebar = () => {
  return (
    <aside className="border-2 border-sky-400 dark:border-sky-800 rounded-lg w-[200px] min-h-[400px] p-1.5">
      <h3 className="text-center my-2 text-lg font-semibold">فیلترها</h3>
      <div className="bg-sky-100 px-2 py-1.5 rounded-md">
        <button className="w-full text-xs font-semibold p-1 bg-white border border-sky-300 rounded-sm">
          حذف تمامی فیلترها
        </button>
        <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
          <div className="text-xs font-bold flex items-center py-0.5 px-1 bg-sky-200/80 rounded-xs w-fit gap-1">
            <span className="text-sky-500">✕</span>جدیدترین
          </div>
        </div>
      </div>
      <div>
        <p>نوع آگهی:</p>
      </div>
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
    </aside>
  );
};

export default PropertyFilesPageSidebar;
