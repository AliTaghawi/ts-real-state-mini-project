import { CheckBoxProps } from "@/types/types";

const CheckBox = ({title, checked, onChange, name, id}: CheckBoxProps) => {
  return (
    <div className="flex items-center gap-1 bg-neutral-200 dark:bg-neutral-800 py-0.5 px-1.5 rounded-md">
      <label htmlFor={id}>{title}</label>
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default CheckBox;
