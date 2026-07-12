type MissionCardProps = {
  icon: string;
  subtitle: string;
  title: string;
  description: string;
  journeyItems: string[];
  closingMessage: string;
  selected: boolean;
  onClick: () => void;
};

export default function MissionCard({
  icon,
  subtitle,
  title,
  description,
  journeyItems,
  closingMessage,
  selected,
  onClick,
}: MissionCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-3xl p-8 transition-all duration-300 ${
        selected
          ? "scale-[1.02] border-2 border-emerald-600 bg-emerald-50 shadow-2xl"
          : "border border-emerald-100 bg-white hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl"
      }`}
    >
      <div className="mb-8 text-6xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
        {subtitle}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-gray-600">
        {description}
      </p>

      <div className="my-8 h-px bg-emerald-100" />

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Your journey begins with
        </p>

        <div className="space-y-2 text-sm text-gray-700">
          {journeyItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-sm italic text-emerald-700">
        {closingMessage}
      </p>
    </div>
  );
}