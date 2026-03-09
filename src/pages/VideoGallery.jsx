// src/pages/VideoGallery.jsx
import PageHeader from "../components/PageHeader.jsx";
import { projects } from "../data/projects.js";
import { Link } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer.jsx";

const VideoGallery = () => {
  const withVideos = projects.filter((p) => p.videoUrl);

  return (
    <div className="space-y-8">
      <PageHeader
        kicker="Video Gallery"
        title="Quick demos of my projects and coursework."
      >
        These short clips show how the applications behave in practice.
        They cover JavaFX desktop apps, Spring Boot projects, web front ends,
        coursework bundles, and more.
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-2">
        {withVideos.map((project) => (
          <div
            key={project.slug}
            className="rounded-2xl border border-slate-300 bg-white/80 p-4
                       dark:border-slate-800 dark:bg-slate-900/60 space-y-3"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {project.title}
              </h2>
              <Link
                to={`/projects/${project.slug}`}
                className="text-[11px] text-brand hover:text-brand-soft"
              >
                View project →
              </Link>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              {project.shortDescription}
            </p>

            <VideoPlayer
              src={project.videoUrl}
              title={`${project.title} demo`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;