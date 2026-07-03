import { AgroforestrySystem } from "../../core/models/AgroforestrySystem";

export const amazonSystems: AgroforestrySystem[] = [
  {
    id: "productive-restoration",

    name: "Amazon Productive Restoration",

    description:
      "A productive restoration system that combines ecological recovery with sustainable farmer income through successional agroforestry.",

    suitableEcosystems: [
      "purma",
      "pastizales"
    ],

    suitableRestorationPotential: [
      "Excellent",
      "High",
      "Moderate"
    ],

    suitableRiskLevels: [
      "Low",
      "Moderate erosion",
      "High erosion risk"
    ],

    phases: [
      {
        phase: 1,
        objective: "Stabilize soil and establish fast-growing pioneer species.",
        species: [
          "Bolaina",
          "Pacae",
          "Banana"
        ]
      },
      {
        phase: 2,
        objective: "Introduce productive agroforestry species.",
        species: [
          "Cacao",
          "Macambo"
        ]
      },
      {
        phase: 3,
        objective: "Establish long-term timber forest.",
        species: [
          "Caoba",
          "Tornillo"
        ]
      }
    ],

    expectedBenefits: {
      biodiversity:
        "High",

      carbon:
        "High long-term sequestration",

      economic:
        "Short-, medium-, and long-term income diversification"
    },

    suitableFor: [
      "Smallholders",
      "Family farms",
      "Community restoration"
    ]
  }
];