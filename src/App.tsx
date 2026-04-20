import IntroHero from "./components/IntroHero";
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
