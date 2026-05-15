import PageHeader from "../components/PageHeader.jsx";
import { caseStudies } from "../data/caseStudies.js";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const CaseStudies = () => {
  const technical = caseStudies.filter((c) => c.category === "technical");
  const pm = caseStudies.filter((c) => c.category === "pm");

  return (
    <div className="space-y-12">
      <Breadcrumbs current="Case Studies" />
      <PageHeader
        kicker="Case Studies"
        title="How I build, structure, and think through real projects."
      >
        These case studies break down all the design choices, architecture,
        debugging steps, and project-management reasoning behind some of my larger
        projects. They go beyond just code samples and explain my thinking
        which shaped each of these solution.
      </PageHeader>

      {technical.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-200 uppercase tracking-wide">
            Case Study Projects
          </h2>

          <div className="grid gap-4 md:grid-cols-2 items-stretch">
            {technical.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </section>
      )}
      <BackToTopButton
        showAfter={500}
        label="Back to Top"
      />
    </div>
  );
};

export default CaseStudies;