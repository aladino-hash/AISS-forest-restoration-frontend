import { Link, useLocation } from 'react-router-dom';
import {
  TreePine,
  BarChart3,
  Globe,
  TrendingUp,
  Menu,
  X,
  Brain,
  Leaf
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next"; // ✅ NEW

/* =========================
   NAV ITEMS
========================= */
const navItems = [
  { path: '/', label: 'Global Overview', icon: BarChart3 },
  { path: '/map', label: 'World Map', icon: Globe },
  { path: '/country', label: 'Country View', icon: TreePine },

  // 🔥 MAIN PRODUCT FEATURE
  { path: '/restoration', label: 'Restoration Hub', icon: Leaf, highlight: true },

  { path: '/predictions', label: 'Predictions', icon: TrendingUp },
  { path: '/recommendations', label: 'AI Recommendations', icon: Brain },
];

export function Navbar() {
  const { i18n, t } = useTranslation(); // ✅ ADD "t" HERE
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">

          {/* ✅ LOGO IMAGE */}
          <img
            src="/images/logo.png"
            alt="Fynos AI Logo"
            className="h-16 w-auto"
          />

          {/* ✅ TEXT */}
          <span className="text-xl font-bold text-foreground flex items-center gap-1">
            FYNOS <span className="text-primary">AI</span>
          </span>

        </Link>

        {/* =========================
           DESKTOP NAV
        ========================== */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  // 🔥 BASE STYLE (now relative for underline)
                  'relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.03]',

                  // 🔥 RESTORATION HUB (CTA STYLE)
                  item.highlight
                    ? isActive
                      ? 'bg-green-600 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]'
                      : 'text-green-600 border border-green-500 hover:bg-green-600 hover:text-white hover:shadow-[0_0_12px_rgba(34,197,94,0.5)]'

                    // 🔥 NORMAL NAV ITEMS
                    : isActive
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                <item.icon className="h-4 w-4" />
                {t(item.label)}

                {/* 🔥 ACTIVE UNDERLINE */}
                {isActive && (
                  <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-white rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* =========================
           MOBILE MENU BUTTON
        ========================== */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* =========================
         MOBILE NAV
      ========================== */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background p-4 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all',

                    item.highlight
                      ? isActive
                        ? 'bg-green-600 text-white'
                        : 'text-green-600 border border-green-500'
                      : isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
            {/* 🌍 LANGUAGE SWITCH (mobile) */}
            <div className="mt-3">
              <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full px-3 py-2 border rounded-md text-sm bg-background"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="pt">Português</option>
              </select>
            </div>

          </div>
        </nav>
      )}
    </header>
  );
}