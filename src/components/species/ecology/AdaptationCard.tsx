import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface AdaptationCardProps {
  profile?: any;
}

export default function AdaptationCard({
  profile,
}: AdaptationCardProps) {
  const ecology = profile?.ecological_requirements;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      <h3 className="text-3xl font-bold text-gray-900">
        🛡 Environmental Adaptations
      </h3>

      <p className="mt-3 text-gray-600">
        Species tolerance and adaptation to environmental conditions.
      </p>

      <div className="mt-8">

        <SpeciesInfoRow
          label="❄ Cold Tolerance"
          value={ecology?.tolerances?.cold}
        />

        <SpeciesInfoRow
          label="🔥 Fire Tolerance"
          value={ecology?.tolerances?.fire}
        />

        <SpeciesInfoRow
          label="🌵 Drought Tolerance"
          value={ecology?.hydrology?.drought_tolerance}
        />

        <SpeciesInfoRow
          label="🧂 Salinity Tolerance"
          value={ecology?.tolerances?.salinity}
        />

        <SpeciesInfoRow
          label="💨 Wind Tolerance"
          value={ecology?.tolerances?.wind}
        />

      </div>
    </section>
  );
}