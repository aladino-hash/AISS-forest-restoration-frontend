interface StepDiagnosisProps {
  diagnosis?: {
    restoration_potential?: string;
    degradation_level?: string;
    water_availability?: string;
    key_constraints?: string[];
  };
}

export default function StepDiagnosis({
  diagnosis,
}: StepDiagnosisProps) {

  const restorationPotential =
    diagnosis?.restoration_potential ?? "Unknown";

  const degradationLevel =
    diagnosis?.degradation_level ?? "Unknown";

  const waterAvailability =
    diagnosis?.water_availability ?? "Unknown";

  const constraints =
    diagnosis?.key_constraints ?? [];

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

      <div className="mt-8 grid gap-4">

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="text-xs uppercase text-gray-500">
            Restoration Potential
          </p>

          <p className="mt-2 text-xl font-bold text-emerald-700">
            {restorationPotential}
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="text-xs uppercase text-gray-500">
            Degradation Level
          </p>

          <p className="mt-2 text-xl font-bold">
            {degradationLevel}
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="text-xs uppercase text-gray-500">
            Water Availability
          </p>

          <p className="mt-2 text-xl font-bold">
            {waterAvailability}
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-white p-5">
          <p className="text-xs uppercase text-gray-500">
            Key Constraints
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
            {constraints.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>

    </section>
  );
}