export type WorkspaceModule =
  | "map"
  | "digital-twin"
  | "planner"
  | "ai-assistant"
  | "satellite-monitoring"
  | "landscape-intelligence"
  | "funding"
  | "providers"
  | "projects"
  | "collaboration"
  | "reports";

export interface WorkspaceBlueprint {
  stakeholder: {
    mission: string;
    workspace: string;
  };

  profile: {
    organizationType?: string;
    serviceType?: string;
    geography?: string;
    focusAreas?: string[];
  };

  modules: WorkspaceModule[];

  aiAgents: string[];

  datasets: string[];

  permissions: string[];

  recommendations: string[];
}