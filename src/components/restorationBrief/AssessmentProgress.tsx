interface AssessmentProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function AssessmentProgress({
  currentStep,
  totalSteps,
}: AssessmentProgressProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium text-gray-500">
          Assessment Progress
        </span>

        <span className="text-sm font-semibold text-emerald-700">
          {currentStep} / {totalSteps}
        </span>

      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-emerald-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>
  );
}