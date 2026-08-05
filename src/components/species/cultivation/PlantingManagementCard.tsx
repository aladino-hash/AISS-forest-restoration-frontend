import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface PlantingManagementCardProps {
  species?: any;
}

export default function PlantingManagementCard({
  species,
}: PlantingManagementCardProps) {
  const silviculture = species?.profile?.silviculture;

  if (!silviculture) {
    return (
      <section className="rounded-2xl border border-gray-200 bg-white p-8">
        <h2 className="text-3xl font-bold text-gray-900">
          🌱 Planting & Management
        </h2>

        <p className="mt-3 text-gray-600">
          Establishment and long-term management recommendations.
        </p>

        <div className="mt-8 rounded-xl border border-gray-100 bg-gray-50 p-6 text-center">
          <p className="text-gray-500">
            No planting and management information available.
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
          🌱 Planting & Management
        </h2>

        <p className="mt-3 text-gray-600">
          Practical recommendations for establishing and maintaining healthy
          plantations.
        </p>
      </div>

      {/* =======================================================
          Planting
      ======================================================= */}

      <SpeciesInfoRow
        label="🌱 Planting Methods"
        value={silviculture?.planting_methods?.join(", ")}
      />

      <SpeciesInfoRow
        label="📏 Recommended Spacing"
        value={silviculture?.spacing?.join(", ")}
      />

      {/* =======================================================
          Management
      ======================================================= */}

      <SpeciesInfoRow
        label="🌿 Fertilization"
        value={silviculture?.fertilization}
      />

      <SpeciesInfoRow
        label="✂️ Pruning"
        value={silviculture?.pruning}
      />

      <SpeciesInfoRow
        label="🛠 Maintenance"
        value={silviculture?.maintenance?.join(", ")}
      />

      <SpeciesInfoRow
        label="📘 Management Notes"
        value={silviculture?.management_notes}
      />

    </section>
  );
}