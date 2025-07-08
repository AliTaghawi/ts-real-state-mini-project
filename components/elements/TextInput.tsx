import { TextInputProps } from "@/types/types";

const TextInput = ({
  title,
  type,
  name,
  value,
  error,
  placeholder,
  changeHandler,
  blurHandler,
}: TextInputProps) => {
  return (
    <div className="flex flex-col gap-1 mt-2 mb-7 relative">
      <label>{title}</label>
      <input
        className={`py-1 px-2 border ${
          error
            ? "border-red-400 outline-red-400"
            : "border-sky-400 outline-sky-400"
        } rounded-md text-left`}
        type={type}
        placeholder={placeholder ?? ""}
        name={name}
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      {error && (
        <span className="absolute -bottom-6 text-xs bg-red-200 w-full rounded-sm py-0.5 px-2.5 text-red-800">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextInput;
