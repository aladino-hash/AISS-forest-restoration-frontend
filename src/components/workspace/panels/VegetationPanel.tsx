type Props = {
  project: any;
};

export default function VegetationPanel({
  project,
}: Props) {

  const assessment = project?.assessment ?? {};

  const ndvi =
    assessment.ndvi !== undefined
      ? assessment.ndvi.toFixed(2)
      : "--";

  const ecosystem =
    assessment.ecosystem ?? "--";

  const recommendation =
    assessment.restorationPlan ??
    "Protect existing vegetation and prioritize natural regeneration.";

  return (
    <div className="space-y-2">

      <Metric
        label="Health Score"
        value="92 / 100"
        color="text-emerald-700"
      />

      <Metric
        label="NDVI"
        value={ndvi}
      />

      <Metric
        label="Canopy Cover"
        value="74%"
      />

      <Metric
        label="Dominant Species"
        value="Cacao • Shihuahuaco"
      />

      <Metric
        label="Estimated Biomass"
        value="186 t/ha"
      />

      <Metric
        label="Vegetation Type"
        value={ecosystem}
      />

      <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
          AI Recommendation
        </p>

        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          {recommendation}
        </p>

      </div>

    </div>
  );
}

type MetricProps = {
  label: string;
  value: string | number;
  color?: string;
};

function Metric({
  label,
  value,
  color = "text-gray-900",
}: MetricProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-2">

      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span
        className={`max-w-[150px] text-right text-sm font-semibold ${color}`}
      >
        {value}
      </span>

    </div>
  );
}