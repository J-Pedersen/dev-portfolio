import PageHeader from "../../components/PageHeader.jsx";
import CaseStudyLayout from "../../layouts/CaseStudyLayout.jsx";
import MediaCarousel from "../../components/MediaCarousel.jsx";
import CaseStudyAside from "../../components/CaseStudyAside.jsx";

const media = [
  {
    type: "video",
    src: `${import.meta.env.BASE_URL}videos/CareWare-WBS Dictionary.mp4`,
    title: "WBS Dictionary Demo",
    poster: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS-dictionary1.jpg`,
  },

  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Identified-risks1.jpg`,
    title: "Identified Risks (1)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Identified-risks2.jpg`,
    title: "Identified Risks (2)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Identified-risks3.jpg`,
    title: "Identified Risks (3)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Identified-risks4.jpg`,
    title: "Identified Risks (4)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Identified-risks5.jpg`,
    title: "Identified Risks (5)",
  },

  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Precedence-Diagramming_Method1.jpg`,
    title: "Precedence Diagramming Method",
  },

  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter1.jpg`,
    title: "Project Charter (1)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter2.jpg`,
    title: "Project Charter (2)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter3.jpg`,
    title: "Project Charter (3)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter4.jpg`,
    title: "Project Charter (4)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter5.jpg`,
    title: "Project Charter (5)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter6.jpg`,
    title: "Project Charter (6)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter7.jpg`,
    title: "Project Charter (7)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter8.jpg`,
    title: "Project Charter (8)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter9.jpg`,
    title: "Project Charter (9)",
  },

  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan1.jpg`,
    title: "Quality Management Plan (1)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan2.jpg`,
    title: "Quality Management Plan (2)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan3.jpg`,
    title: "Quality Management Plan (3)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan4.jpg`,
    title: "Quality Management Plan (4)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan5.jpg`,
    title: "Quality Management Plan (5)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan6.jpg`,
    title: "Quality Management Plan (6)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan7.jpg`,
    title: "Quality Management Plan (7)",
  },

  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP1.jpg`,
    title: "Request for Proposal (1)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP2.jpg`,
    title: "Request for Proposal (2)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP3.jpg`,
    title: "Request for Proposal (3)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP4.jpg`,
    title: "Request for Proposal (4)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP5.jpg`,
    title: "Request for Proposal (5)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP6.jpg`,
    title: "Request for Proposal (6)",
  },

  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Risk-Gathering1.jpg`,
    title: "Risk Gathering (1)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Risk-Gathering2.jpg`,
    title: "Risk Gathering (2)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Risk-Gathering3.jpg`,
    title: "Risk Gathering (3)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Risk-Gathering4.jpg`,
    title: "Risk Gathering (4)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Risk-Gathering5.jpg`,
    title: "Risk Gathering (5)",
  },

  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-scope-statement1.jpg`,
    title: "Scope Statement (1)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-scope-statement2.jpg`,
    title: "Scope Statement (2)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-scope-statement3.jpg`,
    title: "Scope Statement (3)",
  },

  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS-dictionary1.jpg`,
    title: "WBS Dictionary (1)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS-dictionary2.jpg`,
    title: "WBS Dictionary (2)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS-dictionary3.jpg`,
    title: "WBS Dictionary (3)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS-dictionary4.jpg`,
    title: "WBS Dictionary (4)",
  },

  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS1.jpg`,
    title: "Work Breakdown Structure (1)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS2.jpg`,
    title: "Work Breakdown Structure (2)",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS3.jpg`,
    title: "Work Breakdown Structure (3)",
  },
];

const CaseStudyCareWare = () => {
  return (
    <CaseStudyLayout title="CAREWare PM Deliverables">
      <PageHeader
        kicker="Case Study"
        title="CAREWare Support Software: Project Management Deliverables"
      >
        A complete PMBOK-style project management package for a CAREWare
        Support System modernization effort for the Tennessee Department of
        Health.
      </PageHeader>

      <section className="grid gap-8 md:grid-cols-[2fr,1fr] items-start">
        <div className="space-y-8 min-w-0">
        <MediaCarousel media={media} />

      {/* Overview */}
      <section className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Project Overview
        </h2>
        <p>
          This project focused entirely on project management deliverables for
          a CAREWare-style support software system. The goal was to create
          real PM artifacts aligned with PMBOK and SDLC best practices:
          charters, work breakdown structures, dictionaries, network diagrams,
          risk management plans, quality plans, and an RFP for technical
          support and training services.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          The Problem
        </h2>
        <p>
          CAREWare is a complex environment with strict reporting requirements,
          health program data, multiple user roles, and dependency on reliable
          technical support. Creating project documentation had to reflect:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Regulatory and compliance-driven constraints</li>
          <li>System integration and data migration risks</li>
          <li>Training, support, and long-term maintenance needs</li>
          <li>Multiple technical workstreams and deliverables</li>
        </ul>
      </section>

      {/* Solution */}
      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          The Solution
        </h2>
        <p>
          I developed a suite of project deliverables to support an
          implementation timeline stretching from October 2025 to June 2026.
          These deliverables included:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              Project Charter
            </span>{" "}
            — scope, constraints, assumptions, stakeholders, and success
            criteria.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              Complete WBS
            </span>{" "}
            — Level 3 detail including software design, development, testing,
            deployment, training, and maintenance.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              WBS Dictionary
            </span>{" "}
            — detailed definitions, prerequisites, acceptance criteria, and
            materials.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              Network Diagrams
            </span>{" "}
            — ES/EF/LS/LF and critical path analysis.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              Risk Register
            </span>{" "}
            — likelihood, impact, triggers, and mitigation strategies.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              Quality Management Plan
            </span>{" "}
            — change control, validation approach, testing phases, and metrics.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              RFP for Technical Support & Training
            </span>{" "}
            — service requirements and vendor expectations.
          </li>
        </ul>
      </section>

      {/* Key Decisions */}
      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Key Decisions
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Breaking software design into 8–10 well-defined sub-deliverables
            (architecture diagrams, database schema, interface design, API
            specs, security model, etc.).
          </li>
          <li>
            Assigning durations and predecessors to support network diagram
            creation and critical path calculations.
          </li>
          <li>
            Balancing a long-running state project with realistic staffing and
            risk assumptions.
          </li>
          <li>
            Using a hybrid approach: PMBOK documentation with Agile/SCRUM
            considerations for development.
          </li>
        </ul>
      </section>

      {/* Challenges */}
      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Challenges
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Mapping out a 9-month timeline across 30+ deliverables</li>
          <li>Assigning accurate durations and logic-based predecessors</li>
          <li>Managing risks related to data migration and system uptime</li>
          <li>Creating realistic support & training requirements in the RFP</li>
        </ul>
      </section>

      {/* Outcome */}
      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Outcome
        </h2>
        <p>
          This project showcases my ability to work beyond code and support a
          full system implementation from a project management perspective.
          It demonstrates strengths in requirements analysis, planning,
          documentation, and structuring complex work into understandable
          deliverables.
        </p>
      </section>
      </div>

  <CaseStudyAside
    techStack={[
      "Project Charters",
      "WBS",
      "WBS Dictionaries",
      "Network Diagrams",
      "Risk Registers",
      "Quality Management Plans",
      "RFPs",
    ]}
    tags={[
      "Project Planning",
      "Risk Analysis",
      "Quality Planning",
      "Scope Management",
      "Vendor Support",
      "Training",
    ]}
    media={media}
    architecture={`
      CAREWare PM Package
↓
Project Charter
↓
WBS + WBS Dictionary
↓
Network Diagram + Critical Path
↓
Risk Register + Quality Plan
↓
RFP for Support & Training`}
  />
</section>
    </CaseStudyLayout>
  );
};

export default CaseStudyCareWare;