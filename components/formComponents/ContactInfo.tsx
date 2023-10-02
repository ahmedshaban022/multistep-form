"use client";
import { FC } from "react";
import InputWrapper from "../ui/InputWrapper";
import RadioButtonGroup from "../ui/RadioButtonGroup";
import { UseFormReturn } from "react-hook-form";
import { formType } from "@/zod/formSchemas";

interface contactInfoProps {
  formHook: UseFormReturn<formType>;
}

const ContactInfo: FC<contactInfoProps> = ({ formHook }) => {
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
          register={register("contactInfo.email")}
          placeholder="example@ex.com"
          label="Email "
          name="email"
          errorMsg={errors?.contactInfo?.email?.message}
        />
        <InputWrapper
          type="text"
          register={register("contactInfo.address")}
          placeholder="Cairo , Maadai"
          label="Address "
          name="address"
          errorMsg={errors?.contactInfo?.address?.message}
        />
        <InputWrapper
          type="text"
          register={register("contactInfo.countryCode")}
          placeholder="+20"
          label="Country Code "
          name="countryCode"
          errorMsg={errors?.contactInfo?.countryCode?.message}
        />
        <InputWrapper
          type="text"
          register={register("contactInfo.phone")}
          placeholder="01234567890"
          label="Phone "
          name="phone"
          errorMsg={errors?.contactInfo?.phone?.message}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
