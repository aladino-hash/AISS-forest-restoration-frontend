interface FunctionalLabelsCardProps {
  species?: any;
}

export default function FunctionalLabelsCard({
  species,
}: FunctionalLabelsCardProps) {
  const fynos = species?.profile?.fynos_classification;

  if (!fynos) return null;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          🏷 Functional Labels
        </h2>

        <p className="mt-3 text-gray-600">
          Ecological roles and recommended applications identified by the
          FYNOS Intelligence Engine.
        </p>
      </div>

      {/* =======================================================
          Functional Labels
      ======================================================= */}

      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Ecological Roles
        </h3>

        <div className="flex flex-wrap gap-3">

          {fynos.ecosystem_engineer && (
            <span className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-700">
              🌳 Ecosystem Engineer
            </span>
          )}

          {fynos.nitrogen_fixer && (
            <span className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-700">
              🌱 Nitrogen Fixer
            </span>
          )}

          {fynos.keystone_species && (
            <span className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-700">
              ⭐ Keystone Species
            </span>
          )}

          {fynos.foundation_species && (
            <span className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-700">
              🏛 Foundation Species
            </span>
          )}

        </div>
      </div>

      {/* =======================================================
          Recommended Uses
      ======================================================= */}

      <div className="mt-10">

        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Recommended Uses
        </h3>

        <div className="flex flex-wrap gap-3">

          {fynos.recommended_for_restoration && (
            <span className="rounded-full bg-emerald-600 px-4 py-2 font-medium text-white">
              🌱 Restoration
            </span>
          )}

          {fynos.recommended_for_agroforestry && (
            <span className="rounded-full bg-emerald-600 px-4 py-2 font-medium text-white">
              🌾 Agroforestry
            </span>
          )}

          {fynos.recommended_for_reforestation && (
            <span className="rounded-full bg-emerald-600 px-4 py-2 font-medium text-white">
              🌳 Reforestation
            </span>
          )}

          {fynos.recommended_for_regeneration && (
            <span className="rounded-full bg-emerald-600 px-4 py-2 font-medium text-white">
              🌿 Natural Regeneration
            </span>
          )}

        </div>

      </div>

    </section>
  );
}