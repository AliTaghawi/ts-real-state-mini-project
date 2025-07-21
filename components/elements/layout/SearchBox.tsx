import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="flex items-center gap-1 border-2 border-sky-300 dark:border-sky-800 bg-neutral-50 dark:bg-gray-900 py-0.5 px-2.5 rounded-2xl">
      <IoMdSearch className="text-xl" />
      <input type="text" placeholder="جستجو در عنوان" className=" outline-0 w-[200px]" />
    </div>
  );
};

export default SearchBox;