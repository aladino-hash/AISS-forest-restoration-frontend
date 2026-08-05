import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface OtherUsesCardProps {
  species?: any;
}

export default function OtherUsesCard({
  species,
}: OtherUsesCardProps) {

  const products = species?.profile?.products;

  if (!products) return null;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          🌸 Other Uses
        </h2>

        <p className="mt-3 text-gray-600">
          Additional cultural, ornamental and miscellaneous uses.
        </p>
      </div>

      <SpeciesInfoRow
        label="Ornamental"
        value={products?.ornamental?.join(", ")}
      />

      <SpeciesInfoRow
        label="Other"
        value={products?.other?.join(", ")}
      />

    </section>
  );
}