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
      className={`flex flex-col min-[800px]:flex-row min-[800px]:items-center items-start gap-4 min-[800px]:gap-2 min-[800px]:static fixed z-10 top-0 ${
        isOpen ? "right-0 dark:bg-gray-900/30" : "-right-full"
      } h-[100vh] min-[800px]:h-auto bg-neutral-200/30 min-[800px]:bg-inherit backdrop-blur-sm py-10 px-4 min-[800px]:p-0 transition-all ease-linear `}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default MainMenu;
