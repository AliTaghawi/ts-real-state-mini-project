import LoginProfile from "@/elements/layout/LoginProfile";
import MenuItem from "@/elements/layout/MenuItem";
import SearchBox from "@/elements/layout/SearchBox";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr_2fr] items-center bg-neutral-50 py-2 px-4 my-4 border-2 border-neutral-700 rounded-md">
      <div className="flex items-center gap-2 ">
        <ul className="flex items-center gap-0.5">
          <MenuItem href="/" title="خانه" />
          <MenuItem href="/property-files" title="آگهی‌ها" />
          <MenuItem href="/" title="درباره سایت" />
        </ul>
        <SearchBox />
      </div>
      <Link
        href="/"
        className="flex justify-end items-center gap-1 cursor-default"
      >
        <div className="flex flex-col items-end text-xl font-semibold">
          <h2>R.S.M.P</h2>
          <h3 className="text-[8px]">Real State Mini Project</h3>
        </div>
        <Image
          src="/logo.png"
          alt="Logo"
          width={344}
          height={181}
          className="w-12"
        />
      </Link>
      <div className="flex items-center justify-end">
        <LoginProfile />
      </div>
    </div>
  );
};

export default Header;
