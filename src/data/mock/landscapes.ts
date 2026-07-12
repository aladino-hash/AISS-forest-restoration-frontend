export interface Landscape {
  id: string;
  name: string;
  priority: string;

  satellite: {
    loss: string;
    recovery: string;
    risk: string;
  };

  funding: {
    name: string;
    amount: string;
    description: string;
  }[];

  organizations: {
    name: string;
    role: string;
  }[];

  insights: {
    title: string;
    color: "emerald" | "blue" | "amber" | "red";
    description: string;
  }[];
}

export const landscapes: Landscape[] = [
  {
    id: "ucayali",
    name: "Ucayali, Peru",
    priority: "Very High",

    satellite: {
      loss: "42 ha",
      recovery: "315 ha",
      risk: "Moderate",
    },

    funding: [
      {
        name: "GEF Small Grants",
        amount: "$50,000",
        description: "Community restoration and biodiversity.",
      },
      {
        name: "Amazon Restoration Fund",
        amount: "$500,000",
        description: "Large-scale forest restoration.",
      },
    ],

    organizations: [
      {
        name: "AIDER",
        role: "Community Forestry & REDD+",
      },
      {
        name: "WWF Peru",
        role: "Biodiversity Conservation",
      },
      {
        name: "Regional Government of Ucayali",
        role: "Landscape Planning",
      },
    ],

    insights: [
      {
        title: "Restoration potential increased",
        color: "emerald",
        description:
          "AI identified adjacent degraded areas that can be restored as a single ecological corridor.",
      },
      {
        title: "New biodiversity funding available",
        color: "blue",
        description:
          "Two active funding programs match this landscape and your organization profile.",
      },
      {
        title: "Community engagement opportunity",
        color: "amber",
        description:
          "Five local communities have expressed interest in restoration partnerships.",
      },
    ],
  },

  {
    id: "madre-de-dios",
    name: "Madre de Dios",
    priority: "High",

    satellite: {
      loss: "163 ha",
      recovery: "91 ha",
      risk: "High",
    },

    funding: [
      {
        name: "REDD+ Recovery Initiative",
        amount: "$2M",
        description: "Mining landscape restoration.",
      },
      {
        name: "Rainforest Trust",
        amount: "$300,000",
        description: "Protected area expansion.",
      },
    ],

    organizations: [
      {
        name: "ACCA",
        role: "Amazon Conservation",
      },
      {
        name: "CINCIA",
        role: "Mining Restoration Research",
      },
      {
        name: "SPDA",
        role: "Environmental Governance",
      },
    ],

    insights: [
      {
        title: "Mining restoration priority",
        color: "red",
        description:
          "Recent satellite analysis detected expanding degraded mining areas requiring intervention.",
      },
      {
        title: "Carbon opportunity",
        color: "emerald",
        description:
          "High carbon sequestration potential detected across restoration corridors.",
      },
      {
        title: "Research collaboration",
        color: "blue",
        description:
          "Universities are currently seeking pilot restoration landscapes.",
      },
    ],
  },

  {
    id: "loreto",
    name: "Loreto",
    priority: "Medium",

    satellite: {
      loss: "18 ha",
      recovery: "502 ha",
      risk: "Low",
    },

    funding: [
      {
        name: "Indigenous Forest Fund",
        amount: "$750,000",
        description: "Community-led restoration.",
      },
      {
        name: "Carbon Partnership",
        amount: "$1.2M",
        description: "Nature-based carbon projects.",
      },
    ],

    organizations: [
      {
        name: "IIAP",
        role: "Amazon Research",
      },
      {
        name: "The Nature Conservancy",
        role: "Landscape Conservation",
      },
      {
        name: "Indigenous Federations",
        role: "Community Restoration",
      },
    ],

    insights: [
      {
        title: "Strong forest connectivity",
        color: "emerald",
        description:
          "Landscape analysis shows excellent ecological connectivity for restoration.",
      },
      {
        title: "Indigenous partnership opportunity",
        color: "amber",
        description:
          "Several indigenous organizations are actively developing restoration initiatives.",
      },
      {
        title: "Low recent disturbance",
        color: "blue",
        description:
          "Satellite observations indicate relatively stable forest conditions.",
      },
    ],
  },
];