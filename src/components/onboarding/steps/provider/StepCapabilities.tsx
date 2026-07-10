const capabilitiesByService = {
  drone: [
    "Orthomosaics",
    "DEM",
    "LiDAR",
    "NDVI",
    "Tree Detection",
    "3D Models",
  ],

  nursery: [
    "Native Species",
    "Fruit Trees",
    "Timber Species",
    "Medicinal Plants",
    "Seed Collection",
    "Seedling Production",
  ],

  forestry: [
    "Forest Inventories",
    "Restoration Planting",
    "Forest Management",
    "Biodiversity Surveys",
    "Silviculture",
    "Field Supervision",
  ],

  agriculture: [
    "Agroforestry",
    "Regenerative Agriculture",
    "Soil Restoration",
    "Crop Planning",
    "Irrigation",
    "Technical Assistance",
  ],

  consulting: [
    "Environmental Impact Assessment",
    "Restoration Planning",
    "Permits",
    "Monitoring",
    "Training",
    "Project Management",
  ],

  gis: [
    "GIS Analysis",
    "Google Earth Engine",
    "QGIS",
    "ArcGIS",
    "Web Maps",
    "Spatial Analysis",
  ],

  carbon: [
    "Carbon Baselines",
    "MRV",
    "Carbon Accounting",
    "Verification",
    "Reporting",
    "Methodologies",
  ],

  contractor: [
    "Earthworks",
    "Planting",
    "Fencing",
    "Infrastructure",
    "Maintenance",
    "Field Crews",
  ],

  research: [
    "Research",
    "Monitoring",
    "Training",
    "Workshops",
    "Publications",
    "Capacity Building",
  ],

  other: [
    "Other Restoration Services",
  ],
};

interface StepCapabilitiesProps {
  serviceType: string;
  capability: string;
  setCapability: (value: string) => void;
}

export default function StepCapabilities({
  serviceType,
  capability,
  setCapability,
}: StepCapabilitiesProps) {
  if (!serviceType) return null;

  const capabilities =
    capabilitiesByService[
      serviceType as keyof typeof capabilitiesByService
    ] ?? [];

  return (
    <div className="mt-8">
      <label className="mb-4 block text-lg font-semibold text-gray-900">
        Which capability best describes your expertise?
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        {capabilities
          .filter((item) => !capability || item === capability)
          .map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCapability(item)}
              className={`rounded-2xl border p-5 text-left transition-all ${
                capability === item
                  ? "border-emerald-600 bg-emerald-50 shadow-md"
                  : "hover:border-emerald-400"
              }`}
            >
              {item}
            </button>
          ))}
      </div>

      {capability && (
        <button
          type="button"
          onClick={() => setCapability("")}
          className="mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-900"
        >
          ← Choose another capability
        </button>
      )}
    </div>
  );
}