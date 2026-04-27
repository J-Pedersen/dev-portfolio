import PageHeader from "../../components/PageHeader.jsx";
import CaseStudyLayout from "../../layouts/CaseStudyLayout.jsx";
import MediaCarousel from "../../components/MediaCarousel.jsx";
import CaseStudyAside from "../../components/CaseStudyAside.jsx";
import { caseStudies } from "../../data/caseStudies.js";

const CaseStudyWeightMate = () => {
  const caseStudy = caseStudies.find((c) => c.slug === "weightmate");

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
    <CaseStudyLayout title="WeightMate">
      <PageHeader
        kicker="Case Study"
        title="WeightMate: Android Weight Tracking & Profile Management App"
      >
        A multi-screen Android application for tracking weight progress,
        managing user profiles, storing progress photos, and visualizing
        goal completion with local persistence.
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
              WeightMate was designed to be more than a simple weight logging app.
              The goal was to build a mobile application that gives users a full
              experience: profile creation, editable account information, entry
              history, progress photos, unit conversion, and a home screen that
              immediately shows how close they are to their goal weight.
            </p>
          </section>

          {/* Problem */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              The Problem
            </h2>
            <p>
              I wanted to build a mobile application that could demonstrate more
              than just static Android screens. The app needed to support:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Multi-screen profile creation and editing</li>
              <li>Persistent storage of user data and weight entries</li>
              <li>Profile and progress photo handling</li>
              <li>Weight history tracking over time</li>
              <li>Unit conversion between standard and metric systems</li>
              <li>Quick progress visibility through a home screen overview</li>
            </ul>
          </section>

          {/* Solution */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              The Solution
            </h2>
            <p>
              I built WeightMate as a Java-based Android application using XML for
              layouts and SQLite for persistent storage. The app uses multiple
              screens to keep the user flow organized, from initial profile setup to
              ongoing weight entry tracking and profile management.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Java for application logic</li>
              <li>XML layouts for the Android UI</li>
              <li>SQLite for storing profile data and weight entry history</li>
              <li>Local storage for profile and progress images</li>
              <li>Light and dark theme support for usability</li>
              <li>A home screen progress bar to visualize goal completion at a glance</li>
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
                  SQLite for Data Persistence:
                </span>{" "}
                I used SQLite to store account information and weight entries
                locally so the app could work independently without needing a remote
                backend.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Local Image Storage:
                </span>{" "}
                Profile and progress photos were stored locally to keep media
                handling straightforward and fully under the app’s control.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Multi-Screen User Flow:
                </span>{" "}
                Separate screens for profile setup, history, and editing helped keep
                the app easier to navigate and maintain.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Goal-Oriented Home Screen:
                </span>{" "}
                I added a progress bar and dashboard-style home screen so users
                could understand their status immediately without digging through
                multiple menus.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Unit Conversion:
                </span>{" "}
                Supporting both standard and metric values made the app more usable
                and added a real logic layer beyond basic form entry.
              </li>
            </ul>
          </section>

          {/* Challenges */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Challenges
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Managing state across multiple Android screens</li>
              <li>Keeping profile data and entry history synchronized</li>
              <li>Handling image storage and retrieval reliably</li>
              <li>Designing a mobile UI that stayed clear without feeling crowded</li>
              <li>Implementing accurate weight conversion logic between unit systems</li>
            </ul>
          </section>

          {/* Outcome */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Outcome
            </h2>
            <p>
              WeightMate became a strong example of my mobile development skills,
              combining persistent storage, profile management, image handling,
              theming, and progress visualization into a practical Android
              application. It is one of my larger projects and a good reflection of
              how I approach application structure, user experience, and local data
              management.
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

export default CaseStudyWeightMate;