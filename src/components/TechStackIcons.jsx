// src/components/TechStackIcons.jsx
import BrandIcon from "./BrandIcon.jsx";

const TECH_ICON_BY_LABEL = {
  // languages / core tech
  Java: "java",
  JavaScript: "javascript",
  TypeScript: "typescript",
  Python: "python",
  HTML: "html5",
  CSS: "css3",

  // frameworks / libraries
  React: "react",
  "Spring Boot": "springboot",
  ".NET": "dotnet",
  "Ruby on Rails": "rubyonrails",
  "Node.js / Express": "javascript", // close-enough stand-in
  "JSP / Servlets": "java",
  JavaFX: "java",

  // databases
  MongoDB: "mongodb",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  "SQL Server": "microsoftsqlserver",

  // tools
  "Git / GitHub": "git",
  GitHub: "github",
  Docker: "docker",
  Maven: "maven",
  Postman: "postman",
  Figma: "figma",

  // cloud / hosting
  "AWS (S3, EC2, basic services)": "amazonaws",
  Netlify: "netlify",
  Vercel: "vercel",

  // mobile / other
  Android: "android",
};

const TechStackIcons = ({ techStack = [] }) => {
  if (!techStack.length) return null;

  return (
    <ul className="flex flex-wrap justify-center gap-2">
      {techStack.map((label) => {
        const iconKey = TECH_ICON_BY_LABEL[label];
        return (
          <li
            key={label}
            className="
              inline-flex items-center gap-1
              rounded-full border border-slate-300 bg-slate-100 px-2 py-1
              text-[11px] text-slate-700
              dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200
            "
          >
            {iconKey && (
              <BrandIcon
                name={iconKey}
                size={14}
                className="text-slate-700 dark:text-slate-200"
              />
            )}
            <span>{label}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TechStackIcons;