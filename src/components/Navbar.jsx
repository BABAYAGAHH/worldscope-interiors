import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, siteConfig } from "../data/site";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-3 py-3 sm:px-5">
        <div className="container-shell">
          <div
            className={`rounded-full border border-primary/10 px-4 py-3 transition-all duration-300 ${
              scrolled
                ? "bg-[rgba(255,252,247,0.94)] shadow-panel backdrop-blur-xl"
                : "bg-[rgba(255,250,245,0.74)] backdrop-blur-md"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <Link to="/" className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 text-lg font-bold text-white shadow-soft" style={{ background: "linear-gradient(135deg, #7a5a47 0%, #593f31 100%)" }}>
                  W
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-primary/80">
                    Port Harcourt Studio
                  </p>
                  <p className="truncate text-base font-semibold tracking-[-0.02em] text-slate-900 sm:text-lg">
                    Worldscope Interiors
                  </p>
                </div>
              </Link>

              <div className="hidden items-center gap-3 xl:flex">
                <span className="rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                  {siteConfig.phoneDisplay}
                </span>
              </div>

              <nav className="hidden items-center rounded-full border border-primary/10 bg-white/65 px-2 py-1 lg:flex">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "bg-primary/10 text-primary" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <Link to="/quote" className="primary-button hidden lg:inline-flex">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-white/90 text-slate-800 shadow-soft hover:border-primary/25 hover:text-primary lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Navbar;

