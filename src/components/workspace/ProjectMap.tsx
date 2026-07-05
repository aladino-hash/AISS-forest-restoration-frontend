import { useEffect, useState } from "react";

import {
  MapContainer,
  ScaleControl,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import BaseImagery from "./mapLayers/BaseImagery";
import ProjectBoundary from "./mapLayers/ProjectBoundary";
import TreesLayer from "./mapLayers/TreesLayer";
import DroneLayer from "./mapLayers/DroneLayer";
import DEMLayer from "./mapLayers/DEMLayer";
import VegetationLayer from "./mapLayers/VegetationLayer";
import NDVILayer from "./mapLayers/NDVILayer";
import AILayer from "./mapLayers/AILayer";

import MapNavigation from "./navigation/MapNavigation";

import WorkspaceToolbar from "./toolbars/WorkspaceToolbar";
import WorkspaceTopBar from "../layout/WorkspaceTopBar";

import ProjectInformationPanel from "./panels/ProjectInformationPanel";

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

    map.fitBounds(polygon, {
      padding: [110, 110],
      maxZoom: 15,
    });
  }, [map, polygon]);

  return null;
}

export default function ProjectMap({
  project,
}: ProjectMapProps) {
  const boundary =
    project?.polygon?.geometry?.coordinates?.[0] ?? null;

  const polygon =
    boundary?.map(
      ([lng, lat]: [number, number]) => [lat, lng]
    );

  const [visibleLayers, setVisibleLayers] =
    useState({
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

      {/* ================================
          MAP CANVAS
      ================================= */}

      <MapContainer
        zoomControl={false}
        style={{
          width: "100%",
          height: "100%",
        }}
        center={[-8.84, -74.95]}
        zoom={15}
        minZoom={3}
        maxZoom={17}
        scrollWheelZoom
      >
        <MapNavigation />

        <BaseImagery />

        {polygon && (
          <FitProject polygon={polygon} />
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
          polygon={polygon}
        />

        <DroneLayer
          visible={visibleLayers.drone}
          polygon={polygon}
        />

        <DEMLayer
          visible={visibleLayers.dem}
          polygon={polygon}
        />

        <VegetationLayer
          visible={visibleLayers.vegetation}
          polygon={polygon}
        />

        <NDVILayer
          visible={visibleLayers.ndvi}
          polygon={polygon}
        />

        <AILayer
          visible={visibleLayers.ai}
          polygon={polygon}
        />
      </MapContainer>

      {/* ================================
          APPLICATION SHELL
      ================================= */}

      <WorkspaceTopBar />

      <WorkspaceToolbar
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        visibleLayers={visibleLayers}
        setVisibleLayers={setVisibleLayers}
      />

      <div className="absolute right-6 top-24 z-[1200]">
        <ProjectInformationPanel
          project={project}
          activeTool={activeTool}
        />
      </div>

    </div>
  );
}