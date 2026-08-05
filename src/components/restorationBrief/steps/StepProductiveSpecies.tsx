import { useEffect, useState } from "react";
import SpeciesSidebar from "@/components/species/SpeciesSidebar";
import SpeciesWorkspace from "@/components/species/SpeciesWorkspace";

interface StepProductiveSpeciesProps {
  species?: {
    title?: string;
    species?: any[];
  };

  selectedSpecies: string[];
  onToggleSpecies: (id: string) => void;
}

export default function StepProductiveSpecies({
  species: speciesData,
  selectedSpecies: _selectedSpecies,
  onToggleSpecies: _onToggleSpecies,
}: StepProductiveSpeciesProps) {

  const productiveSpecies = speciesData?.species ?? [];

  console.log("PRODUCTIVE SPECIES LENGTH", productiveSpecies.length);
  console.log("PRODUCTIVE SPECIES", productiveSpecies);

  const [selectedSpeciesIndex, setSelectedSpeciesIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("profile");

 const species = productiveSpecies[selectedSpeciesIndex];

  // Always start from the Profile tab when another species is selected.
  useEffect(() => {
    setActiveTab("profile");
  }, [selectedSpeciesIndex]);

  return (
    <section>
      {/* ===========================================================
          Header
      ============================================================ */}

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
          Step 5 of 8
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          Select Productive Species
        </h2>

        <p className="mt-3 max-w-3xl text-gray-600">
          Choose species that will enhance your restoration and bring
          long-term benefits.
        </p>
      </div>

      {/* ===========================================================
          Layout
      ============================================================ */}

      <div className="mt-8 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
        {/* ===========================================================
            Sidebar
        ============================================================ */}

        <aside>
          <SpeciesSidebar
            productiveSpecies={productiveSpecies}
            selectedSpeciesIndex={selectedSpeciesIndex}
            setSelectedSpeciesIndex={setSelectedSpeciesIndex}
          />
        </aside>

        {/* ===========================================================
            Workspace
        ============================================================ */}

        <section className="min-w-0">
          <SpeciesWorkspace
              species={species}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
          />
        </section>
      </div>
    </section>
  );
}