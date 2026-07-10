interface StepOrganizationTypeProps {
  organizationType: string;
  setOrganizationType: (value: string) => void;
}

const organizations = [
  {
    id: "ngo",
    icon: "🌳",
    title: "NGO / Non-profit",
  },
  {
    id: "government",
    icon: "🏛",
    title: "Government",
  },
  {
    id: "company",
    icon: "🏢",
    title: "Company",
  },
  {
    id: "research",
    icon: "🎓",
    title: "Research Institution",
  },
  {
    id: "investor",
    icon: "💰",
    title: "Investor / Donor",
  },
  {
    id: "landowner",
    icon: "🌱",
    title: "Landowner",
  },
  {
    id: "explorer",
    icon: "🌍",
    title: "Independent Explorer",
  },
];

export default function StepOrganizationType({
  organizationType,
  setOrganizationType,
}: StepOrganizationTypeProps) {
  return (
    <div className="mt-8">
      <label className="mb-4 block text-lg font-semibold text-gray-900">
        Which best describes your organization?
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        {organizations
          .filter(
            (item) =>
              !organizationType ||
              organizationType === item.id
          )
          .map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOrganizationType(item.id)}
            className={`rounded-2xl border p-5 text-left transition-all ${
              organizationType === item.id
                ? "border-emerald-600 bg-emerald-50 shadow-md"
                : "border-gray-200 hover:border-emerald-300"
            }`}
          >
            <div className="mb-3 text-3xl">{item.icon}</div>

            <h3 className="font-semibold text-gray-900">
              {item.title}
            </h3>
          </button>
        ))}
      </div>

      {organizationType && (
        <button
          type="button"
          onClick={() => setOrganizationType("")}
          className="
            mt-4
            text-sm
            font-medium
            text-emerald-700
            hover:text-emerald-900
            transition-colors
          "
        >
          ← Choose another organization
        </button>
      )}
    </div>
  );
}