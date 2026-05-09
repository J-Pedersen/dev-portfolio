import { useEffect, useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const Resume = () => {
  const base = import.meta.env.BASE_URL;
  const resumeUrl = `${base}pdfs/Jeff-Pedersen-Resume.pdf`; // updated March 2026

  const resumeImages = useMemo(
    () => [
      `${base}resume/Jeff Pedersen - Resume Pg 1.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 2.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 3.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 4.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 5.png`,
    ],
    [base]
  );

  const [viewMode, setViewMode] = useState('pdf');

  useEffect(() => {
    const isTouchLike =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(max-width: 768px)').matches;

    setViewMode(isTouchLike ? 'images' : 'pdf');
  }, []);

  return (
    <div className="space-y-6">
      <Breadcrumbs current="Resume" />
      <PageHeader
        kicker="Resume"
        title="A One-Page Snapshot of The Things I Have Done and Can Do"
      >
        You can view my resume directly on this page or download the PDF if
        you’d rather keep a copy.
      </PageHeader>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-primary shadow-card dark:shadow-card-dark hover:shadow-card-hover"
        >
          Open PDF In A New Tab
        </a>

        <a
          href={resumeUrl}
          download
          className="btn-primary shadow-card dark:shadow-card-dark hover:shadow-card-hover"
        >
          Download Resume
        </a>
      </div>

      <div
        className="
          rounded-2xl gap-3 transition
          border
          border-brand-soft
          bg-slate-100
          hover:bg-slate-50
          hover:border-brand
          shadow-card dark:shadow-card-dark hover:shadow-card-hover
          dark:bg-slate-900/60
          dark:hover:bg-slate-950
          dark:hover:border-brand
          dark:border-brand-soft
        "
      >
        {/* Top bar */}
        <div className="relative px-3 py-3 mb-2 min-h-[56px]">
          <p className="mx-auto max-w-[70%] font-bold text-xl text-left text-slate-600 dark:text-slate-400">
            {viewMode === 'pdf'
              ? 'PDF View'
              : 'Image View'}
          </p>

          {/* Slide toggle */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={() =>
                setViewMode((prev) => (prev === 'pdf' ? 'images' : 'pdf'))
              }
              className="
                relative flex items-center
                w-36 h-8 rounded-full
                bg-slate-200 dark:bg-slate-800
                border border-brand-soft
                shadow-card dark:shadow-card-dark hover:shadow-card-hover
                transition
              "
              aria-label={`Switch to ${viewMode === 'pdf' ? 'Image' : 'PDF'} view`}
            >
              <span
                className={`
                  absolute top-1 left-1 h-6 w-[66px] rounded-full
                  bg-brand transition-transform duration-300
                  ${viewMode === 'images' ? 'translate-x-[64px]' : 'translate-x-0'}
                `}
              />

              <span className="relative z-10 flex w-full text-xs font-semibold">
                <span
                  className={`
                    flex-1 text-center transition-colors
                    ${viewMode === 'pdf' ? 'text-white' : 'text-slate-500 dark:text-slate-400'}
                  `}
                >
                  PDF
                </span>
                <span
                  className={`
                    flex-1 text-center transition-colors
                    ${viewMode === 'images' ? 'text-white' : 'text-slate-500 dark:text-slate-400'}
                  `}
                >
                  Images
                </span>
              </span>
            </button>
          </div>
        </div>

        <div
          className="
            h-[70vh] w-full rounded-xl overflow-hidden
            border border-slate-300 bg-slate-100
            dark:border-slate-800 dark:bg-slate-950
            min-h-0
          "
        >
          {viewMode === 'pdf' ? (
            <div className="h-full w-full overflow-hidden">
              <iframe
                src={resumeUrl}
                title="Jeff Pedersen Resume PDF"
                className="h-full w-full border-0"
              />
            </div>
          ) : (
            <div className="h-full overflow-y-auto overflow-x-hidden p-4 space-y-4 overscroll-contain">
              {resumeImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Resume page ${index + 1}`}
                  className="
                    w-full rounded-xl
                    border border-brand-soft
                    shadow-card dark:shadow-card-dark
                  "
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;