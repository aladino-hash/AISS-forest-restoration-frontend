export default function HubHeader() {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      flex
      h-20
      items-center
      justify-between
      border-b
      border-slate-200
      bg-white
      px-10
    "
    >
      {/* Left */}

      <div className="flex items-center gap-12">

        <div className="flex items-center gap-3">

          <img
            src="/images/logo.png"
            alt="FYNOS AI"
            className="h-10 w-auto"
          />

          <span className="text-2xl font-bold tracking-wide">
            <span className="text-slate-900">FYNOS </span>
            <span className="text-emerald-600">AI</span>
          </span>

        </div>

        <nav className="flex items-center gap-10 text-base">

          <button className="text-slate-600 hover:text-slate-900">
            Explore Dashboard
          </button>

          <button className="text-slate-600 hover:text-slate-900">
            Start Restoration Project
          </button>

          <button
            className="
              rounded-xl
              border
              border-emerald-200
              bg-emerald-50
              px-5
              py-2
              font-medium
              text-emerald-700
            "
          >
            Restoration Hub
          </button>

        </nav>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5 text-2xl">

        <button>🔔</button>

        <button>❔</button>

        <button>👤</button>

      </div>

    </header>
  );
}