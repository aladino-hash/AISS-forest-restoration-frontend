interface SpeciesSidebarProps {
  productiveSpecies: any[];
  selectedSpeciesIndex: number;
  setSelectedSpeciesIndex: (index: number) => void;
}

export default function SpeciesSidebar({
  productiveSpecies,
  selectedSpeciesIndex,
  setSelectedSpeciesIndex,
}: SpeciesSidebarProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900">
        Productive Species ({productiveSpecies.length})
      </h3>

      {/* Search */}

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search species..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-emerald-500"
        />
      </div>

      {/* Species List */}

      <div className="mt-6 space-y-4">
        {productiveSpecies.map((item: any, index: number) => {
          const profile = item?.profile;

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
                {/* Placeholder image */}

                <div className="h-16 w-16 flex-shrink-0 rounded-full bg-gray-200" />

                {/* Species info */}

                <div className="min-w-0 flex-1">
                  <h4 className="truncate font-semibold text-gray-900">
                    {displayName}
                  </h4>

                  <p className="mt-1 truncate text-sm italic text-gray-500">
                    {profile?.scientific_name ?? "Unknown"}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}