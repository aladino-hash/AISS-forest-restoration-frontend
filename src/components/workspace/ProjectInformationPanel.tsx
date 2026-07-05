type Props = {
  project: any;
};

export default function ProjectInformationPanel({
  project,
}: Props) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-gray-900">
        Project Information
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Digital Twin Overview
      </p>

      <div className="mt-5 rounded-2xl bg-emerald-50 p-4">

        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Project Health
        </p>

        <div className="mt-2 flex items-end justify-between">

          <span className="text-4xl font-bold text-emerald-700">
            87
          </span>

          <span className="mb-1 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
            Excellent
          </span>

        </div>

      </div>

      <div className="mt-6 space-y-4">

        <InfoRow
          label="Project"
          value={project.name ?? "Untitled Project"}
        />

        <InfoRow
          label="Area"
          value={`${project.area ?? "--"} ha`}
        />

        <StatusRow
          label="Verification"
          status={project.verification ?? "Satellite"}
        />

        <StatusRow
          label="Stage"
          status={project.stage ?? "Planning"}
        />

        <InfoRow
          label="Ecosystem"
          value={project.assessment.ecosystem}
        />

        <InfoRow
          label="Restoration Potential"
          value={project.assessment.restorationPotential}
        />

        <InfoRow
          label="Risk"
          value={project.assessment.risk}
        />

        <InfoRow
          label="Recommended Species"
          value={`${project.assessment.recommendedSpecies.length}`}
        />

        <div className="border-t border-gray-200 pt-5">

          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Restoration Metrics
          </h3>

          <InfoRow
            label="Elevation"
            value={`${Math.round(project.polygonAnalysis?.elevation ?? 0)} m`}
          />

          <InfoRow
            label="Slope"
            value={`${(project.polygonAnalysis?.slope ?? 0).toFixed(1)}°`}
          />

          <InfoRow
            label="NDVI"
            value={`${(project.polygonAnalysis?.ndvi ?? 0).toFixed(2)}`}
          />

          <InfoRow
            label="Carbon"
            value={`${project.polygonAnalysis?.carbon_estimate_tons_per_ha ?? "--"} t/ha`}
          />

          <InfoRow
            label="Biodiversity"
            value={`${project.polygonAnalysis?.biodiversity_score ?? "--"}`}
          />

        </div>

      </div>

    </div>
  );
}

type RowProps = {
  label: string;
  value: string;
};

function InfoRow({
  label,
  value,
}: RowProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-3">

      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="text-right font-semibold text-gray-900">
        {value}
      </span>

    </div>
  );
}

type StatusRowProps = {
  label: string;
  status: string;
};

function StatusRow({
  label,
  status,
}: StatusRowProps) {

  const color =
    status === "Drone Verified"
      ? "bg-green-100 text-green-700"

      : status === "Satellite"
      ? "bg-blue-100 text-blue-700"

      : status === "Planning"
      ? "bg-slate-100 text-slate-700"

      : status === "Planting"
      ? "bg-lime-100 text-lime-700"

      : status === "Monitoring"
      ? "bg-emerald-100 text-emerald-700"

      : status === "Completed"
      ? "bg-purple-100 text-purple-700"

      : "bg-amber-100 text-amber-700";

  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-3">

      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${color}`}
      >
        {status}
      </span>

    </div>
  );
}