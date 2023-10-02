import { ReactElement, useState } from "react";

type MultiStepFormProps = {
  steps: ReactElement[];
};
export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

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
