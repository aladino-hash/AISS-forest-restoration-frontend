import {
  Leaf,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <img
              src="/logo.png"
              alt="FYNOS AI"
              className="h-12"
            />

            <p className="mt-6 text-xl font-semibold text-slate-900">
              AI for a thriving planet.
            </p>

            <p className="mt-4 max-w-md leading-7 text-slate-600">
              FYNOS AI empowers communities, governments,
              researchers and restoration practitioners with
              artificial intelligence, geospatial technologies
              and collaborative tools for ecosystem restoration.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h3 className="mb-5 font-semibold text-slate-900">
              Explore
            </h3>

            <ul className="space-y-3 text-slate-600">

              <li className="cursor-pointer hover:text-emerald-700">
                Dashboard
              </li>

              <li className="cursor-pointer hover:text-emerald-700">
                Restoration Hub
              </li>

              <li className="cursor-pointer hover:text-emerald-700">
                AI Tools
              </li>

              <li className="cursor-pointer hover:text-emerald-700">
                Projects
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-5 font-semibold text-slate-900">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-600">

              <li className="cursor-pointer hover:text-emerald-700">
                Knowledge Base
              </li>

              <li className="cursor-pointer hover:text-emerald-700">
                Funding Opportunities
              </li>

              <li className="cursor-pointer hover:text-emerald-700">
                Carbon Standards
              </li>

              <li className="cursor-pointer hover:text-emerald-700">
                API Documentation
              </li>

            </ul>

          </div>

          {/* Community */}

          <div>

            <h3 className="mb-5 font-semibold text-slate-900">
              Community
            </h3>

            <ul className="space-y-3 text-slate-600">

              <li className="cursor-pointer hover:text-emerald-700">
                Become a Partner
              </li>

              <li className="cursor-pointer hover:text-emerald-700">
                Restoration Network
              </li>

              <li className="cursor-pointer hover:text-emerald-700">
                Contact
              </li>

              <li className="cursor-pointer hover:text-emerald-700">
                About FYNOS AI
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col gap-6 border-t border-slate-200 pt-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="font-medium text-slate-700">
              © 2026 FYNOS AI. All rights reserved.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Built for restoring ecosystems with Artificial Intelligence.
            </p>

          </div>

          {/* Technologies */}

          <div className="text-sm text-slate-500">

            <span className="font-semibold">
              Powered by
            </span>

            <div className="mt-2 flex flex-wrap gap-5">

              <span>Google Earth Engine</span>

              <span>Global Forest Watch</span>

              <span>Copernicus</span>

              <span>OpenStreetMap</span>

            </div>

          </div>

          {/* Social */}

          <div className="flex gap-4">

            <button className="rounded-full border border-slate-200 p-3 transition hover:border-emerald-600 hover:text-emerald-700">
              <Linkedin size={20} />
            </button>

            <button className="rounded-full border border-slate-200 p-3 transition hover:border-emerald-600 hover:text-emerald-700">
              <Github size={20} />
            </button>

            <button className="rounded-full border border-slate-200 p-3 transition hover:border-emerald-600 hover:text-emerald-700">
              <Instagram size={20} />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}