import Link from "next/link";
import { TbLogin2 } from "react-icons/tb";

const LoginProfile = () => {
  return (
    <div>
      <Link
        href="/login"
        className="flex items-center gap-0.5 px-2 py-0.5 hover:bg-sky-200 rounded-sm transition-all ease-linear"
      >
        <TbLogin2 className="text-xl" />
        Login
      </Link>
    </div>
  );
};

export default LoginProfile;
