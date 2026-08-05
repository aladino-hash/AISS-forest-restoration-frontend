import SpeciesInfoRow from "./SpeciesInfoRow";

interface TaxonomyCardProps {
  profile?: any;
}

export default function TaxonomyCard({
  profile,
}: TaxonomyCardProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      <h3 className="text-lg font-medium text-gray-900 leading-8">
        🌿 Taxonomy & Classification
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Scientific identity and biological classification.
      </p>

      <div className="mt-8">

        <SpeciesInfoRow
          label="🧬 Scientific Name"
          value={profile?.scientific_name}
        />

        <SpeciesInfoRow
          label="🌿 Family"
          value={profile?.family}
        />

        <SpeciesInfoRow
          label="🌳 Life Form"
          value={profile?.life_form}
        />

        <SpeciesInfoRow
          label="♻️ Life Cycle"
          value={profile?.life_cycle}
        />

        <SpeciesInfoRow
          label="🌎 Origin"
          value={
            profile?.native === true
              ? "Native"
              : profile?.native === false
              ? "Introduced"
              : undefined
          }
        />

      </div>
    </section>
  );
}