interface RestorationDiagnosisProps {
  ecologicalSummary: string;
}

export default function RestorationDiagnosis({
  ecologicalSummary,
}: RestorationDiagnosisProps) {
  return (
    <>
      <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Step 1 · Environmental Diagnosis
        </p>

        <h2 className="mt-3 text-2xl font-bold text-gray-900">
          Environmental Diagnosis
        </h2>

        <p className="mt-5 leading-8 text-gray-700 whitespace-pre-line">
          {ecologicalSummary}
        </p>

      </section>
    </>
  );
}