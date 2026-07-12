import { WorkspaceBlueprint } from "@/types/workspace/WorkspaceBlueprint";

export function createIntelligenceBlueprint(): WorkspaceBlueprint {
  return {
    stakeholder: {
      mission: "intelligence",
      workspace: "restoration-intelligence",
    },

    profile: {},

    modules: [
      "map",
      "landscape-intelligence",
      "satellite-monitoring",
      "funding",
      "collaboration",
      "reports",
    ],

    aiAgents: [
      "restoration-intelligence",
      "funding-advisor",
      "landscape-analyst",
    ],

    datasets: [
      "satellite-imagery",
      "forest-change",
      "restoration-opportunities",
      "protected-areas",
      "carbon",
    ],

    permissions: [
      "create-workspaces",
      "share-projects",
      "invite-members",
    ],

    recommendations: [
      "Select your first landscape.",
      "Connect your organization.",
      "Discover restoration opportunities.",
    ],
  };
}