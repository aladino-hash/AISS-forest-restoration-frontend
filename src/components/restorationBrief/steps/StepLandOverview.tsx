import {
  Ruler,
  Trees,
  TriangleAlert,
  Sprout,
} from "lucide-react";

interface StepLandOverviewProps {
  overview?: {
    area?: {
      value?: number;
      unit?: string;
      title?: string;
      description?: string;
    };
    ecosystem?: {
      value?: string;
      title?: string;
      description?: string;
    };
    risk?: {
      value?: string;
      title?: string;
      description?: string;
      score?: number;
      status?: string;
    };
    restoration_potential?: {
      value?: string;
      title?: string;
      description?: string;
      score?: number;
      status?: string;
    };
  };
}

export default function StepLandOverview({
  overview,
}: StepLandOverviewProps) {
  const area = overview?.area;
  const ecosystem = overview?.ecosystem;
  const risk = overview?.risk;
  const restorationPotential =
    overview?.restoration_potential;

  console.log("Landscape Overview", overview);

  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.30em] text-emerald-600">
        Step 1 of 8
      </p>

      <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
        Understanding your land
      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
        Here's what FYNOS AI detected from satellite imagery.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Area */}
        <div className="min-h-[210px] rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                Area
              </p>

              <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
                {area
                  ? `${area.value} ${area.unit}`
                  : "Calculating..."}
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
              <Ruler className="h-8 w-8" strokeWidth={2.2} />
            </div>
          </div>

          {area?.description && (
            <p className="mt-5 max-w-sm text-base leading-8 text-gray-600">
              {area.description}
            </p>
          )}
        </div>

        {/* Ecosystem */}
        <div className="min-h-[210px] rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                Ecosystem
              </p>

              <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
                {ecosystem?.value ?? "Unknown"}
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
              <Trees className="h-8 w-8" strokeWidth={2.2} />
            </div>
          </div>

          {ecosystem?.description && (
            <p className="mt-5 max-w-sm text-base leading-8 text-gray-600">
              {ecosystem.description}
            </p>
          )}
        </div>

        {/* Risk */}
        <div className="min-h-[210px] rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-amber-50 p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                Risk
              </p>

              <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
                {risk?.value ?? "Calculating..."}
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-sm">
              <TriangleAlert
                className="h-8 w-8"
                strokeWidth={2.2}
              />
            </div>
          </div>

          {risk?.description && (
            <p className="mt-5 max-w-sm text-base leading-8 text-gray-600">
              {risk.description}
            </p>
          )}
        </div>

        {/* Restoration Potential */}
        <div className="min-h-[210px] rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                Potential
              </p>

              <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
                {restorationPotential?.value ??
                  "Calculating..."}
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
              <Sprout className="h-8 w-8" strokeWidth={2.2} />
            </div>
          </div>

          {restorationPotential?.description && (
            <p className="mt-5 max-w-sm text-base leading-8 text-gray-600">
              {restorationPotential.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}