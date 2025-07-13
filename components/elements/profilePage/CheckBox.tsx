import { CheckBoxProps } from "@/types/types";

const CheckBox = ({title, checked, onChange, name}: CheckBoxProps) => {
  return (
    <div className="flex items-center gap-1 bg-neutral-200 py-0.5 px-1.5 rounded-md">
      <label htmlFor="email">{title}</label>
      <input
        type="checkbox"
        name={name}
        id="email"
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default CheckBox;
