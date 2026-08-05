import SpeciesInfoRow from "./SpeciesInfoRow";

interface CommonNamesCardProps {
  profile?: any;
}

export default function CommonNamesCard({
  profile,
}: CommonNamesCardProps) {
  const names = profile?.common_names;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      <h3 className="text-xl font-semibold text-gray-900">
        🏷️ Common Names
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Local and international names used to identify this species.
      </p>

      <div className="mt-8">

        <SpeciesInfoRow
          label="🪶 Local"
          value={names?.local?.join(", ")}
        />

        <SpeciesInfoRow
          label="🇪🇸 Spanish"
          value={names?.spanish?.join(", ")}
        />

        <SpeciesInfoRow
          label="🇬🇧 English"
          value={names?.english?.join(", ")}
        />

        <SpeciesInfoRow
          label="🇵🇹 Portuguese"
          value={names?.portuguese?.join(", ")}
        />

      </div>
    </section>
  );
}