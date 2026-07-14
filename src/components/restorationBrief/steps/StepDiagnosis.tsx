interface StepDiagnosisProps {
  ecologicalSummary: string;
}

export default function StepDiagnosis({
  ecologicalSummary,
}: StepDiagnosisProps) {
  return (
    <section>

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 2 of 6
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Environmental diagnosis
      </h2>

      <p className="mt-4 leading-8 text-gray-600">
        This is what FYNOS AI discovered after analyzing your land.
      </p>

      <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">

        <p className="leading-8 whitespace-pre-line text-gray-700">
          {ecologicalSummary}
        </p>

      </div>

    </section>
  );
}