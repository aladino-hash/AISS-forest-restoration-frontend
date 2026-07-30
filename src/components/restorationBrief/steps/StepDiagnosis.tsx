import {
  HeartPulse,
  Sprout,
  Droplets,
  TriangleAlert,
} from "lucide-react";

interface StepDiagnosisProps {
  diagnosis?: {
    title?: string;

    landscape_health?: {
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

    water_availability?: {
      value?: string;
      title?: string;
      description?: string;
      score?: number;
      status?: string;
    };

    key_constraints?: string[];
  };
}

export default function StepDiagnosis({
  diagnosis,
}: StepDiagnosisProps) {
  const landscapeHealth = diagnosis?.landscape_health;
  const restorationPotential = diagnosis?.restoration_potential;
  const waterAvailability = diagnosis?.water_availability;
  const keyConstraints = diagnosis?.key_constraints ?? [];

  function getScoreColor(status?: string) {
    switch ((status ?? "").toLowerCase()) {
      case "very high":
      case "high":
        return {
          border: "border-emerald-500",
          text: "text-emerald-700",
        };

      case "medium":
      case "moderate":
        return {
          border: "border-amber-500",
          text: "text-amber-700",
        };

      case "low":
      case "very low":
        return {
          border: "border-red-500",
          text: "text-red-700",
        };

      default:
        return {
          border: "border-gray-300",
          text: "text-gray-700",
        };
    }
  }

  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.30em] text-emerald-600">
        Step 2 of 8
      </p>

      <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
        Environmental diagnosis
      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
        This is what FYNOS AI discovered after analyzing your land.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Landscape Health */}
        <div className="md:col-span-2 min-h-[220px] md:min-h-[280px] rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-5 md:p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                {landscapeHealth?.title ?? "Landscape Health"}
              </p>

              <div className="mt-3 flex items-end gap-4">
                <p className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                  {landscapeHealth?.value ?? "Unknown"}
                </p>

                <div className="ml-8 hidden md:flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border-4 border-emerald-500 bg-white shadow-sm">
                  <div className="text-center">
                    <p className="text-3xl font-bold leading-none text-emerald-700">
                      {landscapeHealth?.score ?? "--"}
                    </p>

                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                      /100
                    </p>
                  </div>
                </div>
              </div>

              {landscapeHealth?.description && (
                <p className="mt-6 text-base leading-7 md:leading-8 text-gray-600">
                  {landscapeHealth.description}
                </p>
              )}
            </div>

            <div className="ml-8 flex h-16 w-16 md:h-20 md:w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
              <HeartPulse
                className="h-10 w-10"
                strokeWidth={2.2}
              />
            </div>
          </div>
        </div>

        {/* Restoration Potential */}
        <div className="min-h-[210px] rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-5 md:p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                {restorationPotential?.title ??
                  "Restoration Potential"}
              </p>

              <div className="mt-3 flex items-end gap-3">
                <p className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  {restorationPotential?.value ?? "Unknown"}
                </p>

                {restorationPotential?.score !== undefined && (
                  <span className="mb-1 rounded-full bg-emerald-100 px-3 py-1 text-base font-semibold text-emerald-700">
                    {restorationPotential.score}/100
                  </span>
                )}
              </div>

              {restorationPotential?.description && (
                <p className="mt-5 max-w-sm text-base leading-7 md:leading-8 text-gray-600">
                  {restorationPotential.description}
                </p>
              )}
            </div>

            <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
              <Sprout
                className="h-8 w-8"
                strokeWidth={2.2}
              />
            </div>
          </div>
        </div>

        {/* Water Availability */}
        <div className="min-h-[210px] rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-sky-50 p-5 md:p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                {waterAvailability?.title ??
                  "Water Availability"}
              </p>

              <div className="mt-3 flex items-end gap-3">
                <p className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  {waterAvailability?.value ?? "Unknown"}
                </p>

                {waterAvailability?.score !== undefined && (
                  <span className="mb-1 rounded-full bg-sky-100 px-3 py-1 text-base font-semibold text-sky-700">
                    {waterAvailability.score}/100
                  </span>
                )}
              </div>

              {waterAvailability?.description && (
                <p className="mt-5 max-w-sm text-base leading-7 md:leading-8 text-gray-600">
                  {waterAvailability.description}
                </p>
              )}
            </div>

            <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 shadow-sm">
              <Droplets
                className="h-8 w-8"
                strokeWidth={2.2}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Constraints */}
      <div className="mt-6">
        <div className="min-h-[170px] rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-amber-50 p-5 md:p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                Key Constraints
              </p>

              <ul className="mt-5 space-y-4 text-base leading-7 md:leading-8 text-gray-600">
                {keyConstraints.length > 0 ? (
                  keyConstraints.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <li>No constraints identified.</li>
                )}
              </ul>
            </div>

            <div className="ml-8 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-sm">
              <TriangleAlert
                className="h-8 w-8"
                strokeWidth={2.2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}