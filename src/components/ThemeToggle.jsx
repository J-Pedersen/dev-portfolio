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

          hover:bg-slate-50 
          border border-transparent
          hover:border-brand-soft 
          hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]
          dark:hover:bg-slate-950
      "
    >
      <span className="transition-transform duration-300">
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
};

export default ThemeToggle;