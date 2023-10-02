"use client";
import { FC, useEffect, useState } from "react";
import InputWrapper from "../ui/InputWrapper";
import RadioButtonGroup from "../ui/RadioButtonGroup";
import { UseFormReturn } from "react-hook-form";
import { formType } from "@/zod/formSchemas";

interface experienceProps {
  formHook: UseFormReturn<formType>;
}

const Experience: FC<experienceProps> = ({ formHook }) => {
  const { register, formState, getValues, setValue } = formHook;
  const { errors } = formState;
  const [experience, setExperience] = useState(getValues("experience") || []);
  if (!getValues("experience")) {
    setValue("experience", [
      {
        company: "",
        position: "",
        startDate: new Date(),
        endDate: new Date(),
      },
    ]);
  }
  useEffect(() => {
    if (getValues("experience") && getValues("experience")?.length === 0) {
      setValue("experience", [
        {
          company: "",
          position: "",
          startDate: new Date(),
          endDate: new Date(),
        },
      ]);
    }
  }, []);
  const handleDeleteExperience = (i: number) => {
    if (getValues("experience").length > 1) {
      const newArr = getValues("experience").filter(
        (item, index) => index !== i
      );
      setValue("experience", newArr, { shouldValidate: true });
    }
  };
  const handleAddExperience = () => {
    if (getValues("experience")) {
      const newArr = [
        ...getValues("experience"),
        {
          company: "",
          position: "",
          startDate: new Date(),
          endDate: new Date(),
          description: "",
        },
      ];
      setValue("experience", newArr, { shouldValidate: true });
    } else {
      setValue("experience", [
        {
          company: "",
          position: "",
          startDate: new Date(),
          endDate: new Date(),
        },
      ]);
    }
  };
  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-2xl text-gray-700 text-center">
          Personal informations
        </h1>
      </div>
      <div>
        {getValues("experience").map((item, i) => (
          <div key={i} className="space-y-2 border p-2 m-2">
            <InputWrapper
              type="text"
              register={register(`experience.${i}.company`)}
              placeholder="Company"
              label="Company name"
              name="company"
              errorMsg={
                errors?.experience && errors?.experience![i]?.company?.message
              }
            />

            <InputWrapper
              type="text"
              register={register(`experience.${i}.position`)}
              placeholder="Position"
              label="Position"
              name="position"
              errorMsg={
                errors?.experience && errors?.experience![i]?.position?.message
              }
            />

            <InputWrapper
              register={register(`experience.${i}.startDate`)}
              type="date"
              placeholder="Start Date"
              label="Start Date"
              name="experienceStartDate"
              errorMsg={
                errors?.experience && errors?.experience![i]?.startDate?.message
              }
            />
            <InputWrapper
              register={register(`experience.${i}.endDate`)}
              type="date"
              placeholder="End Date"
              label="End Date"
              name="experienceEndDate"
              errorMsg={
                errors?.experience && errors?.experience![i]?.endDate?.message
              }
            />
            <div className="flex m-2 justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteExperience(i)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <div>
          <button onClick={handleAddExperience}>Add Experience</button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
