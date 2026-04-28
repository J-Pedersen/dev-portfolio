// src/pages/Gallery.jsx
import { useEffect, useMemo, useState } from "react";
import PageHeader from "../components/PageHeader.jsx";

const base = import.meta.env.BASE_URL;

const images = [
  { project: "WeightMate", src: `${base}screenshots/weightmate/WeightMate-Main.jpg`, title: "WeightMate Main Screen" },
  { project: "WeightMate", src: `${base}screenshots/weightmate/WeightMate-Profile.jpg`, title: "WeightMate Profile" },
  { project: "WeightMate", src: `${base}screenshots/weightmate/WeightMate-History.jpg`, title: "WeightMate History" },
  { project: "WeightMate", src: `${base}screenshots/weightmate/WeightMate-Weight-Entry.jpg`, title: "Weight Entry" },
  { project: "WeightMate", src: `${base}screenshots/weightmate/WeightMate-Welcome.jpg`, title: "Welcome Screen" },

  { project: "BookClub", src: `${base}screenshots/bookclub/bookclub-Home1.jpg`, title: "BookClub Home" },
  { project: "BookClub", src: `${base}screenshots/bookclub/bookclub-about1.jpg`, title: "About Page" },
  { project: "BookClub", src: `${base}screenshots/bookclub/bookclub-monthly-books1.jpg`, title: "Monthly Books" },
  { project: "BookClub", src: `${base}screenshots/bookclub/bookclub-wishlist1.jpg`, title: "Wishlist" },
  { project: "BookClub", src: `${base}screenshots/bookclub/bookclub-wishlist-add1.jpg`, title: "Add to Wishlist" },

  { project: "GradeBook", src: `${base}screenshots/gradebook/gradebook1.jpg`, title: "GradeBook Main Screen" },
  { project: "GradeBook", src: `${base}screenshots/gradebook/gradebook-view-grades1.jpg`, title: "View Grades" },
  { project: "GradeBook", src: `${base}screenshots/gradebook/gradebook-update1.jpg`, title: "Update Grades" },
  { project: "GradeBook", src: `${base}screenshots/gradebook/gradebook-export-csv1.jpg`, title: "Export CSV" },

  { project: "Little Lemon React", src: `${base}screenshots/little-lemon-react/Little-Lemon-React-Home1.jpg`, title: "Little Lemon React Home" },
  { project: "Little Lemon React", src: `${base}screenshots/little-lemon-react/Little-Lemon-React-Menu1.jpg`, title: "React Menu" },
  { project: "Little Lemon React", src: `${base}screenshots/little-lemon-react/Little-Lemon-React-Login1.jpg`, title: "Login Page" },

  { project: "Little Lemon HTML", src: `${base}screenshots/little-lemon-html/Little-Lemon-HTML-Home1.jpg`, title: "Little Lemon HTML Home" },
  { project: "Little Lemon HTML", src: `${base}screenshots/little-lemon-html/Little-Lemon-HTML-Menu1.jpg`, title: "HTML Menu" },
  { project: "Little Lemon HTML", src: `${base}screenshots/little-lemon-html/Little-Lemon-HTML-Reservation1.jpg`, title: "Reservation Page" },

  { project: "Moffat Bay Marina", src: `${base}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Create Account1.jpg`, title: "Create Account" },
  { project: "Moffat Bay Marina", src: `${base}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Create Reservation1.jpg`, title: "Create Reservation" },
  { project: "Moffat Bay Marina", src: `${base}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Reservation Lookup1.jpg`, title: "Reservation Lookup" },

  { project: "CAREWare", src: `${base}screenshots/careware/Careware-project-charter1.jpg`, title: "Project Charter" },
  { project: "CAREWare", src: `${base}screenshots/careware/Careware-RFP1.jpg`, title: "RFP Document" },
  { project: "CAREWare", src: `${base}screenshots/careware/Careware-WBS1.jpg`, title: "Work Breakdown Structure" },
  { project: "CAREWare", src: `${base}screenshots/careware/Careware-Quality-Management-Plan1.jpg`, title: "Quality Management Plan" },

  { project: "Zelda Fansite", src: `${base}screenshots/zelda-fansite-asp.net/Zelda-Fansite-ASP.net(VB)-home1.jpg`, title: "Zelda Fansite Home" },
  { project: "Zelda Fansite", src: `${base}screenshots/zelda-fansite-asp.net/Zelda-Fansite-ASP.net(VB)-Games1.jpg`, title: "Games Page" },
  { project: "Zelda Fansite", src: `${base}screenshots/zelda-fansite-asp.net/Zelda-Fansite-ASP.net(VB)-Items1.jpg`, title: "Items Page" },
  { project: "Zelda Fansite", src: `${base}screenshots/zelda-fansite-asp.net/Zelda-Fansite-ASP.net(VB)-Maps1.jpg`, title: "Maps Page" },
];

