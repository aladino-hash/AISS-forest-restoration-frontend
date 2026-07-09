import { useNavigate } from "react-router-dom";

export default function HeroSection() {
const navigate = useNavigate();
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[28px]
        md:rounded-[36px]
        bg-gradient-to-r
        from-emerald-900
        to-emerald-700
        px-5
        py-8
        md:px-14
        md:py-8
        text-white
      "
    >
      {/* Background decoration */}

      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-300 blur-3xl" />
      </div>

      {/* Hero Content */}

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">

        {/* Left */}

        <div>

          <h1 className="
              text-3xl
              md:text-5xl
              font-bold
              leading-tight
              "
              >
            Restoration Hub
          </h1>

          <p className="
             mt-4
             max-w-xl
             text-base
             md:text-lg
             leading-7
             text-emerald-50
             "
             >
             {window.innerWidth < 768
               ? "Plan, learn, connect, and restore forests with AI."
               : "Learn restoration, discover successful projects, connect with trusted providers, and use AI-powered tools to restore ecosystems with confidence."}
          </p>

          <div className="
               mt-6
               flex
               flex-col
               md:flex-row
               gap-3
               "
               >

            <button
              onClick={() => navigate("/join")}
              className="
                flex
                h-14
                w-full md:w-56
                items-center
                justify-center
                rounded-2xl
                bg-white
                text-base
                font-semibold
                text-emerald-900
                transition
                hover:scale-105
              "
            >
              🌱 Start Restoration
            </button>

            <button
              className="
                flex
                h-14
                w-full md:w-56
                items-center
                justify-center
                rounded-2xl
                border
                border-white/40
                bg-white/10
                text-base
                font-semibold
                text-white
                backdrop-blur
                transition
                hover:bg-white/20
              "
            >
              📚 Learn Restoration
            </button>

            <button
              className="
                flex
                h-14
                w-full md:w-56
                items-center
                justify-center
                rounded-2xl
                border
                border-white/40
                bg-white/10
                text-base
                font-semibold
                text-white
                backdrop-blur
                transition
                hover:bg-white/20
              "
            >
              🤝 Find Providers
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="hidden lg:flex items-center justify-center">

          <div
            className="
              relative
              h-[240px]
              w-full
              overflow-hidden
              rounded-3xl
              border
              border-white/20
              bg-white/5
              shadow-2xl
              backdrop-blur
            "
          >

            <img
              src="/images/Francisco.JPG"
              alt="Restoration"
              className="
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-emerald-900/10 to-emerald-900/40" />

          </div>

        </div>

      </div>

    </section>
  );
}