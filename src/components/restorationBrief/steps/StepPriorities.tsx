interface StepPrioritiesProps {
  restorationObjectives: any[];
}

export default function StepPriorities({
  restorationObjectives,
}: StepPrioritiesProps) {
  return (
    <section>

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 3 of 6
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Restoration priorities
      </h2>

      <p className="mt-4 text-gray-600 leading-8">
        Based on your land conditions, these are the first restoration
        objectives FYNOS AI recommends.
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

            <p className="mt-3 text-gray-600 leading-7">
              {objective.reason}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}