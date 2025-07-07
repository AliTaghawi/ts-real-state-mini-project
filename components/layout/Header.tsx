import Link from "next/link";
import Image from "next/image";
import LoginProfile from "@/elements/layout/LoginProfile";
import MenuItem from "@/elements/layout/MenuItem";
import SearchBox from "@/elements/layout/SearchBox";
import HamburgerMenu from "@/elements/layout/HamburgerMenu";
import MainMenu from "@/modules/layout/MainMenu";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-neutral-100 py-2 px-4 my-4 border-2 border-neutral-700 rounded-md">
      <HamburgerMenu />
      <MainMenu>
        <ul className="flex flex-col md:flex-row md:items-center md:gap-1 gap-2">
          <MenuItem href="/" title="خانه" />
          <MenuItem href="/property-files" title="آگهی‌ها" />
          <MenuItem href="/about-site" title="درباره سایت" />
        </ul>
        <SearchBox />
      </MainMenu>
      <Link
        href="/"
        className="flex justify-end items-center gap-1 cursor-default md:mr-8 lg:mr-0 lg:w-[250px]"
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
      <div className="flex items-center justify-end md:grow">
        <LoginProfile />
      </div>
    </div>
  );
};

export default Header;
