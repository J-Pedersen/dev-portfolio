import PageHeader from "../components/PageHeader.jsx";
import { caseStudies } from "../data/caseStudies.js";
import { Link } from "react-router-dom";
import TechIcon from "../components/TechIcon.jsx";

import Card from "../components/ui/Card.jsx";
import CardHeader from "../components/ui/CardHeader.jsx";
import CardBody from "../components/ui/CardBody.jsx";
import CardFooter from "../components/ui/CardFooter.jsx";

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

          <div className="grid gap-4 md:grid-cols-2 items-stretch">
            {technical.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                to={`/case-studies/${caseStudy.slug}`}
                className="block group h-full"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className="
                          text-lg font-semibold
                          text-slate-900 group-hover:text-brand-soft
                          dark:text-slate-50
                          transition-colors
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
                  </CardHeader>

                  <CardBody>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {caseStudy.summary}
                    </p>
                  </CardBody>

                  <CardFooter>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {caseStudy.techStack?.map((t) => (
                        <TechIcon key={t} tech={t} />
                      ))}
                    </div>
                  </CardFooter>

                  <div className="px-4 pb-3">
                    <p className="text-xs text-brand-700 dark:text-brand-soft">
                      View case study →
                    </p>
                  </div>
                </Card>
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

          <div className="grid gap-4 md:grid-cols-2 items-stretch">
            {pm.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                to={`/case-studies/${caseStudy.slug}`}
                className="block group h-full"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className="
                          text-lg font-semibold
                          text-slate-900 group-hover:text-brand-soft
                          dark:text-slate-50
                          transition-colors
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
                  </CardHeader>

                  <CardBody>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {caseStudy.summary}
                    </p>
                  </CardBody>

                  <CardFooter>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {caseStudy.techStack?.map((t) => (
                        <TechIcon key={t} tech={t} />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CaseStudies;