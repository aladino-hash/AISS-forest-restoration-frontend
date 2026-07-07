export interface AgroforestrySystem {
  id: string;

  name: string;

  description: string;

  suitableEcosystems: string[];

  suitableRestorationPotential: string[];

  suitableRiskLevels: string[];

  phases: {
    phase: 1 | 2 | 3;
    objective: string;
    species: string[];
  }[];

  expectedBenefits: {
    biodiversity: string;
    carbon: string;
    economic: string;
  };

  suitableFor: string[];
}