import { useLandscapeContext } from "./context/LandscapeContext";

export default function InsightsFeed() {
  const { selectedLandscape } = useLandscapeContext();

  const feed = selectedLandscape.insights;

  const colors = {
    emerald: "border-emerald-500 bg-emerald-50",
    blue: "border-blue-500 bg-blue-50",
    amber: "border-amber-500 bg-amber-50",
    red: "border-red-500 bg-red-50",
  };

  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
        AI Restoration Insights
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-900">
        Intelligence Feed
      </h2>

      <div className="mt-8 space-y-5">
        {feed.map((item) => (
          <div
            key={item.title}
            className={`rounded-2xl border-l-4 p-5 ${
              colors[item.color as keyof typeof colors]
            }`}
          >
            <p className="font-semibold text-gray-900">
              {item.title}
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}