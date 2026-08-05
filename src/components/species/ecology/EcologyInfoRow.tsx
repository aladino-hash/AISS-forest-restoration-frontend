interface EcologyInfoRowProps {
  icon?: React.ReactNode;
  label: string;
  value?: React.ReactNode;
}

export default function EcologyInfoRow({
  icon,
  label,
  value,
}: EcologyInfoRowProps) {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return null;
  }

  return (
    <div className="grid grid-cols-[220px_1fr] gap-8 border-b border-gray-100 py-5 last:border-none">
      <div className="flex items-center gap-3">
          <span className="text-emerald-600">
              {icon}
          </span>

          <span className="text-sm font-semibold text-gray-600">
              {label}
          </span>
      </div>

      <div className="text-gray-900 leading-7">
        {value}
      </div>
    </div>
  );
}