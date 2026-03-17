import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, siteConfig } from "../data/site";

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
            className="ml-auto flex h-full w-full max-w-sm flex-col bg-white px-6 pb-8 pt-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Worldscope
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-slate-900">
                  Interiors
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-primary/30 hover:text-primary"
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
                    `block rounded-2xl px-4 py-3 text-base font-semibold transition ${
                      isActive
                        ? "bg-primary text-white shadow-soft"
                        : "bg-slate-50 text-slate-700 hover:bg-primary/5 hover:text-primary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto rounded-[28px] bg-slate-900 p-6 text-white shadow-panel">
              <p className="text-sm text-slate-300">
                Ready to discuss your space or schedule a cleaning session?
              </p>
              <p className="mt-3 text-lg font-semibold">{siteConfig.phoneDisplay}</p>
              <Link
                to="/quote"
                onClick={onClose}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
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
