const tools = [
  {
    id: "boundary",
    icon: "📍",
    title: "Project Boundary",
    status: "active",
  },
  {
    id: "trees",
    icon: "🌳",
    title: "Trees & Species",
    status: "coming",
  },
  {
    id: "drone",
    icon: "🛰",
    title: "Drone Verification",
    status: "coming",
  },
  {
    id: "dem",
    icon: "⛰",
    title: "Digital Elevation Model",
    status: "coming",
  },
  {
    id: "vegetation",
    icon: "🌿",
    title: "Vegetation",
    status: "coming",
  },
  {
    id: "ndvi",
    icon: "📈",
    title: "NDVI & Health",
    status: "coming",
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI Insights",
    status: "coming",
  },
];

type Props = {
  activeTool: string;
  setActiveTool: (tool: string) => void;
  visibleLayers: {
    boundary: boolean;
    trees: boolean;
    drone: boolean;
    dem: boolean;
    vegetation: boolean;
    ndvi: boolean;
    ai: boolean;
  };
  setVisibleLayers: React.Dispatch<
    React.SetStateAction<{
      boundary: boolean;
      trees: boolean;
      drone: boolean;
      dem: boolean;
      vegetation: boolean;
      ndvi: boolean;
      ai: boolean;
    }>
  >;
};

export default function WorkspaceToolbar({
  activeTool,
  setActiveTool,
  visibleLayers,
  setVisibleLayers,
}: Props) {

  return (
    <div className="absolute left-6 top-6 z-[1000]">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-2xl backdrop-blur">
        {tools.map((tool, index) => (
          <button
            key={tool.title}
            title={
              tool.status === "active"
                ? tool.title
                : `${tool.title} (Coming Soon)`
            }
            onClick={() => {
              if (tool.status !== "active") return;

              setActiveTool(tool.title);

              setVisibleLayers((prev) => ({
                ...prev,
                [tool.id]:
                  !prev[tool.id as keyof typeof prev],
              }));
            }}
            className={`relative flex h-12 w-12 items-center justify-center text-lg transition
              tool.status === "active"
                ? "hover:bg-emerald-50 cursor-pointer"
                : "cursor-not-allowed opacity-50"
            } ${
              visibleLayers[tool.id as keyof typeof visibleLayers]
                ? "bg-emerald-50 text-emerald-700"
                : ""
            } ${
              index !== tools.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            {tool.icon}
            {tool.status === "coming" && (
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-amber-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}