type Props = {
  project: any;
};

export default function RestorationPlanner({
  project,
}: Props) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-gray-900">
        Restoration Plan
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Select the restoration strategy that best matches your goals.
      </p>

      <div className="mt-6 space-y-6">

        <Category
          title="Short-term Crops"
          options={[
            "Cassava",
            "Beans",
            "Pineapple",
          ]}
        />

        <Category
          title="Medium-term Crops"
          options={[
            "Cacao",
            "Coffee",
            "Banana",
          ]}
        />

        <Category
          title="Long-term Timber"
          options={[
            "Capirona",
            "Bolaina",
            "Cedro",
          ]}
        />

      </div>

    </div>
  );
}

function Category({
  title,
  options,
}: {
  title: string;
  options: string[];
}) {
  return (
    <div>

      <h3 className="mb-3 font-semibold text-gray-900">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">

        {options.map((option) => (
          <button
            key={option}
            className="rounded-full border border-emerald-200 px-4 py-2 text-sm transition hover:bg-emerald-50"
          >
            {option}
          </button>
        ))}

      </div>

    </div>
  );
}