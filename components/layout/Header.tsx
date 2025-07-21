import Link from "next/link";
import Image from "next/image";
import LoginProfile from "@/elements/layout/LoginProfile";
import MenuItem from "@/elements/layout/MenuItem";
import SearchBox from "@/elements/layout/SearchBox";
import HamburgerMenu from "@/elements/layout/HamburgerMenu";
import MainMenu from "@/modules/layout/MainMenu";
import BGMode from "@/elements/layout/BGMode";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-sky-300 dark:bg-sky-950 py-2 pr-3 pl-1 sm:px-4 my-4 rounded-lg">
      <HamburgerMenu />
      <MainMenu>
        <ul className="flex flex-col min-[800px]:flex-row min-[800px]:items-center min-[800px]:gap-1 gap-2">
          <MenuItem href="/" title="خانه" />
          <MenuItem href="/property-files" title="آگهی‌ها" />
          <MenuItem href="/about-site" title="درباره سایت" />
        </ul>
        <SearchBox />
      </MainMenu>
      <Link
        href="/"
        className="flex justify-end items-center gap-1 cursor-default min-[800px]:mr-8 lg:mr-24 lg:w-fit pl-1 pr-2 rounded-lg dark:text-neutral-800 dark:bg-sky-300"
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
          className="sm:w-12 w-8"
        />
      </Link>
      <div className="flex items-center justify-end sm:gap-1 min-[800px]:grow">
        <BGMode />
        <LoginProfile />
      </div>
    </header>
  );
};

export default Header;
