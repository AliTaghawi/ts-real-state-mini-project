"use client";

import { useEffect, useRef, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { changeTheme, loadMode, setTheme } from "@/utils/checkTheme";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const modeStyle =
  "flex items-center gap-2 hover:bg-sky-200 dark:hover:bg-sky-800/50 rounded-sm p-1 w-full transition ease-in";

const BGMode = () => {
  const [mode, setMode] = useState("");
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMode(loadMode());
  }, []);

  useEffect(() => {
    changeTheme(mode);
    setTheme();
  }, [mode]);

  useOutsideClick(ref, () => {
    setShow(false);
  });

  const showHandler = () => {
    setShow(true);
  };

  const modeHandler = (mode: string) => {
    setMode(mode);
    setShow(false);
  };

  return (
    <div className=" relative flex p-1">
      <button
        onClick={showHandler}
        className="text-2xl hover:bg-sky-200 dark:hover:bg-sky-900 p-1 rounded-md"
      >
        {mode === "light" && <MdLightMode />}
        {mode === "dark" && <MdDarkMode />}
        {mode === "system" && <MdComputer />}
      </button>
      <div
        ref={ref}
        className={`${
          show ? "flex" : "hidden"
        } flex-col p-2 shadow-sky-400/40 dark:shadow-sky-800/40 shadow-md gap-0.5 rounded-md absolute -top-2 left-0 z-20 bg-sky-300 dark:bg-sky-950`}
      >
        <button className={modeStyle} onClick={() => modeHandler("light")}>
          <MdLightMode className="text-xl" /> روشن
        </button>
        <button className={modeStyle} onClick={() => modeHandler("dark")}>
          <MdDarkMode className="text-xl" /> تاریک
        </button>
        <button className={modeStyle} onClick={() => modeHandler("system")}>
          <MdComputer className="text-xl" /> سیستم
        </button>
      </div>
    </div>
  );
};

export default BGMode;
