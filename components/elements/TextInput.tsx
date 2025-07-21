import { TextInputProps } from "@/types/types";

const TextInput = ({
  title,
  type,
  name,
  value,
  error,
  blur,
  placeholder,
  changeHandler,
  blurHandler,
  textarea,
  divClass,
  dir,
}: TextInputProps) => {
  return (
    <div
      className={`flex flex-col gap-1 mt-2 mb-7 relative ${
        divClass && divClass
      }`}
    >
      <label>{title}</label>
      {textarea ? (
        <textarea
          dir={dir}
          className={`py-1 px-2 border ${
            blur && error
              ? "border-red-400 outline-red-400 dark:outline-red-700"
              : "border-sky-400 outline-sky-400 dark:border-sky-800 dark:outline-sky-800"
          } rounded-md min-h-[100px] ${
            dir === "rtl" ? "text-right" : "text-left"
          }`}
          placeholder={placeholder ?? ""}
          name={name}
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
      ) : (
        <input
          dir={dir}
          className={`py-1 px-2 border ${
            blur && error
              ? "border-red-400 outline-red-400 dark:outline-red-700"
              : "border-sky-400 outline-sky-400 dark:border-sky-800 dark:outline-sky-800 "
          } rounded-md ${dir === "rtl" ? "text-right" : "text-left"}`}
          type={type}
          placeholder={placeholder ?? ""}
          name={name}
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
      )}
      {blur && error && (
        <span className="absolute -bottom-6 text-xs bg-red-200 dark:bg-red-400/20 w-full rounded-sm py-0.5 px-2.5 text-red-800 dark:text-red-400">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextInput;
