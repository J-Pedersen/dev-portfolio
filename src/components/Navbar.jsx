import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const navLinkClasses = ({ isActive }) =>
  `
    px-3 py-1 rounded-full text-sm font-medium transition-colors
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

const Navbar = () => (
  <header
    className="
      sticky top-0 z-20 backdrop-blur
      bg-slate-100/80 text-slate-900
      dark:bg-slate-750/80 dark:text-slate-100
      border-b border-slate-200 dark:border-slate-800
      transition-colors
    "
  >
    <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-16 py-3">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white font-bold">
          JP
        </span>
        <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
          Jeff Pedersen
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-2 sm:gap-4">

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

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </nav>
  </header>
);

export default Navbar;