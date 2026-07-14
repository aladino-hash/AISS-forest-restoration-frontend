interface StepImpactProps {
  restorationPotential: string;
}

export default function StepImpact({
  restorationPotential,
}: StepImpactProps) {
  return (
    <section>

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 6 of 7
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Expected impact
      </h2>

      <p className="mt-4 leading-8 text-gray-600">
        If this restoration strategy is implemented successfully,
        your land can progressively recover ecological function,
        biodiversity and long-term productivity.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl bg-emerald-50 p-6">
          <p className="text-xs uppercase text-gray-500">
            Ecological Recovery
          </p>

          <p className="mt-3 text-xl font-bold text-gray-900">
            {restorationPotential}
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-6">
          <p className="text-xs uppercase text-gray-500">
            Biodiversity
          </p>

          <p className="mt-3 text-xl font-bold text-gray-900">
            Native species restored
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-6">
          <p className="text-xs uppercase text-gray-500">
            Carbon
          </p>

          <p className="mt-3 text-xl font-bold text-gray-900">
            Long-term sequestration
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-6">
          <p className="text-xs uppercase text-gray-500">
            Livelihood
          </p>

          <p className="mt-3 text-xl font-bold text-gray-900">
            Sustainable production
          </p>
        </div>

      </div>

    </section>
  );
}