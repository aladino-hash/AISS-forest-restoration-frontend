import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface ClassificationCardProps {
  species?: any;
}

export default function ClassificationCard({
  species,
}: ClassificationCardProps) {
  const fynos = species?.profile?.fynos_classification;

  if (!fynos) {
    return (
      <section className="rounded-2xl border border-gray-200 bg-white p-8">
        <h2 className="text-3xl font-bold text-gray-900">
          📊 FYNOS Classification
        </h2>

        <p className="mt-3 text-gray-600">
          AI classification and restoration assessment.
        </p>

        <div className="mt-8 rounded-xl border border-gray-100 bg-gray-50 p-6 text-center">
          <p className="text-gray-500">
            No FYNOS classification available.
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
          📊 FYNOS Classification
        </h2>

        <p className="mt-3 text-gray-600">
          AI evaluation of this species across key restoration and
          agroforestry dimensions.
        </p>
      </div>

      <SpeciesInfoRow
        label="Priority Level"
        value={fynos?.priority_level}
      />

      <SpeciesInfoRow
        label="Restoration Value"
        value={fynos?.restoration_value}
      />

      <SpeciesInfoRow
        label="Agroforestry Value"
        value={fynos?.agroforestry_value}
      />

      <SpeciesInfoRow
        label="Carbon Value"
        value={fynos?.carbon_value}
      />

      <SpeciesInfoRow
        label="Biodiversity Value"
        value={fynos?.biodiversity_value}
      />

      <SpeciesInfoRow
        label="Food Security Value"
        value={fynos?.food_security_value}
      />

      <SpeciesInfoRow
        label="Income Generation"
        value={fynos?.income_generation_value}
      />

    </section>
  );
}