import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import TechIcon from '../components/TechIcon.jsx';

import Card from '../components/ui/Card.jsx';
import CardHeader from '../components/ui/CardHeader.jsx';
import CardBody from '../components/ui/CardBody.jsx';
import CardFooter from '../components/ui/CardFooter.jsx';

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
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>

            <Link to="/case-studies" className="btn-primary">
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
            border border-brand-soft
            bg-slate-100
            hover:bg-slate-50
            hover:border-brand
            hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]
            dark:bg-slate-900/60
            dark:hover:bg-slate-950
            dark:hover:border-brand
            dark:border-brand-soft
            flex flex-col
          "
        >
          <CardHeader>
            <div className="text-center w-full">
              <span className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">
                Tech Snapshot
              </span>
            </div>
          </CardHeader>

          <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 gap-x-2 gap-y-3 place-items-center p-4">
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

        <div className="grid gap-4 md:grid-cols-3 items-stretch">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="block group h-full"
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {p.icon && (
                      <TechIcon
                        name={p.icon}
                        hideLabel={true}
                        className="!w-auto !mx-0 !my-0 shrink-0 group-hover:scale-110 transition-transform"
                      />
                    )}

                    <h3
                      className="
                        text-sm font-semibold 
                        text-slate-900 dark:text-slate-50 
                        group-hover:text-brand-soft
                        transition-colors
                      "
                    >
                      {p.title}
                    </h3>
                  </div>
                </CardHeader>

                <CardBody>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    {p.shortDescription}
                  </p>
                </CardBody>

                <CardFooter>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {p.techStack.map((tech) => (
                      <TechIcon key={tech} tech={tech} />
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;