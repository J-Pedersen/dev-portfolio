import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import PageHeader from "../components/PageHeader.jsx";
import ProjectLayout from "../layouts/ProjectLayout.jsx";
import MediaCarousel from "../components/MediaCarousel.jsx";
import DetailAside from "../components/DetailAside.jsx";

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

  const links = [
    project.githubUrl && {
      label: "GitHub",
      href: project.githubUrl,
    },

    project.demoUrl && {
      label: "Live Demo",
      href: project.demoUrl,
    },
  ].filter(Boolean);

  return (
    <ProjectLayout title={project.title}>
      <PageHeader kicker="Project" title={project.title}>
        {project.shortDescription}
      </PageHeader>

      <section className="grid gap-8 md:grid-cols-[2fr,1fr] items-start">
        <div className="space-y-8 min-w-0">
          {/* MEDIA */}
          {project.media?.length > 0 ? (
            <div className="mb-6">
              <MediaCarousel media={project.media} />
            </div>
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
                This project does not include screenshots or a video demo yet.
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

        {/* SHARED ASIDE */}
        <DetailAside
          techStack={project.techStack}
          tags={project.tags}
          links={links}
          media={project.media}
          architecture={project.architecture}
        />
      </section>
    </ProjectLayout>
  );
};

export default ProjectDetail;