import PageHeader from '../components/PageHeader.jsx';
import ResumeViewer from '../components/ResumeViewer.jsx';

const Resume = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}pdfs/Jeff-Pedersen-Resume.pdf`;

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

      <ResumeViewer />
    </div>
  );
};

export default Resume;