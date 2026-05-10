// src/components/TechIcon.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { techDetails } from "../data/techDetails.js";
import { projects } from "../data/projects.js";
import { caseStudies } from "../data/caseStudies.js";
import TechInfoModal from "./TechInfoModal.jsx";

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
  ThymeLeaf: "thymeleaf-icon",
  "Risk Analysis": "risk_analysis-icon",
  "Requirements Gathering": "requirements_gathering-icon",
  "Project Scheduling": "project_scheduling-icon",
  "Resource Allocation": "resource_allocation-icon",
  "Cost Estimation": "cost_estimation-icon",
  "Project Charters": "project_charter-icon",
  "Status Reporting": "status_reporting-icon",
  "Quality Management": "quality_management-icon",
  "Stakeholder Management": "stakeholder_management-icon",
  Agile: "agile-icon",
  Scrum: "scrum-icon",
  "Risk Registers": "risk_register-icon",
  RFPs: "rfp-icon",
  "Communication Plans": "communication_plan-icon",
  "Network Diagrams": "network_diagram-icon",
  WBS: "wbs-icon",
  "WBS Dictionaries": "wbs_dictionary-icon",
  "UI/UX Design": "ui_ux_design-icon",
};

const NAME_TO_BG = {
  Java: "bg-slate-900 border border-brand dark:border-brand-soft",
  "Spring Boot": "bg-slate-900 border border-brand dark:border-brand-soft",
  "Jakarta EE": "bg-slate-900 border border-brand dark:border-brand-soft",
  HTML: "bg-slate-900 border border-brand dark:border-brand-soft",
  React: "bg-slate-900 border border-brand dark:border-brand-soft",
  Python: "bg-slate-900 border border-brand dark:border-brand-soft",
  PHP: "bg-slate-900 border border-brand dark:border-brand-soft",
  Android: "bg-slate-900 border border-brand dark:border-brand-soft",
  JavaFX: "bg-slate-900 border border-brand dark:border-brand-soft",
  CSS: "bg-slate-900 border border-brand dark:border-brand-soft",
  SQL: "bg-slate-900 border border-brand dark:border-brand-soft",
  JavaScript: "bg-slate-900 border border-brand dark:border-brand-soft",
  TypeScript: "bg-slate-900 border border-brand dark:border-brand-soft",
  Ruby: "bg-slate-900 border border-brand dark:border-brand-soft",
  "Ruby on Rails": "bg-slate-900 border border-brand dark:border-brand-soft",
  Ajax: "bg-slate-900 border border-brand dark:border-brand-soft",
  "Visual Basic": "bg-slate-900 border border-brand dark:border-brand-soft",
  XML: "bg-slate-900 border border-brand dark:border-brand-soft",
  JSON: "bg-slate-900 border border-brand dark:border-brand-soft",
  YAML: "bg-stone-700 border border-brand dark:border-brand-soft",
  Kotlin: "bg-slate-900 border border-brand dark:border-brand-soft",
  Sass: "bg-slate-900 border border-brand dark:border-brand-soft",
  JSP: "bg-slate-900 border border-brand dark:border-brand-soft",
  "Node.js": "bg-slate-900 border border-brand dark:border-brand-soft",
  Bootstrap: "bg-slate-900 border border-brand dark:border-brand-soft",
  Tailwind: "bg-slate-900 border border-brand dark:border-brand-soft",
  Git: "bg-slate-900 border border-brand dark:border-brand-soft",
  Docker: "bg-slate-900 border border-brand dark:border-brand-soft",
  ".NET": "bg-slate-900 border border-brand dark:border-brand-soft",
  Drupal: "bg-slate-900 border border-brand dark:border-brand-soft",
  WordPress: "bg-slate-900 border border-brand dark:border-brand-soft",
  jQuery: "bg-slate-900 border border-brand dark:border-brand-soft",
  AJAX: "bg-slate-900 border border-brand dark:border-brand-soft",
  MongoDB: "bg-slate-900 border border-brand dark:border-brand-soft",
  MySQL: "bg-slate-900 border border-brand dark:border-brand-soft",
  PostgreSQL: "bg-slate-900 border border-brand dark:border-brand-soft",
  "SQL Server": "bg-slate-900 border border-brand dark:border-brand-soft",
  MariaDB: "bg-slate-900 border border-brand dark:border-brand-soft",
  SQLite: "bg-slate-900 border border-brand dark:border-brand-soft",
  "Amazon RDS": "bg-slate-900 border border-brand dark:border-brand-soft",
  DynamoDB: "bg-slate-900 border border-brand dark:border-brand-soft",
  GitHub: "bg-slate-900 border border-brand dark:border-brand-soft",
  "VS Code": "bg-slate-900 border border-brand dark:border-brand-soft",
  "IntelliJ IDEA": "bg-slate-900 border border-brand dark:border-brand-soft",
  Eclipse: "bg-stone-700 border border-brand dark:border-brand-soft",
  Maven: "bg-slate-900 border border-brand dark:border-brand-soft",
  Gradle: "bg-slate-900 border border-brand dark:border-brand-soft",
  Figma: "bg-slate-900 border border-brand dark:border-brand-soft",
  JUnit: "bg-slate-900 border border-brand dark:border-brand-soft",
  Photoshop: "bg-slate-900 border border-brand dark:border-brand-soft",
  Inkscape: "bg-slate-900 border border-brand dark:border-brand-soft",
  "Microsoft Office": "bg-slate-900 border border-brand dark:border-brand-soft",
  Slack: "bg-slate-900 border border-brand dark:border-brand-soft",
  Zoom: "bg-slate-900 border border-brand dark:border-brand-soft",
  Teams: "bg-slate-900 border border-brand dark:border-brand-soft",
  NPM: "bg-slate-900 border border-brand dark:border-brand-soft",
  Yarn: "bg-slate-900 border border-brand dark:border-brand-soft",
  AWS: "bg-stone-700 border border-brand dark:border-brand-soft",
  Netlify: "bg-slate-900 border border-brand dark:border-brand-soft",
  "GitHub Pages": "bg-slate-900 border border-brand dark:border-brand-soft",
  Azure: "bg-slate-900 border border-brand dark:border-brand-soft",
  "Google Cloud": "bg-slate-900 border border-brand dark:border-brand-soft",
  Heroku: "bg-stone-700 border border-brand dark:border-brand-soft",
  "REST APIs": "bg-slate-900 border border-brand dark:border-brand-soft",
  Coursera: "bg-slate-900 border border-brand dark:border-brand-soft",
  "Server-Side": "bg-slate-900 border border-brand dark:border-brand-soft",
  CSV: "bg-slate-900 border border-brand dark:border-brand-soft",
  ThymeLeaf: "bg-slate-900 border border-brand dark:border-brand-soft",
  "Risk Analysis": "bg-stone-700 border border-brand dark:border-brand-soft",
  "Requirements Gathering": "bg-stone-700 border border-brand dark:border-brand-soft",
  "Project Scheduling": "bg-stone-700 border border-brand dark:border-brand-soft",
  "Resource Allocation": "bg-stone-700 border border-brand dark:border-brand-soft",
  "Cost Estimation": "bg-stone-700 border border-brand dark:border-brand-soft",
  "Project Charters": "bg-stone-700 border border-brand dark:border-brand-soft",
  "Status Reporting": "bg-stone-700 border border-brand dark:border-brand-soft",
  "Quality Management": "bg-stone-700 border border-brand dark:border-brand-soft",
  "Stakeholder Management": "bg-stone-700 border border-brand dark:border-brand-soft",
  Agile: "bg-stone-700 border border-brand dark:border-brand-soft",
  Scrum: "bg-stone-700 border border-brand dark:border-brand-soft",
  "Risk Registers": "bg-stone-700 border border-brand dark:border-brand-soft",
  RFPs: "bg-stone-700 border border-brand dark:border-brand-soft",
  "Communication Plans": "bg-stone-700 border border-brand dark:border-brand-soft",
  "Network Diagrams": "bg-stone-700 border border-brand dark:border-brand-soft",
  WBS: "bg-stone-700 border border-brand dark:border-brand-soft",
  "WBS Dictionaries": "bg-stone-700 border border-brand dark:border-brand-soft",
  "UI/UX Design": "bg-slate-900 border border-brand dark:border-brand-soft",
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

const TechTooltip = ({ visible, anchorRect, label, description, iconSrc }) => {
  if (!visible || !anchorRect) return null;

  const tooltipWidth = 260;
  const spacing = 10;

  let left = anchorRect.left + anchorRect.width / 2;
  let top = anchorRect.top - spacing;

  const minLeft = tooltipWidth / 2 + 8;
  const maxLeft = window.innerWidth - tooltipWidth / 2 - 8;

  if (left < minLeft) left = minLeft;
  if (left > maxLeft) left = maxLeft;

  const tooltip = (
    <div
      className="
        pointer-events-none fixed z-[9998]
      "
      style={{
        left,
        top,
        transform: "translate(-50%, -100%)",
      }}
    >
      <div
        className="
          relative w-[260px] rounded-2xl
          border border-brand-soft
          bg-slate-200/95 dark:bg-slate-800/95
          shadow-lg
          overflow-visible
        "
      >
        {iconSrc && (
          <div
            className="
              absolute -top-10 -right-10 z-20
              h-28 w-28 rounded-full
              border-2 border-brand
              bg-slate-950/30 backdrop-blur-sm
              flex items-center justify-center
              shadow-[0_0_18px_rgba(99,102,241,0.35)]
            "
          >
            <img
              src={iconSrc}
              alt=""
              draggable="false"
              className="h-16 w-16 object-contain"
            />
          </div>
        )}

        <div
          className="
            px-3 py-2
            bg-brand dark:bg-brand-soft
            border-b border-brand-soft
            rounded-t-2xl
          "
        >
          <p className="text-xs font-semibold text-slate-100 text-center">
            {label}
          </p>
        </div>

        <div className="px-3 py-2 pr-16">
          <p className="text-[11px] text-slate-700 dark:text-slate-300">
            {description || "Click for details."}
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(tooltip, document.body);
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
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [anchorRect, setAnchorRect] = useState(null);
  const triggerRef = useRef(null);

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

  useEffect(() => {
    if (!tooltipVisible) return;

    const updatePosition = () => {
      if (!triggerRef.current) return;
      setAnchorRect(triggerRef.current.getBoundingClientRect());
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [tooltipVisible]);

  const iconNode = src ? (
    showBg ? (
      <div
        className={`
          h-10 w-10 rounded-full
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
        className="h-7 w-7 object-contain"
        draggable="false"
      />
    )
  ) : (
    <div
      className={`
        h-8 w-8 rounded-full
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
        relative flex items-center justify-center
        w-14 h-12 mx-1 my-1
        ${className}
      `}
    >
      {iconNode}

      {!hideLabel && (
        <span
          className="
            absolute left-1/2 bottom-0 z-10
            min-w-[3.8rem]
            max-w-[4.8rem]
            -translate-x-1/2 translate-y-1

            rounded-md px-1 py-[1px]

            bg-slate-950/45
            text-[9px] font-semibold leading-[1.05] text-white
            text-center

            shadow-sm backdrop-blur-[1px]

            pointer-events-none
            whitespace-normal break-words
          "
          title={label}
        >
          {label}
        </span>
      )}
    </div>
  );

  return (
    <>
      {interactive ? (
        <button
          ref={triggerRef}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen(true);
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          onFocus={() => setTooltipVisible(true)}
          onBlur={() => setTooltipVisible(false)}
          className="bg-transparent p-0 text-left"
          aria-label={`Open details for ${label}`}
        >
          {content}
        </button>
      ) : (
        content
      )}

      {interactive && (
        <TechTooltip
          visible={tooltipVisible}
          anchorRect={anchorRect}
          label={label}
          description={description}
          iconSrc={src}
        />
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