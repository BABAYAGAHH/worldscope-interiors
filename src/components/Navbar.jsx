import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/site";
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
        <div
          className={`container-shell transition-all duration-300 ${
            scrolled ? "glass-panel py-3" : "rounded-[30px] py-4"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white shadow-soft">
                W
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Premium Service
                </p>
                <p className="text-base font-bold text-slate-900 sm:text-lg">
                  Worldscope Interiors
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-primary" : ""}`
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
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/90 text-slate-800 shadow-soft transition hover:border-primary/25 hover:text-primary lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Navbar;
