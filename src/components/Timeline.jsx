import { motion, useScroll, useVelocity, useSpring, useInView } from "framer-motion";
import { useEffect, useMemo, useState, useRef } from "react";

// --- URL auto-link helper ---
const linkify = (text) => {
  if (!text) return text;

  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;

  return text.split(urlRegex).map((part, i) => {
    if (urlRegex.test(part)) {
      const href = part.startsWith("http") ? part : `https://${part}`;
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-brand dark:text-brand-soft underline hover:text-brand-soft transition"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

// Group by year
const groupByYear = (items) => {
  const groups = {};
  items.forEach((item) => {
    const year = (item.period || "").match(/\d{4}/)?.[0] || "Other";
    if (!groups[year]) groups[year] = [];
    groups[year].push(item);
  });
  return groups;
};

const Timeline = ({ items, mobile = false }) => {
  const grouped = useMemo(() => groupByYear(items), [items]);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { stiffness: 50, damping: 20 });

  const [direction, setDirection] = useState("down");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return smoothVelocity.on("change", (v) => {
      if (v > 1) setDirection("down");
      else if (v < -1) setDirection("up");
    });
  }, [smoothVelocity]);

  const glowBase = isDark
    ? "rgba(165, 180, 252, 0.25)"
    : "rgba(99, 102, 241, 0.18)";

  const glowActive = isDark
    ? "rgba(165, 180, 252, 0.45)"
    : "rgba(99, 102, 241, 0.35)";

  return (
    <aside
      className={`
        ${mobile ? "" : "hidden md:block sticky top-24 h-[80vh] overflow-y-auto pr-4"}
        bg-slate-100 dark:bg-slate-900/60
        border border-slate-300 dark:border-slate-800
        rounded-2xl p-4
      `}
    >
      <div
        className={`
          relative 
          ${mobile ? "space-y-10" : "border-r border-slate-300/60 dark:border-slate-700/60 mr-4 pr-6 space-y-10"}
        `}
      >
        {Object.entries(grouped).map(([year, entries]) => (
          <div key={year} className="space-y-8">
            {/* YEAR HEADER */}
            <div
              className={`
                px-3 py-2 font-semibold text-slate-900 dark:text-slate-100
                ${mobile
                  ? "border-b border-slate-300 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur shadow-sm"
                  : "sticky top-0 bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-300/70 dark:border-slate-700/70 rounded-md shadow-sm"
                }
              `}
            >
              {year}
            </div>

            {/* ENTRIES */}
            {entries.map((item, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { amount: 0.45 });

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: smoothVelocity.get() * 0.1,
                  }}
                  viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`relative space-y-2 transition-opacity duration-300 ${
                    isInView ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {/* TITLE PILL */}
                  <motion.div className="w-full flex justify-center">
                    <motion.span
                      className="
                        inline-block
                        px-3 py-1
                        text-xs font-semibold
                        rounded-full
                        bg-slate-200 text-slate-700
                        dark:bg-slate-800 dark:text-slate-200
                        border border-slate-300 dark:border-slate-700
                        text-center
                      "
                      style={{
                        boxShadow: `0 0 8px ${glowBase}`,
                      }}
                      animate={{
                        boxShadow: isInView
                          ? `0 0 14px ${glowActive}`
                          : `0 0 8px ${glowBase}`,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      {item.title}
                    </motion.span>
                  </motion.div>

                  {/* DATE */}
                  {item.period && (
                    <p
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isInView
                          ? "text-brand dark:text-brand-soft"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {item.period}
                    </p>
                  )}

                  {/* DESCRIPTION */}
                  {item.description && (
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isInView
                          ? "text-slate-700 dark:text-slate-300"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {linkify(item.description)}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Timeline;