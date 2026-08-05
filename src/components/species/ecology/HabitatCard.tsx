import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface HabitatCardProps {
  profile?: any;
}

export default function HabitatCard({
  profile,
}: HabitatCardProps) {
  const ecology = profile?.ecological_requirements;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      <h3 className="text-3xl font-bold text-gray-900">
        🌱 Habitat
      </h3>

      <p className="mt-3 text-gray-600">
        Natural habitat, soil characteristics and environmental preferences.
      </p>

      <div className="mt-8">

        <SpeciesInfoRow
          label="🏔 Altitude"
          value={
            ecology?.altitude?.meters
              ? `${ecology.altitude.meters.min} – ${ecology.altitude.meters.max} m`
              : undefined
          }
        />

        <SpeciesInfoRow
          label="🌿 Preferred Soil"
          value={ecology?.soil?.preferred_types?.join("\n")}
        />

        <SpeciesInfoRow
          label="💧 Drainage"
          value={ecology?.soil?.drainage}
        />

        <SpeciesInfoRow
          label="🌾 Fertility"
          value={ecology?.soil?.fertility}
        />

        <SpeciesInfoRow
          label="🌊 Hydrology"
          value={ecology?.hydrology?.flood_tolerance}
        />

        <SpeciesInfoRow
          label="⛰ Erosion Tolerance"
          value={ecology?.topography?.erosion_tolerance}
        />

      </div>
    </section>
  );
}