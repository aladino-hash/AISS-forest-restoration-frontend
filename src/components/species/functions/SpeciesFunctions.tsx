import EcologicalRoleCard from "./EcologicalRoleCard";
import EcosystemServicesCard from "./EcosystemServicesCard";


interface SpeciesFunctionsProps {
  species?: any;
}

export default function SpeciesFunctions({
  species,
}: SpeciesFunctionsProps) {
  const profile = species?.profile;

  if (!profile) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          Species Functions
        </h3>

        <p className="mt-3 text-gray-500">
          Functional information is not available for this species.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 xl:grid-cols-2">

      <EcologicalRoleCard
        species={species}
      />

      <EcosystemServicesCard
        species={species}
      />

    </div>
  );
}