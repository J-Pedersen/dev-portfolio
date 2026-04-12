import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2, Play } from "lucide-react";

const MediaCarousel = ({ media = [] }) => {
  const initialIndex = useMemo(() => {
    const firstVideoIndex = media.findIndex((item) => item.type === "video");
    return firstVideoIndex >= 0 ? firstVideoIndex : 0;
  }, [media]);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (!media.length) return null;

  const current = media[currentIndex];
  const minSwipeDistance = 50;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) goNext();
    if (distance < -minSwipeDistance) goPrev();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullscreen) return;

      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = isFullscreen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  return (
    <>
      <div className="rounded-2xl overflow-hidden border border-brand-soft bg-slate-100 dark:bg-slate-900 min-w-0">

        {/* MAIN MEDIA */}
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="bg-slate-200 dark:bg-slate-800 flex items-center justify-center relative">

            {current.type === "image" && (
              <>
                <img
                  src={current.src}
                  alt={current.alt || current.title}
                  className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-contain cursor-zoom-in"
                  onClick={() => setIsFullscreen(true)}
                />

                <button
                  type="button"
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-3 right-3 h-9 w-9 rounded-full border border-brand-soft bg-slate-100/90 dark:bg-slate-900/90 flex items-center justify-center"
                >
                  <Maximize2 size={16} />
                </button>
              </>
            )}

            {current.type === "video" && (
              <video
                controls
                poster={current.poster}
                className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-contain bg-black"
              >
                <source src={current.src} type="video/mp4" />
              </video>
            )}
          </div>

          {!isTouchDevice && media.length > 1 && (
            <>
              <button onClick={goPrev} className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 flex items-center justify-center">
                <ChevronLeft />
              </button>

              <button onClick={goNext} className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 flex items-center justify-center">
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        {/* TITLE */}
        <div className="px-4 py-3 bg-brand-soft/30 border-t border-brand-soft text-sm text-center">
          {current.title}
        </div>

        {/* THUMBNAILS (FIXED) */}
        {media.length > 1 && (
          <div className="p-4 border-t border-brand-soft min-w-0">
            <div
              className="
                w-full overflow-x-auto overflow-y-hidden pb-2
                [-ms-overflow-style:none] [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              <div className="flex gap-3 w-max">
                {media.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`
                      shrink-0 rounded-xl overflow-hidden border-2 transition
                      ${
                        index === currentIndex
                          ? "border-brand"
                          : "border-transparent hover:border-brand-soft"
                      }
                    `}
                  >
                    {item.type === "image" ? (
                      <div className="h-16 sm:h-20 px-2 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                        <img
                          src={item.src}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="h-16 sm:h-20 min-w-[110px] px-3 bg-black flex items-center justify-center gap-2 text-white">
                        <Play size={16} />
                        <span className="text-xs whitespace-nowrap">Video</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FULLSCREEN unchanged */}
      {isFullscreen && current.type === "image" && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center" onClick={() => setIsFullscreen(false)}>
          <button className="absolute top-4 right-4 text-white">
            <X size={20} />
          </button>

          <img src={current.src} className="max-w-full max-h-[85vh] object-contain" />
        </div>
      )}
    </>
  );
};

export default MediaCarousel;