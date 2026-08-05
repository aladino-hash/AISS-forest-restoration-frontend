import ClassificationCard from "./ClassificationCard";
import FunctionalLabelsCard from "./FunctionalLabelsCard";
import AIInterpretationCard from "./AIInterpretationCard";
import RestorationGuidanceCard from "./RestorationGuidanceCard";

interface SpeciesFynosProps {
  species?: any;
}

export default function SpeciesFynos({
  species,
}: SpeciesFynosProps) {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

      <ClassificationCard species={species} />

      <FunctionalLabelsCard species={species} />

      <AIInterpretationCard species={species} />

      <RestorationGuidanceCard species={species} />

    </div>
  );
}