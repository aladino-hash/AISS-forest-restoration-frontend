interface StepCoverageProps {
  capability: string;
  coverage: string;
  setCoverage: (value: string) => void;
}

const coverageOptions = [
  "🏘 Local Community",
  "🏞 Province",
  "🌿 Region",
  "🇵🇪 Nationwide",
  "🌎 International",
];

export default function StepCoverage({
  capability,
  coverage,
  setCoverage,
}: StepCoverageProps) {
  if (!capability) return null;

  return (
    <div className="mt-8">
      <label className="mb-4 block text-lg font-semibold text-gray-900">
        Where can you provide your services?
      </label>

      <p className="mb-5 text-sm text-gray-600">
        This helps FYNOS AI match you with nearby restoration projects and
        organizations.
      </p>

      <div className="grid gap-4">
        {coverageOptions
          .filter((option) => !coverage || option === coverage)
          .map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCoverage(option)}
              className={`rounded-2xl border p-5 text-left transition-all ${
                coverage === option
                  ? "border-emerald-600 bg-emerald-50 shadow-md"
                  : "hover:border-emerald-400"
              }`}
            >
              {option}
            </button>
          ))}
      </div>

      {coverage && (
        <button
          type="button"
          onClick={() => setCoverage("")}
          className="mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-900"
        >
          ← Choose another coverage
        </button>
      )}
    </div>
  );
}