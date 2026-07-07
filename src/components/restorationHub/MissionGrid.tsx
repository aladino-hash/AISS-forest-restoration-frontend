import {
  BookOpen,
  FolderTree,
  Users,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    title: "Learn Restoration",
    description:
      "Guides, best practices and restoration knowledge.",
    icon: BookOpen,
  },
  {
    title: "Explore Projects",
    description:
      "Discover successful restoration initiatives.",
    icon: FolderTree,
  },
  {
    title: "Find Providers",
    description:
      "Connect with nurseries, agronomists and operators.",
    icon: Users,
  },
  {
    title: "AI Tools",
    description:
      "Species selector, carbon calculator and more.",
    icon: Sparkles,
  },
];

export default function MissionGrid() {
  return (
    <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <button
            key={card.title}
            className="
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-3
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            "
          >
            <div
              className="
                mb-4
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-3xl
                bg-emerald-100
              "
            >
              <Icon
                size={38}
                className="text-emerald-700"
              />
            </div>

            <h3 className="text-2xl font-semibold text-slate-900">
              {card.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {card.description}
            </p>
          </button>
        );
      })}

    </section>
  );
}