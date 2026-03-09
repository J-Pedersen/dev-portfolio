// src/components/TagPill.jsx
import TechIcon from "./TechIcon.jsx";

const TagPill = ({ label }) => {
  return (
    <div className="flex items-center">
      <TechIcon tech={label} />
    </div>
  );
};

export default TagPill;