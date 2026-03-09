import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import TechIcon from '../components/TechIcon.jsx';

const Home = () => {
  const featured = projects.filter((p) => p.type === 'featured').slice(0, 3);

  const snapshotTech = [
    'Java',
    'Spring Boot',
    'React',
    'MongoDB',
    'SQL',
    'Git',
    'Docker',
    'AWS',
    'JavaScript',
    'TypeScript',
    'MySQL',
    'GitHub',
  ];

  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[2fr,1.2fr] items-center">
        {/* ...existing left side... */}

        {/* ...existing Tech Snapshot box... */}
      </section>

      {/* Featured row */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            Featured work
          </h2>

          <Link
            to="/projects"
            className="text-xs text-brand-700 hover:text-brand-900 dark:text-brand dark:hover:text-brand-soft"
          >
            View all projects →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="
                group rounded-2xl p-4 transition
                border border-slate-300 bg-white hover:border-brand-soft
                dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-900
              "
            >
              <div className="flex items-center gap-2 mb-1">
                {p.icon && (
                  <TechIcon
                    name={p.icon}
                    hideLabel={true}
                    className="shrink-0"
                  />
                )}

                <h3
                  className="
                    text-sm font-semibold 
                    text-slate-900 dark:text-slate-50 
                    group-hover:text-brand-soft
                  "
                >
                  {p.title}
                </h3>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 mb-3">
                {p.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.techStack.map((tech) => (
                  <TechIcon key={tech} tech={tech} />
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;