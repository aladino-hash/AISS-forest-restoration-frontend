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
import ScenarioSimulator from "./pages/ScenarioSimulator";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";
import RestorationBrief from "./pages/RestorationBrief";
import RestorationWorkspace from "./pages/RestorationWorkspace";
import RestorationHub from "./pages/RestorationHub";

const queryClient = new QueryClient();

/* ===================================================== */
/* DEV MODE FLAG */
/* true in localhost, false in production */
/* ===================================================== */

const experimentalEnabled = true;

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
          {/* ===================================================== */
          /* DEV ONLY — Curimana Satellite Tool */
          /* ===================================================== */}

          <Route
            path="/curimana"
            element={
              experimentalEnabled
                ? <Curimana />
                : <UnderConstruction />
            }
          />

          <Route
            path="/restoration-brief"
            element={
              experimentalEnabled
                ? <RestorationBrief />
                : <UnderConstruction />
            }
          />

          {/* OPTIONAL: keep this if you still use it */}
          <Route path="/curimana-page" element={<Curimana />} />

          {/* 🌍 NEW: Restoration Map */}
          {/* ===================================================== */
          /* DEV ONLY — Restoration Intelligence */
          /* ===================================================== */}

          <Route
            path="/restoration"
            element={
              experimentalEnabled
                ? <RestorationWorkspace />
                : <UnderConstruction />
            }
          />

          <Route
            path="/restoration-hub"
            element={<RestorationHub />}
          />

          {/* Dashboard Pages */}
          <Route path="/overview" element={<GlobalOverview />} />
          <Route path="/country" element={<CountryExplorer />} />
          <Route path="/map" element={<WorldMap />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/scenario" element={<ScenarioSimulator />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;