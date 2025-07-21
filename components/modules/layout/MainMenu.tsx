"use client";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChildrenType } from "@/types/types";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { RootState } from "@/redux/stor";
import { closeMainMenu } from "@/redux/features/displays/displaysSlice";

const MainMenu = ({ children }: ChildrenType) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store: RootState) => store.displays.mainMenu);
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref, () => {
    if (isOpen) dispatch(closeMainMenu());
  });

  return (
    <div
      className={`flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-2 md:static fixed z-10 top-0 ${
        isOpen ? "right-0 dark:bg-gray-900/30" : "-right-full"
      } h-[100vh] md:h-auto bg-neutral-200/30 md:bg-inherit backdrop-blur-sm py-10 px-4 md:p-0 transition-all ease-linear `}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default MainMenu;
