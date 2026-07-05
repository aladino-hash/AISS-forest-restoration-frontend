import {
  MapPinned,
  Leaf,
  Mountain,
  Waves,
  LandPlot,
  Trees,
  Sprout,
  ClipboardList,
  ChevronDown
} from "lucide-react";

const sections = [
  {
    id: "boundary",
    title: "Project Boundary",
    icon: MapPinned,
    active: true,
  },
  {
    id: "vegetation",
    title: "Vegetation",
    icon: Leaf,
  },
  {
    id: "topography",
    title: "Topography",
    icon: Mountain,
  },
  {
    id: "hydrology",
    title: "Hydrology",
    icon: Waves,
  },
  {
    id: "soil",
    title: "Soil",
    icon: LandPlot,
  },
  {
    id: "landuse",
    title: "Land Use",
    icon: Trees,
  },
  {
    id: "biodiversity",
    title: "Biodiversity",
    icon: Sprout,
  },
  {
    id: "restoration",
    title: "Restoration Zones",
    icon: MapPinned,
  },
  {
    id: "observations",
    title: "Observations",
    icon: ClipboardList,
  },
];

type Props = {
  activeTool: string;
  setActiveTool: (tool: string) => void;
};

export default function WorkspaceExplorer({
  activeTool,
  setActiveTool,
}: Props) {

  return (
    <div className="w-48 overflow-hidden rounded-3xl border border-white/20 bg-black/60 shadow-2xl backdrop-blur-xl">
      {/* Header */}

      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
          Workspace
        </p>

        <h2 className="mt-1 text-2xl font-semibold text-white">
          Digital Twin
        </h2>
      </div>

      {/* Navigation */}

      <div className="p-3">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              onClick={() => setActiveTool(section.title)}
              className={`mb-1 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                activeTool === section.title
                  ? "bg-emerald-600/20 text-white"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              <Icon
                size={18}
                className={
                  activeTool === section.title
                    ? "text-emerald-400"
                    : "text-white/70"
                }
              />

              <span className="text-sm">
                {section.title}
              </span>
            </button>
          );
        })}
      </div>
      {/* Layers */}

      <div className="border-t border-white/10 px-5 py-4">

        <div className="flex items-center justify-between">

          <h3 className="text-sm font-semibold text-white">
            Layers
          </h3>

          <ChevronDown
            size={16}
            className="text-white/50"
          />

        </div>

        <div className="mt-4 flex items-center gap-3">

          <div className="h-12 w-12 overflow-hidden rounded-xl bg-white/10" />

          <div>

            <p className="text-sm text-white">
              Basemap
            </p>

            <p className="text-xs text-white/50">
              Satellite
            </p>

          </div>

        </div>

      </div>

      {/* Time */}

      <div className="border-t border-white/10 px-5 py-4">

        <div className="flex items-center justify-between">

          <h3 className="text-sm font-semibold text-white">
            Time
          </h3>

          <ChevronDown
            size={16}
            className="text-white/50"
          />

        </div>

        <p className="mt-5 text-white">
          June 2025
        </p>

        <input
          type="range"
          className="mt-4 w-full"
        />

      </div>
    </div>
  );
}