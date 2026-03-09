import { useParams, Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies.js";
import PageHeader from "../components/PageHeader.jsx";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-slate-300">Case study not found.</p>
        <Link to="/case-studies" className="text-xs text-brand">
          Back to all case studies
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <PageHeader kicker="Case Study" title={study.title}>
        {study.summary}
      </PageHeader>

      <section className="space-y-6 text-sm text-slate-300 max-w-3xl">
        <div>
          <h2 className="text-base font-semibold text-slate-100 mb-2">
            Problem
          </h2>
          <p>{study.problem}</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-100 mb-2">
            Solution
          </h2>
          <p>{study.solution}</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-100 mb-2">
            Key Decisions
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {study.keyDecisions.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-100 mb-2">
            Challenges
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {study.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-100 mb-2">
            Outcomes
          </h2>
          <p>{study.outcomes}</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-100 mb-2">
            Tech Stack
          </h2>
          <p className="text-xs text-slate-400">{study.techStack.join(" · ")}</p>
        </div>
      </section>

      <Link
        to="/case-studies"
        className="text-xs text-brand hover:text-brand-soft"
      >
        ← Back to case studies
      </Link>
    </div>
  );
};

export default CaseStudyDetail;