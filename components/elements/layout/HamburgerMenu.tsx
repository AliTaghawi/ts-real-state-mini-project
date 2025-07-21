"use client";

import { useDispatch } from "react-redux";
import { toggleMainMenu } from "@/redux/features/displays/displaysSlice";

const spanStyles = "block bg-black dark:bg-neutral-200 w-8 h-0.5 rounded-md my-1.5";

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className="min-[800px]:hidden" onClick={() => dispatch(toggleMainMenu())}>
      <span className={spanStyles}></span>
      <span className={spanStyles}></span>
      <span className={spanStyles}></span>
    </div>
  );
};

export default HamburgerMenu;
