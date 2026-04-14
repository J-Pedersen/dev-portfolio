const ResumeViewer = () => {
  const base = import.meta.env.BASE_URL;
  const resumeUrl = `${base}pdfs/Jeff Pedersen-Resume.pdf`;

  const resumeImages = [
    `${base}resume/Jeff Pedersen - Resume Pg 1.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 2.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 3.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 4.png`,
      `${base}resume/Jeff Pedersen - Resume Pg 5.png`,
  ];

  return (
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
        If your browser supports it, the resume will appear below. If not,
        a fallback version will be displayed automatically.
      </p>

      <div
        className="
          h-[70vh] w-full rounded-xl overflow-y-auto overflow-x-hidden
          border border-slate-300 bg-slate-100
          dark:border-slate-800 dark:bg-slate-950
        "
      >
        <object
          data={resumeUrl}
          type="application/pdf"
          width="100%"
          height="1000"
          className="w-full min-h-[1000px]"
        >
          <div className="p-4 space-y-4">
            <p className="text-sm text-center text-slate-700 dark:text-slate-300">
              Your device does not support embedded PDFs. A preview version is shown below.
            </p>

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
        </object>
      </div>
    </div>
  );
};

export default ResumeViewer;