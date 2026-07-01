import { RestorationObjective } from "../../core/models/RestorationObjective";

export function recommendRestorationObjectives(
  ecosystem: string,
  risk: string
): RestorationObjective[] {

  const objectives: RestorationObjective[] = [];

  if (risk.toLowerCase().includes("high")) {
    objectives.push({
      title: "Stabilize soil and reduce erosion",
      reason: "High environmental risk detected.",
      priority: "High",
    });
  }

  if (ecosystem.toLowerCase().includes("purma")) {
    objectives.push({
      title: "Accelerate natural forest regeneration",
      reason: "The area is in a secondary forest succession stage.",
      priority: "High",
    });

    objectives.push({
      title: "Increase native biodiversity",
      reason: "Introduce native species to improve ecosystem resilience.",
      priority: "Medium",
    });
  }

  if (objectives.length === 0) {
    objectives.push({
      title: "Improve ecosystem resilience",
      reason: "General restoration recommendation.",
      priority: "Medium",
    });
  }

  return objectives;
}