import { useState } from "react";

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="mt-28 pt-28">
      <div
        data-dui-stepper-container
        data-dui-initial-step="1"
        className="w-full"
      >
        {/* Stepper Navigation */}
        <div className="flex w-full items-center justify-center ml-44">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              aria-disabled={currentStep < step}
              data-dui-step
              className={`group w-full flex items-center ${
                currentStep === step ? "active-step" : ""
              }`}
            >
              <div className="relative">
                <span
                  className={`relative grid h-10 w-10 place-items-center rounded-full ${
                    currentStep === step
                      ? "bg-stone-800 text-white "
                      : currentStep > step
                      ? "bg-stone-800 text-white"
                      : "bg-stone-200 text-black"
                  }`}
                >
                  {step}
                </span>
              </div>
              {step < 3 && (
                <div
                  className={`flex-1 h-1 ${
                    currentStep > step ? "bg-stone-800" : "bg-stone-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="mt-8">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              data-dui-step-content={step}
              className={`step-content ${
                currentStep === step ? "block" : "hidden"
              }`}
            >
              <p className="text-xl font-semibold mb-4">Step {step} Content</p>
              <p className="text-stone-500">
                This is the content for step {step}. Add whatever content you
                need here.
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex w-full justify-between gap-4">
          <button
            data-dui-stepper-prev
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased"
          >
            Previous
          </button>
          <button
            data-dui-stepper-next
            onClick={handleNext}
            disabled={currentStep === 3}
            className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
