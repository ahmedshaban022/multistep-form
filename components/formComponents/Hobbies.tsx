"use client";
import { formType } from "@/zod/formSchemas";
import { FC, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

interface HobbiesProps {
  formHook: UseFormReturn<formType>;
}
const hobbies = [
  "reading",
  "coding",
  "gaming",
  "cooking",
  "painting",
  "singing",
  "dancing",
  "swimming",
  "cycling",
  "yoga",
  "meditation",
  "gardening",
  "photography",
  "writing",
  "traveling",
  "fishing",
];

const Hobbies: FC<HobbiesProps> = ({ formHook }) => {
  const { getValues, setValue, formState } = formHook;
  const { errors } = formState;
  if (!getValues("hobbies")) setValue("hobbies", []);
  //   const [state,useSta]
  const handleAddOrRemoveHobbie = (hobbie: string) => {
    if (!getValues("hobbies")) {
      setValue("hobbies", [hobbie]);
    }

    const hobbies = getValues("hobbies");
    if (!hobbies.includes(hobbie)) {
      setValue("hobbies", [...hobbies, hobbie]);
    } else {
      setValue(
        "hobbies",
        hobbies.filter((item) => item !== hobbie)
      );
    }
  };
  useEffect(() => {}, [getValues("hobbies")?.length]);
  return (
    <div>
      <div className="">
        <h1 className="text-2xl text-gray-700 text-center m-2">
          Choose Your Hobbies
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {hobbies.map((item, i) => {
          return (
            <button
              key={i}
              className={`transition-all text-gray-700 text-center cursor-pointer border-2 text-lg rounded-md border-blue-500 ${
                getValues("hobbies")?.includes(item)
                  ? "bg-blue-500 text-white font-semibold scale-105"
                  : ""
              }`}
              onClick={() => handleAddOrRemoveHobbie(item)}
            >
              {item}
            </button>
          );
        })}
        {errors?.hobbies && (
          <p className="text-red-500">{errors.hobbies.message}</p>
        )}
      </div>
    </div>
  );
};

export default Hobbies;
