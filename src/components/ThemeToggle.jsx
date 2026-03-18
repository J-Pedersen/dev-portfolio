import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateCanHover = () => {
      setCanHover(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsHovered(false);
      }
    };

    updateCanHover();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateCanHover);
      return () => mediaQuery.removeEventListener("change", updateCanHover);
    } else {
      mediaQuery.addListener(updateCanHover);
      return () => mediaQuery.removeListener(updateCanHover);
    }
  }, []);

  const sunIcon = `${import.meta.env.BASE_URL}icons/sun-icon.svg`;
  const moonIcon = `${import.meta.env.BASE_URL}icons/moon-icon.svg`;
  const moonHoverIcon = `${import.meta.env.BASE_URL}icons/moon-icon-hover.svg`;

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      onMouseEnter={() => {
        if (!dark && canHover) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (canHover) setIsHovered(false);
      }}
      aria-label="Toggle theme"
      className="
        ml-2 inline-flex items-center justify-center h-8 w-8 rounded-full 
        transition-colors duration-200
        border border-transparent
        bg-slate-200
        dark:bg-slate-900
        hover:border-brand
        hover:bg-brand
        dark:hover:bg-brand
        hover:shadow-lg hover:shadow-brand/30
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