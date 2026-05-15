import { useEffect } from "react";

const ThemeToggle = () => {
  useEffect(() => {
    const root = document.documentElement;

    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return null;
};

export default ThemeToggle;