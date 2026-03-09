import PageHeader from '../components/PageHeader.jsx';

const Resume = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}/Jeff-Pedersen-Resume.pdf`;

  return (
    <div className="space-y-6">
      <PageHeader
        kicker="Resume"
        title="One-page snapshot of what I can do."
      >
        You can view my resume directly on this page or download the PDF if
        you’d rather keep a copy.
      </PageHeader>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        {/* Open PDF */}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Open PDF in new tab
        </a>

        {/* Download PDF */}
        <a
          href={resumeUrl}
          download
          className="btn-primary"
          
        >
          Download resume
        </a>
      </div>

      {/* Viewer container */}
      <div
        className="
          rounded-2xl p-4
          border border-slate-300 bg-white
          dark:border-slate-800 dark:bg-slate-900/60
        "
      >
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
          If your browser supports it, the resume will appear below. If not,
          use the buttons above to open or download it.
        </p>

        <div
          className="
            h-[70vh] w-full rounded-xl overflow-hidden
            border border-slate-300 bg-slate-100
            dark:border-slate-800 dark:bg-slate-950
          "
        >
          <object
            data={resumeUrl}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p className="p-4 text-sm text-slate-700 dark:text-slate-300">
              Your browser can’t display embedded PDFs. You can{' '}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-brand"
              >
                open the resume in a new tab
              </a>{' '}
              instead.
            </p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default Resume;