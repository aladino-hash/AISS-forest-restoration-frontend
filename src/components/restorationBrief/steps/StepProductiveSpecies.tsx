import { useState } from "react";

interface StepProductiveSpeciesProps {
  species?: {
    title?: string;
    species?: any[];
  };

  selectedSpecies: string[];
  onToggleSpecies: (id: string) => void;
}

export default function StepProductiveSpecies({
  species,
}: StepProductiveSpeciesProps) {
  const productiveSpecies = species?.species ?? [];

  const [selectedSpeciesIndex, setSelectedSpeciesIndex] = useState(0);

  const currentSpecies = productiveSpecies[selectedSpeciesIndex];

  const profile = currentSpecies?.profile;

  const displayName =
    profile?.common_names?.local?.[0] ??
    profile?.common_names?.spanish?.[0] ??
    profile?.common_names?.english?.[0] ??
    profile?.scientific_name ??
    "Unknown species";

  return (
    <section>
      {/* Header */}

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
          Step 5 of 8
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          Select Productive Species
        </h2>

        <p className="mt-3 max-w-3xl text-gray-600">
          Choose species that will enhance your restoration and bring
          long-term benefits.
        </p>
      </div>

      {/* Layout */}

      <div className="mt-8 grid gap-6 lg:grid-cols-12">

        {/* =======================================================
            SIDEBAR
        ======================================================= */}

        <aside className="lg:col-span-4">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

            <h3 className="text-xl font-bold text-gray-900">
              Productive Species ({productiveSpecies.length})
            </h3>

            {/* Search */}

            <div className="mt-6">
              <input
                type="text"
                placeholder="Search species..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none"
              />
            </div>

            {/* Species */}

            <div className="mt-6 space-y-4">

              {productiveSpecies.map((item: any, index: number) => {

                const profile = item.profile;

                const displayName =
                  profile?.common_names?.local?.[0] ??
                  profile?.common_names?.spanish?.[0] ??
                  profile?.common_names?.english?.[0] ??
                  profile?.scientific_name ??
                  "Unknown species";

                return (
                  <button
                    key={profile?.scientific_name ?? index}
                    type="button"
                    onClick={() => setSelectedSpeciesIndex(index)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      index === selectedSpeciesIndex
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-200 bg-white hover:border-emerald-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">

                      <div className="h-16 w-16 rounded-full bg-gray-200" />

                      <div className="flex-1">

                        <h4 className="font-semibold text-gray-900">
                          {displayName}
                        </h4>

                        <p className="mt-1 text-sm italic text-gray-500">
                          {profile?.scientific_name}
                        </p>

                      </div>

                    </div>
                  </button>
                );
              })}

            </div>

          </div>
        </aside>

        {/* =======================================================
            WORKSPACE
        ======================================================= */}

        <section className="lg:col-span-8">

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

            {/* Header */}

            <div className="rounded-2xl border border-gray-200 p-6">

              <h2 className="text-3xl font-bold text-gray-900">
                {displayName}
              </h2>

              <p className="mt-2 text-lg italic text-gray-500">
                {profile?.scientific_name}
              </p>

            </div>

            {/* Tabs */}

            <div className="mt-6 rounded-2xl border border-gray-200 p-5">

              <div className="flex flex-wrap gap-4">

                {[
                  "Profile",
                  "Ecology",
                  "Functions",
                  "Cultivation",
                  "Propagation",
                  "Products",
                  "FYNOS",
                  "Sources",
                ].map((tab) => (
                  <div
                    key={tab}
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600"
                  >
                    {tab}
                  </div>
                ))}

              </div>

            </div>

            {/* Placeholder */}

            <div className="mt-6 rounded-2xl border border-gray-200 p-6">

              <div className="h-6 w-56 rounded bg-gray-200" />

              <div className="mt-6 space-y-4">

                <div className="h-5 w-full rounded bg-gray-100" />
                <div className="h-5 w-5/6 rounded bg-gray-100" />
                <div className="h-5 w-3/4 rounded bg-gray-100" />
                <div className="h-5 w-2/3 rounded bg-gray-100" />
                <div className="h-5 w-1/2 rounded bg-gray-100" />

              </div>

            </div>

            {/* Footer */}

            <div className="mt-6 flex items-center justify-between rounded-2xl border border-gray-200 p-5">

              <div className="h-10 w-40 rounded-xl bg-gray-200" />

              <div className="h-10 w-48 rounded-xl bg-emerald-200" />

            </div>

          </div>

        </section>

      </div>
    </section>
  );
}