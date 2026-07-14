interface StepStrategyProps {
  recommendedAgroforestrySystems: any[];
}

export default function StepStrategy({
  recommendedAgroforestrySystems,
}: StepStrategyProps) {
  const system = recommendedAgroforestrySystems[0];

  if (!system) return null;

  return (
    <section>

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 4 of 6
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Your restoration strategy
      </h2>

      <p className="mt-4 leading-8 text-gray-600">
        Rather than planting random trees, FYNOS AI designs a complete
        restoration system adapted to your landscape.
      </p>

      <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">

        <h3 className="text-2xl font-bold text-gray-900">
          {system.name}
        </h3>

        <p className="mt-4 leading-8 text-gray-700">
          {system.description}
        </p>

      </div>

      <div className="mt-8 space-y-4">

        {system.phases.map((phase: any) => (

          <div
            key={phase.phase}
            className="rounded-2xl border border-emerald-100 bg-white p-5"
          >

            <div className="flex items-center justify-between">

              <h4 className="font-semibold text-gray-900">
                Phase {phase.phase}
              </h4>

              <span className="rounded-full bg-emerald-600 px-3 py-1 text-sm font-semibold text-white">
                Step {phase.phase}
              </span>

            </div>

            <p className="mt-4 text-gray-700 leading-7">
              {phase.objective}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}