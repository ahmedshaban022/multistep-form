import { Attributes, FC, HTMLAttributes, InputHTMLAttributes } from "react";

interface InputWrapperProps {
  type: string;
  placeholder: string;
  label: string;
  name: string;
  value?: string;
  errorMsg?: string;
}

const InputWrapper: FC<InputWrapperProps> = ({
  label,
  type,
  placeholder,
  name,
  value,
  errorMsg,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label className="" htmlFor={name}>
        {label}
      </label>
      <input
        className="border-black border p-2 rounded-lg w-[350px] focus:w-[400px] transition-all focus:border-blue-600 outline-none"
        id={name}
        type={type}
        {...props}
        placeholder={placeholder}
        name={name}
        value={value}
      />
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </div>
  );
};

export default InputWrapper;
