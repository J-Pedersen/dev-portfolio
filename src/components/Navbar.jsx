import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle.jsx";

const navLinkClasses = ({ isActive }) =>
  `
    px-3 py-1 rounded-full text-sm font-medium transition-colors
    ${
      isActive
        ? `
          group rounded-2xl p-4 flex flex-col gap-3 transition
          border
          border-brand-soft 
          bg-slate-100 
          hover:bg-slate-50 
          hover:border-brand 
          hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]
          dark:bg-slate-900/60 
          dark:hover:bg-slate-950
          dark:hover:border-brand
          dark:border-brand-soft
        `
        : `
          group rounded-2xl p-4 flex flex-col gap-3 transition
          hover:bg-slate-50 
          hover:border
          hover:border-brand-soft 
          hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]
          dark:hover:bg-slate-950
          dark:hover:border-brand-soft
        `
    }
  `;

const mobileNavLinkClasses = ({ isActive }) =>
  `
    block w-full rounded-xl px-4 py-3 text-sm font-medium transition-colors
    ${
      isActive
        ? `
          bg-slate-200 text-slate-900
          dark:bg-slate-700 dark:text-white
        `
        : `
          text-slate-700 hover:bg-slate-200 hover:text-slate-900
          dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white
        `
    }
  `;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setMobileOpen(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="
          sticky top-0 z-30 backdrop-blur
          border-b
          bg-slate-100/80 
          text-slate-900
          dark:text-slate-100
          transition-colors
          border-brand-soft 
          bg-slate-100 
          dark:bg-slate-900/60 
          dark:border-brand-soft
        "
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white font-bold">
                JP
              </span>
              <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                Jeff Pedersen
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 sm:gap-4">
              <NavLink to="/projects" className={navLinkClasses}>
                Projects
              </NavLink>

              <NavLink to="/case-studies" className={navLinkClasses}>
                Case Studies
              </NavLink>

              <NavLink to="/about" className={navLinkClasses}>
                About
              </NavLink>

              <NavLink to="/skills" className={navLinkClasses}>
                Skills
              </NavLink>

              <NavLink to="/resume" className={navLinkClasses}>
                Resume
              </NavLink>

              <NavLink to="/contact" className={navLinkClasses}>
                Contact
              </NavLink>

              <ThemeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="
                  inline-flex h-10 w-10 items-center justify-center rounded-xl
                  border border-brand-soft bg-slate-100 text-slate-700
                  hover:bg-slate-200
                  dark:border-brand-soft dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800
                  transition-colors
                "
              >
                {mobileOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-40">
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={closeMobileMenu}
              className="absolute inset-0 w-full h-full bg-slate-950/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Overlay panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="
                absolute top-16 left-4 right-4
                rounded-2xl border border-slate-300 bg-slate-100/95 p-4 shadow-xl
                dark:border-slate-800 dark:bg-slate-900/95
              "
            >
              <div className="flex flex-col gap-2">
                <NavLink to="/projects" className={mobileNavLinkClasses} onClick={closeMobileMenu}>
                  Projects
                </NavLink>

                <NavLink to="/case-studies" className={mobileNavLinkClasses} onClick={closeMobileMenu}>
                  Case Studies
                </NavLink>

                <NavLink to="/about" className={mobileNavLinkClasses} onClick={closeMobileMenu}>
                  About
                </NavLink>

                <NavLink to="/skills" className={mobileNavLinkClasses} onClick={closeMobileMenu}>
                  Skills
                </NavLink>

                <NavLink to="/resume" className={mobileNavLinkClasses} onClick={closeMobileMenu}>
                  Resume
                </NavLink>

                <NavLink to="/contact" className={mobileNavLinkClasses} onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;