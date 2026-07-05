export const workspaceConfig = {

  "Project Boundary": {
    description: "Digital Twin Identity",
    score: 87,
    status: "Excellent",

    layers: {
      boundary: true,
      vegetation: false,
      trees: false,
      drone: false,
      dem: false,
      ndvi: false,
      ai: false,
    },
  },

  Vegetation: {
    description: "Vegetation Health & Structure",
    score: 92,
    status: "Healthy",

    layers: {
      boundary: true,
      vegetation: true,
      ndvi: true,
      trees: false,
      drone: false,
      dem: false,
      ai: false,
    },
  },

  Topography: {
    description: "Terrain & Elevation",
    score: 81,
    status: "Stable",

    layers: {
      boundary: true,
      vegetation: false,
      ndvi: false,
      trees: false,
      drone: false,
      dem: true,
      ai: false,
    },
  },

  Hydrology: {
    description: "Water Resources",
    score: 74,
    status: "Seasonal",

    layers: {
      boundary: true,
      vegetation: false,
      ndvi: false,
      trees: false,
      drone: false,
      dem: false,
      ai: false,
    },
  },

  Soil: {
    description: "Soil Characteristics",
    score: 88,
    status: "Fertile",

    layers: {
      boundary: true,
      vegetation: false,
      ndvi: false,
      trees: false,
      drone: false,
      dem: false,
      ai: false,
    },
  },

  "Land Use": {
    description: "Current Land Cover",
    score: 79,
    status: "Mixed",

    layers: {
      boundary: true,
      vegetation: false,
      ndvi: false,
      trees: false,
      drone: false,
      dem: false,
      ai: false,
    },
  },

  Biodiversity: {
    description: "Species & Habitat",
    score: 95,
    status: "Rich",

    layers: {
      boundary: true,
      vegetation: true,
      ndvi: false,
      trees: true,
      drone: false,
      dem: false,
      ai: false,
    },
  },

  "Restoration Zones": {
    description: "AI Restoration Planning",
    score: 91,
    status: "High Potential",

    layers: {
      boundary: true,
      vegetation: false,
      ndvi: false,
      trees: false,
      drone: false,
      dem: false,
      ai: true,
    },
  },

  Observations: {
    description: "Field Observations",
    score: 12,
    status: "Records",

    layers: {
      boundary: true,
      vegetation: false,
      ndvi: false,
      trees: false,
      drone: true,
      dem: false,
      ai: false,
    },
  },
};