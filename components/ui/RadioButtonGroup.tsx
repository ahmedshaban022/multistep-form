import React, { FC } from "react";
import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

interface RadioButtonGroupProps {
  headLabel: string;
  options: { label: string; value: string }[];
  name: string;
  value?: string;
  errorMsg?: string;
  register: UseFormRegisterReturn;
}

const RadioButtonGroup: FC<RadioButtonGroupProps> = ({
  headLabel,
  name,
  options,
  value,
  errorMsg,
  register,
}) => {
  return (
    <div className="flex flex-col">
      <label className="" htmlFor={name}>
        {headLabel}
      </label>
      <div className="flex">
        {options.map((option) => (
          <React.Fragment key={option.value}>
            <label className="flex items-center" htmlFor={option.value}>
              <input
                className="m-2"
                id={option.value}
                type="radio"
                value={option.value}
                {...register}
              />
              {option.label}
            </label>
          </React.Fragment>
        ))}
      </div>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </div>
  );
};

export default RadioButtonGroup;
