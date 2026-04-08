// src/pages/Gallery.jsx
import PageHeader from "../components/PageHeader.jsx";

const images = [
  {
    src: "/gallery/weightmate-home.png",
    title: "WeightMate Home Screen",
  },
  {
    src: "/gallery/weightmate-profile.png",
    title: "Profile Setup",
  },
];

const videos = [
  {
    src: "/gallery/weightmate-demo.mp4",
    title: "WeightMate Demo",
  },
];

const Gallery = () => {
  return (
    <div className="space-y-10">
      <PageHeader
        kicker="Gallery"
        title="Visual Showcase"
      >
        A collection of screenshots and demo videos from my projects.
      </PageHeader>

      {/* IMAGES */}
      <section className="space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
          Screenshots
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="
                group rounded-2xl overflow-hidden
                border border-brand-soft
                bg-white dark:bg-slate-900
                transition
                hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]
              "
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-3 text-sm text-slate-700 dark:text-slate-300 text-center">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section className="space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
          Demo Videos
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {videos.map((video, i) => (
            <div
              key={i}
              className="
                rounded-2xl overflow-hidden
                border border-brand-soft
                bg-white dark:bg-slate-900
                p-3
              "
            >
              <video
                controls
                className="w-full rounded-lg"
              >
                <source src={video.src} type="video/mp4" />
              </video>

              <p className="mt-2 text-sm text-center text-slate-700 dark:text-slate-300">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;