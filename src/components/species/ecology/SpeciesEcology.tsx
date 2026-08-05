import ClimateCard from "./ClimateCard";
import HabitatCard from "./HabitatCard";
import AdaptationCard from "./AdaptationCard";

interface SpeciesEcologyProps {
  species?: any;
}

export default function SpeciesEcology({
  species,
}: SpeciesEcologyProps) {
  const profile = species?.profile;

  return (
    <div className="grid gap-8 xl:grid-cols-2">

      <ClimateCard profile={profile} />

      <HabitatCard profile={profile} />

      <AdaptationCard profile={profile} />

      {/* <DistributionCard species={species} /> */}

    </div>
  );
}