import { useLandscapeContext } from "./context/LandscapeContext";

export default function SatelliteFeed() {
  const { selectedLandscape } = useLandscapeContext();

  const data = selectedLandscape.satellite;

  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Satellite Intelligence
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Latest Landscape Changes
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {selectedLandscape.name}
          </p>
        </div>

        <button className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50">
          Open Map
        </button>
      </div>

      <div className="mt-8 space-y-4">
        <div className="rounded-2xl border border-emerald-100 p-5">
          <div className="flex justify-between">
            <h3 className="font-semibold">Forest Loss</h3>

            <span className="font-semibold text-red-600">
              {data.loss}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-100 p-5">
          <div className="flex justify-between">
            <h3 className="font-semibold">
              Vegetation Recovery
            </h3>

            <span className="font-semibold text-emerald-700">
              {data.recovery}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-100 p-5">
          <div className="flex justify-between">
            <h3 className="font-semibold">
              Fire Risk
            </h3>

            <span
              className={`font-semibold ${
                data.risk === "High"
                  ? "text-red-600"
                  : data.risk === "Moderate"
                  ? "text-amber-600"
                  : "text-emerald-600"
              }`}
            >
              {data.risk}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}