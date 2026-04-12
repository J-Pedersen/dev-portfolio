import { useEffect, useMemo, useRef, useState } from "react";
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

  const [canScrollThumbsLeft, setCanScrollThumbsLeft] = useState(false);
  const [canScrollThumbsRight, setCanScrollThumbsRight] = useState(false);
  const [canScrollFullscreenLeft, setCanScrollFullscreenLeft] = useState(false);
  const [canScrollFullscreenRight, setCanScrollFullscreenRight] = useState(false);

  const thumbStripRef = useRef(null);
  const fullscreenThumbStripRef = useRef(null);
  const thumbButtonRefs = useRef([]);
  const fullscreenThumbButtonRefs = useRef([]);

  const isDraggingThumbsRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const updateScrollButtons = (ref, setLeft, setRight) => {
    const el = ref.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const currentLeft = el.scrollLeft;
    const epsilon = 2;

    setLeft(currentLeft > epsilon);
    setRight(currentLeft < maxScrollLeft - epsilon);
  };

  useEffect(() => {
    updateScrollButtons(
      thumbStripRef,
      setCanScrollThumbsLeft,
      setCanScrollThumbsRight
    );
    updateScrollButtons(
      fullscreenThumbStripRef,
      setCanScrollFullscreenLeft,
      setCanScrollFullscreenRight
    );
  }, [media.length, isFullscreen]);

  useEffect(() => {
    const activeThumb = thumbButtonRefs.current[currentIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      requestAnimationFrame(() => {
        updateScrollButtons(
          thumbStripRef,
          setCanScrollThumbsLeft,
          setCanScrollThumbsRight
        );
      });
    }

    const activeFullscreenThumb = fullscreenThumbButtonRefs.current[currentIndex];
    if (activeFullscreenThumb) {
      activeFullscreenThumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      requestAnimationFrame(() => {
        updateScrollButtons(
          fullscreenThumbStripRef,
          setCanScrollFullscreenLeft,
          setCanScrollFullscreenRight
        );
      });
    }
  }, [currentIndex]);

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

  const handleThumbMouseDown = (e, ref) => {
    if (!ref.current) return;
    isDraggingThumbsRef.current = true;
    dragStartXRef.current = e.pageX;
    dragStartScrollLeftRef.current = ref.current.scrollLeft;
  };

  const handleThumbMouseMove = (e, ref, setLeft, setRight) => {
    if (!isDraggingThumbsRef.current || !ref.current) return;
    e.preventDefault();
    const walk = e.pageX - dragStartXRef.current;
    ref.current.scrollLeft = dragStartScrollLeftRef.current - walk;
    updateScrollButtons(ref, setLeft, setRight);
  };

  const stopThumbDragging = () => {
    isDraggingThumbsRef.current = false;
  };

  const scrollThumbsBy = (ref, amount, setLeft, setRight) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
    window.setTimeout(() => {
      updateScrollButtons(ref, setLeft, setRight);
    }, 250);
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
                  className="
                    absolute top-3 right-3
                    h-9 w-9 rounded-full
                    border border-brand-soft
                    bg-slate-100/90 dark:bg-slate-900/90
                    flex items-center justify-center
                    text-slate-800 dark:text-slate-100
                    hover:border-brand hover:text-brand
                    transition
                  "
                  aria-label="Open fullscreen image"
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
              <button
                type="button"
                onClick={goPrev}
                className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  h-10 w-10 rounded-full
                  border border-brand-soft
                  bg-slate-100/90 dark:bg-slate-900/90
                  flex items-center justify-center
                  text-slate-800 dark:text-slate-100
                  hover:border-brand hover:text-brand
                  transition
                "
                aria-label="Previous media"
              >
                <ChevronLeft />
              </button>

              <button
                type="button"
                onClick={goNext}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  h-10 w-10 rounded-full
                  border border-brand-soft
                  bg-slate-100/90 dark:bg-slate-900/90
                  flex items-center justify-center
                  text-slate-800 dark:text-slate-100
                  hover:border-brand hover:text-brand
                  transition
                "
                aria-label="Next media"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        <div className="px-4 py-3 bg-brand-soft/30 border-t border-brand-soft text-sm text-center">
          {current.title}
        </div>

        {media.length > 1 && (
          <div className="p-4 border-t border-brand-soft min-w-0">
            <div className="relative">
              {!isTouchDevice && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      scrollThumbsBy(
                        thumbStripRef,
                        -220,
                        setCanScrollThumbsLeft,
                        setCanScrollThumbsRight
                      )
                    }
                    disabled={!canScrollThumbsLeft}
                    className={`
                      absolute left-0 top-1/2 -translate-y-1/2 z-10
                      h-9 w-9 rounded-full
                      border border-brand-soft
                      bg-slate-100/95 dark:bg-slate-900/95
                      flex items-center justify-center
                      text-slate-800 dark:text-slate-100
                      transition
                      ${
                        canScrollThumbsLeft
                          ? "hover:border-brand hover:text-brand opacity-100"
                          : "opacity-30 cursor-default pointer-events-none"
                      }
                    `}
                    aria-label="Scroll thumbnails left"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      scrollThumbsBy(
                        thumbStripRef,
                        220,
                        setCanScrollThumbsLeft,
                        setCanScrollThumbsRight
                      )
                    }
                    disabled={!canScrollThumbsRight}
                    className={`
                      absolute right-0 top-1/2 -translate-y-1/2 z-10
                      h-9 w-9 rounded-full
                      border border-brand-soft
                      bg-slate-100/95 dark:bg-slate-900/95
                      flex items-center justify-center
                      text-slate-800 dark:text-slate-100
                      transition
                      ${
                        canScrollThumbsRight
                          ? "hover:border-brand hover:text-brand opacity-100"
                          : "opacity-30 cursor-default pointer-events-none"
                      }
                    `}
                    aria-label="Scroll thumbnails right"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}

              <div
                ref={thumbStripRef}
                className={`
                  w-full overflow-x-auto overflow-y-hidden pb-2
                  cursor-grab active:cursor-grabbing
                  [-ms-overflow-style:none] [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                  ${!isTouchDevice ? "px-10" : ""}
                `}
                onScroll={() =>
                  updateScrollButtons(
                    thumbStripRef,
                    setCanScrollThumbsLeft,
                    setCanScrollThumbsRight
                  )
                }
                onMouseDown={(e) => handleThumbMouseDown(e, thumbStripRef)}
                onMouseMove={(e) =>
                  handleThumbMouseMove(
                    e,
                    thumbStripRef,
                    setCanScrollThumbsLeft,
                    setCanScrollThumbsRight
                  )
                }
                onMouseUp={stopThumbDragging}
                onMouseLeave={stopThumbDragging}
              >
                <div className="flex gap-3 w-max">
                  {media.map((item, index) => (
                    <button
                      key={index}
                      ref={(el) => {
                        thumbButtonRefs.current[index] = el;
                      }}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      className={`
                        shrink-0 rounded-xl overflow-hidden border-2 transition
                        ${
                          index === currentIndex
                            ? "border-brand"
                            : "border-transparent hover:border-brand-soft"
                        }
                      `}
                      aria-label={`Go to media ${index + 1}`}
                    >
                      {item.type === "image" ? (
                        <div className="h-16 sm:h-20 px-2 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                          <img
                            src={item.src}
                            alt={item.alt || item.title}
                            className="h-full w-auto object-contain"
                            draggable="false"
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
          </div>
        )}
      </div>

      {isFullscreen && current.type === "image" && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            type="button"
            className="
              absolute top-4 right-4 text-white
              h-10 w-10 rounded-full
              border border-white/20
              bg-white/10
              flex items-center justify-center
              hover:bg-white/20 transition
            "
            aria-label="Close fullscreen"
          >
            <X size={20} />
          </button>

          {!isTouchDevice && media.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="
                  absolute left-4 top-1/2 -translate-y-1/2
                  h-11 w-11 rounded-full
                  border border-white/20
                  bg-white/10 text-white
                  flex items-center justify-center
                  hover:bg-white/20 transition
                "
                aria-label="Previous image"
              >
                <ChevronLeft />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  h-11 w-11 rounded-full
                  border border-white/20
                  bg-white/10 text-white
                  flex items-center justify-center
                  hover:bg-white/20 transition
                "
                aria-label="Next image"
              >
                <ChevronRight />
              </button>
            </>
          )}

          <div
            className="max-w-[95vw] max-h-[90vh] flex flex-col items-center px-6"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={current.src}
              alt={current.alt || current.title}
              className="max-w-full max-h-[80vh] object-contain"
            />

            <div className="mt-4 text-center text-white">
              <p className="text-sm font-medium">{current.title}</p>
              {media.length > 1 && (
                <p className="text-xs text-white/70 mt-1">
                  {currentIndex + 1} / {media.length}
                </p>
              )}
            </div>

            {media.length > 1 && (
              <div className="relative mt-4 w-full max-w-full">
                {!isTouchDevice && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        scrollThumbsBy(
                          fullscreenThumbStripRef,
                          -220,
                          setCanScrollFullscreenLeft,
                          setCanScrollFullscreenRight
                        )
                      }
                      disabled={!canScrollFullscreenLeft}
                      className={`
                        absolute left-0 top-1/2 -translate-y-1/2 z-10
                        h-9 w-9 rounded-full
                        border border-white/20
                        bg-white/10 text-white
                        flex items-center justify-center
                        transition
                        ${
                          canScrollFullscreenLeft
                            ? "hover:bg-white/20 opacity-100"
                            : "opacity-30 cursor-default pointer-events-none"
                        }
                      `}
                      aria-label="Scroll fullscreen thumbnails left"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        scrollThumbsBy(
                          fullscreenThumbStripRef,
                          220,
                          setCanScrollFullscreenLeft,
                          setCanScrollFullscreenRight
                        )
                      }
                      disabled={!canScrollFullscreenRight}
                      className={`
                        absolute right-0 top-1/2 -translate-y-1/2 z-10
                        h-9 w-9 rounded-full
                        border border-white/20
                        bg-white/10 text-white
                        flex items-center justify-center
                        transition
                        ${
                          canScrollFullscreenRight
                            ? "hover:bg-white/20 opacity-100"
                            : "opacity-30 cursor-default pointer-events-none"
                        }
                      `}
                      aria-label="Scroll fullscreen thumbnails right"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}

                <div
                  ref={fullscreenThumbStripRef}
                  className={`
                    w-full max-w-full overflow-x-auto overflow-y-hidden pb-2
                    cursor-grab active:cursor-grabbing
                    [-ms-overflow-style:none] [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                    ${!isTouchDevice ? "px-10" : ""}
                  `}
                  onScroll={() =>
                    updateScrollButtons(
                      fullscreenThumbStripRef,
                      setCanScrollFullscreenLeft,
                      setCanScrollFullscreenRight
                    )
                  }
                  onMouseDown={(e) =>
                    handleThumbMouseDown(e, fullscreenThumbStripRef)
                  }
                  onMouseMove={(e) =>
                    handleThumbMouseMove(
                      e,
                      fullscreenThumbStripRef,
                      setCanScrollFullscreenLeft,
                      setCanScrollFullscreenRight
                    )
                  }
                  onMouseUp={stopThumbDragging}
                  onMouseLeave={stopThumbDragging}
                >
                  <div className="flex gap-3 w-max">
                    {media.map((item, index) => (
                      <button
                        key={`fullscreen-${index}`}
                        ref={(el) => {
                          fullscreenThumbButtonRefs.current[index] = el;
                        }}
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
                        aria-label={`Go to fullscreen media ${index + 1}`}
                      >
                        {item.type === "image" ? (
                          <div className="h-14 px-2 bg-slate-900 flex items-center justify-center">
                            <img
                              src={item.src}
                              alt={item.alt || item.title}
                              className="h-full w-auto object-contain"
                              draggable="false"
                            />
                          </div>
                        ) : (
                          <div className="h-14 min-w-[90px] px-3 bg-black flex items-center justify-center gap-2 text-white">
                            <Play size={14} />
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
        </div>
      )}
    </>
  );
};

export default MediaCarousel;