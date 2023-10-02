import { ReactElement, useState } from "react";
// import { FieldValues, UseFormReturn } from "react-hook-form";

type MultiStepFormProps = {
  steps: ReactElement[];
  //   form: UseFormReturn<FieldValues, any, undefined>;
};
export function useMultiStepForm(steps: ReactElement[]) {
  //todo use the react hook form here ?
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  //   const [step, setStep] = useState(0);
  function nextStep() {
    setCurrentStepIndex((prev) => {
      if (prev >= steps.length - 1) return prev;
      return prev + 1;
    });
  }
  function backStep() {
    setCurrentStepIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }
  return {
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    nextStep,
    backStep,
    steps,
  };
}
