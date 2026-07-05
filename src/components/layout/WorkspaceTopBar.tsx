export default function WorkspaceTopBar() {
  return (
    <div className="absolute left-0 right-0 top-0 z-[1200] px-6">

      <div className="flex h-[72px] items-center justify-between rounded-b-3xl   border border-white/10 bg-black/35 px-7 backdrop-blur-2xl shadow-2xl">

        {/* ------------------------------------------------ */}
        {/* Left                                              */}
        {/* ------------------------------------------------ */}

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

            <button className="flex items-center gap-2 transition hover:opacity-90">

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

        {/* ------------------------------------------------ */}
        {/* Center Navigation                                */}
        {/* ------------------------------------------------ */}

        <div className="rounded-full bg-black/20 p-1 backdrop-blur-xl">

          <div className="flex items-center">

            <button className="rounded-full px-6 py-2 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white">
              Map
            </button>

            <button className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all">
              3D View
            </button>

            <button className="rounded-full px-6 py-2 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white">
              Insights
            </button>

            <button className="rounded-full px-6 py-2 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white">
              Timeline
            </button>

          </div>

        </div>

        {/* ------------------------------------------------ */}
        {/* Right                                             */}
        {/* ------------------------------------------------ */}

        <div className="flex items-center gap-3">

          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">
            Share
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white/70 transition hover:bg-white/10 hover:text-white">
            🔔
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white/70 transition hover:bg-white/10 hover:text-white">
            ☰
          </button>

        </div>

      </div>

    </div>
  );
}