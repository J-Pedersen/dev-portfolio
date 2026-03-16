import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isHovered, setIsHovered] = useState(false);

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
  const moonHoverIcon = `${import.meta.env.BASE_URL}icons/moon-icon-hover.svg`;

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Toggle theme"
      className="
        ml-2 inline-flex items-center justify-center h-8 w-8 rounded-full 
        transition-colors duration-200
        border border-transparent
        hover:border-brand-soft
        hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]
        hover:bg-brand/40
      "
    >
      <img
        src={dark ? sunIcon : isHovered ? moonHoverIcon : moonIcon}
        alt={dark ? "Switch to light mode" : "Switch to dark mode"}
        className="w-6 h-6 transition-transform duration-300"
      />
    </button>
  );
};

export default ThemeToggle;