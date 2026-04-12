import { Link } from "react-router-dom";

const Breadcrumbs = ({
  current,
  parentLabel = null,
  parentTo = null,
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-xs text-slate-500 dark:text-slate-400"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Link
          to="/"
          className="hover:text-brand dark:hover:text-brand-soft transition"
        >
          Home
        </Link>

        {parentLabel && parentTo && (
          <>
            <span>/</span>
            <Link
              to={parentTo}
              className="hover:text-brand dark:hover:text-brand-soft transition"
            >
              {parentLabel}
            </Link>
          </>
        )}

        {current && (
          <>
            <span>/</span>
            <span className="text-slate-700 dark:text-slate-200">
              {current}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Breadcrumbs;