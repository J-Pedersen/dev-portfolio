import PageHeader from "../../components/PageHeader.jsx";
import CaseStudyLayout from "../../layouts/CaseStudyLayout.jsx";
import MediaCarousel from "../../components/MediaCarousel.jsx";
import CaseStudyAside from "../../components/CaseStudyAside.jsx";
import { caseStudies } from "../../data/caseStudies.js";

const CaseStudyMoffatBayMarinaJava = () => {
  const caseStudy = caseStudies.find(
    (c) => c.slug === "moffat-bay-marina-java"
  );

  if (!caseStudy) {
    return (
      <CaseStudyLayout title="Case Study Not Found">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Case study not found.
        </p>
      </CaseStudyLayout>
    );
  }

  const links = [
    caseStudy.githubUrl && {
      label: "GitHub",
      href: caseStudy.githubUrl,
    },
    caseStudy.demoUrl && {
      label: "Live Demo",
      href: caseStudy.demoUrl,
    },
  ].filter(Boolean);

  return (
    <CaseStudyLayout title="Moffat Bay Marina">
      <PageHeader
        kicker="Case Study"
        title="Moffat Bay Marina: Java Reservation & Scheduling System"
      >
        A collaborative Java capstone project focused on marina reservations,
        customer management workflows, scheduling logic, and object-oriented
        business modeling.
      </PageHeader>

      <section className="grid gap-8 md:grid-cols-[2fr,1fr] items-start">
        <div className="space-y-8 min-w-0">
          <MediaCarousel media={caseStudy.media} />

          {/* Overview */}
          <section className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Project Overview
            </h2>

            <p>
              Moffat Bay Marina was a collaborative Java capstone project designed
              to simulate the operational workflows of a marina rental business.
              The application focused on reservations, customer accounts,
              scheduling, availability tracking, and waitlist management using
              structured object-oriented programming principles.
            </p>

            <p>
              Rather than prioritizing advanced UI features, the project centered
              around clean business logic, maintainable class structures, and
              translating real-world operational requirements into functional
              software workflows.
            </p>
          </section>

          {/* Problem */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              The Problem
            </h2>

            <p>
              The goal was to create a maintainable Java application capable of
              handling realistic marina operations while remaining understandable
              for multiple developers collaborating on the same codebase.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Reservation management workflows</li>
              <li>Customer account handling</li>
              <li>Boat availability tracking</li>
              <li>Scheduling conflicts and waitlists</li>
              <li>Maintainable object-oriented architecture</li>
            </ul>
          </section>

          {/* Solution */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              The Solution
            </h2>

            <p>
              We modeled the marina system using structured Java classes
              representing customers, reservations, boats, and scheduling
              workflows. Business logic methods handled reservation creation,
              customer management, availability tracking, and waitlist operations.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Object-oriented domain modeling</li>
              <li>Reservation scheduling workflows</li>
              <li>In-memory collections for data management</li>
              <li>Structured business logic methods</li>
              <li>Collaborative development practices</li>
            </ul>
          </section>

          {/* Key Decisions */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Key Decisions
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Object-Oriented Design:
                </span>{" "}
                Structured the application around real-world business entities such
                as customers, reservations, and boats.
              </li>

              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Business Workflow Modeling:
                </span>{" "}
                Focused on designing code structures that mirrored actual marina
                operations and scheduling processes.
              </li>

              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Simplicity First:
                </span>{" "}
                Used in-memory collections rather than database complexity so the
                team could focus on logic and architecture.
              </li>

              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Collaborative Structure:
                </span>{" "}
                Organized logic and responsibilities to support team-based
                development and reduce tightly coupled code.
              </li>
            </ul>
          </section>

          {/* Challenges */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Challenges
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Preventing business logic from becoming overly centralized.
              </li>

              <li>
                Managing reservation conflicts and availability edge cases.
              </li>

              <li>
                Maintaining readable workflows as additional features were added.
              </li>

              <li>
                Coordinating collaborative development across multiple contributors.
              </li>

              <li>
                Balancing realistic workflows with manageable application scope.
              </li>
            </ul>
          </section>

          {/* Outcome */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Outcome
            </h2>

            <p>
              This project strengthened my understanding of object-oriented design,
              business workflow modeling, collaborative software development, and
              translating real-world operational requirements into maintainable
              Java application logic.
            </p>

            <p>
              It also reinforced the importance of clear naming conventions,
              separation of concerns, and designing systems around business
              processes instead of implementation shortcuts.
            </p>
          </section>
        </div>

        <CaseStudyAside
          techStack={caseStudy.techStack}
          tags={caseStudy.tags}
          media={caseStudy.media}
          links={links}
          architecture={caseStudy.architecture}
        />
      </section>
    </CaseStudyLayout>
  );
};

export default CaseStudyMoffatBayMarinaJava;