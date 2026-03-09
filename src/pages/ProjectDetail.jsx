import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import PageHeader from "../components/PageHeader.jsx";
import TagPill from "../components/TagPill.jsx";
import { Layers, Tag, Play, CircuitBoard } from "lucide-react";
import BrandIcon from "../components/BrandIcon.jsx";
import VideoPlayer from "../components/VideoPlayer.jsx";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Project not found.
        </p>
        <Link
          to="/projects"
          className="text-xs text-brand hover:text-brand-soft"
        >
          Back to projects →
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* HEADER */}
      <PageHeader kicker="Project" title={project.title}>
        {project.shortDescription}
      </PageHeader>

      {/* TOP CONTENT LAYOUT */}
      <section className="grid gap-8 md:grid-cols-[2fr,1fr] items-start">

        {/* LEFT COLUMN */}
        <div className="space-y-8">

{/* VIDEO OR FALLBACK */}
{project.videoUrl ? (
  <VideoPlayer
    src={project.videoUrl}
    poster={project.poster || undefined}
    className="mb-6"
  />
) : project.githubUrl ? (
  <div
    className="
      mb-6 p-5 rounded-xl border
      border-slate-300 dark:border-slate-700
      bg-slate-100 dark:bg-slate-900/60
      flex flex-col items-center justify-center gap-3
      text-center
    "
  >
    <p className="text-sm text-slate-700 dark:text-slate-300">
      This project does not include a video demo.
    </p>

    <a
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-2 px-4 py-2 rounded-full
        bg-brand text-white text-sm font-medium
        shadow-lg shadow-brand/30 hover:bg-brand-soft transition
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-4 w-4"
      >
        <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.397 7.868 10.918.575.11.785-.25.785-.556 0-.273-.01-1-.015-1.96-3.2.695-3.878-1.543-3.878-1.543-.523-1.33-1.277-1.685-1.277-1.685-1.044-.714.08-.7.08-.7 1.155.082 1.764 1.187 1.764 1.187 1.028 1.762 2.695 1.253 3.35.958.103-.744.402-1.253.732-1.542-2.555-.29-5.244-1.278-5.244-5.685 0-1.256.453-2.283 1.187-3.088-.12-.29-.52-1.46.112-3.044 0 0 .975-.312 3.195 1.18a11.17 11.17 0 0 1 2.91-.39c.987.005 1.98.133 2.91.39 2.22-1.492 3.193-1.18 3.193-1.18.634 1.584.234 2.754.114 3.044.737.805 1.185 1.832 1.185 3.088 0 4.42-2.694 5.392-5.256 5.675.41.35.78 1.033.78 2.084 0 1.504-.015 2.718-.015 3.088 0 .309.206.672.792.558C20.21 21.39 23.5 17.08 23.5 12 23.5 5.648 18.352.5 12 .5z" />
      </svg>
      View on GitHub
    </a>
  </div>
) : null}

          {/* OVERVIEW */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Overview
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* PROBLEM */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              The Problem
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* SOLUTION */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              The Solution
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* DECISIONS */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Key Decisions
            </h2>
            <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
              {project.decisions.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>

          {/* CHALLENGES */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Challenges
            </h2>
            <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          {/* OUTCOME */}
          <div className="space-y-3 pb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Outcome
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside
          className="
            p-5 rounded-2xl text-xs flex flex-col items-center space-y-6
            border border-slate-300 bg-gradient-to-b from-white to-slate-100
            dark:border-slate-800 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950

            /* NEW: match VideoPlayer glow */
            shadow-[0_18px_40px_rgba(15,23,42,0.75)]
            dark:shadow-[0_18px_40px_rgba(15,23,42,0.85)]
            ring-1 ring-indigo-400/10

            animate-fadeInSlow
            sticky top-24
          "
        >
          {/* TECH STACK */}
          <div className="space-y-2 text-center w-full">
            <div className="flex items-center justify-center gap-1 text-slate-600 dark:text-slate-300">
              <Layers size={14} />
              <h3 className="text-sm font-semibold">Tech Stack</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.techStack.join(" · ")}
            </p>
          </div>

          <div className="w-10 h-px bg-slate-300/60 dark:bg-slate-700/60" />

          {/* TAGS */}
          {project.tags?.length > 0 && (
            <div className="space-y-2 text-center w-full">
              <div className="flex items-center justify-center gap-1 text-slate-600 dark:text-slate-300">
                <Tag size={14} />
                <h3 className="text-sm font-semibold">Tags</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-1">
                {project.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
            </div>
          )}

          <div className="w-10 h-px bg-slate-300/60 dark:bg-slate-700/60" />

          {/* LINKS */}
          <div className="space-y-2 text-center w-full">
            <div className="flex items-center justify-center gap-1 text-slate-600 dark:text-slate-300">
              <h3 className="text-sm font-semibold">Links</h3>
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-brand hover:text-brand-soft transition"
              >
                GitHub →
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-brand hover:text-brand-soft transition"
              >
                Live Demo →
              </a>
            )}

            {project.videoUrl && (
              <div className="mt-2 flex justify-center">
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary gap-1 px-3 py-1 text-[11px]"
                >
                  <Play size={14} />
                  Watch Demo
                </a>
              </div>
            )}
          </div>

          <div className="w-10 h-px bg-slate-300/60 dark:bg-slate-700/60" />

          {/* ARCHITECTURE */}
          <div className="space-y-2 text-center w-full">
            <div className="flex items-center justify-center gap-1 text-slate-600 dark:text-slate-300">
              <CircuitBoard size={14} />
              <h3 className="text-sm font-semibold">Architecture</h3>
            </div>

            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
              {project.architecture}
            </p>
          </div>
        </aside>
      </section>

      {/* BACK LINK */}
      <Link
        to="/projects"
        className="text-xs text-brand hover:text-brand-soft"
      >
        ← Back to all projects
      </Link>
    </div>
  );
};

export default ProjectDetail;