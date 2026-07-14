import { WorkspaceBlueprint } from "./WorkspaceBlueprint";
import { Landscape } from "@/data/mock/landscapes";
import { IntelligenceProfile } from "./IntelligenceProfile";

export interface WorkspaceSession {
  blueprint: WorkspaceBlueprint;

  profile: IntelligenceProfile;

  activeLandscape: Landscape | null;
}