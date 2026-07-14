type Props = {
  viewMode: "map" | "3d" | "insights" | "timeline";
  setViewMode: (
    mode: "map" | "3d" | "insights" | "timeline"
  ) => void;
};

export default function WorkspaceTopBar({
  viewMode,
  setViewMode,
}: Props) {

  return (
    <>
      {/* =======================================================
          MOBILE
      ======================================================= */}

      <div className="absolute left-0 right-0 top-0 z-[1200] px-3 lg:hidden">

        <div className="mt-2 flex items-center justify-between rounded-2xl bg-black/45 px-4 py-3 backdrop-blur-2xl">

          <div className="flex items-center gap-3">

            <img
              src="/images/logo.png"
              alt="FYNOS AI"
              className="h-9 w-auto"
            />

            <div>

              <h1 className="text-sm font-bold text-white">
                FYNOS AI
              </h1>

              <p className="text-[10px] text-emerald-200">
                Curimaná
              </p>

            </div>

          </div>

          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-semibold text-emerald-200">
            Planning
          </span>

        </div>

      </div>

      {/* =======================================================
          DESKTOP
      ======================================================= */}

      <div className="absolute left-0 right-0 top-0 z-[1200] hidden px-6 lg:block">

        <div className="flex h-[72px] items-center justify-between rounded-b-3xl border border-white/10 bg-black/35 px-7 backdrop-blur-2xl shadow-2xl">

          {/* Left */}

          <div className="flex items-center gap-5">

            <img
              src="/images/logo.png"
              alt="FYNOS AI"
              className="h-14 w-auto shrink-0"
            />

            <div>

              <h1 className="text-[20px] font-bold tracking-tight text-white leading-none">
                FYNOS AI
              </h1>

              <p className="mt-1 text-xs text-emerald-100/75">
                Restoration Intelligence
              </p>

            </div>

            <div className="h-10 w-px bg-white/15" />

            <div>

              <button className="flex items-center gap-2">

                <span className="text-[18px] font-semibold text-white">
                  Curimaná Restoration Project
                </span>

                <span className="text-sm text-white/50">
                    ▼
                </span>

              </button>

              <span className="mt-2 inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-200">
                Planning
              </span>

            </div>

          </div>

          {/* Center */}

          <div className="flex items-center rounded-full bg-black/35 p-1">

            <button
              onClick={() => setViewMode("map")}
              className={`rounded-full px-7 py-3 text-sm font-medium transition ${
                viewMode === "map"
                  ? "bg-emerald-500 text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Map
            </button>

            <button
              onClick={() => setViewMode("3d")}
              className={`rounded-full px-7 py-3 text-sm font-medium transition ${
                viewMode === "3d"
                  ? "bg-emerald-500 text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              3D
            </button>

            <button
              onClick={() => setViewMode("insights")}
              className={`rounded-full px-7 py-3 text-sm font-medium transition ${
                viewMode === "insights"
                  ? "bg-emerald-500 text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Insights
            </button>

            <button
              onClick={() => setViewMode("timeline")}
              className={`rounded-full px-7 py-3 text-sm font-medium transition ${
                viewMode === "timeline"
                  ? "bg-emerald-500 text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Timeline
            </button>

          </div>

          {/* Right */}

          <div className="flex items-center gap-3">

            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
              Share
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70">
              🔔
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70">
              ☰
            </button>

          </div>

        </div>

      </div>
    </>
  );
}