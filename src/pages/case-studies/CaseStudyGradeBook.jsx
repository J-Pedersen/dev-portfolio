import PageHeader from "../../components/PageHeader.jsx";
import CaseStudyLayout from "../../layouts/CaseStudyLayout.jsx";
import MediaCarousel from "../../components/MediaCarousel.jsx";
import CaseStudyAside from "../../components/CaseStudyAside.jsx";

const media = [
  {
    type: "video",
    src: `${import.meta.env.BASE_URL}videos/grade-book-demo.mp4`,
    title: "GradeBook Application Demo",
    poster: `${import.meta.env.BASE_URL}screenshots/gradebook/gradebook1.jpg`,
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/gradebook/gradebook1.jpg`,
    title: "Main Application Interface",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/gradebook/gradebook-view-grades1.jpg`,
    title: "View Student Grades",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/gradebook/gradebook-update1.jpg`,
    title: "Update Student Record",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}screenshots/gradebook/gradebook-export-csv1.jpg`,
    title: "Export Data to CSV",
  },
];

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

      <section className="grid gap-8 md:grid-cols-[2fr,1fr] items-start">
        
        {/* LEFT COLUMN */}
        <div className="space-y-8 min-w-0">
          <MediaCarousel media={media} />

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
            <p>I refactored the app into:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-semibold text-slate-900 dark:text-slate-200">Student</span> — data model</li>
              <li><span className="font-semibold text-slate-900 dark:text-slate-200">GradeBookService</span> — CSV I/O</li>
              <li><span className="font-semibold text-slate-900 dark:text-slate-200">GradeBookController</span> — logic</li>
              <li><span className="font-semibold text-slate-900 dark:text-slate-200">GradeBookApp</span> — UI only</li>
            </ul>
          </section>

          {/* Key Decisions */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Key Decisions
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Moved logic into GradeBookController</li>
              <li>Centralized CSV handling in GradeBookService</li>
              <li>Added dark/light theme toggle</li>
              <li>Built responsive layout behavior</li>
              <li>Added animated background for UI personality</li>
            </ul>
          </section>

          {/* Challenges */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Challenges
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reducing coupling between UI and logic</li>
              <li>Responsive layout in JavaFX</li>
              <li>Reusable UI components</li>
            </ul>
          </section>

          {/* Outcome */}
          <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Outcome
            </h2>
            <p>
              GradeBookApp now reflects a clean, maintainable architecture and
              demonstrates strong separation of concerns in a UI-heavy JavaFX app.
            </p>
          </section>
        </div>

        {/* RIGHT COLUMN (ASIDE) */}
        <CaseStudyAside
          techStack={["Java",
            "JavaFX",
            "CSV",
            "CSS",
            "UI/UX Design"]}
          tags={[
            "Java",
            "JavaFX",
            "CSV",
            "CSS",
            "UI/UX Design"
          ]}
          media={media}
          links={[
            {
              label: "GitHub",
              href: "https://github.com/J-Pedersen/cis-505/tree/main/Module_12/GradeBookApp",
            },
          ]}
          architecture={`JavaFX Desktop App
↓
UI Layer (GradeBookApp)
↓
Controller (Events)
↓
Service (CSV Logic)
↓
Student Model`}
        />
      </section>
    </CaseStudyLayout>
  );
};

export default CaseStudyGradeBook;