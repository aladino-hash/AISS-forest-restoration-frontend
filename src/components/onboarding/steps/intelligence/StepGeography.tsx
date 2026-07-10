interface StepGeographyProps {
  organizationType: string;
  focusArea: string;
  geography: string;
  setGeography: (value: string) => void;
}

const geographyOptionsByOrganization = {
  ngo: [
    "🌍 Global",
    "🌎 Latin America",
    "🇵🇪 Peru",
    "🏞 Ucayali",
    "📍 Project Landscape",
  ],

  government: [
    "🇵🇪 National",
    "🏛 Regional Government",
    "🏞 Region",
    "🏘 Province",
    "🌿 Protected Area",
  ],

  company: [
    "🌍 Global Operations",
    "🌎 Business Region",
    "🇵🇪 Country",
    "🏭 Operational Area",
    "📍 Project Site",
  ],

  research: [
    "🌍 Global",
    "🌎 Study Region",
    "🏞 Watershed",
    "🌿 Ecosystem",
    "📍 Research Site",
  ],

  investor: [
    "🌎 Latin America",
    "🇵🇪 Peru",
    "🌿 Restoration Portfolio",
    "💰 Investment Region",
    "📍 Project Pipeline",
  ],

  landowner: [
    "🏡 My Property",
    "🏞 Community",
    "🏘 District",
    "🇵🇪 Region",
    "🌎 Country",
  ],

  explorer: [
    "🌍 Global",
    "🌎 Continent",
    "🇵🇪 Country",
    "🏞 Region",
    "📍 Area of Interest",
  ],
};

const questions = {
  ngo: "Where does your organization primarily work?",
  government: "Which administrative area would you like to monitor?",
  company: "Where are your sustainability initiatives located?",
  research: "Which region is the focus of your research?",
  investor: "Which regions are you interested in supporting?",
  landowner: "Where is your land located?",
  explorer: "Which region would you like to explore first?",
};

export default function StepGeography({
  organizationType,
  focusArea,
  geography,
  setGeography,
}: StepGeographyProps) {
  if (!focusArea) return null;

  const options =
    geographyOptionsByOrganization[
      organizationType as keyof typeof geographyOptionsByOrganization
    ] ?? [];

  const question =
    questions[
      organizationType as keyof typeof questions
    ] ?? "Which geographic area is your primary focus?";

  return (
    <div className="mt-8">
      <label className="mb-2 block text-lg font-semibold text-gray-900">
        {question}
      </label>

      <p className="mb-5 text-sm text-gray-600">
        This helps FYNOS AI prepare a personalized Restoration Intelligence
        Workspace tailored to your region.
      </p>

      <div className="grid gap-4">
        {options
          .filter((option) => !geography || option === geography)
          .map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setGeography(option)}
              className={`rounded-2xl border p-5 text-left transition-all ${
                geography === option
                  ? "border-emerald-600 bg-emerald-50 shadow-md"
                  : "hover:border-emerald-400"
              }`}
            >
              {option}
            </button>
          ))}
      </div>

      {geography && (
        <button
          type="button"
          onClick={() => setGeography("")}
          className="mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-900"
        >
          ← Choose another geography
        </button>
      )}
    </div>
  );
}