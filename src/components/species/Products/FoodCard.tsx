import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface FoodCardProps {
  species?: any;
}

export default function FoodCard({
  species,
}: FoodCardProps) {

  const products = species?.profile?.products;

  if (!products) return null;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          🍎 Food & Medicine
        </h2>

        <p className="mt-3 text-gray-600">
          Nutritional and medicinal uses of this species.
        </p>
      </div>

      <SpeciesInfoRow
        label="Food"
        value={products?.food?.join(", ")}
      />

      <SpeciesInfoRow
        label="Medicine"
        value={products?.medicine?.join(", ")}
      />

    </section>
  );
}