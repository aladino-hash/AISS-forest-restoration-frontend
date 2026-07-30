interface StepImpactProps {
  restorationPotential: string;

  productiveSpecies: string[];
  restorationSpecies: string[];

  impactSummary: string;
}

export default function StepImpact({
  restorationPotential,
  productiveSpecies,
  restorationSpecies,
  impactSummary,
}: StepImpactProps) {

  const productiveCount = productiveSpecies.length;
  const restorationCount = restorationSpecies.length;

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 7 of 8
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Expected Impact
      </h2>

      <p className="mt-4 leading-8 text-gray-600">
        This is the first version of your restoration strategy. Before creating
        your project, review the ecological and productive outcomes generated from
        your selected species and landscape conditions.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {/* Restoration Strategy */}
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white p-8 md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            🌎 Your Restoration Strategy
          </p>

          <h3 className="mt-3 text-2xl font-bold text-gray-900">
            Diversified Agroforestry Restoration
          </h3>

          <p className="mt-4 leading-8 text-gray-700">
            {impactSummary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
              🌱 Ecological Restoration
            </span>

            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-800">
              🌎 Biodiversity Recovery
            </span>

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
              🌾 Sustainable Production
            </span>

            <span className="rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-800">
              🌳 Long-term Resilience
            </span>
          </div>
        </div>

        {/* Native Species */}
        <div className="rounded-2xl bg-emerald-50 p-6">
          <p className="text-xs uppercase text-gray-500">
            Native Species Selected
          </p>

          <p className="mt-3 text-3xl font-bold text-emerald-700">
            {restorationCount}
          </p>

          <p className="mt-2 text-sm text-gray-600">
            species chosen by you for ecological restoration.
          </p>
        </div>

        {/* Carbon */}
        <div className="rounded-2xl bg-emerald-50 p-6">
          <p className="text-xs uppercase text-gray-500">
            Carbon Potential
          </p>

          <p className="mt-3 text-xl font-bold text-gray-900">
            Long-term sequestration
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Native forests will progressively capture atmospheric carbon while
            improving ecosystem resilience.
          </p>
        </div>

        {/* Productive Species */}
        <div className="rounded-2xl bg-emerald-50 p-6">
          <p className="text-xs uppercase text-gray-500">
            Productive Species Selected
          </p>

          <p className="mt-3 text-3xl font-bold text-emerald-700">
            {productiveCount}
          </p>

          <p className="mt-2 text-sm text-gray-600">
            productive species included in your agroforestry system.
          </p>
        </div>
      </div>

      {restorationSpecies.length > 0 && (
        <div className="mt-8 rounded-3xl border border-emerald-100 bg-white p-6">
          <h3 className="text-xl font-bold text-gray-900">
            🌳 Native Species You Selected
          </h3>

          <p className="mt-2 text-gray-600">
            These species will form the ecological backbone of your restoration
            strategy.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {restorationSpecies.map((species) => (
              <span
                key={species}
                className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800"
              >
                {species}
              </span>
            ))}
          </div>
        </div>
      )}

      {productiveSpecies.length > 0 && (
        <div className="mt-6 rounded-3xl border border-amber-100 bg-white p-6">
          <h3 className="text-xl font-bold text-gray-900">
            🌾 Productive Species You Selected
          </h3>

          <p className="mt-2 text-gray-600">
            These productive species will contribute to future livelihoods and
            agroforestry income.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {productiveSpecies.map((species) => (
              <span
                key={species}
                className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800"
              >
                {species}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}