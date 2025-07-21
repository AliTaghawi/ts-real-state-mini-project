import { RadioInputProps } from "@/types/types";
import React from "react";

const RadioInput = ({
  title,
  value,
  name,
  checked,
  blur,
  error,
  divClass,
  onChange,
  onBlur,
}: RadioInputProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-1 py-0.5 px-2 rounded-sm border transition ease-linear ${
        blur && error
          ? "text-red-700 bg-red-100 border-red-400 hover:bg-red-200"
          : "text-emerald-800 bg-sky-100 border-sky-400 hover:bg-sky-200 dark:text-emerald-400 dark:bg-sky-950 dark:border-sky-700 dark:hover:bg-sky-800"
      } ${divClass && divClass}`}
    >
      <label htmlFor={value}>{title}</label>
      <input
        type="radio"
        id={value}
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default RadioInput;
