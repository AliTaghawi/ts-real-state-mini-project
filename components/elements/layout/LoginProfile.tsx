"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { TbLogin2 } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { RootState, AppDispatch } from "@/redux/stor";
import { fetchUser } from "@/redux/features/user/userSlice";

const LoginProfile = () => {
  const session = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((store: RootState) => store.user.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, [session.status]);

  return (
    <div>
      {session.status === "authenticated" ? (
        <div className="flex items-center gap-2">
          {user?.role === "ADMIN" ? (
            <Link href="/Admin" className="text-3xl">
              <MdAdminPanelSettings />
            </Link>
          ) : null}
          <Link href="/dashboard" className="text-2xl">
            <FaRegUserCircle />
          </Link>
        </div>
      ) : (
        <Link
          href="/login"
          className="flex items-center gap-0.5 px-2 py-0.5 hover:bg-sky-200 rounded-sm transition-all ease-linear"
        >
          <TbLogin2 className="text-xl" />
          Login
        </Link>
      )}
    </div>
  );
};

export default LoginProfile;
