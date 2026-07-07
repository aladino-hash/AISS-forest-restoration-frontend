import FeaturedProjects from "./FeaturedProjects";
import PremiumDigitalTwin from "./PremiumDigitalTwin";

export default function HomeShowcase() {
  return (
    <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">

      <FeaturedProjects />

      <PremiumDigitalTwin />

    </section>
  );
}