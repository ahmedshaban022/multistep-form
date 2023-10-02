"use client";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { FC } from "react";
import PersonalInfo from "./PersonalInfo";

interface FormWrapperProps {}

const FormWrapper: FC<FormWrapperProps> = ({}) => {
  const { steps, currentStepIndex, currentStep, backStep, nextStep } =
    useMultiStepForm([
      <PersonalInfo key={0} />,
      <div key={1}>two</div>,
      <div key={2}>three</div>,
      <div key={3}>4</div>,
      <div key={4}>5</div>,
      <div key={5}>6</div>,
      <div key={5}>7</div>,
    ]);
  return (
    <div className=" mt-6 m-auto relative border-black border-2 p-4  rounded-lg sm:max-w-[60vw] min-h-[200px]">
      <form className="space-y-4 m-auto flex flex-col items-center">
        <div className="absolute top-1 right-2">
          {currentStepIndex} / {steps.length}
        </div>
        <div>{currentStep}</div>

        <div className=" space-x-2 self-end">
          {currentStepIndex > 0 && (
            <button
              type="button"
              className="border rounded-lg bg-slate-500 m-2 p-2 text-white hover:bg-opacity-90"
              onClick={backStep}
            >
              Back
            </button>
          )}

          <button
            type="button"
            className="border rounded-lg bg-green-900 m-2 p-2 text-white hover:bg-opacity-90"
            onClick={nextStep}
          >
            {currentStepIndex < steps.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormWrapper;
