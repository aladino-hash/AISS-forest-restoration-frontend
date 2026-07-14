import {
  MapPinned,
  Leaf,
  Mountain,
  Waves,
  LandPlot,
  Trees,
  Sprout,
} from "lucide-react";

const tools = [
  {
    title: "Project Boundary",
    icon: MapPinned,
  },
  {
    title: "Vegetation",
    icon: Leaf,
  },
  {
    title: "Topography",
    icon: Mountain,
  },
  {
    title: "Hydrology",
    icon: Waves,
  },
  {
    title: "Soil",
    icon: LandPlot,
  },
  {
    title: "Land Use",
    icon: Trees,
  },
  {
    title: "Biodiversity",
    icon: Sprout,
  },
];

type Props = {
  activeTool: string;
  setActiveTool: (tool: string) => void;
};

export default function MobileWorkspaceToolbar({
  activeTool,
  setActiveTool,
}: Props) {
  return (
    <div className="flex gap-3 overflow-x-auto px-3 py-2">

      {tools.map((tool) => {

        const Icon = tool.icon;

        return (

          <button
            key={tool.title}
            onClick={() => setActiveTool(tool.title)}
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition ${
              activeTool === tool.title
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-600 shadow"
            }`}
          >
            <Icon size={22} />
          </button>

        );

      })}

    </div>
  );
}