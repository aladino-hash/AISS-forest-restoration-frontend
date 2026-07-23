interface StepPrioritiesProps {
  priorities?: {
    priorities?: string[];
  };
}

export default function StepPriorities({
  priorities,
}: StepPrioritiesProps) {

  const items = priorities?.priorities ?? [];

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
        priorities identified by FYNOS AI.
      </p>

      <div className="mt-8 space-y-4">

        {items.map((priority, index) => (

          <div
            key={index}
            className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5"
          >

            <div className="flex items-center">

              <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">
                {index + 1}
              </span>

              <h3 className="text-lg font-semibold text-gray-900">
                {priority}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}