type Props = {
  onStart: () => void;
};

export default function AIRestorationCard({
  onStart,
}: Props) {

  return (
    <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">

      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
        AI Restoration Plan
      </p>

      <h3 className="mt-2 text-lg font-semibold text-gray-900">
        Ready for Restoration
      </h3>

      <div className="mt-4 space-y-2 text-sm">

        <PlanItem
          label="Priority Area"
          value="3.2 ha"
        />

        <PlanItem
          label="Native Species"
          value="4"
        />

        <PlanItem
          label="Estimated Carbon"
          value="+128 tCO₂e"
        />

        <PlanItem
          label="Estimated Timeline"
          value="36 months"
        />

      </div>

      <button
        onClick={onStart}
        className="
          mt-5
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
        🌱 Start Restoration
      </button>

    </div>
  );
}

type ItemProps = {
  label: string;
  value: string;
};

function PlanItem({
  label,
  value,
}: ItemProps) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-gray-600">
        {label}
      </span>

      <span className="font-semibold text-gray-900">
        {value}
      </span>

    </div>
  );
}