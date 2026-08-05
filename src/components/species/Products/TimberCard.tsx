import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface TimberCardProps {
  species?: any;
}

export default function TimberCard({
  species,
}: TimberCardProps) {

  const products = species?.profile?.products;

  if (!products) return null;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          🪵 Timber & Energy
        </h2>

        <p className="mt-3 text-gray-600">
          Wood products, energy resources and livestock uses.
        </p>
      </div>

      <SpeciesInfoRow
        label="Timber"
        value={products?.timber?.join(", ")}
      />

      <SpeciesInfoRow
        label="Fuel"
        value={products?.fuel?.join(", ")}
      />

      <SpeciesInfoRow
        label="Fiber"
        value={products?.fiber?.join(", ")}
      />

      <SpeciesInfoRow
        label="Fodder"
        value={products?.fodder?.join(", ")}
      />

    </section>
  );
}