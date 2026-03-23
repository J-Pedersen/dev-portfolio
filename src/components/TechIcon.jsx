// src/components/TechIcon.jsx

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
  Java: "bg-green-200/20 border border-brand dark:border-brand-soft",
  "Spring Boot": "bg-orange-600/20 border border-brand dark:border-brand-soft",
  "Jakarta EE": "bg-red-600/20 border border-brand dark:border-brand-soft",
  HTML: "bg-sky-600/20 border border-brand dark:border-brand-soft",
  React: "bg-yellow-600/20 border border-brand dark:border-brand-soft",
  Python: "bg-orange-300/20 border border-brand dark:border-brand-soft",
  PHP: "bg-orange-600/20 border border-brand dark:border-brand-soft",
  Android: "bg-orange-500/20 border border-brand dark:border-brand-soft",
  JavaFX: "bg-pink-400/20 border border-brand dark:border-brand-soft",
  CSS: "bg-yellow-500/20 border border-brand dark:border-brand-soft",
  SQL: "bg-slate-500/20 border border-brand dark:border-brand-soft",
  JavaScript: "bg-green-500/20 border border-brand dark:border-brand-soft",
  TypeScript: "bg-red-600/20 border border-brand dark:border-brand-soft",
  Ruby: "bg-sky-700/20 border border-brand dark:border-brand-soft",
  "Ruby on Rails": "bg-blue-400/20 border border-brand dark:border-brand-soft",
  Ajax: "bg-indigo-500/20 border border-brand dark:border-brand-soft",
  "Visual Basic": "bg-neutral-300/20 border border-brand dark:border-brand-soft",
  XML: "bg-neutral-200/20 border border-brand dark:border-brand-soft",
  JSON: "bg-blue-300/20 border border-brand dark:border-brand-soft",
  YAML: "bg-sky-300/20 border border-brand dark:border-brand-soft",
  Kotlin: "bg-gray-800/20 border border-brand dark:border-brand-soft",
  Sass: "bg-green-900/20 border border-brand dark:border-brand-soft",
  JSP: "bg-fuchsia-500/20 border border-brand dark:border-brand-soft",
  "Node.js": "bg-red-500/20 border border-brand dark:border-brand-soft",
  Bootstrap: "bg-teal-600/20 border border-brand dark:border-brand-soft",
  Tailwind: "bg-stone-400/20 border border-brand dark:border-brand-soft",
  Git: "bg-purple-700/20 border border-brand dark:border-brand-soft",
  Docker: "bg-orange-400/20 border border-brand dark:border-brand-soft",
  ".NET": "bg-orange-200/20 border border-brand dark:border-brand-soft",
  Drupal: "bg-amber-500/20 border border-brand dark:border-brand-soft",
  WordPress: "bg-yellow-800/20 border border-brand dark:border-brand-soft",
  jQuery: "bg-amber-500/20 border border-brand dark:border-brand-soft",
  AJAX: "bg-red-900/20 border border-brand dark:border-brand-soft",
  MongoDB: "bg-neutral-400/20 border border-brand dark:border-brand-soft",
  MySQL: "bg-orange-300/20 border border-brand dark:border-brand-soft",
  PostgreSQL: "bg-yellow-600/20 border border-brand dark:border-brand-soft",
  "SQL Server": "bg-lime-400/20 border border-brand dark:border-brand-soft",
  MariaDB: "bg-blue-950/20 border border-brand dark:border-brand-soft",
  SQLite: "bg-gray-500/20 border border-brand dark:border-brand-soft",
  "Amazon RDS": "bg-rose-600/20 border border-brand dark:border-brand-soft",
  DynamoDB: "bg-orange-600/20 border border-brand dark:border-brand-soft",
  GitHub: "bg-slate-800/20 border border-brand dark:border-brand-soft",
  "VS Code": "bg-yellow-300/20 border border-brand dark:border-brand-soft",
  "IntelliJ IDEA": "bg-fuchsia-500/20 border border-brand dark:border-brand-soft",
  Eclipse: "bg-neutral-400/20 border border-brand dark:border-brand-soft",
  Maven: "bg-emerald-600/20 border border-brand dark:border-brand-soft",
  Gradle: "bg-pink-500/20 border border-brand dark:border-brand-soft",
  Figma: "bg-stone-400/20 border border-brand dark:border-brand-soft",
  JUnit: "bg-rose-950/20 border border-brand dark:border-brand-soft",
  Photoshop: "bg-amber-800/20 border border-brand dark:border-brand-soft",
  Inkscape: "bg-sky-200/20 border border-brand dark:border-brand-soft",
  "Microsoft Office": "bg-violet-700/20 border border-brand dark:border-brand-soft",
  Slack: "bg-gray-400/20 border border-brand dark:border-brand-soft",
  Zoom: "bg-red-300/20 border border-brand dark:border-brand-soft",
  Teams: "bg-amber-200/20 border border-brand dark:border-brand-soft",
  NPM: "bg-cyan-600/20 border border-brand dark:border-brand-soft",
  Yarn: "bg-pink-950/20 border border-brand dark:border-brand-soft",
  AWS: "bg-neutral-200/20 border border-brand dark:border-brand-soft",
  Netlify: "bg-purple-500/20 border border-brand dark:border-brand-soft",
  "GitHub Pages": "bg-zinc-600/20 border border-brand dark:border-brand-soft",
  Azure: "bg-orange-700/20 border border-brand dark:border-brand-soft",
  "Google Cloud": "bg-blue-200/20 border border-brand dark:border-brand-soft",
  Heroku: "bg-neutral-300/20 border border-brand dark:border-brand-soft",
  "REST APIs": "bg-purple-800/20 border border-brand dark:border-brand-soft",
  Coursera: "bg-blue-700/20 border border-brand dark:border-brand-soft",
  "Server-Side": "bg-slate-700/20 border border-brand dark:border-brand-soft",
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

const TechIcon = ({ tech, name, hideLabel = false, className = "" }) => {
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

  return (
    <div
      className={`
        flex flex-col items-center justify-start
        w-14 mx-1 my-1
        ${className}
      `}
    >
      {src ? (
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
      )}

      {!hideLabel && (
        <span className="text-[10px] text-slate-700 dark:text-slate-300 text-center leading-tight">
          {label}
        </span>
      )}
    </div>
  );
};

export default TechIcon;