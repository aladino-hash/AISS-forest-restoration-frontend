import WorkspaceHeader from "../WorkspaceHeader";
import LayerToolbar from "./LayerToolbar";

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
    <div className="absolute left-6 top-6 z-[1000] flex flex-col gap-4">
      <WorkspaceHeader />

      <LayerToolbar
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        visibleLayers={visibleLayers}
        setVisibleLayers={setVisibleLayers}
      />
    </div>
  );
}