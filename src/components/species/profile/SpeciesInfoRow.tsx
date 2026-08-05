interface SpeciesInfoRowProps {
  label: string;
  value?: string;
}

export default function SpeciesInfoRow({
  label,
  value,
}: SpeciesInfoRowProps) {
  if (!value) return null;

  return (
    <div className="border-b border-gray-100 py-5 last:border-none">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
        {label}
      </p>

      <p className="whitespace-pre-wrap break-words text-base leading-7 text-gray-900">
        {value}
      </p>
    </div>
  );
}