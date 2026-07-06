type Props = {
  onApprove: () => void;
};

export default function AIStrategyPanel({
  onApprove,
}: Props) {
  return (
    <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
        FYNOS AI
      </p>

      <h3 className="mt-2 text-xl font-semibold text-gray-900">
        Restoration Strategy Ready
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        Based on your Digital Twin, we recommend the following restoration plan.
      </p>

      <div className="mt-6 space-y-3">

        <StrategyItem
          label="Priority Area"
          value="3.2 ha"
        />

        <StrategyItem
          label="Native Species"
          value="Cacao • Shihuahuaco • Capirona • Pashaco"
        />

        <StrategyItem
          label="Estimated Carbon"
          value="+128 tCO₂e"
        />

        <StrategyItem
          label="Estimated Budget"
          value="$4,800"
        />

        <StrategyItem
          label="Estimated Timeline"
          value="36 months"
        />

      </div>

      <div className="mt-6 rounded-xl bg-white/60 p-4">

        <p className="text-sm text-gray-700 leading-relaxed">
          Restore degraded edges first while protecting the mature forest.
          Introduce native shade species around existing cacao to maximize
          biodiversity, improve soil resilience, and increase long-term
          carbon storage.
        </p>

      </div>

      <button
        onClick={onApprove}
        className="
          mt-6
          w-full
          rounded-2xl
          bg-emerald-600
          py-3
          font-semibold
          text-white
          transition
          hover:bg-emerald-700
        "
      >
        🌱 Approve & Visualize
      </button>

      <button
        className="
          w-full
          rounded-2xl
          border
          border-emerald-500
          bg-white
          py-3
          font-semibold
          text-emerald-700
          transition
          hover:bg-emerald-50
        "
      >
        ✏️ Customize Strategy
      </button>

    </div>
  );
}

type StrategyItemProps = {
  label: string;
  value: string;
};

function StrategyItem({
  label,
  value,
}: StrategyItemProps) {
  return (
    <div className="flex items-start justify-between gap-4">

      <span className="text-sm text-gray-600">
        {label}
      </span>

      <span className="max-w-[170px] text-right text-sm font-semibold text-gray-900">
        {value}
      </span>

    </div>
  );
}