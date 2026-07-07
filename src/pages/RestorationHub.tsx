import HeroSection from "../components/restorationHub/HeroSection";
import MissionGrid from "../components/restorationHub/MissionGrid";
import ProviderCategories from "../components/restorationHub/ProviderCategories";
import HomeShowcase from "../components/restorationHub/HomeShowcase";
import AITools from "../components/restorationHub/AITools";
import HubHeader from "../components/restorationHub/HubHeader";
import Footer from "../components/restorationHub/Footer";

export default function RestorationHub() {
  return (
    <div className="min-h-screen bg-slate-50">

      <HubHeader />

      <main className="space-y-10 px-6 pb-10">

        <HeroSection />
        <MissionGrid />
        <HomeShowcase />
        <ProviderCategories />
        <AITools />
        <Footer />

      </main>

    </div>
  );
}