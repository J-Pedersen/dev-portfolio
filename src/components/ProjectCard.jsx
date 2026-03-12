import TechIcon from './TechIcon';
import { Link } from 'react-router-dom';
import TagPill from './TagPill.jsx';

const ProjectCard = ({ project }) => (
  <Link
    to={`/projects/${project.slug}`}
    className="
      group rounded-2xl p-4 flex flex-col gap-3 transition
      border
      border-brand-soft 
      bg-slate-100 
      hover:bg-slate-50 
      hover:border-brand 
      hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]
      dark:bg-slate-900/60 
      dark:hover:bg-slate-950
      dark:hover:border-brand
      dark:border-brand-soft 
    "
  >
    {/* Title row */}
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        {project.icon && (
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900">
            <TechIcon
              name={project.icon}
              hideLabel={true}   // hides label only here
              className="h-4 w-4 group-hover:scale-110 transition-transform"
            />
          </span>
        )}

        <h3
          className="
            text-lg font-semibold
            text-slate-900 group-hover:text-brand-soft
            dark:text-slate-50
          "
        >
          {project.title}
        </h3>
      </div>

      {project.highlight && (
        <span
          className="
            text-[11px] rounded-full px-2 py-0.5
            bg-slate-200 text-brand
            dark:bg-slate-800 dark:text-brand-soft
          "
        >
          {project.highlight}
        </span>
      )}
    </div>

    {/* Short description */}
    <p className="text-sm text-slate-700 dark:text-slate-300">
      {project.shortDescription}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-3 mt-auto">
      {project.tags?.map((tag) => (
        <TagPill key={tag} label={tag} />
      ))}
    </div>
  </Link>
);

export default ProjectCard;