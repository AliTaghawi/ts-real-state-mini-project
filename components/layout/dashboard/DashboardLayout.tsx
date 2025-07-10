"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdAddBox } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { ChildrenType } from "@/types/types";
import { RootState } from "@/redux/stor";

const linkStyle =
  "flex gap-1 items-center py-0.5 px-1.5 border border-sky-400 w-11/12 justify-center mb-4 rounded-md hover:bg-sky-50";

const DashboardLayout = ({ children }: ChildrenType) => {
  const user = useSelector((store: RootState) => store.user.user);
  return (
    <div className="flex items-start gap-8">
      <aside className="py-1.5 px-2.5 border-2 border-sky-400 rounded-lg min-w-[200px] flex flex-col items-center">
        <div className="text-center">
          <CgProfile className="text-5xl mt-4" />
          {user?.role === "ADMIN" && <span className="text-sm">admin</span>}
        </div>
        <h3 className="mt-2 mb-4">{user?.showName}</h3>
        <Link href="/dashboard" className={linkStyle}>
          <TbLayoutDashboardFilled className="text-sky-400 text-xl" />
          <span>داشبورد</span>
        </Link>
        <Link href="/dashboard/add-file" className={linkStyle}>
          <MdAddBox className="text-sky-400 text-xl" />
          <span>ثبت آگهی</span>
        </Link>
        <Link href="/dashboard/profile" className={linkStyle}>
          <RiProfileFill className="text-sky-400 text-xl" />
          <span>حساب کاربری</span>
        </Link>
        <button className="flex items-center gap-1 text-red-700 text-lg mb-5">
          <TbLogout className="text-xl" />
          <span>خروج</span>
        </button>
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
