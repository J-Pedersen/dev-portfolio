import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const ImageCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  if (!images.length) return null;

  const current = images[currentIndex];
  const minSwipeDistance = 50;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) {
      goNext();
    } else if (distance < -minSwipeDistance) {
      goPrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isFullscreen) {
        if (e.key === "Escape") closeFullscreen();
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  return (
    <>
      <div
        className="
          rounded-2xl overflow-hidden
          border border-brand-soft
          bg-slate-100 dark:bg-slate-900
          shadow-[0_4px_20px_rgba(99,102,241,0.15)]
        "
      >
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="bg-slate-200 dark:bg-slate-800 flex items-center justify-center relative">
            <img
              src={current.src}
              alt={current.alt || current.title || `Screenshot ${currentIndex + 1}`}
              className="
                w-full h-[260px] sm:h-[340px] md:h-[420px]
                object-contain cursor-zoom-in
              "
              onClick={openFullscreen}
            />

            <button
              type="button"
              onClick={openFullscreen}
              className="
                absolute top-3 right-3
                inline-flex h-9 w-9 items-center justify-center rounded-full
                border border-brand-soft
                bg-slate-100/90 dark:bg-slate-900/90
                text-slate-800 dark:text-slate-100
                hover:border-brand hover:text-brand
                transition
              "
              aria-label="Open fullscreen image"
            >
              <Maximize2 size={16} />
            </button>
          </div>

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
          <div className="px-4 py-4 border-t border-brand-soft/40 space-y-3">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {images.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    shrink-0 rounded-xl overflow-hidden border-2 transition
                    ${
                      index === currentIndex
                        ? "border-brand shadow-[0_0_0_1px_rgba(99,102,241,0.25)]"
                        : "border-transparent hover:border-brand-soft"
                    }
                  `}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt || image.title || `Thumbnail ${index + 1}`}
                    className="h-16 w-24 object-cover bg-slate-200 dark:bg-slate-800"
                  />
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {images.map((image, index) => (
                <button
                  key={`dot-${image.src}-${index}`}
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

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeFullscreen}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={closeFullscreen}
            className="
              absolute top-4 right-4 z-10
              inline-flex h-10 w-10 items-center justify-center rounded-full
              border border-white/20
              bg-white/10 text-white
              hover:bg-white/20 transition
            "
            aria-label="Close fullscreen image"
          >
            <X size={18} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="
                  absolute left-4 top-1/2 -translate-y-1/2 z-10
                  inline-flex h-11 w-11 items-center justify-center rounded-full
                  border border-white/20
                  bg-white/10 text-white
                  hover:bg-white/20 transition
                "
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="
                  absolute right-4 top-1/2 -translate-y-1/2 z-10
                  inline-flex h-11 w-11 items-center justify-center rounded-full
                  border border-white/20
                  bg-white/10 text-white
                  hover:bg-white/20 transition
                "
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div
            className="max-w-[95vw] max-h-[90vh] flex flex-col items-center px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt || current.title || `Screenshot ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />

            <div className="mt-4 text-center text-white">
              <p className="text-sm font-medium">
                {current.title || `Screenshot ${currentIndex + 1}`}
              </p>
              {images.length > 1 && (
                <p className="text-xs text-white/70 mt-1">
                  {currentIndex + 1} / {images.length}
                </p>
              )}
            </div>

            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto max-w-full pb-2">
                {images.map((image, index) => (
                  <button
                    key={`fullscreen-thumb-${image.src}-${index}`}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`
                      shrink-0 rounded-lg overflow-hidden border-2 transition
                      ${
                        index === currentIndex
                          ? "border-white"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }
                    `}
                    aria-label={`Go to fullscreen image ${index + 1}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt || image.title || `Fullscreen thumbnail ${index + 1}`}
                      className="h-14 w-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;