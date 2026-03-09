import { Link } from "react-router-dom";

const Breadcrumbs = ({ current }) => {
  return (
    <nav
      className="
        text-xs mb-4 flex items-center gap-1
        text-slate-600 dark:text-slate-400
      "
    >
      <Link
        to="/"
        className="
          hover:text-brand transition
          text-slate-700 dark:text-slate-300
        "
      >
        Home
      </Link>

      <span className="text-slate-500 dark:text-slate-600">/</span>

      <Link
        to="/case-studies"
        className="
          hover:text-brand transition
          text-slate-700 dark:text-slate-300
        "
      >
        Case Studies
      </Link>

      <span className="text-slate-500 dark:text-slate-600">/</span>

      <span
        className="
          text-slate-900 dark:text-slate-200 font-medium
        "
      >
        {current}
      </span>
    </nav>
  );
};

export default Breadcrumbs;