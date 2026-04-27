import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FloatingBackButton from "../components/FloatingBackButton.jsx";
import useBackShortcut from "../hooks/useBackShortcut.js";
import { Link } from "react-router-dom";

const ProjectLayout = ({ title, children }) => {
  useBackShortcut();

  return (
    <div className="space-y-10 relative">
      <Breadcrumbs
        current={title}
        parentLabel="Projects"
        parentTo="/projects"
      />

      {children}

      <Link
        to="/projects"
        className="
          text-xs
          text-brand-700 hover:text-brand-900
          dark:text-brand dark:hover:text-brand-soft
          block
        "
      >
        ← Back to Projects
      </Link>

      <FloatingBackButton to="/projects" label="Back to Projects" />
    </div>
  );
};

export default ProjectLayout;