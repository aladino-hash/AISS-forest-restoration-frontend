import { WorkspaceBlueprint } from "@/types/workspace/WorkspaceBlueprint";

export function createLandStewardBlueprint(): WorkspaceBlueprint {
  return {
    stakeholder: {
      mission: "restore_land",
      workspace: "digital-twin",
    },

    profile: {},

    modules: [
      "map",
      "digital-twin",
      "planner",
      "ai-assistant",
      "providers",
      "reports",
    ],

    aiAgents: [
      "restoration-advisor",
    ],

    datasets: [
      "satellite-imagery",
      "restoration-opportunities",
    ],

    permissions: [
      "create-project",
      "edit-land",
      "invite-providers",
    ],

    recommendations: [
      "Complete your land profile.",
      "Upload your first property boundary.",
      "Explore nearby restoration opportunities.",
    ],
  };
}