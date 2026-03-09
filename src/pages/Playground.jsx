import PageHeader from '../components/PageHeader.jsx';

const experiments = [
  {
    title: 'Java Scriptlets Cleanup',
    description:
      'A small exploration of refactoring older JSP/scriptlet-based code into cleaner MVC-style controllers and views.',
    status: 'Coming soon',
  },
  {
    title: 'API Testing Sandbox',
    description:
      'A simple REST client UI wired to a local Spring Boot API, used for experimenting with JSON payloads and error handling.',
    status: 'In progress',
  },
  {
    title: 'UI Prototypes',
    description:
      'Quick front-end layouts built in React and plain HTML/CSS to try out different dashboard and form designs.',
    status: 'Ongoing',
  },
];

const Playground = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        kicker="Playground"
        title="A space for experiments and half-finished ideas."
      >
        Not everything needs to be a polished project. This section is where I
        tinker with smaller ideas, prototypes, and refactors that may or may
        not grow into full projects later.
      </PageHeader>

      <section className="grid gap-4 md:grid-cols-3">
        {experiments.map((exp) => (
          <div
            key={exp.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-2 text-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-slate-100">
                {exp.title}
              </h2>
              <span className="text-[11px] rounded-full border border-slate-700 px-2 py-0.5 text-slate-300">
                {exp.status}
              </span>
            </div>
            <p className="text-slate-300 text-xs">{exp.description}</p>
            <p className="mt-auto text-[11px] text-slate-500">
              Some of these will eventually show up as full projects. Others
              just live here as proof that I like to experiment.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Playground;