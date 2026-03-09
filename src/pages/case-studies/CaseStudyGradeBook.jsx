import PageHeader from "../../components/PageHeader.jsx";
import CaseStudyLayout from "../../layouts/CaseStudyLayout.jsx";

const CaseStudyGradeBook = () => {
  return (
    <CaseStudyLayout title="GradeBookApp">
      <PageHeader
        kicker="Case Study"
        title="GradeBookApp: A JavaFX Desktop Application"
      >
        A JavaFX application built around clean separation of concerns,
        dynamic form handling, CSV storage, and theme switching.
      </PageHeader>

      {/* Overview */}
      <section className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Project Overview
        </h2>
        <p>
          GradeBookApp began as a simple JavaFX form for entering student
          grades. It grew into a larger project focused on separation of
          concerns, better architecture, custom UI components, dynamic layout
          adjustments, and multiple themes. The app collects student data,
          displays it in a table, and stores entries in CSV format.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          The Problem
        </h2>
        <p>
          The original version had everything in one file—UI code, event
          handlers, CSV logic, form clearing, error checks. It worked, but it
          wasn’t maintainable. I needed a structure that made sense as the
          app grew.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Too much logic inside the main JavaFX class</li>
          <li>No clear separation between UI, events, and storage</li>
          <li>Difficult to test and extend</li>
        </ul>
      </section>

      {/* Solution */}
      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          The Solution
        </h2>
        <p>
          I refactored the app into:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li><span className="font-semibold text-slate-900 dark:text-slate-200">Student</span> — data model</li>
          <li><span className="font-semibold text-slate-900 dark:text-slate-200">GradeBookService</span> — CSV I/O and data operations</li>
          <li><span className="font-semibold text-slate-900 dark:text-slate-200">GradeBookController</span> — event logic</li>
          <li><span className="font-semibold text-slate-900 dark:text-slate-200">GradeBookApp</span> — UI layout only</li>
        </ul>

        <p>
          This structure is cleaner, testable, and easier to maintain.
        </p>
      </section>

      {/* Key Decisions */}
      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Key Decisions
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Moving all form-clearing logic, validation, and event handlers into{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              GradeBookController
            </span>.
          </li>
          <li>
            Consolidating CSV read/write operations into{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              GradeBookService
            </span>.
          </li>
          <li>
            Adding a{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              dark/light theme toggle
            </span>{" "}
            using JavaFX styling.
          </li>
          <li>
            Implementing a{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              dynamic, responsive layout
            </span>{" "}
            that spreads out when fullscreen and tightens when resized.
          </li>
          <li>
            Adding a{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              modular bouncing ball background
            </span>{" "}
            to give the UI visual personality.
          </li>
        </ul>
      </section>

      {/* Challenges */}
      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Challenges
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Redesigning the app to reduce coupling between UI and logic</li>
          <li>Ensuring the layout adapted cleanly at all window sizes</li>
          <li>Building reusable JavaFX components without clutter</li>
        </ul>
      </section>

      {/* Outcome */}
      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Outcome
        </h2>
        <p>
          GradeBookApp now reflects a structure I use across larger
          applications. It’s a small project that taught big lessons—mainly how
          to break UI-heavy JavaFX programs into clean slices and make them
          maintainable.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default CaseStudyGradeBook;