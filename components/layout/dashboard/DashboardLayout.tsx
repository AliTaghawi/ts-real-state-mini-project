"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdAddBox } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { ChildrenType } from "@/types/types";
import { RootState } from "@/redux/stor";
import SidebarLink from "@/elements/dashboard/SidebarLink";

const DashboardLayout = ({ children }: ChildrenType) => {
  const session = useSession();
  const router = useRouter();
  const user = useSelector((store: RootState) => store.user.user);
  useEffect(() => {
    if (session.status === "unauthenticated") router.replace("/login");
  }, [session.status]);

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
        <SidebarLink
          href="/dashboard"
          title="داشبورد"
          Icon={TbLayoutDashboardFilled}
        />
        <SidebarLink
          href="/dashboard/add-file"
          title="ثبت آگهی"
          Icon={MdAddBox}
        />
        <SidebarLink
          href="/dashboard/profile"
          title="حساب کاربری"
          Icon={RiProfileFill}
        />
        <button
          onClick={() => signOut()}
          className="flex items-center gap-1 text-red-700 text-xs sm:text-lg sm:mb-5 mr-auto sm:mr-0 px-1.5 py-0.5 rounded-md hover:bg-red-50 transition ease-linear"
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
