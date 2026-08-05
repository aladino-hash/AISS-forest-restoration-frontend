import SpeciesHeader from "./SpeciesHeader";
import SpeciesProfile from "./SpeciesProfile";
import SpeciesEcology from "./ecology/SpeciesEcology";
import SpeciesFunctions from "./functions/SpeciesFunctions";
import SpeciesCultivation from "./cultivation/SpeciesCultivation";
import SpeciesProducts from "./Products/SpeciesProducts";
import SpeciesFynos from "./fynos/SpeciesFynos";

interface SpeciesWorkspaceProps {
  species?: any;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function SpeciesWorkspace({
  species,
  activeTab,
  setActiveTab,
}: SpeciesWorkspaceProps) {

  const profile = species?.profile;

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "ecology", label: "Ecology" },
    { id: "functions", label: "Functions" },
    { id: "cultivation", label: "Cultivation" },
    { id: "products", label: "Products" },
    { id: "fynos", label: "FYNOS AI" },
    { id: "sources", label: "Sources" },
  ];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* ==========================================================
          Header
      =========================================================== */}

      <SpeciesHeader
        species={species}
      />

      {/* ==========================================================
          Tabs
      =========================================================== */}

      <div className="mt-6 rounded-2xl border border-gray-200 p-5">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-emerald-600 text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-emerald-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ==========================================================
          Active Content
      =========================================================== */}

      <div className="mt-6 rounded-2xl border border-gray-200 p-8">
        {activeTab === "profile" && (
          <SpeciesProfile
            species={species}
          />
        )}

        {activeTab === "ecology" && (
          <SpeciesEcology
              species={species}
          />
        )}

        {activeTab === "functions" && (
          <SpeciesFunctions
            species={species}
          />
        )}

        {activeTab === "cultivation" && (
          <SpeciesCultivation
            species={species}
          />
        )}

        {activeTab === "products" && (
          <SpeciesProducts
            species={species}
          />
        )}

        {activeTab === "fynos" && (
          <SpeciesFynos
            species={species}
          />
        )}

        {activeTab === "sources" && (
          <WorkspacePlaceholder
            title="Sources"
            description="Scientific references and citations will appear here."
          />
        )}
      </div>

      {/* ==========================================================
          Footer
      =========================================================== */}

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-gray-200 p-5">
        <div className="text-sm text-gray-500">
          Explore each tab to learn more about this species.
        </div>
      </div>
    </div>
  );
}

interface WorkspacePlaceholderProps {
  title: string;
  description: string;
}

function WorkspacePlaceholder({
  title,
  description,
}: WorkspacePlaceholderProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>
    </div>
  );
}