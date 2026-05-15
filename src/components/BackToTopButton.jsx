import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = ({
  showAfter = 300,
  label = "Top",
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed bottom-6 right-6 z-40
        px-4 py-2 text-xs font-medium rounded-full
        transition-all duration-300
        shadow-lg
        flex items-center gap-2

        /* Light mode */
        bg-white text-slate-700
        border border-slate-300
        shadow-black/10
        hover:bg-brand
        hover:text-white
        hover:border-brand-soft
        hover:scale-105

        /* Dark mode */
        dark:bg-slate-900
        dark:text-slate-200
        dark:border-slate-700
        dark:shadow-black/30
        dark:hover:bg-brand
        dark:hover:text-white
        dark:hover:border-brand-soft
      "
    >
      <ArrowUp size={14} />
      {label}
    </button>
  );
};

export default BackToTopButton;