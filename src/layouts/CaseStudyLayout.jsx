import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FloatingBackButton from "../components/FloatingBackButton.jsx";
import useBackShortcut from "../hooks/useBackShortcut.js";
import { Link } from "react-router-dom";

const CaseStudyLayout = ({ title, children }) => {
  useBackShortcut(); // enables “B” shortcut

  return (
    <div className="space-y-10 relative">
      {/* Breadcrumbs */}
      <Breadcrumbs current={title} />

      {/* Top back link */}
      <Link
        to="/case-studies"
        className="
          text-xs
          text-brand-700 hover:text-brand-900
          dark:text-brand dark:hover:text-brand-soft
          block
        "
      >
        ← Back to Case Studies
      </Link>

      {/* Page content injected */}
      {children}

      {/* Bottom back link */}
      <Link
        to="/case-studies"
        className="
          text-xs
          text-brand-700 hover:text-brand-900
          dark:text-brand dark:hover:text-brand-soft
          block
        "
      >
        ← Back to Case Studies
      </Link>

      {/* Floating button */}
      <FloatingBackButton />
    </div>
  );
};

export default CaseStudyLayout;