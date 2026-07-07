import { useState } from "react";

import {
  MapPinned,
  Leaf,
  Mountain,
  Waves,
  LandPlot,
  Trees,
  Sprout,
  ClipboardList,
  ChevronDown,
} from "lucide-react";

const sections = [
  {
    id: "boundary",
    title: "Project Boundary",
    icon: MapPinned,
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
  const [mediaOpen, setMediaOpen] = useState(false);

  return (
    <div
      className="
        workspace-scroll
        h-[calc(100vh-120px)]
        w-64
        overflow-y-auto
        overflow-x-hidden
        rounded-3xl
        border
        border-white/20
        bg-black/60
        shadow-2xl
        backdrop-blur-xl
      "
    >
      {/* =========================
          Header
      ========================== */}

      <div className="border-b border-white/10 px-5 py-4">

        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
          Workspace
        </p>

        <h2 className="mt-1 text-2xl font-semibold text-white">
          Digital Twin
        </h2>

      </div>

      {/* =========================
          Navigation
      ========================== */}

      <div className="p-3">

        {sections.map((section) => {

          const Icon = section.icon;

          return (

            <button
              key={section.id}
              onClick={() => setActiveTool(section.title)}
              className={`mb-1 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-200 ${
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

              <span className="text-sm font-medium">
                {section.title}
              </span>

            </button>

          );

        })}

      </div>

      {/* =========================
          Project Media
      ========================== */}

      <div className="border-t border-white/10 px-5 py-4">

        <button
          onClick={() => setMediaOpen(!mediaOpen)}
          className="flex w-full items-center justify-between"
        >

          <h3 className="text-sm font-semibold text-white">
            Project Media
          </h3>

          <ChevronDown
            size={16}
            className={`text-white/50 transition-transform duration-300 ${
              mediaOpen ? "rotate-180" : ""
            }`}
          />

        </button>

        {mediaOpen && (

          <div className="mt-4 space-y-3">

            <MediaItem
              image="/images/Francisco.JPG"
              title="Drone Imagery"
              subtitle="Orthomosaic"
            />

            <MediaItem
              image="/images/Francisco.JPG"
              title="Satellite View"
              subtitle="Sentinel-2"
            />

            <MediaItem
              image="/images/Francisco.JPG"
              title="3D Terrain"
              subtitle="Coming Soon"
            />

            <MediaItem
              image="/images/Francisco.JPG"
              title="Drone Video"
              subtitle="Coming Soon"
            />

          </div>

        )}

      </div>

      {/* =========================
          Timeline
      ========================== */}

      <div className="border-t border-white/10 px-5 py-4">

        <div className="flex items-center justify-between">

          <h3 className="text-sm font-semibold text-white">
            Timeline
          </h3>

          <ChevronDown
            size={16}
            className="text-white/50"
          />

        </div>

        <p className="mt-4 text-sm text-white">
          June 2025
        </p>

        <input
          type="range"
          className="mt-3 w-full accent-emerald-500"
        />

      </div>

    </div>
  );
}

type MediaItemProps = {
  image: string;
  title: string;
  subtitle: string;
};

function MediaItem({
  image,
  title,
  subtitle,
}: MediaItemProps) {

  return (

    <button className="flex w-full items-center gap-3 rounded-xl p-2 transition-all duration-200 hover:bg-white/10">

      <img
        src={image}
        alt={title}
        className="h-14 w-14 rounded-xl object-cover shadow-md"
      />

      <div className="min-w-0 text-left">

        <p className="truncate text-sm font-medium text-white">
          {title}
        </p>

        <p className="truncate text-xs text-white/50">
          {subtitle}
        </p>

      </div>

    </button>

  );
}