// src/components/TechIcon.jsx
import { useEffect, useMemo, useState } from "react";
import { techDetails } from "../data/techDetails.js";
import { projects } from "../data/projects.js";
import { caseStudies } from "../data/caseStudies.js";

const NAME_TO_ICON = {
  Java: "java-icon",
  "Spring Boot": "spring_boot-icon",
  "Jakarta EE": "jakartaee-icon",
  HTML: "html-icon",
  React: "react-icon",
  Python: "python-icon",
  PHP: "php-icon",
  Android: "android-icon",
  JavaFX: "javafx-icon",
  CSS: "css-icon",
  SQL: "sql-icon",
  JavaScript: "javascript-icon",
  TypeScript: "typescript-icon",
  Ruby: "ruby-icon",
  "Ruby on Rails": "ruby_on_rails-icon",
  Ajax: "ajax-icon",
  "Visual Basic": "visual_basic-icon",
  XML: "xml-icon",
  JSON: "json-icon",
  YAML: "yaml-icon",
  Kotlin: "kotlin-icon",
  Sass: "sass-icon",
  JSP: "jsp-icon",
  "Node.js": "nodejs-icon",
  Bootstrap: "bootstrap-icon",
  Tailwind: "tailwind-icon",
  Git: "git-icon",
  Docker: "docker-icon",
  ".NET": "dotnet-icon",
  Drupal: "drupal-icon",
  WordPress: "wordpress-icon",
  jQuery: "jquery-icon",
  AJAX: "ajax-icon",
  MongoDB: "mongodb-icon",
  MySQL: "mysql-icon",
  PostgreSQL: "postgre_sql-icon",
  "SQL Server": "microsoft_sql_server-icon",
  MariaDB: "mariadb-icon",
  SQLite: "sq_lite-icon",
  "Amazon RDS": "amazon_rds-icon",
  DynamoDB: "dynamodb-icon",
  GitHub: "github-icon",
  "VS Code": "vs_code-icon",
  "IntelliJ IDEA": "intellij_idea-icon",
  Eclipse: "eclipse-icon",
  Maven: "maven-icon",
  Gradle: "gradle-icon",
  Figma: "figma-icon",
  JUnit: "junit-icon",
  Photoshop: "adobe_photoshop-icon",
  Inkscape: "inkscape-icon",
  "Microsoft Office": "microsoft_office-icon",
  Slack: "slack-icon",
  Zoom: "zoom-icon",
  Teams: "teams-icon",
  NPM: "npm-icon",
  Yarn: "yarn-icon",
  AWS: "aws-icon",
  Netlify: "netlify-icon",
  "GitHub Pages": "github-icon",
  Azure: "azure-icon",
  "Google Cloud": "google_cloud-icon",
  Heroku: "heroku-icon",
  "REST APIs": "rest_api-icon",
  Coursera: "coursera-icon",
  "Server-Side": "server_side-icon",
  CSV: "csv-icon",
};

