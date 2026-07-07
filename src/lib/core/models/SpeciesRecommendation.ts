export interface SpeciesRecommendation {
  scientificName: string;
  commonName: string;
  preferredEcosystems: string[];
  preferredRestorationPotential: string[];
  preferredRiskLevels: string[];
  preferredElevation: {
    min: number;
    max: number;
  };

  ecologicalRole:
    | "Pioneer"
    | "Nitrogen Fixer"
    | "Timber"
    | "Fruit"
    | "Shade"
    | "Pollinator Support";

  successionalStage:
      | "Pioneer"
      | "Early Secondary"
      | "Late Secondary"
      | "Climax";
    growthRate:
      | "Fast"
      | "Medium"
      | "Slow";
    economicCategory:
      | "Timber"
      | "Fruit"
      | "Agroforestry"
      | "Food Crop"
      | "Cash Crop"
      | "Conservation";
    restorationFunctions: string[];
    recommendedCompanions: string[];
    plantingPhase:
      | 1
      | 2
      | 3;
    expectedEconomicReturnYears: number;

  suitability: "Excellent" | "High" | "Moderate";
  score: number;
  maximumScore: number;
  scoreBreakdown: {
    ecosystem: number;
    restorationPotential: number;
    risk: number;
    ecologicalRole: number;
  };

  confidence: number;
  explanation: string;
  matchedConditions: string[];

  reason: string;

  traditionalUses: string[];

  biodiversityBenefit: string;

  carbonBenefit: string;
}