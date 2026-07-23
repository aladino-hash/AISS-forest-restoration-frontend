interface StepSpeciesProps {
  species?: {
    species?: any[];
  };
}

export default function StepSpecies({
  species,
}: StepSpeciesProps) {

  console.log("Species prop:", species);

  const recommendedSpecies = species?.species ?? [];

  console.log(recommendedSpecies);

  return (
    <section>

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 5 of 7
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Recommended native species
      </h2>

      <p className="mt-4 leading-8 text-gray-600">
        Based on ecological compatibility, FYNOS AI selected the following native species for your restoration project.
      </p>

      <div className="mt-8 space-y-5">

        {recommendedSpecies.map((item: any, index: number) => {

          console.log("ITEM SPECIES", item.species);

          return (

            <div
              key={item.scientific_name ?? index}
              className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6"
            >

              <div className="flex items-start justify-between gap-6">

                <div className="flex-1">

                  <h3 className="text-2xl font-bold text-gray-900">
                    🌿 {item.species.scientific_name}
                  </h3>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    🏷️ Known as
                  </p>

                  <div className="mt-3 space-y-1 text-gray-700">

                    {item.species.common_names?.spanish?.[0] && (
                      <p>🇪🇸 {item.species.common_names.spanish[0]}</p>
                    )}

                    {item.species.common_names?.english?.[0] && (
                      <p>🇬🇧 {item.species.common_names.english[0]}</p>
                    )}

                    {item.species.common_names?.portuguese?.[0] && (
                      <p>🇵🇹 {item.species.common_names.portuguese[0]}</p>
                    )}

                    {item.species.common_names?.french?.[0] && (
                      <p>🇫🇷 {item.species.common_names.french[0]}</p>
                    )}

                    {item.species.common_names?.local?.[0] && (
                      <p>🪶 {item.species.common_names.local[0]}</p>
                    )}

                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700">
                      🌿 {item.family}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700">
                      {item.life_form}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700">
                      {item.category}
                    </span>

                  </div>

                </div>

                <div className="text-right">

                  <div className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                    Score {item.score}
                  </div>

                  <p className="mt-3 text-sm text-gray-500">
                    Compatibility
                  </p>

                  <p className="font-semibold text-emerald-700">
                    {Math.round(item.compatibility * 100)}%
                  </p>

                </div>

              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div>

                  <p className="text-xs uppercase text-gray-500">
                    Growth Duration
                  </p>

                  <p className="mt-2 text-gray-700">
                    {item.duration}
                  </p>

                </div>

                <div>

                  <p className="text-xs uppercase text-gray-500">
                    Ecological Role
                  </p>

                  <p className="mt-2 text-gray-700">
                    {item.category}
                  </p>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}