const NAME_TO_BG = {
  Java: "bg-neutral-200/20 border border-brand dark:border-brand-soft",
  "Spring Boot": "bg-orange-600/20 border border-brand dark:border-brand-soft",
  "Jakarta EE": "bg-red-300/20 border border-brand dark:border-brand-soft",
  HTML: "bg-sky-600/20 border border-brand dark:border-brand-soft",
  React: "bg-yellow-600/20 border border-brand dark:border-brand-soft",
  Python: "bg-orange-300/20 border border-brand dark:border-brand-soft",
  PHP: "bg-orange-300/20 border border-brand dark:border-brand-soft",
  Android: "bg-orange-300/20 border border-brand dark:border-brand-soft",
  JavaFX: "bg-pink-200/20 border border-brand dark:border-brand-soft",
  CSS: "bg-yellow-500/20 border border-brand dark:border-brand-soft",
  SQL: "bg-slate-500/20 border border-brand dark:border-brand-soft",
  JavaScript: "bg-green-500/20 border border-brand dark:border-brand-soft",
  TypeScript: "bg-red-600/20 border border-brand dark:border-brand-soft",
  Ruby: "bg-sky-700/20 border border-brand dark:border-brand-soft",
  "Ruby on Rails": "bg-blue-400/20 border border-brand dark:border-brand-soft",
  Ajax: "bg-indigo-500/20 border border-brand dark:border-brand-soft",
  "Visual Basic": "bg-neutral-300/20 border border-brand dark:border-brand-soft",
  XML: "bg-neutral-300/20 border border-brand dark:border-brand-soft",
  JSON: "bg-blue-300/20 border border-brand dark:border-brand-soft",
  YAML: "bg-sky-300/20 border border-brand dark:border-brand-soft",
  Kotlin: "bg-gray-300/20 border border-brand dark:border-brand-soft",
  Sass: "bg-green-900/20 border border-brand dark:border-brand-soft",
  JSP: "bg-fuchsia-300/20 border border-brand dark:border-brand-soft",
  "Node.js": "bg-red-300/20 border border-brand dark:border-brand-soft",
  Bootstrap: "bg-teal-300/20 border border-brand dark:border-brand-soft",
  Tailwind: "bg-stone-300/20 border border-brand dark:border-brand-soft",
  Git: "bg-purple-300/20 border border-brand dark:border-brand-soft",
  Docker: "bg-orange-300/20 border border-brand dark:border-brand-soft",
  ".NET": "bg-orange-200/20 border border-brand dark:border-brand-soft",
  Drupal: "bg-amber-300/20 border border-brand dark:border-brand-soft",
  WordPress: "bg-yellow-300/20 border border-brand dark:border-brand-soft",
  jQuery: "bg-amber-300/20 border border-brand dark:border-brand-soft",
  AJAX: "bg-red-300/20 border border-brand dark:border-brand-soft",
  MongoDB: "bg-neutral-400/20 border border-brand dark:border-brand-soft",
  MySQL: "bg-orange-300/20 border border-brand dark:border-brand-soft",
  PostgreSQL: "bg-yellow-300/20 border border-brand dark:border-brand-soft",
  "SQL Server": "bg-lime-400/20 border border-brand dark:border-brand-soft",
  MariaDB: "bg-blue-500/20 border border-brand dark:border-brand-soft",
  SQLite: "bg-lime-300/20 border border-brand dark:border-brand-soft",
  "Amazon RDS": "bg-rose-300/20 border border-brand dark:border-brand-soft",
  DynamoDB: "bg-orange-300/20 border border-brand dark:border-brand-soft",
  GitHub: "bg-slate-800/20 border border-brand dark:border-brand-soft",
  "VS Code": "bg-yellow-300/20 border border-brand dark:border-brand-soft",
  "IntelliJ IDEA": "bg-fuchsia-300/20 border border-brand dark:border-brand-soft",
  Eclipse: "bg-lime-300/20 border border-brand dark:border-brand-soft",
  Maven: "bg-emerald-300/20 border border-brand dark:border-brand-soft",
  Gradle: "bg-pink-300/20 border border-brand dark:border-brand-soft",
  Figma: "bg-stone-400/20 border border-brand dark:border-brand-soft",
  JUnit: "bg-rose-300/20 border border-brand dark:border-brand-soft",
  Photoshop: "bg-amber-300/20 border border-brand dark:border-brand-soft",
  Inkscape: "bg-sky-200/20 border border-brand dark:border-brand-soft",
  "Microsoft Office": "bg-violet-700/20 border border-brand dark:border-brand-soft",
  Slack: "bg-gray-400/20 border border-brand dark:border-brand-soft",
  Zoom: "bg-red-300/20 border border-brand dark:border-brand-soft",
  Teams: "bg-amber-200/20 border border-brand dark:border-brand-soft",
  NPM: "bg-cyan-600/20 border border-brand dark:border-brand-soft",
  Yarn: "bg-pink-950/20 border border-brand dark:border-brand-soft",
  AWS: "bg-neutral-200/20 border border-brand dark:border-brand-soft",
  Netlify: "bg-purple-400/20 border border-brand dark:border-brand-soft",
  "GitHub Pages": "bg-zinc-600/20 border border-brand dark:border-brand-soft",
  Azure: "bg-orange-300/20 border border-brand dark:border-brand-soft",
  "Google Cloud": "bg-blue-200/20 border border-brand dark:border-brand-soft",
  Heroku: "bg-neutral-300/20 border border-brand dark:border-brand-soft",
  "REST APIs": "bg-purple-800/20 border border-brand dark:border-brand-soft",
  Coursera: "bg-blue-700/20 border border-brand dark:border-brand-soft",
  "Server-Side": "bg-lime-300/20 border border-brand dark:border-brand-soft",
  CSV: "bg-green-600/20 border border-brand dark:border-brand-soft",
};

const RANDOM_BG_COLORS = [
  "bg-red-500/20 border border-brand dark:border-brand-soft",
  "bg-orange-800/20 border border-brand dark:border-brand-soft",
  "bg-amber-700/20 border border-brand dark:border-brand-soft",
  "bg-yellow-900/20 border border-brand dark:border-brand-soft",
  "bg-lime-500/20 border border-brand dark:border-brand-soft",
  "bg-green-600/20 border border-brand dark:border-brand-soft",
  "bg-emerald-700/20 border border-brand dark:border-brand-soft",
  "bg-teal-800/20 border border-brand dark:border-brand-soft",
  "bg-cyan-900/20 border border-brand dark:border-brand-soft",
  "bg-sky-700/20 border border-brand dark:border-brand-soft",
  "bg-blue-800/20 border border-brand dark:border-brand-soft",
  "bg-indigo-600/20 border border-brand dark:border-brand-soft",
  "bg-violet-900/20 border border-brand dark:border-brand-soft",
  "bg-purple-500/20 border border-brand dark:border-brand-soft",
  "bg-fuchsia-600/20 border border-brand dark:border-brand-soft",
  "bg-pink-700/20 border border-brand dark:border-brand-soft",
];

const getRandomColorFromString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return RANDOM_BG_COLORS[Math.abs(hash) % RANDOM_BG_COLORS.length];
};

