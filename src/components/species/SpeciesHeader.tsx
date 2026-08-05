interface SpeciesHeaderProps {
  species?: any;
}

export default function SpeciesHeader({
  species,
}: SpeciesHeaderProps) {
  const profile = species?.profile;

  const displayName =
    profile?.common_names?.local?.[0] ??
    profile?.common_names?.spanish?.[0] ??
    profile?.common_names?.english?.[0] ??
    profile?.scientific_name ??
    "Unknown species";

  return (
    <div className="rounded-2xl border border-gray-200 p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        {/* ======================================================
            Species Identity
        ======================================================= */}

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900">
            🌱 {displayName}
          </h2>

          <p className="mt-2 text-lg italic text-gray-500">
            {profile?.scientific_name ?? "Unknown scientific name"}
          </p>

          {/* ======================================================
              Quick Badges
          ======================================================= */}

          <div className="mt-5 flex flex-wrap gap-3">
            {profile?.native !== undefined && (
              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                {profile.native ? "🌱 Native" : "🌍 Introduced"}
              </span>
            )}

            {profile?.life_form && (
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                🌳 {profile.life_form}
              </span>
            )}

            {profile?.life_cycle && (
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                ♻️ {profile.life_cycle}
              </span>
            )}

            {profile?.family && (
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                🌿 {profile.family}
              </span>
            )}
          </div>
        </div>

        {/* ======================================================
            Action
        ======================================================= */}

        <div className="flex-shrink-0">
          <button
            type="button"
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            ✓ Select Species
          </button>
        </div>
      </div>
    </div>
  );
}