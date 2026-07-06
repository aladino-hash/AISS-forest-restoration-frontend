import { useEffect, useState } from "react";

const steps = [
  "Vegetation Health",
  "Topography",
  "Hydrology",
  "Soil Conditions",
  "Biodiversity",
  "Carbon Potential",
];

type Props = {
  onComplete: () => void;
};

export default function AIAnalysisPanel({
  onComplete,
}: Props) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    if (completed < steps.length) {
      const timer = setTimeout(() => {
        setCompleted((v) => v + 1);
      }, 700);

      return () => clearTimeout(timer);
    }

    const finishedTimer = setTimeout(() => {
      onComplete();
    }, 1000);

    return () => clearTimeout(finishedTimer);

  }, [completed, onComplete]);

  const progress = (completed / steps.length) * 100;

  return (
    <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
        FYNOS AI
      </p>

      <h3 className="mt-2 text-xl font-semibold text-gray-900">
        Preparing Restoration Strategy
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        Your Digital Twin is being analyzed.
      </p>

      {/* Analysis Progress */}

      <div className="mt-6 space-y-3">

        {steps.map((step, index) => (
          <AnalysisItem
            key={step}
            text={step}
            completed={index < completed}
          />
        ))}

      </div>

      {/* Progress Bar */}

      <div className="mt-6">

        <div className="h-2 overflow-hidden rounded-full bg-emerald-100">

          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      <p className="mt-4 text-xs text-gray-500">

        {completed < steps.length
          ? `Analyzing... ${completed}/${steps.length}`
          : "✓ Analysis Complete — Generating Restoration Strategy..."}

      </p>

    </div>
  );
}

type AnalysisItemProps = {
  text: string;
  completed: boolean;
};

function AnalysisItem({
  text,
  completed,
}: AnalysisItemProps) {
  return (
    <div className="flex items-center gap-3">

      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full transition-all duration-300 ${
          completed
            ? "bg-emerald-500"
            : "bg-gray-300"
        }`}
      >
        {completed && (
          <span className="text-[10px] font-bold text-white">
            ✓
          </span>
        )}
      </div>

      <span
        className={`text-sm transition-all duration-300 ${
          completed
            ? "font-medium text-gray-900"
            : "text-gray-500"
        }`}
      >
        {text}
      </span>

    </div>
  );
}