import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface IndustrialCardProps {
  species?: any;
}

export default function IndustrialCard({
  species,
}: IndustrialCardProps) {

  const products = species?.profile?.products;

  if (!products) return null;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          🏭 Industrial Products
        </h2>

        <p className="mt-3 text-gray-600">
          Raw materials and industrial applications.
        </p>
      </div>

      <SpeciesInfoRow
        label="Industrial"
        value={products?.industrial?.join(", ")}
      />

      <SpeciesInfoRow
        label="Oil"
        value={products?.oil?.join(", ")}
      />

      <SpeciesInfoRow
        label="Resin"
        value={products?.resin?.join(", ")}
      />

      <SpeciesInfoRow
        label="Latex"
        value={products?.latex?.join(", ")}
      />

    </section>
  );
}