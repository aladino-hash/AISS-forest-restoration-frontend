import SilvicultureCard from "./SilvicultureCard";
import PlantingManagementCard from "./PlantingManagementCard";
import PropagationCard from "./PropagationCard";
interface SpeciesCultivationProps {
  species?: any;
}

export default function SpeciesCultivation({
  species,
}: SpeciesCultivationProps) {
  return (
    <div className="grid gap-8 xl:grid-cols-2">

      <SilvicultureCard
        species={species}
      />

      <PlantingManagementCard
         species={species}
      />

      <PropagationCard
         species={species}
      />

    </div>
  );
}