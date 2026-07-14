import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { WorkspaceBlueprint } from "@/types/workspace/WorkspaceBlueprint";
import { WorkspaceSession } from "@/types/workspace/WorkspaceSession";

import { useWorkspaceSession } from "@/components/workspace/core/context/WorkspaceSessionContext";

interface Props {
  children: ReactNode;
}

export default function WorkspaceInitializer({
  children,
}: Props) {
  const location = useLocation();

  const { setSession } = useWorkspaceSession();

  useEffect(() => {
    const blueprint =
      location.state?.blueprint as
        | WorkspaceBlueprint
        | undefined;

    if (!blueprint) return;

    const session: WorkspaceSession = {
      blueprint,

      profile: {
        organizationType:
          blueprint.profile.organizationType ?? "",

        geography:
          blueprint.profile.geography ?? "",

        focusAreas:
          blueprint.profile.focusAreas ?? [],

        workspaceName:
          blueprint.stakeholder.workspace,
      },

      activeLandscape: null,
    };

    setSession(session);
  }, [location, setSession]);

  return <>{children}</>;
}