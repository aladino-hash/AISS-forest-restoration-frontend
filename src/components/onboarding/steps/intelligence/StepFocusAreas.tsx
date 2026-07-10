const focusAreasByOrganization = {
  ngo: [
    "🌱 Identify restoration opportunities",
    "🌳 Monitor forests and deforestation",
    "🤝 Coordinate restoration programs",
    "🦜 Biodiversity conservation",
    "👥 Community engagement",
    "💰 Discover funding opportunities",
  ],

  government: [
  "🗺 Regional restoration planning",
  "📊 Environmental reporting",
  "🌳 Forest monitoring",
  "⚖ Policy and decision support",
  "🚨 Environmental risk monitoring",
  "🤝 Coordinate restoration programs",
],

  company: [
    "🌱 ESG Projects",
    "💰 Carbon Projects",
    "📊 Sustainability Reporting",
    "🌳 Supply Chain",
    "🛰 Monitoring",
    "🤝 Partnerships",
  ],

  research: [
    "🛰 Remote Sensing",
    "📚 Research",
    "🧠 AI Models",
    "📊 Data Analysis",
    "🌳 Biodiversity",
    "🌎 Publications",
  ],

  investor: [
    "💰 Investment Opportunities",
    "📊 Project Evaluation",
    "🌱 Carbon Projects",
    "📈 Impact Metrics",
    "🤝 Partners",
    "🌍 Regional Opportunities",
  ],

  landowner: [
    "🌱 Restore My Land",
    "🌳 Agroforestry",
    "🛰 Satellite Monitoring",
    "💰 Incentives",
    "🌾 Sustainable Production",
  ],

  explorer: [
    "🗺 Explore Maps",
    "🌳 Forests",
    "📊 Environmental Data",
    "🛰 Satellite Layers",
    "🌎 Restoration Projects",
  ],
};

interface StepFocusAreasProps {
  organizationType: string;
  focusArea: string;
  setFocusArea: (value: string) => void;
}

export default function StepFocusAreas({
  organizationType,
  focusArea,
  setFocusArea,
}: StepFocusAreasProps) {
  if (!organizationType) return null;

  const focusAreas =
    focusAreasByOrganization[
      organizationType as keyof typeof focusAreasByOrganization
    ] ?? [];

  return (
    <div className="mt-8">
      <label className="mb-4 block text-lg font-semibold text-gray-900">
        {{
          ngo: "What is your organization's primary restoration mission?",
          government: "Which area would your institution like to strengthen?",
          company: "Which sustainability objective is your priority?",
          research: "Which research area are you focusing on?",
          investor: "Which investment opportunities interest you most?",
          landowner: "What would you like to achieve on your land?",
          explorer: "What would you like to explore first?",
        }[
          organizationType as keyof typeof focusAreasByOrganization
        ] ?? "What are you primarily interested in?"}
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        {focusAreas
          .filter((area) => !focusArea || area === focusArea)
          .map((area) => (
            <button
              key={area}
              type="button"
              onClick={() => setFocusArea(area)}
              className={`rounded-2xl border p-5 text-left transition-all ${
                focusArea === area
                  ? "border-emerald-600 bg-emerald-50 shadow-md"
                  : "hover:border-emerald-400"
              }`}
            >
              {area}
            </button>
          ))}
      </div>

      {focusArea && (
        <button
          type="button"
          onClick={() => setFocusArea("")}
          className="mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-900"
        >
          ← Choose another focus area
        </button>
      )}
    </div>
  );
}