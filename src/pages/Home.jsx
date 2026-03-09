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
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-[0.3em] text-brand mb-2"
          >
            Software Developer · Web Designer · Project Manager
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="
              text-3xl sm:text-4xl md:text-5xl font-extrabold 
              text-slate-900 dark:text-slate-50 mb-4
            "
          >
            I build software and systems that actually ship.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              text-sm sm:text-base 
              text-slate-700 dark:text-slate-300 
              max-w-xl mb-6
            "
          >
            I’m Jeff Pedersen, a full-stack developer with a strong project
            management background. I work across Java, Spring Boot, React, and
            cloud tooling, and I also build the PM artifacts that keep projects
            on track—WBS, risk registers, and network diagrams included.
          </motion.p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="
                inline-flex items-center rounded-full
                border border-slate-300 text-slate-700
                px-5 py-2 text-sm font-medium
                hover:bg-brand hover:text-white hover:border-brand-soft
                dark:border-slate-700 dark:text-slate-200
                transition
              "
            >
              View Projects
            </Link>

            <Link
              to="/case-studies"
              className="
                inline-flex items-center rounded-full
                border border-slate-300 text-slate-700
                px-5 py-2 text-sm font-medium
                hover:bg-brand hover:text-white hover:border-brand-soft
                dark:border-slate-700 dark:text-slate-200
                transition
              "
            >
              Read Case Studies
            </Link>
          </div>
        </div>

        {/* Tech Snapshot Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="
            relative h-48 sm:h-64 md:h-72 rounded-3xl overflow-hidden
            border border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200
            dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950
            p-4 flex flex-col
          "
        >
          <div className="text-center border-b border-slate-300 dark:border-slate-800 pb-2 mb-3">
            <span className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">
              Tech Snapshot
            </span>
          </div>

          <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 gap-x-2 gap-y-3 place-items-center">
            {snapshotTech.map((tech) => (
              <TechIcon key={tech} tech={tech} />
            ))}
          </div>
        </motion.div>
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
                flex flex-col
              "
            >
              {/* Project title row with icon */}
              <div className="flex items-center gap-2 mb-2">
                {p.icon && (
                  <TechIcon
                    name={p.icon}
                    hideLabel={true}
                    className="!w-auto !mx-0 !my-0 shrink-0"
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

              {/* Tech stack as icons with labels */}
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