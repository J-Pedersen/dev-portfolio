// src/pages/Gallery.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { galleryImages, galleryVideos } from "../data/galleryMedia.js";

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState("All");
  const [mediaFilter, setMediaFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openImageProject, setOpenImageProject] = useState(null);

  const accordionRefs = useRef({});

  const hasActiveFilters =
    selectedProject !== "All" ||
    mediaFilter !== "All" ||
    searchTerm.trim() !== "";

  const projectFilters = useMemo(() => {
    const projects = [...galleryImages, ...galleryVideos].map(
      (item) => item.project
    );

    return ["All", ...new Set(projects)];
  }, []);

  const matchesGalleryFilter = (item) => {
    const normalizedSearch = searchTerm.toLowerCase().trim();

    const matchesProject =
      selectedProject === "All" || item.project === selectedProject;

    const matchesSearch =
      item.title.toLowerCase().includes(normalizedSearch) ||
      item.project.toLowerCase().includes(normalizedSearch);

    return matchesProject && matchesSearch;
  };

  const filteredImages = galleryImages.filter(matchesGalleryFilter);
  const filteredVideos = galleryVideos.filter(matchesGalleryFilter);

  const displayedImages =
    mediaFilter === "All" || mediaFilter === "Screenshots"
      ? filteredImages
      : [];

  const displayedVideos =
    mediaFilter === "All" || mediaFilter === "Videos" ? filteredVideos : [];

  const groupedImages = useMemo(() => {
    return displayedImages.reduce((groups, image, index) => {
      if (!groups[image.project]) {
        groups[image.project] = [];
      }

      groups[image.project].push({
        ...image,
        originalIndex: index,
      });

      return groups;
    }, {});
  }, [displayedImages]);

  const totalResults = displayedImages.length + displayedVideos.length;

  const selectedList =
    selectedMedia?.type === "image" ? displayedImages : displayedVideos;

  const selectedItem =
    selectedMedia !== null ? selectedList[selectedMedia.index] : null;

  const clearFilters = () => {
    setSelectedProject("All");
    setMediaFilter("All");
    setSearchTerm("");
    setOpenImageProject(null);
    localStorage.removeItem("galleryOpenImageProject");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleImageProject = (project) => {
    setOpenImageProject((current) => {
      const nextProject = current === project ? null : project;

      if (nextProject) {
        localStorage.setItem("galleryOpenImageProject", nextProject);
      } else {
        localStorage.removeItem("galleryOpenImageProject");
      }

      return nextProject;
    });
  };

  const visibleModalThumbnails = useMemo(() => {
    if (selectedMedia === null) return [];

    const currentList =
      selectedMedia.type === "image" ? displayedImages : displayedVideos;

    const maxVisible = 9;
    const half = 4;

    if (currentList.length <= maxVisible) {
      return currentList.map((item, index) => ({
        ...item,
        originalIndex: index,
      }));
    }

    let start = selectedMedia.index - half;
    let end = selectedMedia.index + half;

    if (start < 0) {
      end += Math.abs(start);
      start = 0;
    }

    if (end > currentList.length - 1) {
      start -= end - (currentList.length - 1);
      end = currentList.length - 1;
    }

    start = Math.max(0, start);

    return currentList.slice(start, end + 1).map((item, index) => ({
      ...item,
      originalIndex: start + index,
    }));
  }, [displayedImages, displayedVideos, selectedMedia]);

  const closeModal = () => setSelectedMedia(null);

  const showPrevious = () => {
    setSelectedMedia((current) => {
      if (!current) return null;

      const currentList =
        current.type === "image" ? displayedImages : displayedVideos;

      return {
        ...current,
        index:
          current.index === 0 ? currentList.length - 1 : current.index - 1,
      };
    });
  };

  const showNext = () => {
    setSelectedMedia((current) => {
      if (!current) return null;

      const currentList =
        current.type === "image" ? displayedImages : displayedVideos;

      return {
        ...current,
        index:
          current.index === currentList.length - 1 ? 0 : current.index + 1,
      };
    });
  };

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) showNext();
    if (distance < -minSwipeDistance) showPrevious();
  };

  useEffect(() => {
    setSelectedMedia(null);

    const savedProject = localStorage.getItem("galleryOpenImageProject");

    if (
      savedProject &&
      Object.prototype.hasOwnProperty.call(groupedImages, savedProject)
    ) {
      setOpenImageProject(savedProject);
    } else {
      setOpenImageProject(null);
    }
  }, [selectedProject, searchTerm, mediaFilter, groupedImages]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedProject = localStorage.getItem("galleryOpenImageProject");

    if (
      savedProject &&
      Object.prototype.hasOwnProperty.call(groupedImages, savedProject)
    ) {
      setOpenImageProject(savedProject);
    }
  }, [groupedImages]);

  useEffect(() => {
    if (!openImageProject) return;

    const scrollTimer = setTimeout(() => {
      const accordion = accordionRefs.current[openImageProject];

      if (!accordion) return;

      const headerOffset = 120;
      const accordionTop =
        accordion.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: accordionTop,
        behavior: "smooth",
      });
    }, 350);

    return () => clearTimeout(scrollTimer);
  }, [openImageProject]);

  useEffect(() => {
    if (selectedMedia === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrevious();
      if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedMedia, displayedImages.length, displayedVideos.length]);

  return (
    <div className="space-y-10">
      <PageHeader kicker="Gallery" title="Media Showcase">
        A collection of screenshots and demo videos from my projects.
      </PageHeader>

      {/* FILTERS */}
      <div className="space-y-4">
        {/* MEDIA TYPE FILTER */}
        <div className="flex flex-wrap gap-2">
          {["All", "Screenshots", "Videos"].map((type) => (
            <button
              key={type}
              type="button"
              aria-pressed={mediaFilter === type}
              onClick={() => setMediaFilter(type)}
              className={`
                rounded-full px-4 py-2 text-xs font-bold transition
                border border-brand-soft
                ${
                  mediaFilter === type
                    ? "bg-brand text-white shadow-card dark:shadow-card-dark"
                    : "bg-slate-100 text-slate-700 hover:bg-brand hover:text-white dark:bg-slate-900 dark:text-slate-300"
                }
              `}
            >
              {type}
            </button>
          ))}
        </div>

        {/* PROJECT FILTER */}
        <div className="flex flex-wrap gap-2">
          {projectFilters.map((project) => (
            <button
              key={project}
              type="button"
              aria-pressed={selectedProject === project}
              onClick={() => setSelectedProject(project)}
              className={`
                rounded-full px-3 py-1.5 text-xs font-bold transition
                border border-brand-soft
                ${
                  selectedProject === project
                    ? "bg-brand text-white shadow-card dark:shadow-card-dark"
                    : "bg-slate-100 text-slate-700 hover:bg-brand hover:text-white dark:bg-slate-900 dark:text-slate-300"
                }
              `}
            >
              {project}
            </button>
          ))}
        </div>

        {/* SEARCH + CLEAR */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full max-w-md">
            <label className="sr-only" htmlFor="gallery-search">
              Search gallery
            </label>

            <input
              id="gallery-search"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search screenshots or videos..."
              className="
                w-full rounded-full px-4 py-2 text-sm
                border border-brand-soft
                bg-slate-100 dark:bg-slate-900
                text-slate-800 dark:text-slate-100
                placeholder:text-slate-400
                shadow-card dark:shadow-card-dark
                focus:outline-none focus:ring-2 focus:ring-brand/40
              "
            />
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="
                w-fit rounded-full px-4 py-2 text-xs font-bold transition
                border border-brand-soft
                bg-slate-100 text-slate-700
                hover:bg-brand hover:text-white
                dark:bg-slate-900 dark:text-slate-300
              "
            >
              Clear filters
            </button>
          )}
        </div>

        {/* RESULT COUNT */}
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Showing{" "}
          <span className="font-bold text-slate-800 dark:text-slate-200">
            {totalResults}
          </span>{" "}
          result{totalResults === 1 ? "" : "s"} — {displayedImages.length}{" "}
          screenshot{displayedImages.length === 1 ? "" : "s"} and{" "}
          {displayedVideos.length} video
          {displayedVideos.length === 1 ? "" : "s"}.
        </p>
      </div>

      {/* IMAGES */}
      {mediaFilter !== "Videos" && (
        <section className="space-y-4">
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
            Screenshots
          </h2>

          {displayedImages.length > 0 ? (
            <div className="space-y-4">
              {Object.entries(groupedImages).map(([project, images]) => {
                const isOpen = openImageProject === project;

                return (
                  <div
                    key={project}
                    ref={(element) => {
                      accordionRefs.current[project] = element;
                    }}
                    className="
                      rounded-2xl overflow-hidden
                      bg-brand-soft/30
                      border border-brand-soft
                      shadow-card dark:shadow-card-dark
                      dark:border-brand-soft
                    "
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleImageProject(project)}
                      className="
                        w-full p-4 text-left
                        flex flex-col gap-3
                        hover:bg-brand/10 transition
                      "
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                            {project}
                          </h3>

                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            {images.length} screenshot
                            {images.length === 1 ? "" : "s"}
                          </p>
                        </div>

                        <span
                          className={`
                            flex h-9 w-9 shrink-0 items-center justify-center
                            rounded-full border border-brand-soft
                            bg-slate-100 text-slate-700
                            transition
                            dark:bg-slate-900 dark:text-slate-300
                            ${isOpen ? "rotate-180" : ""}
                          `}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </div>

                      {!isOpen && (
                        <div
                          className="
                            flex max-w-full gap-2 overflow-hidden
                            pt-1
                          "
                        >
                          {images.slice(0, 8).map((img) => (
                            <img
                              key={`preview-${img.src}`}
                              src={img.src}
                              alt={img.title}
                              loading="lazy"
                              className="
                                h-14 w-24 shrink-0 rounded-lg object-cover
                                border border-brand-soft
                              "
                            />
                          ))}

                          {images.length > 8 && (
                            <div
                              className="
                                flex h-14 w-24 shrink-0 items-center justify-center
                                rounded-lg border border-brand-soft
                                bg-slate-950/70 text-xs font-bold text-white
                              "
                            >
                              +{images.length - 8}
                            </div>
                          )}
                        </div>
                      )}
                    </button>

                    <div
                      className={`
                        overflow-hidden border-t border-brand-soft
                        transition-all duration-300 ease-in-out
                        ${
                          isOpen
                            ? "max-h-[5000px] opacity-100"
                            : "max-h-0 opacity-0"
                        }
                      `}
                    >
                      <div className="p-4">
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                          {images.map((img) => (
                            <button
                              key={img.src}
                              type="button"
                              onClick={() =>
                                setSelectedMedia({
                                  type: "image",
                                  index: img.originalIndex,
                                })
                              }
                              className="
                                group rounded-2xl overflow-hidden text-left relative
                                bg-brand-soft/30
                                border-b border-brand-soft
                                transition
                                shadow-card dark:shadow-card-dark 
                                hover:bg-brand hover:border-brand hover:shadow-card-hover
                                dark:border-brand-soft
                              "
                            >
                              <div className="relative">
                                <img
                                  src={img.src}
                                  alt={img.title}
                                  loading="lazy"
                                  className="w-full h-48 object-cover"
                                />

                                <span
                                  className="
                                    absolute top-2 left-2 rounded-full px-2 py-1
                                    text-[10px] font-bold
                                    bg-slate-950/70 text-white
                                    backdrop-blur-sm
                                  "
                                >
                                  {img.project}
                                </span>
                              </div>

                              <div className="p-3 text-sm font-bold bg-brand-soft/30 group-hover:bg-brand text-slate-700 group-hover:text-white dark:text-slate-300 text-center">
                                {img.title}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-slate-600 dark:text-slate-400">
              No screenshots found for this filter or search.
            </p>
          )}
        </section>
      )}

      {/* VIDEOS */}
      {mediaFilter !== "Screenshots" && (
        <section className="space-y-4">
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
            Videos
          </h2>

          {displayedVideos.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {displayedVideos.map((video, i) => (
                <button
                  key={video.src}
                  type="button"
                  onClick={() => setSelectedMedia({ type: "video", index: i })}
                  className="
                    group rounded-2xl overflow-hidden relative text-left
                    bg-brand-soft/30
                    border-b border-brand-soft
                    transition
                    shadow-card dark:shadow-card-dark hover:shadow-card-hover
                    hover:bg-brand hover:border-brand 
                    dark:border-brand-soft
                  "
                >
                  <div className="relative">
                    <video
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={video.poster}
                      className="w-full h-64 object-cover"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="
                          rounded-full bg-black/60 p-4 text-white
                          backdrop-blur-sm transition group-hover:scale-110
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 translate-x-[1px]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    <span
                      className="
                        absolute top-2 left-2 rounded-full px-2 py-1
                        text-[10px] font-bold
                        bg-slate-950/70 text-white
                        backdrop-blur-sm
                      "
                    >
                      {video.project}
                    </span>
                  </div>

                  <p className="p-3 text-sm font-bold bg-brand-soft/30 group-hover:bg-brand text-slate-700 group-hover:text-white dark:text-slate-300 text-center">
                    {video.title}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-600 dark:text-slate-400">
              No videos found for this filter or search.
            </p>
          )}
        </section>
      )}

      {/* MEDIA MODAL */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.title} ${
            selectedMedia.type === "image" ? "image" : "video"
          } preview`}
          className="
            fixed inset-0 z-[9999]
            bg-black/85 backdrop-blur-sm
            flex items-center justify-center
            p-4
          "
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            aria-label="Close media preview"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="
              absolute top-4 right-4 z-20
              h-10 w-10 rounded-full
              border border-white/20
              bg-white/10 text-white
              flex items-center justify-center
              hover:bg-white/20 transition
            "
          >
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
          </button>

          {selectedList.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous media item"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevious();
                }}
                className="
                  absolute left-4 top-1/2 -translate-y-1/2 z-20
                  h-11 w-11 rounded-full
                  border border-white/20
                  bg-white/10 text-white
                  flex items-center justify-center
                  hover:bg-white/20 transition
                "
              >
                <span className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </span>
              </button>

              <button
                type="button"
                aria-label="Next media item"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="
                  absolute right-4 top-1/2 -translate-y-1/2 z-20
                  h-11 w-11 rounded-full
                  border border-white/20
                  bg-white/10 text-white
                  flex items-center justify-center
                  hover:bg-white/20 transition
                "
              >
                <span className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </button>
            </>
          )}

          <div
            className="
              max-w-[95vw] max-h-[90vh]
              rounded-2xl overflow-hidden
              border border-brand-soft
              bg-slate-100 dark:bg-slate-900
              shadow-sidebar dark:shadow-sidebar-dark
              flex flex-col items-center
            "
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "image" ? (
              <img
                key={selectedItem.src}
                src={selectedItem.src}
                alt={selectedItem.title}
                loading="eager"
                onClick={closeModal}
                className="
                  block mx-auto
                  max-w-[95vw] max-h-[72vh]
                  object-contain cursor-zoom-out
                  bg-slate-200 dark:bg-slate-950
                "
              />
            ) : (
              <video
                key={selectedItem.src}
                controls
                autoPlay
                poster={selectedItem.poster}
                className="
                  block mx-auto
                  max-w-[95vw] max-h-[72vh]
                  bg-slate-950
                "
              >
                <source src={selectedItem.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            <div className="w-full p-3 text-center bg-brand-soft/30">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {selectedItem.title}
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {selectedItem.project} · {selectedMedia.index + 1} /{" "}
                {selectedList.length}
              </p>

              {selectedList.length > 1 && (
                <div className="mt-3 flex justify-center">
                  <div
                    className="
                      flex max-w-full justify-center gap-2 overflow-x-auto pb-1
                      [-ms-overflow-style:none] [scrollbar-width:none]
                      [&::-webkit-scrollbar]:hidden
                    "
                  >
                    {visibleModalThumbnails.map((item) => (
                      <button
                        key={`thumb-${item.src}`}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMedia({
                            type: selectedMedia.type,
                            index: item.originalIndex,
                          });
                        }}
                        className={`
                          shrink-0 rounded-lg overflow-hidden border-2 transition
                          ${
                            item.originalIndex === selectedMedia.index
                              ? "border-brand scale-105"
                              : "border-transparent opacity-70 hover:opacity-100"
                          }
                        `}
                        aria-label={`View ${item.title}`}
                        aria-pressed={item.originalIndex === selectedMedia.index}
                      >
                        <img
                          src={
                            selectedMedia.type === "image"
                              ? item.src
                              : item.poster
                          }
                          alt={item.title}
                          loading="lazy"
                          className="h-12 w-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* BACK TO TOP */}
      {showBackToTop && !selectedItem && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50
            h-12 w-12 rounded-full
            border border-brand-soft
            bg-brand text-white
            shadow-card dark:shadow-card-dark
            flex items-center justify-center
            transition
            hover:scale-110 hover:shadow-card-hover
            focus:outline-none focus:ring-2 focus:ring-brand/40
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Gallery;