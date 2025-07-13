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
          className={`py-1 px-2 border ${
            blur && error
              ? "border-red-400 outline-red-400"
              : "border-sky-400 outline-sky-400"
          } rounded-md text-left min-h-[100px]`}
          placeholder={placeholder ?? ""}
          name={name}
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
      ) : (
        <input
          className={`py-1 px-2 border ${
            blur && error
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
      )}
      {blur && error && (
        <span className="absolute -bottom-6 text-xs bg-red-200 w-full rounded-sm py-0.5 px-2.5 text-red-800">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextInput;
