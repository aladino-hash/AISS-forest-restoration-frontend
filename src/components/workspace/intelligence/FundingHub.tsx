import { useLandscapeContext } from "./context/LandscapeContext";

export default function FundingHub() {
  const { selectedLandscape } = useLandscapeContext();

  const opportunities = selectedLandscape.funding;

  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
        Funding Intelligence
      </p>

      <h2 className="mt-2 text-2xl font-bold text-gray-900">
        {selectedLandscape.name}
      </h2>

      <div className="mt-6 space-y-4">
        {opportunities.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-emerald-100 p-4"
          >
            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              {item.description}
            </p>

            <p className="mt-4 font-semibold text-emerald-700">
              {item.amount}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700">
        Explore Funding
      </button>

    </section>
  );
}