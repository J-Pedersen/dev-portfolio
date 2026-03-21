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
  Java: "bg-green-500/25",
  "Spring Boot": "bg-orange-600/25",
  "Jakarta EE": "bg-red-600/25",
  HTML: "bg-orange-600/25",
  React: "bg-cyan-500/25",
  Python: "bg-yellow-500/25",
  PHP: "bg-indigo-600/25",
  Android: "bg-green-500/25",
  JavaFX: "bg-blue-600/25",
  CSS: "bg-blue-500/25",
  SQL: "bg-sky-700/25",
  JavaScript: "bg-yellow-400/25",
  TypeScript: "bg-blue-700/25",
  Ruby: "bg-red-700/25",
  "Ruby on Rails": "bg-rose-700/25",
  Ajax: "bg-indigo-500/25",
  "Visual Basic": "bg-blue-800/25",
  XML: "bg-orange-700/25",
  JSON: "bg-amber-600/25",
  YAML: "bg-pink-600/25",
  Kotlin: "bg-violet-600/25",
  Sass: "bg-pink-500/25",
  JSP: "bg-orange-500/25",
  "Node.js": "bg-lime-600/25",
  Bootstrap: "bg-purple-700/25",
  Tailwind: "bg-cyan-600/25",
  Git: "bg-orange-500/25",
  Docker: "bg-sky-600/25",
  ".NET": "bg-violet-700/25",
  Drupal: "bg-blue-700/25",
  WordPress: "bg-sky-700/25",
  jQuery: "bg-blue-600/25",
  AJAX: "bg-indigo-500/25",
  MongoDB: "bg-green-700/25",
  MySQL: "bg-sky-700/25",
  PostgreSQL: "bg-blue-800/25",
  "SQL Server": "bg-red-700/25",
  MariaDB: "bg-amber-700/25",
  SQLite: "bg-blue-500/25",
  "Amazon RDS": "bg-orange-600/25",
  DynamoDB: "bg-indigo-700/25",
  GitHub: "bg-slate-700/25",
  "VS Code": "bg-blue-500/25",
  "IntelliJ IDEA": "bg-fuchsia-600/25",
  Eclipse: "bg-purple-800/25",
  Maven: "bg-red-800/25",
  Gradle: "bg-teal-700/25",
  Figma: "bg-pink-600/25",
  JUnit: "bg-green-700/25",
  Photoshop: "bg-blue-900/25",
  Inkscape: "bg-slate-600/25",
  "Microsoft Office": "bg-orange-600/25",
  Slack: "bg-fuchsia-700/25",
  Zoom: "bg-blue-600/25",
  Teams: "bg-indigo-600/25",
  NPM: "bg-red-600/25",
  Yarn: "bg-sky-600/25",
  AWS: "bg-orange-500/25",
  Netlify: "bg-teal-600/25",
  "GitHub Pages": "bg-slate-700/25",
  Azure: "bg-sky-600/25",
  "Google Cloud": "bg-blue-500/25",
  Heroku: "bg-purple-700/25",
  "REST APIs": "bg-emerald-600/25",
  Coursera: "bg-blue-700/25",
  "Server-Side": "bg-slate-700/25",
  CSV: "bg-green-600/25",
};

const RANDOM_BG_COLORS = [
  "bg-red-500/25",
  "bg-orange-500/25",
  "bg-amber-500/25",
  "bg-yellow-500/25",
  "bg-lime-500/25",
  "bg-green-500/25",
  "bg-emerald-500/25",
  "bg-teal-500/25",
  "bg-cyan-500/25",
  "bg-sky-500/25",
  "bg-blue-500/25",
  "bg-indigo-500/25",
  "bg-violet-500/25",
  "bg-purple-500/25",
  "bg-fuchsia-500/25",
  "bg-pink-500/25",
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