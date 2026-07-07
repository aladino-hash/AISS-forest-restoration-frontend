import { ArrowRight, MapPin } from "lucide-react";

const projects = [
  {
    title: "Curimaná Restoration",
    location: "Ucayali, Peru",
    image: "/images/Francisco.JPG",
    restored: "12,450 ha",
    progress: 68,
  },
  {
    title: "Mangrove Recovery",
    location: "Tumbes, Peru",
    image: "/images/Francisco.JPG",
    restored: "8,210 ha",
    progress: 54,
  },
  {
    title: "Amazon Agroforestry",
    location: "Campo Verde, Peru",
    image: "/images/Francisco.JPG",
    restored: "5,870 ha",
    progress: 72,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="space-y-8">

      {/* Header */}

      <div className="flex items-end justify-between">

        <div>

          <h2 className="text-4xl font-bold text-slate-900">
            Featured Restoration Projects
          </h2>

          <p className="mt-2 text-lg text-slate-600">
            Learn from successful restoration initiatives.
          </p>

        </div>

        <button className="flex items-center gap-2 font-semibold text-emerald-700 transition hover:gap-3 hover:text-emerald-800">

          View all

          <ArrowRight size={18} />

        </button>

      </div>

      {/* Cards */}

      <div className="grid gap-8 lg:grid-cols-3">

        {projects.map((project) => (

          <button
            key={project.title}
            className="
              overflow-hidden
              rounded-3xl
              bg-white
              text-left
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >

            {/* Image */}

            <div className="overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="
                  h-60
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

            </div>

            {/* Content */}

            <div className="space-y-5 p-6">

              <div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-base text-slate-500">

                  <MapPin
                    size={16}
                    className="text-emerald-600"
                  />

                  {project.location}

                </div>

              </div>

              {/* Restoration Progress */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-sm text-slate-600">
                    {project.restored} restored
                  </span>

                  <span className="font-semibold text-emerald-700">
                    {project.progress}%
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                  <div
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-emerald-500
                      to-emerald-700
                      transition-all
                      duration-700
                    "
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />

                </div>

              </div>

            </div>

          </button>

        ))}

      </div>

    </section>
  );
}