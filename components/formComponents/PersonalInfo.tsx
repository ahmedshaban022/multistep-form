"use client";
import { FC } from "react";
import InputWrapper from "../ui/InputWrapper";
import RadioButtonGroup from "../ui/RadioButtonGroup";
import { UseFormReturn } from "react-hook-form";
import { formType } from "@/zod/formSchemas";

interface PersonalInfoProps {
  formHook: UseFormReturn<formType>;
}

const PersonalInfo: FC<PersonalInfoProps> = ({ formHook }) => {
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
          register={register("personalInfo.fullName")}
          placeholder="Full Name"
          label="Full Name"
          name="fullName"
          errorMsg={errors?.personalInfo?.fullName?.message}
        />
        <InputWrapper
          register={register("personalInfo.dateOfBirth")}
          type="date"
          placeholder="Date of Birth"
          label="Date of Birth"
          name="dateOfBirth"
          errorMsg={errors?.personalInfo?.dateOfBirth?.message}
        />
        <InputWrapper
          register={register("personalInfo.country")}
          type="text"
          placeholder="Country"
          label="Country"
          name="country"
          errorMsg={errors?.personalInfo?.country?.message}
        />

        <RadioButtonGroup
          register={register("personalInfo.gender")}
          headLabel="Gender"
          name="gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          errorMsg={errors?.personalInfo?.gender?.message}
        />
        <RadioButtonGroup
          headLabel="Marital Status"
          register={register("personalInfo.maritalStatus")}
          name="maritalStatus"
          options={[
            { label: "Single", value: "single" },
            { label: "Married", value: "married" },
          ]}
          errorMsg={errors?.personalInfo?.maritalStatus?.message}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
