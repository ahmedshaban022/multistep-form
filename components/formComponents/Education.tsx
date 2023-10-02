"use client";
import { FC } from "react";
import InputWrapper from "../ui/InputWrapper";
import RadioButtonGroup from "../ui/RadioButtonGroup";
import { UseFormReturn } from "react-hook-form";
import { formType } from "@/zod/formSchemas";

interface educationProps {
  formHook: UseFormReturn<formType>;
}

const Education: FC<educationProps> = ({ formHook }) => {
  const { register, formState, getValues } = formHook;
  const { errors } = formState;

  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-2xl text-gray-700 text-center">
          Personal informations
        </h1>
      </div>
      <div>
        <InputWrapper
          type="text"
          register={register("education.degree")}
          placeholder="Bachelor ,.."
          label="Degree"
          name="degree"
          errorMsg={errors?.education?.degree?.message}
        />
        <InputWrapper
          type="text"
          register={register("education.fieldOfStudy")}
          placeholder="Physics ,.."
          label="Field of Study"
          name="fieldOfStudy"
          errorMsg={errors?.education?.fieldOfStudy?.message}
        />

        <InputWrapper
          register={register("education.startYear")}
          type="number"
          min={1980}
          max={2024}
          placeholder="Start Year on this degree"
          label="Start Year on this degree"
          name="startYear"
          errorMsg={errors?.education?.startYear?.message}
        />
        <InputWrapper
          register={register("education.endYear")}
          type="number"
          min={1980}
          max={2024}
          placeholder="End Year on this degree"
          label="End Year on this degree"
          name="endYear"
          errorMsg={errors?.education?.endYear?.message}
        />
      </div>
    </div>
  );
};

export default Education;
