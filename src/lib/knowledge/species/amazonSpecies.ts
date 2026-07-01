import { SpeciesRecommendation } from "../../core/models/SpeciesRecommendation";

export const amazonSpecies: SpeciesRecommendation[] = [
  {
    scientificName: "Inga edulis",
    commonName: "Pacae",
    preferredEcosystems: ["purma"],
    preferredRestorationPotential: [
      "Excellent",
      "High"
    ],
    preferredRiskLevels: [
      "Low",
      "Moderate erosion",
      "High erosion risk",
    ],
    preferredElevation: {
      min: 0,
      max: 1200,
    },
    ecologicalRole: "Nitrogen Fixer",
    suitability: "Excellent",
    score: 0,
    maximumScore: 10,
    scoreBreakdown: {
      ecosystem: 0,
      restorationPotential: 0,
      risk: 0,
    },
    confidence: 0,
    explanation: "",
    matchedConditions: [],
    reason:
      "Improves soil fertility, provides shade for cacao, and accelerates ecological succession.",
    traditionalUses: [
      "Edible fruit",
      "Shade tree",
      "Soil improvement"
    ],
    biodiversityBenefit:
      "Provides habitat and food for birds and pollinators.",
    carbonBenefit:
      "Fast-growing tree with good early carbon sequestration."
  },

  {
    scientificName: "Guazuma crinita",
    commonName: "Bolaina",
    preferredEcosystems: ["purma", "pastizales"],
    preferredRestorationPotential: [
      "High",
      "Moderate"
    ],
    preferredRiskLevels: [
      "Moderate erosion",
      "High erosion risk",
    ],
    preferredElevation: {
      min: 0,
      max: 800,
    },

    ecologicalRole: "Pioneer",
    suitability: "High",
    score: 0,
    maximumScore: 10,
    scoreBreakdown: {
      ecosystem: 0,
      restorationPotential: 0,
      risk: 0,
    },
    confidence: 0,
    explanation: "",
    matchedConditions: [],
    reason:
      "Excellent pioneer species for restoring degraded Amazonian land.",
    traditionalUses: [
      "Light timber",
      "Construction",
      "Traditional housing"
    ],
    biodiversityBenefit:
      "Facilitates natural regeneration.",
    carbonBenefit:
      "Rapid biomass accumulation."
  },

  {
    scientificName: "Cedrelinga catenaeformis",
    commonName: "Tornillo",
    preferredEcosystems: ["bosque_alto"],
    preferredRestorationPotential: [
      "Excellent"
    ],
    preferredRiskLevels: [
      "Low",
      "Moderate erosion",
    ],
    preferredElevation: {
      min: 100,
      max: 900,
    },
    ecologicalRole: "Timber",
    suitability: "High",
    score: 0,
    maximumScore: 10,
    scoreBreakdown: {
      ecosystem: 0,
      restorationPotential: 0,
      risk: 0,
    },
    confidence: 0,
    explanation: "",
    matchedConditions: [],
    reason:
      "Native commercial timber species suitable for mixed agroforestry systems.",
    traditionalUses: [
      "High-quality timber"
    ],
    biodiversityBenefit:
      "Supports mature forest structure.",
    carbonBenefit:
      "Long-term carbon storage."
  }
];