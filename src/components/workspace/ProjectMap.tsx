import { useEffect, useState } from "react";
import ProjectBoundary from "./mapLayers/ProjectBoundary";
import BaseImagery from "./mapLayers/BaseImagery";
import WorkspaceToolbar from "./toolbars/WorkspaceToolbar";
import TreesLayer from "./mapLayers/TreesLayer";
import DroneLayer from "./mapLayers/DroneLayer";
import DEMLayer from "./mapLayers/DEMLayer";
import VegetationLayer from "./mapLayers/VegetationLayer";
import NDVILayer from "./mapLayers/NDVILayer";
import AILayer from "./mapLayers/AILayer";
import MapNavigation from "./navigation/MapNavigation";
import ProjectInformationPanel from "./panels/ProjectInformationPanel";
import {
  MapContainer,
  ScaleControl,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

type ProjectMapProps = {
  project: any;
};

function FitProject({
  polygon,
}: {
  polygon: [number, number][];
}) {

  const map = useMap();

  useEffect(() => {
    if (!polygon?.length) return;

    map.fitBounds(polygon);

  }, [map, polygon]);

  return null;

}

export default function ProjectMap({ project }: ProjectMapProps) {

  const boundary =
    project?.polygon?.geometry?.coordinates?.[0] ?? null;

  const polygon =
    boundary?.map(([lng, lat]: [number, number]) => [lat, lng]);

    const [visibleLayers, setVisibleLayers] = useState({
      boundary: true,
      trees: false,
      drone: false,
      dem: false,
      vegetation: false,
      ndvi: false,
      ai: false,
    });
    const [activeTool, setActiveTool] =
      useState("Project Boundary");
    console.log("Workspace polygon:", polygon);

  return (
    <div className="relative h-screen w-screen overflow-hidden">

      <WorkspaceToolbar
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        visibleLayers={visibleLayers}
        setVisibleLayers={setVisibleLayers}
      />
      <MapContainer
        zoomControl={false}
        style={{ width: "100%", height: "100%" }}
        center={[-8.84, -74.95]}
        zoom={15}
        scrollWheelZoom
      >

      <MapNavigation />

      <BaseImagery />

      {polygon && (
        <FitProject
          polygon={polygon}
        />
      )}

      {polygon && (
        <ProjectBoundary
          polygon={polygon}
          visible={visibleLayers.boundary}
        />
      )}
      <ScaleControl position="bottomleft" />

      <TreesLayer
        visible={visibleLayers.trees}
      />
      <DroneLayer
        visible={visibleLayers.drone}
      />
      <DEMLayer
        visible={visibleLayers.dem}
      />
      <VegetationLayer
        visible={visibleLayers.vegetation}
      />
      <NDVILayer
        visible={visibleLayers.ndvi}
      />
      <AILayer
        visible={visibleLayers.ai}
      />
    </MapContainer>
    <div className="absolute right-6 top-6 z-[1200]">
      <ProjectInformationPanel project={project} />
    </div>
   </div>
  );

}