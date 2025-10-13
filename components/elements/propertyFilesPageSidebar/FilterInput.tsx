import { FilterInputProps } from "@/types/types";
import React from "react";

const FilterInput = ({title, type, name, value, data, onChange}: FilterInputProps) => {
  return (
    <label className="flex gap-1 items-center text-sm font-semibold">
      {title}
      <input
        type={type}
        name={name}
        value={value}
        checked={data[name] == value}
        onChange={onChange}
      />
    </label>
  );
};

export default FilterInput;
