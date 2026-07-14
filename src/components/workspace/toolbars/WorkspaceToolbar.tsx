import { useEffect } from "react";
import WorkspaceExplorer from "../navigation/WorkspaceExplorer";
import { workspaceConfig } from "../navigation/workspaceConfig";
import MobileWorkspaceToolbar from "../navigation/MobileWorkspaceToolbar";

type LayerState = {
  boundary: boolean;
  trees: boolean;
  drone: boolean;
  dem: boolean;
  vegetation: boolean;
  ndvi: boolean;
  ai: boolean;
};

type Props = {
  activeTool: string;
  setActiveTool: (tool: string) => void;

  visibleLayers: LayerState;
  setVisibleLayers: React.Dispatch<
    React.SetStateAction<LayerState>
  >;
};

export default function WorkspaceToolbar({
  activeTool,
  setActiveTool,
  visibleLayers,
  setVisibleLayers,
}: Props) {

  useEffect(() => {

    const workspace =
      workspaceConfig[
        activeTool as keyof typeof workspaceConfig
      ];

    if (workspace?.layers) {
      setVisibleLayers(workspace.layers);

      console.log("Workspace:", activeTool);
      console.log("Layers:", workspace.layers);
    }

  }, [activeTool, setVisibleLayers]);

  return (
    <>
      {/* ===========================
          Desktop
      =========================== */}

      <div className="absolute left-6 top-24 z-[1000] hidden lg:flex flex-col gap-4">

        <WorkspaceExplorer
          activeTool={activeTool}
          setActiveTool={setActiveTool}
        />

      </div>

      {/* ===========================
          Mobile
      =========================== */}

      <div className="fixed bottom-[35vh] left-0 right-0 z-[1000] lg:hidden">

        <MobileWorkspaceToolbar
          activeTool={activeTool}
          setActiveTool={setActiveTool}
        />

      </div>

    </>
  );
}