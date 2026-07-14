interface RestorationPrioritiesProps {
  restorationObjectives: any[];
}

export default function RestorationPriorities({
  restorationObjectives,
}: RestorationPrioritiesProps) {
  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
        Where Restoration Can Begin
      </p>

      <h2 className="mt-3 text-2xl font-bold text-gray-900">
        Recommended Priorities
      </h2>

      <p className="mt-5 leading-8 text-gray-600">
        Based on ecological conditions, FYNOS AI recommends the most
        impactful restoration objectives for this property before
        suggesting species, activities, and implementation strategies.
      </p>

      <div className="mt-8 space-y-4">
        {restorationObjectives.map((objective) => (
          <div
            key={objective.title}
            className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {objective.title}
              </h3>

              <span className="rounded-full bg-emerald-600 px-3 py-1 text-sm font-semibold text-white">
                {objective.priority}
              </span>
            </div>

            <p className="mt-3 text-gray-600">
              {objective.reason}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}