import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

const Home = () => {
  const featured = projects.filter((p) => p.type === 'featured').slice(0, 3);

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
            Software Developer · Project Manager
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
                bg-brand px-5 py-2 text-sm font-medium text-white 
                shadow-lg shadow-brand/30 hover:bg-brand-soft transition
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
                hover:border-brand-soft hover:text-brand-soft
                dark:border-slate-700 dark:text-slate-200
                transition
              "
            >
              Read Case Studies
            </Link>
          </div>
        </div>

        {/* Snapshot / Orbit Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="
            relative h-48 sm:h-64 md:h-72 rounded-3xl overflow-hidden
            border border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200
            dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950
          "
        >
          <div className="absolute inset-0">
            <motion.div
              className="h-6 w-6 rounded-full bg-brand/80 blur-[1px]"
              animate={{
                x: ['0%', '80%', '10%', '60%', '0%'],
                y: ['10%', '60%', '20%', '80%', '10%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: 'easeInOut',
              }}
            />
          </div>

          <div className="relative z-10 p-4 text-xs text-slate-700 dark:text-slate-300 flex flex-col gap-1">
            <span className="text-[11px] font-semibold text-brand">
              Tech Snapshot
            </span>
            <span>Java · Spring Boot · React · MongoDB · SQL</span>
            <span>Project Management · WBS · Risk · Network Diagrams</span>
            <span>Deployments · CI/CD · Git</span>
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
              "
            >
              <h3 className="
                text-sm font-semibold 
                text-slate-900 dark:text-slate-50 
                group-hover:text-brand-soft mb-1
              ">
                {p.title}
              </h3>

              <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">
                {p.shortDescription}
              </p>

              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                {p.techStack.join(' · ')}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;