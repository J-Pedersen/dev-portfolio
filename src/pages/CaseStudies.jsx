import PageHeader from "../components/PageHeader.jsx";
import { caseStudies } from "../data/caseStudies.js";
import { Link } from "react-router-dom";
import TechIcon from "../components/TechIcon.jsx";

const CaseStudies = () => {
  const technical = caseStudies.filter((c) => c.category === "technical");
  const pm = caseStudies.filter((c) => c.category === "pm");

  return (
    <div className="space-y-12">
      <PageHeader
        kicker="Case Studies"
        title="How I build, structure, and think through real projects."
      >
        These case studies break down the design choices, architecture,
        debugging steps, and project-management reasoning behind my larger
        projects. They go beyond code samples and explain the thinking
        that shaped each solution.
      </PageHeader>

      {technical.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wide">
            Technical Case Studies
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {technical.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                to={`/case-studies/${caseStudy.slug}`}
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
                <div className="flex items-center justify-between gap-2">
                  <h3
                    className="
                      text-lg font-semibold
                      text-slate-900 group-hover:text-brand-soft
                      dark:text-slate-50
                    "
                  >
                    {caseStudy.title}
                  </h3>

                  <span
                    className="
                      text-[11px] px-2 py-0.5 rounded-full
                      border border-slate-300 text-slate-600
                      dark:border-slate-700 dark:text-slate-400
                    "
                  >
                    {caseStudy.categoryLabel || "Technical"}
                  </span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {caseStudy.summary}
                </p>

                {caseStudy.techStack && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {caseStudy.techStack.map((t) => (
                      <TechIcon key={t} tech={t} />
                    ))}
                  </div>
                )}

                <p className="text-xs text-brand-700 dark:text-brand-soft mt-2">
                  View case study →
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {pm.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wide">
            Project Management Case Studies
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {pm.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                to={`/case-studies/${caseStudy.slug}`}
                className="
                  group rounded-2xl
                  border border-slate-300 bg-slate-100
                  dark:border-slate-800 dark:bg-slate-900/60
                  p-4 transition hover:border-brand-soft flex flex-col gap-3
                "
              >
                <div className="flex items-center justify-between gap-2">
                  <h3
                    className="
                      text-lg font-semibold
                      text-slate-900 group-hover:text-brand-soft
                      dark:text-slate-50
                    "
                  >
                    {caseStudy.title}
                  </h3>

                  <span
                    className="
                      text-[11px] px-2 py-0.5 rounded-full
                      border border-slate-300 text-slate-600
                      dark:border-slate-700 dark:text-slate-400
                    "
                  >
                    {caseStudy.categoryLabel || "PM / Analysis"}
                  </span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {caseStudy.summary}
                </p>

                {caseStudy.techStack && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {caseStudy.techStack.map((t) => (
                      <TechIcon key={t} tech={t} />
                    ))}
                  </div>
                )}

                <p className="text-xs text-brand-700 dark:text-brand-soft mt-2">
                  View case study →
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CaseStudies;