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
  Java: "bg-green-500/15",
  "Spring Boot": "bg-orange-600/15",
  "Jakarta EE": "bg-red-600/15",
  HTML: "bg-orange-600/15",
  React: "bg-cyan-500/15",
  Python: "bg-yellow-500/15",
  PHP: "bg-indigo-600/15",
  Android: "bg-green-500/15",
  JavaFX: "bg-blue-600/15",
  CSS: "bg-blue-500/15",
  SQL: "bg-sky-700/15",
  JavaScript: "bg-yellow-400/15",
  TypeScript: "bg-blue-700/15",
  Ruby: "bg-red-700/15",
  "Ruby on Rails": "bg-rose-700/15",
  Ajax: "bg-indigo-500/15",
  "Visual Basic": "bg-blue-800/15",
  XML: "bg-orange-700/15",
  JSON: "bg-amber-600/15",
  YAML: "bg-pink-600/15",
  Kotlin: "bg-violet-600/15",
  Sass: "bg-pink-500/15",
  JSP: "bg-orange-500/15",
  "Node.js": "bg-lime-600/15",
  Bootstrap: "bg-purple-700/15",
  Tailwind: "bg-cyan-600/15",
  Git: "bg-orange-500/15",
  Docker: "bg-sky-600/15",
  ".NET": "bg-violet-700/15",
  Drupal: "bg-blue-700/15",
  WordPress: "bg-sky-700/15",
  jQuery: "bg-blue-600/15",
  AJAX: "bg-indigo-500/15",
  MongoDB: "bg-green-700/15",
  MySQL: "bg-sky-700/15",
  PostgreSQL: "bg-blue-800/15",
  "SQL Server": "bg-red-700/15",
  MariaDB: "bg-amber-700/15",
  SQLite: "bg-blue-500/15",
  "Amazon RDS": "bg-orange-600/15",
  DynamoDB: "bg-indigo-700/15",
  GitHub: "bg-slate-700/15",
  "VS Code": "bg-blue-500/15",
  "IntelliJ IDEA": "bg-fuchsia-600/15",
  Eclipse: "bg-purple-800/15",
  Maven: "bg-red-800/15",
  Gradle: "bg-teal-700/15",
  Figma: "bg-pink-600/15",
  JUnit: "bg-green-700/15",
  Photoshop: "bg-blue-900/15",
  Inkscape: "bg-slate-600/15",
  "Microsoft Office": "bg-orange-600/15",
  Slack: "bg-fuchsia-700/15",
  Zoom: "bg-blue-600/15",
  Teams: "bg-indigo-600/15",
  NPM: "bg-red-600/15",
  Yarn: "bg-sky-600/15",
  AWS: "bg-orange-500/15",
  Netlify: "bg-teal-600/15",
  "GitHub Pages": "bg-slate-700/15",
  Azure: "bg-sky-600/15",
  "Google Cloud": "bg-blue-500/15",
  Heroku: "bg-purple-700/15",
  "REST APIs": "bg-emerald-600/15",
  Coursera: "bg-blue-700/15",
  "Server-Side": "bg-slate-700/15",
  CSV: "bg-green-600/15",
};

const RANDOM_BG_COLORS = [
  "bg-red-500/15",
  "bg-orange-500/15",
  "bg-amber-500/15",
  "bg-yellow-500/15",
  "bg-lime-500/15",
  "bg-green-500/15",
  "bg-emerald-500/15",
  "bg-teal-500/15",
  "bg-cyan-500/15",
  "bg-sky-500/15",
  "bg-blue-500/15",
  "bg-indigo-500/15",
  "bg-violet-500/15",
  "bg-purple-500/15",
  "bg-fuchsia-500/15",
  "bg-pink-500/15",
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
            h-8 w-8 mb-0.5 rounded-full
            flex items-center justify-center
            ${bgColor}
            shadow-[0_0_10px_rgba(0,0,0,0.12)]
            dark:shadow-[0_0_12px_rgba(99,102,241,0.18)]
          `}
        >
          <img
            src={src}
            alt={label}
            className="h-4 w-4 object-contain"
            draggable="false"
          />
        </div>
      ) : (
        <div
          className={`
            h-8 w-8 mb-0.5 rounded-full
            flex items-center justify-center
            text-[10px] font-semibold text-white
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