import { amazonSpecies } from "../../knowledge/species/amazonSpecies";
import { SpeciesRecommendation } from "../../core/models/SpeciesRecommendation";
import { calculateElevationScore } from "./elevationScore";

export function recommendNativeSpecies(
  ecosystem: string,
  restorationPotential: string,
  risk: string,
  elevation: number
): SpeciesRecommendation[] {

  // First implementation:
  // return our current curated species list.

  if (ecosystem.toLowerCase().includes("purma")) {
    return amazonSpecies.filter(
      species =>
        species.ecologicalRole === "Pioneer" ||
        species.ecologicalRole === "Nitrogen Fixer"
    );
  }

  const species = amazonSpecies.map((species) => ({
    ...species,
    matchedConditions: [],
    score: 0,
    confidence: 0,
    explanation: "",
    scoreBreakdown: {
      ecosystem: 0,
      restorationPotential: 0,
      risk: 0,
    },
  }));

  species.sort((a, b) => {
    const score = (s: SpeciesRecommendation) => {

      let points = 0;

      s.scoreBreakdown = {
        ecosystem: 0,
        restorationPotential: 0,
        risk: 0,
        ecologicalRole: 0,
      };

      const reasons: string[] = [];
      const matchedConditions: string[] = [];

      console.log(
        s.commonName,
        s.preferredEcosystems,
        ecosystem.toLowerCase()
      );

      if (
        s.preferredEcosystems.includes(
          ecosystem.toLowerCase()
        )
      ) {
        points += 3;

        s.scoreBreakdown.ecosystem = 3;

        matchedConditions.push(
          `Preferred ecosystem: ${ecosystem}`
        );
      }

      if (
        s.preferredRestorationPotential.includes(
          restorationPotential
        )
      ) {
        points += 2;

        s.scoreBreakdown.restorationPotential = 2;

        matchedConditions.push(
          `Restoration potential: ${restorationPotential}`
        );
      }

      if (
        s.preferredRiskLevels.includes(
          risk
        )
      ) {
        points += 2;

        s.scoreBreakdown.risk = 2;

        matchedConditions.push(
          `Risk level: ${risk}`
        );

        reasons.push(
          `it is suitable for areas with ${risk.toLowerCase()}`
        );
      }

      const elevationScore = calculateElevationScore(
        elevation,
        s.preferredElevation.min,
        s.preferredElevation.max
      );

      points += elevationScore;

      if (elevationScore > 0) {
        matchedConditions.push(
          `Elevation: ${Math.round(elevation)} m`
        );

        reasons.push(
          `its preferred elevation range matches the property`
        );
      }
      if (
        restorationPotential === "Excellent" &&
        s.suitability === "Excellent"
      ) {
        points += 2;
      }

      if (ecosystem.toLowerCase().includes("purma")) {
        reasons.push("the property is in a secondary forest (purma)");
        matchedConditions.push("Secondary forest (Purma)");
        points += 1;
      }

      if (
        s.ecologicalRole === "Pioneer" ||
        s.ecologicalRole === "Nitrogen Fixer"
      ) {
        reasons.push(`its ecological role is ${s.ecologicalRole.toLowerCase()}`);
        matchedConditions.push(`Ecological role: ${s.ecologicalRole}`);

        points += 1;

        s.scoreBreakdown.ecologicalRole = 1;
      }

      reasons.push(
        `its suitability for restoration is rated "${s.suitability}"`
      );

      s.score = points;
      console.log(
        `${s.commonName}: ${points}/${s.maximumScore}`,
        s.scoreBreakdown
      );

      s.confidence = Math.round(
        (points / s.maximumScore) * 100
      );

      s.explanation =
        `FYNOS AI recommends ${s.commonName} because ${reasons.join(", ")}.`;

      s.matchedConditions = matchedConditions;

      return points;
    };

    return score(b) - score(a);
  });

  return species;

}