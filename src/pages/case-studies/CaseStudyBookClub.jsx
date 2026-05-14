import PageHeader from "../../components/PageHeader.jsx";
import CaseStudyLayout from "../../layouts/CaseStudyLayout.jsx";
import MediaCarousel from "../../components/MediaCarousel.jsx";
import DetailAside from "../../components/DetailAside.jsx";
import { caseStudies } from "../../data/caseStudies.js";

const CaseStudyBookClub = () => {
  const caseStudy = caseStudies.find((c) => c.slug === "bookclub");

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
    <CaseStudyLayout title="BookClub">
      <PageHeader
        kicker="Case Study"
        title="BookClub: Full-Stack Spring Boot & MongoDB Application"
      >
        A full-stack application for managing a book club: wishlists,
        book-of-the-month selections, API integrations, and a clean,
        maintainable architecture.
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
              The goal for BookClub was simple: build something practical that went
              beyond CRUD and encouraged real architectural decisions. The app
              supports managing book wishlists, selecting the book of the month,
              and pulling book data from external APIs. It also became a testing
              ground for DAO architecture, validation, JSON parsing, and MongoDB
              document modeling.
            </p>
          </section>

          {/* Problem */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              The Problem
            </h2>
            <p>
              I needed a hands-on project that showcased full-stack Java
              development—not just controllers and templates, but also:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Working with external APIs</li>
              <li>Modeling flexible data in MongoDB</li>
              <li>Decoupling data access from controllers</li>
              <li>Validation and error handling</li>
              <li>Solving real bugs, not just textbook examples</li>
            </ul>
          </section>

          {/* Solution */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              The Solution
            </h2>
            <p>
              I designed a full-stack Spring Boot application with layered
              architecture:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Spring MVC controllers for REST and UI routes</li>
              <li>
                DAO interfaces with multiple implementations (Mongo, REST, memory)
                to support swapping data sources
              </li>
              <li>Thymeleaf for server-side views</li>
              <li>MongoDB for wishlist items and book selections</li>
              <li>JSONPath for processing external OpenLibrary book data</li>
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
                  DAO Separation:
                </span>{" "}
                Each data source (local memory, MongoDB, API-driven) implements its
                own DAO, letting me test logic without touching the database.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Validation:
                </span>{" "}
                Added input validation for title, author, ISBN, and pages, including
                resolving a tricky issue when <code>@NotEmpty</code> was misapplied
                to an Integer field.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  External API Integration:
                </span>{" "}
                Used JSONPath to extract fields from inconsistent API responses.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Book-of-the-Month Model:
                </span>{" "}
                A clean, simple model storing selections without over-engineering it.
              </li>
            </ul>
          </section>

          {/* Challenges */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Challenges
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Index-out-of-bounds errors when parsing OpenLibrary JSON</li>
              <li>Resolving template parsing errors in Thymeleaf</li>
              <li>Fixing validation edge cases with required fields</li>
              <li>Migrating Spring Security configs during framework updates</li>
            </ul>
          </section>

          {/* Outcome */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Outcome
            </h2>
            <p>
              This project became a strong example of my back-end skills, ability
              to debug unfamiliar issues, and ability to architect a maintainable
              Java application. It’s one of the projects I’m most comfortable
              discussing because nearly every part of it required a deliberate
              choice.
            </p>
          </section>
        </div>

        {/* ASIDE */}
        <DetailAside
          techStack={caseStudy.techStack}
          tags={caseStudy.tags}
          links={links}
          media={caseStudy.media}
          architecture={caseStudy.architecture}
        />
      </section>
    </CaseStudyLayout>
  );
};

export default CaseStudyBookClub;