import MenuItem from "@/elements/MenuItem";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-neutral-50 py-2 px-4 my-4 border-2 border-neutral-700 rounded-md">
      <div>
        <ul className="flex items-center gap-0.5">
          <MenuItem href="/" title="خانه" />
          <MenuItem href="/property-files" title="آگهی‌ها" />
          <MenuItem href="/" title="درباره سایت" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
