import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface EcologicalRoleCardProps {
  species?: any;
}

export default function EcologicalRoleCard({
  species,
}: EcologicalRoleCardProps) {
  const profile = species?.profile;
  const knowledge = species?.knowledge;

  const ecologicalFunctions = profile?.ecological_functions;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      <h3 className="text-3xl font-bold text-gray-900">
        🌳 Ecological Role
      </h3>

      <p className="mt-3 text-gray-600">
        Functional characteristics describing how this species contributes to
        ecosystem structure, succession and ecological processes.
      </p>

      <div className="mt-8">

        <SpeciesInfoRow
          label="🌱 Planting Role"
          value={knowledge?.planting_role}
        />

        <SpeciesInfoRow
          label="🌿 Ecosystem Role"
          value={knowledge?.ecosystem_role}
        />

        <SpeciesInfoRow
          label="🌱 Successional Stage"
          value={ecologicalFunctions?.successional_stage}
        />

        <SpeciesInfoRow
          label="🌲 Forest Layer"
          value={ecologicalFunctions?.forest_layer}
        />

        <SpeciesInfoRow
          label="🌍 Carbon Storage"
          value={ecologicalFunctions?.carbon_storage}
        />

        <SpeciesInfoRow
          label="🌱 Soil Improvement"
          value={ecologicalFunctions?.soil_improvement}
        />

        <SpeciesInfoRow
          label="💧 Water Regulation"
          value={ecologicalFunctions?.water_regulation}
        />

        <SpeciesInfoRow
          label="🌤 Microclimate Regulation"
          value={ecologicalFunctions?.microclimate_regulation}
        />

        <SpeciesInfoRow
          label="🐝 Pollinator Support"
          value={ecologicalFunctions?.pollinator_support}
        />

        <SpeciesInfoRow
          label="🦜 Wildlife Support"
          value={ecologicalFunctions?.wildlife_support}
        />

      </div>
    </section>
  );
}