const videos = [
  { project: "WeightMate", src: `${base}videos/weight-tracker-demo.mp4`, title: "WeightMate Demo" },
  { project: "BookClub", src: `${base}videos/bookclub-demo.mp4`, title: "BookClub Demo" },
  { project: "DIY PC Building", src: `${base}videos/diy-pc-building-demo.mp4`, title: "DIY PC Building Demo" },
  { project: "GradeBook", src: `${base}videos/grade-book-demo.mp4`, title: "Grade Book Demo" },
  { project: "Image Carousel", src: `${base}videos/image-carousel-demo.mp4`, title: "Image Carousel Demo" },
  { project: "Lightbox", src: `${base}videos/lightbox-demo.mp4`, title: "Lightbox Demo" },
  { project: "Little Lemon HTML", src: `${base}videos/little-lemon-html-demo.mp4`, title: "Little Lemon HTML Demo" },
  { project: "Little Lemon React", src: `${base}videos/little-lemon-react-demo.mp4`, title: "Little Lemon React Demo" },
  { project: "Moffat Bay Marina", src: `${base}videos/moffat-bay-marina-java-demo.mp4`, title: "Moffat Bay Marina Java Demo" },
  { project: "My Bio", src: `${base}videos/my-bio-responsive-demo.mp4`, title: "My Bio Demo" },
  { project: "Terri Bio", src: `${base}videos/terri-bio-responsive-demo.mp4`, title: "Terri's Bio Demo" },
  { project: "Zelda Fansite", src: `${base}videos/zelda-fansite-asp.net-demo.mp4`, title: "Zelda Fansite ASP.NET Demo" },
  { project: "CAREWare", src: `${base}videos/CareWare-WBS Dictionary.mp4`, title: "CareWare WBS Dictionary" },
];

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const projectFilters = useMemo(() => {
    const projects = [...images, ...videos].map((item) => item.project);
    return ["All", ...new Set(projects)];
  }, []);

  const filteredImages = images.filter((img) => {
    const matchesProject =
      selectedProject === "All" || img.project === selectedProject;

    const matchesSearch =
      img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.project.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesProject && matchesSearch;
  });

  const filteredVideos = videos.filter((video) => {
    const matchesProject =
      selectedProject === "All" || video.project === selectedProject;

    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.project.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesProject && matchesSearch;
  });

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

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
        A collection of screenshots and demo videos from my projects.
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

      {/* IMAGES */}
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
            ×
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
                  text-3xl leading-none
                  hover:bg-white/20 transition
                "
              >
                ‹
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
                  text-3xl leading-none
                  hover:bg-white/20 transition
                "
              >
                ›
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
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              loading="eager"
              onClick={closeModal}
              className="
                max-w-[95vw] max-h-[72vh]
                object-contain cursor-zoom-out
                bg-slate-200 dark:bg-slate-950
              "
            />

            <div className="p-3 text-center bg-brand-soft/30">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {selectedImage.title}
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {selectedImage.project} · {selectedIndex + 1} /{" "}
                {filteredImages.length}
              </p>

              {filteredImages.length > 1 && (
                <div
                  className="
                    mt-3 flex gap-2 overflow-x-auto pb-1
                    [-ms-overflow-style:none] [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                  "
                >
                  {filteredImages.map((img, index) => (
                    <button
                      key={`thumb-${img.src}`}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(index);
                      }}
                      className={`
                        shrink-0 rounded-lg overflow-hidden border-2 transition
                        ${
                          index === selectedIndex
                            ? "border-brand"
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
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;