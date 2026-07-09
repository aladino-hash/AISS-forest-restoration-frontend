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
      "Understand restoration principles and best practices.",
    action: "Start learning →",
    icon: BookOpen,
  },
  {
    title: "Explore Projects",
    description:
      "See successful restoration projects around the world.",
    action: "Browse projects →",
    icon: FolderTree,
  },
  {
    title: "Find Providers",
    description:
      "Connect with trusted nurseries and restoration experts.",
    action: "Find providers →",
    icon: Users,
  },
  {
    title: "AI Tools",
    description:
      "Discover intelligent tools for restoration planning.",
    action: "Open AI tools →",
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
            group
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
            <div className="flex items-center gap-4 mb-5">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-3xl
                  bg-emerald-100
                  flex-shrink-0
                "
              >
                <Icon
                  size={34}
                  className="text-emerald-700"
                />
              </div>

              <h3 className="text-2xl font-semibold text-slate-900">
                {card.title}
              </h3>

            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {card.description}
            </p>

            <div className="mt-5 flex items-center font-semibold text-emerald-600 transition-all group-hover:translate-x-1">
              {card.action}
            </div>

          </button>
        );
      })}

    </section>
  );
}