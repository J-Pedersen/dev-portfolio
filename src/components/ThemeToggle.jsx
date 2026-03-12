import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    // Load saved preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    // Fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply theme to <html> + persist
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle theme"
      className="
        ml-2 inline-flex items-center justify-center h-8 w-8 rounded-full 
        transition-colors duration-200

        /* Light mode */
        bg-white border border-brand-soft text-slate-700 
        hover:border-slate-300 hover:text-brand

        /* Dark mode */
        dark:bg-slate-900 dark:border-brand-soft dark:text-slate-200 
        dark:hover:border-slate-700 dark:hover:text-brand-soft
      "
    >
      <span className="transition-transform duration-300">
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
};

export default ThemeToggle;