const TechInfoModal = ({ open, onClose, tech, description, usedIn = [] }) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close tech details"
        onClick={onClose}
        className="absolute inset-0 w-full h-full bg-slate-950/50 backdrop-blur-sm"
      />

      <div
        className="
          relative z-10 w-full max-w-lg rounded-2xl
          border border-brand-soft
          bg-slate-100 dark:bg-slate-900
          shadow-[0_12px_40px_rgba(0,0,0,0.25)]
          p-5
        "
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
              {tech}
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {description || "No description added yet."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              inline-flex h-9 w-9 items-center justify-center rounded-full
              border border-slate-300 dark:border-slate-700
              text-slate-700 dark:text-slate-200
              hover:border-brand hover:text-brand
              transition
            "
          >
            ×
          </button>
        </div>

        <div className="border-t border-brand-soft/40 pt-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">
            Used in
          </h4>

          {usedIn.length > 0 ? (
            <ul className="space-y-2">
              {usedIn.map((item) => (
                <li key={`${item.type}-${item.slug}`}>
                  <a
                    href={item.href}
                    className="text-sm text-brand hover:text-brand-soft transition"
                  >
                    {item.title}
                  </a>
                  <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
                    {item.type}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-600 dark:text-slate-400">
              No linked projects found yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const TechIcon = ({
  tech,
  name,
  hideLabel = false,
  className = "",
  showBg = true,
  interactive = true,
}) => {
  const [open, setOpen] = useState(false);

  const label = tech ?? name;
  if (!label) return null;

  let iconFileBase = null;

  if (tech && NAME_TO_ICON[tech]) {
    iconFileBase = NAME_TO_ICON[tech];
  } else if (name) {
    iconFileBase = name.replace(/\.svg$/i, "");
  }

  const hasIcon = Boolean(iconFileBase);

  const src = hasIcon
    ? `${import.meta.env.BASE_URL}icons/${iconFileBase}.svg`
    : null;

  const initials = label
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const bgColor = hasIcon
    ? NAME_TO_BG[label] || "bg-brand"
    : getRandomColorFromString(label);

  const description = techDetails?.[label]?.description;

  const usedIn = useMemo(() => {
    const projectMatches = projects
      .filter((p) => p.techStack?.includes(label) || p.tags?.includes(label))
      .map((p) => ({
        type: "Project",
        slug: p.slug,
        title: p.title,
        href: `${import.meta.env.BASE_URL}#/projects/${p.slug}`,
      }));

    const caseStudyMatches = caseStudies
      .filter((c) => c.techStack?.includes(label))
      .map((c) => ({
        type: "Case Study",
        slug: c.slug,
        title: c.title,
        href: `${import.meta.env.BASE_URL}#/case-studies/${c.slug}`,
      }));

    return [...projectMatches, ...caseStudyMatches];
  }, [label]);

  const iconNode = src ? (
    showBg ? (
      <div
        className={`
          h-10 w-10 mb-0.5 rounded-full
          flex items-center justify-center
          ${bgColor}
          shadow-[0_0_10px_rgba(0,0,0,0.12)]
          dark:shadow-[0_0_12px_rgba(99,102,241,0.18)]
        `}
      >
        <img
          src={src}
          alt={label}
          className="h-7 w-7 object-contain"
          draggable="false"
        />
      </div>
    ) : (
      <img
        src={src}
        alt={label}
        className="h-7 w-7 object-contain mb-0.5"
        draggable="false"
      />
    )
  ) : (
    <div
      className={`
        h-8 w-8 mb-0.5 rounded-full
        flex items-center justify-center
        text-[10px] font-semibold text-black
        dark:text-white
        ${bgColor}
        shadow-[0_0_10px_rgba(0,0,0,0.12)]
        dark:shadow-[0_0_12px_rgba(99,102,241,0.18)]
      `}
    >
      {initials}
    </div>
  );

  const content = (
    <div
      className={`
        relative flex flex-col items-center justify-start
        w-14 mx-1 my-1
        ${className}
      `}
    >
      {iconNode}

      {!hideLabel && (
        <span className="text-[10px] text-slate-700 dark:text-slate-300 text-center leading-tight">
          {label}
        </span>
      )}

      {interactive && (
        <div
          className="
            pointer-events-none absolute left-1/2 top-0 z-20
            -translate-x-1/2 -translate-y-full
            rounded-lg border border-brand-soft/40
            bg-slate-100/95 dark:bg-slate-900/95
            px-3 py-2 min-w-[180px]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            shadow-lg backdrop-blur-sm
          "
        >
          <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
            {label}
          </p>
          <p className="mt-1 text-[11px] text-slate-700 dark:text-slate-300">
            {description || "Click for details."}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <>
      {interactive ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group bg-transparent p-0 text-left"
          aria-label={`Open details for ${label}`}
        >
          {content}
        </button>
      ) : (
        content
      )}

      <TechInfoModal
        open={open}
        onClose={() => setOpen(false)}
        tech={label}
        description={description}
        usedIn={usedIn}
      />
    </>
  );
};

export default TechIcon;