import { useMemo } from "react";

const ResumeViewer = () => {
  const base = import.meta.env.BASE_URL;

  const pdfSrc = `${base}pdfs/Jeff Pedersen-Resume.pdf`;

  const imagePages = useMemo(
    () => [
      `${base}resume/Jeff Pedersen - Resume Pg 1.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 2.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 3.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 4.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 5.png`,
    ],
    [base]
  );

  return (
    <div className="space-y-4">
      <div
        className="
          rounded-2xl overflow-hidden
          border border-brand-soft
          bg-white dark:bg-slate-900
          shadow-card dark:shadow-card-dark
        "
      >
        <object
          data={pdfSrc}
          type="application/pdf"
          width="100%"
          height="900"
          className="w-full"
          aria-label="Resume PDF viewer"
        >
          <div className="p-4 space-y-4">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Inline PDF viewing is not supported on this device. A page-image
              version is shown below.
            </p>

            <div className="space-y-4">
              {imagePages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Resume page ${index + 1}`}
                  className="w-full rounded-xl border border-brand-soft"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </object>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={pdfSrc}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Open PDF
        </a>

        <a
          href={pdfSrc}
          download
          className="btn-primary"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeViewer;