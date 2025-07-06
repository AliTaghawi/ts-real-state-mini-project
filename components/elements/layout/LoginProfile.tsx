import Link from "next/link";
import { TbLogin2 } from "react-icons/tb";

const LoginProfile = () => {
  return (
    <div>
      <Link href="/login" className="flex items-center gap-0.5 px-2 py-0.5 outline-0 outline-neutral-200 hover:bg-neutral-100 hover:outline-1 rounded-md">
        <TbLogin2 className="text-xl" />
        Login
      </Link>
    </div>
  );
};

export default LoginProfile;
