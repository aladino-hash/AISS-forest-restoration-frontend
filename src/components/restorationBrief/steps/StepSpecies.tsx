interface StepSpeciesProps {
  recommendedSpecies: any[];
}

export default function StepSpecies({
  recommendedSpecies,
}: StepSpeciesProps) {
  return (
    <section>

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 5 of 7
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Native species recommendations
      </h2>

      <p className="mt-4 leading-8 text-gray-600">
        These native species best match your property's ecological conditions.
      </p>

      <div className="mt-8 space-y-5">

        {recommendedSpecies.map((species) => (

          <div
            key={species.name}
            className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {species.name}
                </h3>

                <p className="italic text-gray-500">
                  {species.scientificName}
                </p>

              </div>

              <span className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                {species.suitability}
              </span>

            </div>

            <p className="mt-5 leading-7 text-gray-700">
              {species.reason}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}