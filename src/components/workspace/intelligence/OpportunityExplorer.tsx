import { useLandscapeContext } from "./context/LandscapeContext";
import { landscapes } from "@/data/mock/landscapes";

export default function OpportunityExplorer() {
  const { selectedLandscape, setSelectedLandscape } =
    useLandscapeContext();

  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Restoration Opportunities
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Priority Landscapes
          </h2>
        </div>

        <button className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50">
          View All
        </button>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {landscapes.map((landscape) => (
          <button
            key={landscape.id}
            onClick={() => setSelectedLandscape(landscape)}
            className={`rounded-2xl border p-6 text-left transition-all ${
              selectedLandscape.id === landscape.id
                ? "border-2 border-emerald-600 bg-emerald-50 shadow-lg"
                : "border border-emerald-100 hover:border-emerald-300 hover:shadow-md"
            }`}
          >
            <h3 className="font-semibold text-gray-900">
              {landscape.name}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {landscape.description}
            </p>

            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-gray-500">Priority</span>

              <span
                className={`font-semibold ${
                  landscape.priority === "Very High"
                    ? "text-red-600"
                    : landscape.priority === "High"
                    ? "text-amber-600"
                    : "text-blue-600"
                }`}
              >
                {landscape.priority}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}