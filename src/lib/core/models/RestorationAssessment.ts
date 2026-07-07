import { SpeciesRecommendation } from "./SpeciesRecommendation";
import { RestorationObjective } from "./RestorationObjective";
import { AgroforestrySystem } from "./AgroforestrySystem";

export interface RestorationAssessment {
  area: string;
  ecosystem: string;
  risk: string;
  restorationPotential: string;
  ecologicalSummary: string;

  recommendedSpecies: SpeciesRecommendation[];
  recommendedAgroforestrySystems: AgroforestrySystem[];
  restorationObjectives: RestorationObjective[];
}