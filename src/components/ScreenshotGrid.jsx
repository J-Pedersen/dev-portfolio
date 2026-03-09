import { useState } from "react";
import Lightbox from "./Lightbox.jsx";

const ScreenshotGrid = ({ items }) => {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(item)}
            className="
              group relative overflow-hidden rounded-xl
              border border-slate-300 bg-white 
              dark:border-slate-700 dark:bg-slate-900
              hover:border-brand-soft transition
            "
          >
            <img
              src={item.src}
              alt={item.title}
              className="aspect-video object-cover w-full group-hover:scale-105 transition"
            />
            <div
              className="
                absolute bottom-0 left-0 right-0
                bg-gradient-to-t from-black/60 to-transparent
                p-2 text-xs text-white
              "
            >
              {item.title}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <Lightbox item={active} onClose={() => setActive(null)} />
      )}
    </>
  );
};

export default ScreenshotGrid;