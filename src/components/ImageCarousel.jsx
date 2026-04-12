import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const current = images[currentIndex];

  return (
    <div
      className="
        rounded-2xl overflow-hidden
        border border-brand-soft
        bg-slate-100 dark:bg-slate-900
        shadow-[0_4px_20px_rgba(99,102,241,0.15)]
      "
    >
      <div className="relative">
        <img
          src={current.src}
          alt={current.alt || current.title || `Screenshot ${currentIndex + 1}`}
          className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="
                absolute left-3 top-1/2 -translate-y-1/2
                inline-flex h-10 w-10 items-center justify-center rounded-full
                border border-brand-soft
                bg-slate-100/90 dark:bg-slate-900/90
                text-slate-800 dark:text-slate-100
                hover:border-brand hover:text-brand
                transition
              "
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                inline-flex h-10 w-10 items-center justify-center rounded-full
                border border-brand-soft
                bg-slate-100/90 dark:bg-slate-900/90
                text-slate-800 dark:text-slate-100
                hover:border-brand hover:text-brand
                transition
              "
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      <div className="px-4 py-3 bg-brand-soft/30 border-t border-brand-soft">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
            {current.title || `Screenshot ${currentIndex + 1}`}
          </p>

          {images.length > 1 && (
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {currentIndex + 1} / {images.length}
            </p>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="px-4 py-3 border-t border-brand-soft/40">
          <div className="flex flex-wrap justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`
                  h-2.5 w-2.5 rounded-full transition
                  ${
                    index === currentIndex
                      ? "bg-brand"
                      : "bg-slate-300 dark:bg-slate-700"
                  }
                `}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;