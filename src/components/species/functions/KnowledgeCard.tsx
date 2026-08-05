interface KnowledgeCardProps {
  species?: any;
}

export default function KnowledgeCard({
  species,
}: KnowledgeCardProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      <h3 className="text-2xl font-bold text-gray-900">
        🧠 Knowledge & Recommendations
      </h3>

      <p className="mt-3 text-gray-500">
        Coming next...
      </p>
    </section>
  );
}