import { useNavigate } from "react-router-dom";

interface StepSatelliteDiscoveryProps {
  country: string;
  region: string;
  province: string;
  community: string;
}

export default function StepSatelliteDiscovery({
  country,
  region,
  province,
  community,
}: StepSatelliteDiscoveryProps) {
  const navigate = useNavigate();

  if (!country) return null;

  return (
    <div className="mt-8 rounded-2xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl">
          🛰️
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Next: Discover your land
          </h3>

          <p className="text-sm text-emerald-700">
            You're only one step away from your AI restoration assessment.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4 text-gray-700 leading-7">
        <p>
          Great! We now know that your restoration project is located in{" "}
          <span className="font-semibold text-emerald-700">
            {community || province || region || country}
          </span>.
        </p>

        <p>
          In the next step, FYNOS AI will guide you through recent{" "}
          <span className="font-semibold">
            Sentinel-2 satellite imagery
          </span>{" "}
          so we can locate your property together.
        </p>

        <p>Once you outline your land, we'll automatically analyse:</p>

        <ul className="ml-5 list-disc space-y-2 text-sm text-gray-600">
          <li>🌿 Vegetation health</li>
          <li>⛰️ Terrain and slope</li>
          <li>💧 Water availability</li>
          <li>🔥 Environmental risks</li>
          <li>🌱 Restoration opportunities</li>
        </ul>

        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-sm italic text-gray-600">
            Don't worry if you've never used satellite maps before.
            We'll guide you through every step of the process.
          </p>
        </div>
      </div>

      <button
        onClick={() =>
          navigate("/curimana", {
            state: {
              initialLocation: [community, province, region, country]
                .filter(Boolean)
                .join(", "),
            },
          })
        }
        className="mt-8 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
      >
        🛰️ Start Satellite Discovery
      </button>
    </div>
  );
}