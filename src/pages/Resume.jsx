import { useEffect, useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';

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
          className="btn-primary"
        >
          Open PDF In A New Tab
        </a>

        <a
          href={resumeUrl}
          download
          className="btn-primary"
        >
          Download Resume
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <button
          type="button"
          onClick={() => setViewMode('pdf')}
          className={`btn-primary ${viewMode === 'pdf' ? 'opacity-100' : 'opacity-70'}`}
        >
          PDF View
        </button>

        <button
          type="button"
          onClick={() => setViewMode('images')}
          className={`btn-primary ${viewMode === 'images' ? 'opacity-100' : 'opacity-70'}`}
        >
          Image View
        </button>
      </div>

      <div
        className="
          rounded-2xl gap-3 transition
          border
          border-brand-soft
          bg-slate-100
          hover:bg-slate-50
          hover:border-brand
          shadow-card dark:shadow-card-dark
          dark:bg-slate-900/60
          dark:hover:bg-slate-950
          dark:hover:border-brand
          dark:border-brand-soft
        "
      >
        <p className="p-3 font-bold text-xs text-center text-slate-600 dark:text-slate-400 mb-2">
          {viewMode === 'pdf'
            ? 'PDF view is selected. If inline PDF viewing is limited on your device, switch to Image View.'
            : 'Image view is selected for maximum compatibility across devices.'}
        </p>

        <div
          className="
            h-[70vh] w-full rounded-xl
            border border-slate-300 bg-slate-100
            dark:border-slate-800 dark:bg-slate-950
            min-h-0
          "
        >
          {viewMode === 'pdf' ? (
            <iframe
              src={resumeUrl}
              title="Jeff Pedersen Resume PDF"
              className="h-full w-full rounded-xl"
            />
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