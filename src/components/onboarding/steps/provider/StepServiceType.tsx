interface StepServiceTypeProps {
  serviceType: string;
  setServiceType: (value: string) => void;
}

const services = [
  {
    id: "drone",
    icon: "🛰",
    title: "Drone & Remote Sensing",
    description: "Drone surveys, orthomosaics, DEMs, LiDAR and monitoring.",
  },
  {
    id: "nursery",
    icon: "🌱",
    title: "Nursery",
    description: "Native species, seedlings and restoration planting material.",
  },
  {
    id: "forestry",
    icon: "🌳",
    title: "Forestry Services",
    description: "Forest restoration, inventories and technical field support.",
  },
  {
    id: "agriculture",
    icon: "🚜",
    title: "Agricultural Services",
    description: "Agroforestry, regenerative agriculture and farm support.",
  },
  {
    id: "consulting",
    icon: "📋",
    title: "Environmental Consulting",
    description: "Environmental assessments, planning and compliance.",
  },
  {
    id: "gis",
    icon: "🗺",
    title: "GIS & Mapping",
    description: "GIS analysis, remote sensing and spatial intelligence.",
  },
  {
    id: "carbon",
    icon: "📊",
    title: "Carbon & MRV",
    description: "Carbon accounting, monitoring and verification.",
  },
  {
    id: "contractor",
    icon: "🏗",
    title: "Restoration Contractor",
    description: "Field implementation and restoration execution.",
  },
  {
    id: "research",
    icon: "🎓",
    title: "Research & Training",
    description: "Capacity building, research and technical education.",
  },
  {
    id: "other",
    icon: "🤝",
    title: "Other",
    description: "Other restoration-related services.",
  },
];

export default function StepServiceType({
  serviceType,
  setServiceType,
}: StepServiceTypeProps) {
  return (
    <div className="mt-8">
      <label className="mb-4 block text-lg font-semibold text-gray-900">
        What type of restoration services do you provide?
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        {services
          .filter((service) => !serviceType || service.id === serviceType)
          .map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setServiceType(service.id)}
              className={`rounded-2xl border p-5 text-left transition-all ${
                serviceType === service.id
                  ? "border-emerald-600 bg-emerald-50 shadow-md"
                  : "hover:border-emerald-400"
              }`}
            >
              <div className="text-3xl">{service.icon}</div>

              <h3 className="mt-3 text-lg font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {service.description}
              </p>
            </button>
          ))}
      </div>

      {serviceType && (
        <button
          type="button"
          onClick={() => setServiceType("")}
          className="mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-900"
        >
          ← Choose another service
        </button>
      )}
    </div>
  );
}