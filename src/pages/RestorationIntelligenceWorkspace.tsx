import { useEffect } from "react";

import { PageLayout } from "@/components/layout/PageLayout";

import {
  BlueprintProvider,
} from "@/components/workspace/intelligence/context/BlueprintContext";

import {
  LandscapeProvider,
} from "@/components/workspace/intelligence/context/LandscapeContext";

import WorkspaceInitializer from "@/components/workspace/intelligence/core/WorkspaceInitializer";
import WorkspaceRenderer from "@/components/workspace/core/WorkspaceRenderer";

import {
  WorkspaceSessionProvider,
} from "@/components/workspace/core/context/WorkspaceSessionContext";

export default function RestorationIntelligenceWorkspace() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Temporary blueprint.
  // This will be replaced by the WorkspaceInitializer
  // once it loads the Blueprint generated during onboarding.
  const blueprint = {
    layout: {
      header: [
        "landscape-overview",
      ],
      main: [
        "landscape-intelligence",
        "satellite-monitoring",
        "reports",
      ],
      sidebar: [
        "funding",
        "collaboration",
        "ai-assistant",
      ],
    },
  };

  return (
    <PageLayout>
      <WorkspaceSessionProvider>
        <BlueprintProvider>
          <LandscapeProvider>
            <WorkspaceInitializer>
              <div className="mx-auto max-w-7xl py-8">
                <WorkspaceRenderer
                  modules={blueprint.layout.header}
                />

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  <div className="space-y-6 lg:col-span-2">
                    <WorkspaceRenderer
                      modules={blueprint.layout.main}
                    />
                  </div>

                  <div className="space-y-6">
                    <WorkspaceRenderer
                      modules={blueprint.layout.sidebar}
                    />
                  </div>
                </div>
              </div>
            </WorkspaceInitializer>
          </LandscapeProvider>
        </BlueprintProvider>
      </WorkspaceSessionProvider>
    </PageLayout>
  );
}