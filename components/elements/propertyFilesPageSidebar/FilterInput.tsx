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
  if (title) {
    return (
      <label
        className={className ?? "flex gap-1 items-center text-sm font-semibold"}
      >
        {title}
        <input
          type={type}
          name={name}
          value={value}
          checked={checking ? data[name] == value : undefined}
          onChange={onChange}
        />
      </label>
    );
  } else {
    return (
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    );
  }
};

export default FilterInput;
