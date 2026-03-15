import TechIcon from './TechIcon';
import { Link } from 'react-router-dom';

import Card from './ui/Card.jsx';
import CardHeader from './ui/CardHeader.jsx';
import CardBody from './ui/CardBody.jsx';
import CardFooter from './ui/CardFooter.jsx';

const ProjectCard = ({ project }) => (
  <Link
    to={`/projects/${project.slug}`}
    className="block group"
  >
    <Card>

      {/* HEADER */}
      <CardHeader>
        <div className="flex items-center justify-between gap-2">

          <div className="flex items-center gap-2">

            {project.icon && (
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900">
                <TechIcon
                  name={project.icon}
                  hideLabel={true}
                  className="h-4 w-4 group-hover:scale-110 transition-transform"
                />
              </span>
            )}

            <h3
              className="
                text-lg font-semibold
                text-slate-900 group-hover:text-brand-soft
                dark:text-slate-50
                transition-colors
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
      </CardHeader>


      {/* BODY */}
      <CardBody>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {project.shortDescription}
        </p>
      </CardBody>


      {/* FOOTER (Tech Icons) */}
      <CardFooter>

        <div className="flex flex-wrap gap-3 justify-center">

          {project.tags?.map((tag) => (
            <TechIcon
              key={tag}
              tech={tag}
            />
          ))}

        </div>

      </CardFooter>

    </Card>
  </Link>
);

export default ProjectCard;