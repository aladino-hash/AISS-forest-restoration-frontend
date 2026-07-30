interface StepSpeciesProps {
  species?: {
    species?: any[];
  };

  selectedSpecies: string[];
  onToggleSpecies: (id: string) => void;
}

export default function StepSpecies({
  species,
  selectedSpecies,
  onToggleSpecies,
}: StepSpeciesProps) {

  const recommendedSpecies = species?.species ?? [];

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 6 of 8
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Recommended native species
      </h2>

      <p className="mt-4 leading-8 text-gray-600">
        Based on ecological compatibility, FYNOS AI selected the following
        native species for your restoration project.
      </p>

      <div className="mt-8 space-y-5">
        {recommendedSpecies.map((item: any, index: number) => {
          const profile = item.profile;
          const knowledge = item.knowledge;
          const speciesId =
            profile.scientific_name ??
            profile.common_names?.english?.[0] ??
            String(index);

          const selected = selectedSpecies.includes(speciesId);

          return (
            <div
              key={profile.scientific_name ?? index}
              className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">
                    🌿 {profile.scientific_name}
                  </h3>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    🏷️ Known as
                  </p>

                  <div className="mt-3 space-y-2 text-gray-700">
                    {profile.common_names?.spanish?.[0] && (
                      <p>🇪🇸 {profile.common_names.spanish[0]}</p>
                    )}

                    {profile.common_names?.english?.[0] && (
                      <p>🇬🇧 {profile.common_names.english[0]}</p>
                    )}

                    {profile.common_names?.portuguese?.[0] && (
                      <p>🇵🇹 {profile.common_names.portuguese[0]}</p>
                    )}

                    {profile.common_names?.french?.[0] && (
                      <p>🇫🇷 {profile.common_names.french[0]}</p>
                    )}

                    {profile.common_names?.local?.[0] && (
                      <p>🪶 {profile.common_names.local[0]}</p>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700">
                      🌿 {profile.family}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700">
                      {profile.life_form}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700">
                      ⭐ {profile.restoration_value}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                    {profile.restoration_value}
                  </div>

                  <p className="mt-3 text-sm text-gray-500">
                    Compatibility
                  </p>

                  <p className="font-semibold text-emerald-700">
                    {profile.restoration_value}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-sky-100 bg-white p-4">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-sky-700">
                    🌱 Growth & Restoration Profile
                  </h4>

                  <div className="space-y-3 text-sm">

                    <div className="flex justify-between">
                      <span className="text-gray-500">Growth rate</span>
                      <span className="font-medium text-gray-800">
                        {profile.growth_rate || "Unknown"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">Life form</span>
                      <span className="font-medium text-gray-800">
                        {profile.life_form || "Unknown"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">Restoration value</span>
                      <span className="font-semibold text-emerald-700">
                        {profile.restoration_value || "—"}
                      </span>
                    </div>

                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    🌳 Ecological Role
                  </h4>

                  <p className="text-sm leading-relaxed text-gray-700">
                    {knowledge?.ecological_role ||
                      profile?.ecological_role ||
                      "No ecological role available."}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">

                {/* Traditional Uses */}

                <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-700">
                    🌿 Traditional Uses
                  </h4>

                  {knowledge?.traditional_uses?.length ? (
                    <ul className="space-y-2 text-sm text-gray-700">
                      {knowledge.traditional_uses.map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No traditional uses available.
                    </p>
                  )}
                </div>

                {/* Medicinal Properties */}

                <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-4">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-rose-700">
                    💊 Medicinal Properties
                  </h4>

                  {knowledge?.medicinal_properties?.length ? (
                    <ul className="space-y-2 text-sm text-gray-700">
                      {knowledge.medicinal_properties.map(
                        (item: string, index: number) => (
                          <li key={index}>• {item}</li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No medicinal information available.
                    </p>
                  )}
                </div>

                {/* Ecological Benefits */}

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    🌎 Ecological Benefits
                  </h4>

                  {knowledge?.ecological_benefits?.length ? (
                    <ul className="space-y-2 text-sm text-gray-700">
                      {knowledge.ecological_benefits.map(
                        (item: string, index: number) => (
                          <li key={index}>• {item}</li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No ecological benefits available.
                    </p>
                  )}
                </div>

              </div>

              <div className="mt-8">
                <button
                  onClick={() => onToggleSpecies(speciesId)}
                  className={`w-full rounded-2xl py-3 font-semibold transition ${
                    selected
                      ? "bg-emerald-700 text-white hover:bg-emerald-800"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  {selected ? "✓ Selected" : "Select Species"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}