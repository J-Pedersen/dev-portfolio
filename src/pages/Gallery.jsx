// src/pages/Gallery.jsx
import { useEffect, useMemo, useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { galleryImages, galleryVideos } from "../data/galleryMedia.js";

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const projectFilters = useMemo(() => {
    const projects = [...galleryImages, ...galleryVideos].map((item) => item.project);
    return ["All", ...new Set(projects)];
  }, []);

  const filteredImages = galleryImages.filter((img) => {
    const matchesProject =
      selectedProject === "All" || img.project === selectedProject;

    const matchesSearch =
      img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.project.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesProject && matchesSearch;
  });

  const filteredVideos = galleryVideos.filter((video) => {
    const matchesProject =
      selectedProject === "All" || video.project === selectedProject;

    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.project.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesProject && matchesSearch;
  });

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const visibleModalThumbnails = useMemo(() => {
    if (selectedIndex === null) return [];

    const maxVisible = 9;
    const half = 4;

    if (filteredImages.length <= maxVisible) {
      return filteredImages.map((img, index) => ({
        ...img,
        originalIndex: index,
      }));
    }

    let start = selectedIndex - half;
    let end = selectedIndex + half;

    if (start < 0) {
      end += Math.abs(start);
      start = 0;
    }

    if (end > filteredImages.length - 1) {
      start -= end - (filteredImages.length - 1);
      end = filteredImages.length - 1;
    }

    start = Math.max(0, start);

    return filteredImages.slice(start, end + 1).map((img, index) => ({
      ...img,
      originalIndex: start + index,
    }));
  }, [filteredImages, selectedIndex]);

  const closeModal = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? filteredImages.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === filteredImages.length - 1 ? 0 : current + 1
    );
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
    setSelectedIndex(null);
  }, [selectedProject, searchTerm]);

  useEffect(() => {
    if (selectedIndex === null) return;

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
  }, [selectedIndex, filteredImages.length]);

  return (
    <div className="space-y-10">
      <PageHeader kicker="Gallery" title="Media Showcase">
        A collection of screenshots and demo Videos from my projects.
      </PageHeader>

      {/* FILTERS */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {projectFilters.map((project) => (
            <button
              key={project}
              type="button"
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

        {/* SEARCH */}
        <div className="max-w-md">
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
      </div>

      {/* galleryImages */}
      <section className="space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
          Screenshots
        </h2>

        {filteredImages.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {filteredImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setSelectedIndex(i)}
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
        ) : (
          <p className="text-sm text-slate-600 dark:text-slate-400">
            No screenshots found for this filter or search.
          </p>
        )}
      </section>

      {/* VIDEOS */}
      <section className="space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
          Videos
        </h2>

        {filteredVideos.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredVideos.map((video) => (
              <div
                key={video.src}
                className="
                  rounded-2xl overflow-hidden relative
                  bg-brand-soft/30
                  border-b border-brand-soft
                  transition
                  shadow-card dark:shadow-card-dark hover:shadow-card-hover
                  hover:bg-brand hover:border-brand 
                  dark:border-brand-soft
                "
              >
                <div className="relative">
                  <video controls preload="none" className="w-full rounded-lg">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

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

                <p className="p-3 text-sm font-bold bg-brand-soft/30 hover:bg-brand text-slate-700 hover:text-white dark:text-slate-300 text-center">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-600 dark:text-slate-400">
            No videos found for this filter or search.
          </p>
        )}
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
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
            aria-label="Close image preview"
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
              text-2xl leading-none
              hover:bg-white/20 transition
            "
          >
            <span className="flex items-center justify-center leading-none">×</span>
          </button>

          {filteredImages.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
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
                  text-3xl leading-none pb-1
                  hover:bg-white/20 transition
                "
              >
                <span className="block -translate-y-[1px]">‹</span>
              </button>

              <button
                type="button"
                aria-label="Next image"
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
                  text-3xl leading-none pb-1
                  hover:bg-white/20 transition
                "
              >
                <span className="block -translate-y-[1px]">›</span>
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
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              loading="eager"
              onClick={closeModal}
              className="
                block mx-auto
                max-w-[95vw] max-h-[72vh]
                object-contain cursor-zoom-out
                bg-slate-200 dark:bg-slate-950
              "
            />

            <div className="w-full p-3 text-center bg-brand-soft/30">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {selectedImage.title}
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {selectedImage.project} · {selectedIndex + 1} /{" "}
                {filteredImages.length}
              </p>

              {filteredImages.length > 1 && (
                <div className="mt-3 flex justify-center">
                  <div
                    className="
                      flex max-w-full justify-center gap-2 overflow-x-auto pb-1
                      [-ms-overflow-style:none] [scrollbar-width:none]
                      [&::-webkit-scrollbar]:hidden
                    "
                  >
                    {visibleModalThumbnails.map((img) => (
                      <button
                        key={`thumb-${img.src}`}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedIndex(img.originalIndex);
                        }}
                        className={`
                          shrink-0 rounded-lg overflow-hidden border-2 transition
                          ${
                            img.originalIndex === selectedIndex
                              ? "border-brand scale-105"
                              : "border-transparent opacity-70 hover:opacity-100"
                          }
                        `}
                        aria-label={`View ${img.title}`}
                      >
                        <img
                          src={img.src}
                          alt={img.title}
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
    </div>
  );
};

export default Gallery;