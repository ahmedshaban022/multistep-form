"use client";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { FC } from "react";
import PersonalInfo from "./PersonalInfo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, formType, zodSchemasArr } from "@/zod/formSchemas";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Experience from "./Experience";

export const formValuesKys = [
  "personalInfo",
  "contactInfo",
  "education",
  "experience",
  "hobbies",
] as const;

interface FormWrapperProps {}

const FormWrapper: FC<FormWrapperProps> = ({}) => {
  const formHook = useForm<formType>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });
  const { steps, currentStepIndex, currentStep, backStep, nextStep } =
    useMultiStepForm([
      <PersonalInfo formHook={formHook} key={0} />,
      <ContactInfo formHook={formHook} key={1} />,
      <Education formHook={formHook} key={2} />,
      <Experience formHook={formHook} key={3} />,
      <div key={4}>5</div>,
      <div key={5}>6</div>,
      <div key={5}>7</div>,
    ]);
  const handleSubmit = (data: formType) => {
    console.log("*".repeat(50));
    console.log(data);
    console.log("/".repeat(50));
  };
  return (
    <div className=" mt-6 m-auto relative border-black border-2 p-4  rounded-lg sm:max-w-[60vw] min-h-[200px]">
      <form
        onSubmit={formHook.handleSubmit(handleSubmit)}
        className="space-y-4 m-auto flex flex-col items-center"
      >
        <div className="absolute top-1 right-2 border rounded-full border-blue-500 m-2 px-3 py-1">
          {currentStepIndex} / {steps.length}
        </div>
        <div>{currentStep}</div>

        <div className=" space-x-2 self-end">
          {currentStepIndex > 0 && (
            <button
              type="button"
              className="border rounded-lg bg-slate-500 m-2 py-2 px-4 text-white hover:bg-opacity-90"
              onClick={backStep}
            >
              Back
            </button>
          )}
          {currentStepIndex < steps.length - 1 ? (
            <button
              type="button"
              className="border rounded-lg bg-blue-700 m-2 py-2 px-4 text-white hover:bg-opacity-90"
              onClick={() => {
                const validation = zodSchemasArr[currentStepIndex].safeParse(
                  formHook.getValues()[formValuesKys[currentStepIndex]]
                );
                console.log(validation);
                if (!validation.success) {
                  alert("All Fields must be filled with correct data");
                  return;
                }
                nextStep();
              }}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="border rounded-lg bg-green-900 m-2 p-2 text-white hover:bg-opacity-90"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormWrapper;
