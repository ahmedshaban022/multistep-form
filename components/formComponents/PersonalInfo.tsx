import { FC } from "react";
import InputWrapper from "../ui/InputWrapper";
import RadioButtonGroup from "../ui/RadioButtonGroup";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface PersonalInfoProps {
  formHook: UseFormReturn<FieldValues>;
}

const PersonalInfo: FC<PersonalInfoProps> = ({ formHook }) => {
  const { register } = formHook;
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
          register={register}
          placeholder="Full Name"
          label="Full Name"
          name="fullName"
          errorMsg={""}
        />
        <InputWrapper
          register={register}
          type="date"
          placeholder="Date of Birth"
          label="Date of Birth"
          name="dateOfBirth"
          errorMsg={""}
        />
        <InputWrapper
          register={register}
          type="text"
          placeholder="Country"
          label="Country"
          name="country"
        />

        <RadioButtonGroup
          register={register}
          headLabel="Gender"
          name="gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
        />
        <RadioButtonGroup
          headLabel="Marital Status"
          register={register}
          name="maritalStatus"
          options={[
            { label: "Single", value: "single" },
            { label: "Married", value: "married" },
          ]}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
