interface PropagationCardProps {
  species?: any;
}

export default function PropagationCard({
  species,
}: PropagationCardProps) {

  console.log("PROPAGATION", species?.profile?.propagation);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      <h2 className="text-3xl font-bold text-gray-900">
        🌾 Propagation
      </h2>

      <p className="mt-3 text-gray-600">
        Propagation information coming soon...
      </p>
    </section>
  );
}