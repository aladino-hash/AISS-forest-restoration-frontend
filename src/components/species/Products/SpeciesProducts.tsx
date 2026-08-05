import FoodCard from "./FoodCard";
import TimberCard from "./TimberCard";
import IndustrialCard from "./IndustrialCard";
import OtherUsesCard from "./OtherUsesCard";

interface SpeciesProductsProps {
  species?: any;
}

export default function SpeciesProducts({
  species,
}: SpeciesProductsProps) {
  return (
    <div className="grid gap-8 xl:grid-cols-2">

      <FoodCard species={species} />

      <TimberCard species={species} />

      <IndustrialCard species={species} />

      <OtherUsesCard species={species} />

    </div>
  );
}