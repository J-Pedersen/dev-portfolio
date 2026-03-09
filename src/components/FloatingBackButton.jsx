import { Link } from "react-router-dom";

const FloatingBackButton = () => {
  return (
    <Link
      to="/case-studies"
      className="
        fixed bottom-6 right-6 z-40
        px-4 py-2 text-xs font-medium rounded-full transition-colors
        shadow-lg

        /* Light mode */
        bg-white text-slate-700 border border-slate-300 shadow-black/10
        hover:bg-brand hover:text-white hover:border-brand-soft

        /* Dark mode */
        dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700 dark:shadow-black/30
        dark:hover:bg-brand dark:hover:text-white dark:hover:border-brand-soft
      "
    >
      ← Back to Case Studies
    </Link>
  );
};

export default FloatingBackButton;