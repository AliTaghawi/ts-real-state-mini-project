import { FilterInputProps } from "@/types/types";
import React from "react";

const FilterInput = ({
  title,
  type,
  name,
  value,
  data,
  checking,
  className,
  onChange,
}: FilterInputProps) => {
  return (
    <label
      className={`${
        type == "radio" || type == "checkbox"
          ? "flex gap-1 items-center"
          : "flex flex-col gap-1 items-start"
      } text-sm font-semibold`}
    >
      {title}
      <input
        className={`${className} text-base font-normal`}
        type={type}
        name={name}
        value={value}
        checked={checking ? data[name] == value : undefined}
        onChange={onChange}
      />
    </label>
  );
};

export default FilterInput;
