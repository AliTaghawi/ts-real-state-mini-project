"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchValue(searchParam);
    } else {
      setSearchValue("");
    }
  }, [searchParams]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filterKeys = [
        "fileType",
        "category",
        "areaMeterStart",
        "areaMeterEnd",
        "minPrice",
        "maxPrice",
        "minRent",
        "maxRent",
      ];

      const params = new URLSearchParams();

      if (pathname === "/property-files") {
        searchParams.forEach((value, key) => {
          params.append(key, value);
        });
      } else {
        searchParams.forEach((value, key) => {
          if (filterKeys.includes(key)) {
            params.append(key, value);
          }
        });
      }

      if (searchValue.trim()) {
        params.set("search", searchValue.trim());
      } else {
        params.delete("search");
      }

      const queryString = params.toString();
      const newPath = `/property-files${queryString ? `?${queryString}` : ""}`;

      if (pathname === "/property-files") {
        const currentQuery = searchParams.toString();
        if (queryString !== currentQuery) {
          router.replace(newPath);
        }
      } else if (searchValue.trim()) {
        router.push(newPath);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchValue, searchParams, router, pathname]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex items-center gap-1 border-2 border-sky-300 dark:border-sky-800 bg-neutral-50 dark:bg-gray-900 py-0.5 px-2.5 rounded-2xl">
      <IoMdSearch className="text-xl" />
      <input
        type="text"
        placeholder="جستجو در عنوان"
        className="outline-0 w-[200px] bg-transparent"
        value={searchValue}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBox;