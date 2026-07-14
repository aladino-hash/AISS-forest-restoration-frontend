import { WorkspaceBlueprint } from "@/types/workspace/WorkspaceBlueprint";

type Input = {
  organizationType: string;
  focusArea: string;
  geography: string;
};

export function generateIntelligenceBlueprint({
  organizationType,
  focusArea,
  geography,
}: Input): WorkspaceBlueprint {
  return {
    stakeholder: {
      mission: "intelligence",
      workspace: "Restoration Intelligence Workspace",
    },

    profile: {
      organizationType,
      geography,
      focusAreas: [focusArea],
    },

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

    aiAgents: [
      "Landscape Analyst",
      "Funding Advisor",
      "Restoration Strategist",
    ],

    datasets: [
      "Google Earth Engine",
      "Global Forest Watch",
      "LandMark",
    ],

    permissions: [
      "view_landscapes",
      "generate_reports",
      "discover_funding",
    ],

    recommendations: [
      `Prioritize restoration initiatives in ${geography}.`,
      `Focus on ${focusArea}.`,
      `Build partnerships with local restoration organizations.`,
    ],
  };
}