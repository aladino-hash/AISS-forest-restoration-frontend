import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface DistributionCardProps {
    species?: any;
}

export default function DistributionCard({
    species,
}: DistributionCardProps) {

    const distribution = species?.distribution;
  console.log("Distribution", distribution);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      <h3 className="text-3xl font-bold text-gray-900">
        🌍 Distribution
      </h3>

      <p className="mt-3 text-gray-600">
        Geographic distribution, native occurrence and ecological range.
      </p>

      <div className="mt-8">

        <SpeciesInfoRow
          label="🌎 Countries"
          value={distribution?.countries?.join(", ")}
        />

        <SpeciesInfoRow
          label="🗺 Ecoregions"
          value={distribution?.ecoregions?.join(", ")}
        />

        <SpeciesInfoRow
          label="🌳 Biomes"
          value={distribution?.biomes?.join(", ")}
        />

        <SpeciesInfoRow
          label="💧 Watersheds"
          value={distribution?.watersheds?.join(", ")}
        />

        <SpeciesInfoRow
          label="🌱 Native"
          value={
            distribution?.native === true
              ? "Yes"
              : distribution?.native === false
              ? "No"
              : undefined
          }
        />

        <SpeciesInfoRow
          label="🌍 Introduced Regions"
          value={distribution?.introduced_regions?.join(", ")}
        />

        <SpeciesInfoRow
          label="🧬 Endemism"
          value={distribution?.endemism}
        />

        <SpeciesInfoRow
          label="📖 Distribution Notes"
          value={distribution?.global_distribution_notes}
        />

      </div>
    </section>
  );
}