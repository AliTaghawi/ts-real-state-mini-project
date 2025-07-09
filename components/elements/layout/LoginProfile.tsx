"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { TbLogin2 } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";

const LoginProfile = () => {
  const session = useSession();
  return (
    <div>
      {session.status === "authenticated" ? (
        <Link href="/dashboard" className="text-2xl">
          <FaRegUserCircle />
        </Link>
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
