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
    status: "active",
  },
  {
    id: "drone",
    icon: "🛰",
    title: "Drone Verification",
    status: "active",
  },
  {
    id: "dem",
    icon: "⛰",
    title: "Digital Elevation Model",
    status: "active",
  },
  {
    id: "vegetation",
    icon: "🌿",
    title: "Vegetation",
    status: "active",
  },
  {
    id: "ndvi",
    icon: "📈",
    title: "NDVI & Health",
    status: "active",
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI Insights",
    status: "active",
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

export default function LayerToolbar({
  activeTool,
  setActiveTool,
  visibleLayers,
  setVisibleLayers,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/90 shadow-2xl backdrop-blur-xl">
      {tools.map((tool, index) => (
        <button
          key={tool.id}
          title={tool.title}
          onClick={() => {
            setActiveTool(tool.title);

            setVisibleLayers((prev) => ({
              ...prev,
              [tool.id]:
                !prev[tool.id as keyof typeof prev],
            }));
          }}
          className={`relative flex h-14 w-14 items-center justify-center text-xl transition-all duration-200 ${
            tool.status === "active"
              ? "cursor-pointer hover:bg-emerald-50 hover:scale-105"
              : "cursor-not-allowed opacity-50"
          } ${
            visibleLayers[
              tool.id as keyof typeof visibleLayers
            ]
              ? "bg-emerald-100 text-emerald-800 shadow-inner"
              : ""
          } ${
            index !== tools.length - 1
              ? "border-b border-gray-200"
              : ""
          }`}
        >
          {tool.icon}

          {tool.status === "coming" && (
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-amber-400" />
          )}
        </button>
      ))}
    </div>
  );
}