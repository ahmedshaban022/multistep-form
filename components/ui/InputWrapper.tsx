import { Attributes, FC, HTMLAttributes, InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputWrapperProps {
  type: string;
  placeholder: string;
  label: string;
  name: string;
  value?: string;
  errorMsg?: string;
  register: UseFormRegister<FieldValues>;
}

const InputWrapper: FC<InputWrapperProps> = ({
  label,
  type,
  placeholder,
  name,
  value,
  errorMsg,
  register,
}) => {
  return (
    <div className="flex flex-col">
      <label className="" htmlFor={name}>
        {label}
      </label>
      <input
        className="border-black border p-2 rounded-lg w-[350px] focus:w-[400px] transition-all focus:border-blue-600 outline-none"
        id={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
      />
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </div>
  );
};

export default InputWrapper;
