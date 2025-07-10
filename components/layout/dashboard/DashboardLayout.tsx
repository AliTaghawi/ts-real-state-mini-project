"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdAddBox } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { ChildrenType } from "@/types/types";
import { RootState } from "@/redux/stor";

const linkStyle =
  "flex gap-1 items-center justify-center py-0.5 px-1.5 border border-sky-400 sm:w-11/12 sm:mb-4 rounded-md hover:bg-sky-50 text-xs sm:text-base";

const DashboardLayout = ({ children }: ChildrenType) => {
  const user = useSelector((store: RootState) => store.user.user);

  return (
    <div className="flex flex-col sm:flex-row items-start gap-8">
      <aside className="py-1.5 px-2.5 border-2 border-sky-400 rounded-lg w-full sm:w-[200px] flex sm:flex-col items-center gap-4 xs:gap-2.5 ">
        <div className="flex items-center gap-2 sm:flex-col">
          <div className="flex flex-col items-center">
            <CgProfile className="sm:text-5xl text-lg sm:mt-4" />
            {user?.role === "ADMIN" && (
              <span className="sm:text-sm text-[10px]">admin</span>
            )}
          </div>
          <h3 className="sm:mt-2 sm:mb-4 text-sm sm:text-md hidden min-[22.5rem]:inline-block">
            {user?.showName}
          </h3>
        </div>
        <Link href="/dashboard" className={linkStyle}>
          <TbLayoutDashboardFilled className="text-sky-400 text-base sm:text-xl" />
          <span className="hidden xs:inline-block">داشبورد</span>
        </Link>
        <Link href="/dashboard/add-file" className={linkStyle}>
          <MdAddBox className="text-sky-400 text-base sm:text-xl" />
          <span className="hidden xs:inline-block">ثبت آگهی</span>
        </Link>
        <Link href="/dashboard/profile" className={linkStyle}>
          <RiProfileFill className="text-sky-400 text-base sm:text-xl" />
          <span className="hidden xs:inline-block">حساب کاربری</span>
        </Link>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-1 text-red-700 text-xs sm:text-lg sm:mb-5 mr-auto sm:mr-0"
        >
          <TbLogout className="text-xl" />
          <span className="hidden sm:inline-block">خروج</span>
        </button>
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
