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
  Java: "bg-orange-500",
  "Spring Boot": "bg-green-600",
  "Jakarta EE": "bg-red-600",
  HTML: "bg-orange-600",
  React: "bg-cyan-500",
  Python: "bg-yellow-500",
  PHP: "bg-indigo-600",
  Android: "bg-green-500",
  JavaFX: "bg-blue-600",
  CSS: "bg-blue-500",
  SQL: "bg-sky-700",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-700",
  Ruby: "bg-red-700",
  "Ruby on Rails": "bg-rose-700",
  Ajax: "bg-indigo-500",
  "Visual Basic": "bg-blue-800",
  XML: "bg-orange-700",
  JSON: "bg-amber-600",
  YAML: "bg-pink-600",
  Kotlin: "bg-violet-600",
  Sass: "bg-pink-500",
  JSP: "bg-orange-500",
  "Node.js": "bg-lime-600",
  Bootstrap: "bg-purple-700",
  Tailwind: "bg-cyan-600",
  Git: "bg-orange-500",
  Docker: "bg-sky-600",
  ".NET": "bg-violet-700",
  Drupal: "bg-blue-700",
  WordPress: "bg-sky-700",
  jQuery: "bg-blue-600",
  AJAX: "bg-indigo-500",
  MongoDB: "bg-green-700",
  MySQL: "bg-sky-700",
  PostgreSQL: "bg-blue-800",
  "SQL Server": "bg-red-700",
  MariaDB: "bg-amber-700",
  SQLite: "bg-blue-500",
  "Amazon RDS": "bg-orange-600",
  DynamoDB: "bg-indigo-700",
  GitHub: "bg-slate-700",
  "VS Code": "bg-blue-500",
  "IntelliJ IDEA": "bg-fuchsia-600",
  Eclipse: "bg-purple-800",
  Maven: "bg-red-800",
  Gradle: "bg-teal-700",
  Figma: "bg-pink-600",
  JUnit: "bg-green-700",
  Photoshop: "bg-blue-900",
  Inkscape: "bg-slate-600",
  "Microsoft Office": "bg-orange-600",
  Slack: "bg-fuchsia-700",
  Zoom: "bg-blue-600",
  Teams: "bg-indigo-600",
  NPM: "bg-red-600",
  Yarn: "bg-sky-600",
  AWS: "bg-orange-500",
  Netlify: "bg-teal-600",
  "GitHub Pages": "bg-slate-700",
  Azure: "bg-sky-600",
  "Google Cloud": "bg-blue-500",
  Heroku: "bg-purple-700",
  "REST APIs": "bg-emerald-600",
  Coursera: "bg-blue-700",
  "Server-Side": "bg-slate-700",
  CSV: "bg-green-600",
};

const DEFAULT_BG = "bg-brand";

const TechIcon = ({ tech, name, hideLabel = false, className = "" }) => {
  const label = tech ?? name;
  if (!label) return null;

  let iconFileBase = null;

  if (tech && NAME_TO_ICON[tech]) {
    iconFileBase = NAME_TO_ICON[tech];
  } else if (name) {
    iconFileBase = name.replace(/\.svg$/i, "");
  }

  const src = iconFileBase
    ? `${import.meta.env.BASE_URL}icons/${iconFileBase}.svg`
    : null;

  const initials = label
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const bgColor = NAME_TO_BG[label] || DEFAULT_BG;

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