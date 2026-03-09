import PageHeader from '../components/PageHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

const Projects = () => {
  const featured = projects.filter((p) => p.type === 'featured');
  const gallery = projects.filter((p) => p.type !== 'featured');

  return (
    <div className="space-y-10">
      <PageHeader
        kicker="Projects"
        title="Code I’m not afraid to show other people."
      >
        This is a curated set of software projects across Java, Spring Boot,
        React, databases, and project management artifacts. Featured projects
        get deeper write-ups; everything else lives in the gallery.
      </PageHeader>

      {featured.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-200">
            Featured
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-200">
            Project gallery
          </h2>

          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl">
            This includes smaller Java apps, course assignments, and experiments
            across HTML/CSS/JS, React, PHP, Rails, and .NET. Many of these
            projects link directly to GitHub.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {gallery.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};


export default Projects;