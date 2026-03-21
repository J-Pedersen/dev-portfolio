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
  Java: "bg-green-500/50",
  "Spring Boot": "bg-orange-600/50",
  "Jakarta EE": "bg-red-600/50",
  HTML: "bg-orange-600/50",
  React: "bg-cyan-500/50",
  Python: "bg-yellow-500/50",
  PHP: "bg-indigo-600/50",
  Android: "bg-green-500/50",
  JavaFX: "bg-blue-600/50",
  CSS: "bg-blue-500/50",
  SQL: "bg-sky-700/50",
  JavaScript: "bg-yellow-400/50",
  TypeScript: "bg-blue-700/50",
  Ruby: "bg-red-700/50",
  "Ruby on Rails": "bg-rose-700/50",
  Ajax: "bg-indigo-500/50",
  "Visual Basic": "bg-blue-800/50",
  XML: "bg-orange-700/50",
  JSON: "bg-amber-600/50",
  YAML: "bg-pink-600/50",
  Kotlin: "bg-violet-600/50",
  Sass: "bg-pink-500/50",
  JSP: "bg-orange-500/50",
  "Node.js": "bg-lime-600/50",
  Bootstrap: "bg-purple-700/50",
  Tailwind: "bg-cyan-600/50",
  Git: "bg-orange-500/50",
  Docker: "bg-sky-600/50",
  ".NET": "bg-violet-700/50",
  Drupal: "bg-blue-700/50",
  WordPress: "bg-sky-700/50",
  jQuery: "bg-blue-600/50",
  AJAX: "bg-indigo-500/50",
  MongoDB: "bg-green-700/50",
  MySQL: "bg-sky-700/50",
  PostgreSQL: "bg-blue-800/50",
  "SQL Server": "bg-red-700/50",
  MariaDB: "bg-amber-700/50",
  SQLite: "bg-blue-500/50",
  "Amazon RDS": "bg-orange-600/50",
  DynamoDB: "bg-indigo-700/50",
  GitHub: "bg-slate-700/50",
  "VS Code": "bg-blue-500/50",
  "IntelliJ IDEA": "bg-fuchsia-600/50",
  Eclipse: "bg-purple-800/50",
  Maven: "bg-red-800/50",
  Gradle: "bg-teal-700/50",
  Figma: "bg-pink-600/50",
  JUnit: "bg-green-700/50",
  Photoshop: "bg-blue-900/50",
  Inkscape: "bg-slate-600/50",
  "Microsoft Office": "bg-orange-600/50",
  Slack: "bg-fuchsia-700/50",
  Zoom: "bg-blue-600/50",
  Teams: "bg-indigo-600/50",
  NPM: "bg-red-600/50",
  Yarn: "bg-sky-600/50",
  AWS: "bg-orange-500/50",
  Netlify: "bg-teal-600/50",
  "GitHub Pages": "bg-slate-700/50",
  Azure: "bg-sky-600/50",
  "Google Cloud": "bg-blue-500/50",
  Heroku: "bg-purple-700/50",
  "REST APIs": "bg-emerald-600/50",
  Coursera: "bg-blue-700/50",
  "Server-Side": "bg-slate-700/50",
  CSV: "bg-green-600/50",
};

const RANDOM_BG_COLORS = [
  "bg-red-100/50",
  "bg-orange-200/50",
  "bg-amber-300/50",
  "bg-yellow-400/50",
  "bg-lime-500/50",
  "bg-green-100/50",
  "bg-emerald-200/50",
  "bg-teal-300/50",
  "bg-cyan-400/50",
  "bg-sky-500/50",
  "bg-blue-100/50",
  "bg-indigo-200/50",
  "bg-violet-300/50",
  "bg-purple-400/50",
  "bg-fuchsia-500/50",
  "bg-pink-100/50",
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