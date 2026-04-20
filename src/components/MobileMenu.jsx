import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, siteConfig } from "../data/site";
import BrandLogo from "./BrandLogo";

function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
            className="ml-auto flex h-full w-full max-w-sm flex-col bg-[rgba(255,250,245,0.98)] px-6 pb-8 pt-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3">
              <BrandLogo className="min-w-0" />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white/80 text-slate-700 shadow-soft hover:border-primary/30 hover:text-primary"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block rounded-[22px] px-4 py-3 text-base font-semibold transition ${
                      isActive
                        ? "bg-primary text-white shadow-soft"
                        : "bg-white/80 text-slate-700 hover:bg-primary/5 hover:text-primary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto rounded-[30px] bg-slate-900 p-6 text-white shadow-panel">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                Contact
              </p>
              <p className="mt-3 text-lg font-semibold">{siteConfig.phoneDisplay}</p>
              <div className="mt-4 flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>{siteConfig.addressPlaceholder}</span>
              </div>
              <Link
                to="/quote"
                onClick={onClose}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileMenu;

