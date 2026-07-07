import {
  Trees,
  Tractor,
  Plane,
  Leaf,
  Users,
  ShieldCheck,
} from "lucide-react";

const providers = [
  {
    title: "Nurseries",
    icon: Trees,
  },
  {
    title: "Agronomists",
    icon: Leaf,
  },
  {
    title: "Drone Operators",
    icon: Plane,
  },
  {
    title: "Field Teams",
    icon: Users,
  },
  {
    title: "Machinery",
    icon: Tractor,
  },
  {
    title: "Carbon & ESG",
    icon: ShieldCheck,
  },
];

export default function ProviderCategories() {
  return (
    <section>

      <h2 className="text-3xl font-bold text-slate-900">
        Find Restoration Providers
      </h2>

      <p className="mt-2 text-slate-600">
        Connect with trusted professionals and organizations.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        {providers.map((provider) => {
          const Icon = provider.icon;

          return (
            <button
              key={provider.title}
              className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="rounded-2xl bg-emerald-100 p-4">
                <Icon
                  size={28}
                  className="text-emerald-700"
                />
              </div>

              <span className="text-lg font-semibold text-slate-800">
                {provider.title}
              </span>
            </button>
          );
        })}

      </div>

    </section>
  );
}