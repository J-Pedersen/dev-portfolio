import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

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

  const sunIcon = `${import.meta.env.BASE_URL}icons/sun-icon.svg`;
  const moonIcon = `${import.meta.env.BASE_URL}icons/moon-icon.svg`;

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle theme"
      className="
        ml-2 inline-flex items-center justify-center h-8 w-8 rounded-full
        border border-transparent hover:bg-brand hover:border-brand 
        hover:shadow-lg hover:shadow-brand/30
      bg-slate-200 dark:bg-slate-840
      "

    >
      <img
        src={dark ? sunIcon : moonIcon}
        alt={dark ? "Switch to light mode" : "Switch to dark mode"}
        className="w-5 h-5 transition-transform duration-300
        "
      />
    </button>
  );
};

export default ThemeToggle;