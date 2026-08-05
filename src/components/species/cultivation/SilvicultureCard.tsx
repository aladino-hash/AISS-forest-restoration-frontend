import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface SilvicultureCardProps {
  species?: any;
}

export default function SilvicultureCard({
  species,
}: SilvicultureCardProps) {
  const silviculture = species?.profile?.silviculture;

  if (!silviculture) {
    return (
      <section className="rounded-2xl border border-gray-200 bg-white p-8">
        <h2 className="text-3xl font-bold text-gray-900">
          🌳 Silviculture
        </h2>

        <p className="mt-3 text-gray-600">
          Growth characteristics and silvicultural behavior of this species.
        </p>

        <div className="mt-8 rounded-xl border border-gray-100 bg-gray-50 p-6 text-center">
          <p className="text-gray-500">
            No silvicultural information available.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      {/* =======================================================
          Header
      ======================================================= */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          🌳 Silviculture
        </h2>

        <p className="mt-3 text-gray-600">
          Growth characteristics and production cycle of this species.
        </p>
      </div>

      {/* =======================================================
          Growth Characteristics
      ======================================================= */}

      <SpeciesInfoRow
        label="📈 Growth Rate"
        value={silviculture?.growth_rate}
      />

      <SpeciesInfoRow
        label="🌳 Rotation Years"
        value={
          silviculture?.rotation_years != null
            ? `${silviculture.rotation_years} years`
            : undefined
        }
      />

      <SpeciesInfoRow
        label="🪵 Harvest Age"
        value={
          silviculture?.harvest_age_years != null
            ? `${silviculture.harvest_age_years} years`
            : undefined
        }
      />
    </section>
  );
}