import { WorkspaceModule } from "@/types/workspace/WorkspaceBlueprint";
import { WorkspaceModuleRegistry } from "./WorkspaceModuleRegistry";

interface Props {
  modules: WorkspaceModule[];
}

export default function WorkspaceRenderer({
  modules,
}: Props) {
  return (
    <>
      {modules.map((moduleId) => {
        const Component = WorkspaceModuleRegistry[moduleId];

        if (!Component) return null;

        return <Component key={moduleId} />;
      })}
    </>
  );
}