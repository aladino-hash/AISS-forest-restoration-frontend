import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface EcosystemServicesCardProps {
  species?: any;
}

export default function EcosystemServicesCard({
  species,
}: EcosystemServicesCardProps) {
  const services = species?.profile?.ecosystem_services;

  if (!services) return null;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      <h2 className="text-3xl font-bold text-gray-900">
        🌍 Ecosystem Services
      </h2>

      <p className="mt-3 text-gray-600">
        Ecological and human benefits naturally provided by this species.
      </p>

      <div className="mt-8">

        <SpeciesInfoRow
          label="🌿 Provisioning"
          value={services?.provisioning?.join(", ")}
        />

        <SpeciesInfoRow
          label="🌎 Regulating"
          value={services?.regulating?.join(", ")}
        />

        <SpeciesInfoRow
          label="🦜 Supporting"
          value={services?.supporting?.join(", ")}
        />

        <SpeciesInfoRow
          label="🎋 Cultural"
          value={services?.cultural?.join(", ")}
        />

      </div>
    </section>
  );
}