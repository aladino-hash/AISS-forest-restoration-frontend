import IntroHero from "./components/IntroHero";
import CurimanaMap from "./components/CurimanaMap";
import Curimana from "./pages/Curimana";
import RestorationMap from "./pages/RestorationMap"; // 👈 NEW

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalOverview from "./pages/GlobalOverview";
import CountryExplorer from "./pages/CountryExplorer";
import WorldMap from "./pages/WorldMap";
import Predictions from "./pages/Predictions";
import Recommendations from "./pages/Recommendations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>

          {/* Landing Page */}
          <Route path="/" element={<IntroHero />} />

          {/* Satellite Tool (your current working map) */}
          <Route path="/curimana" element={<CurimanaMap />} />

          {/* OPTIONAL: keep this if you still use it */}
          <Route path="/curimana-page" element={<Curimana />} />

          {/* 🌍 NEW: Restoration Map */}
          <Route path="/restoration" element={<RestorationMap />} />

          {/* Dashboard Pages */}
          <Route path="/overview" element={<GlobalOverview />} />
          <Route path="/country" element={<CountryExplorer />} />
          <Route path="/map" element={<WorldMap />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/recommendations" element={<Recommendations />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;