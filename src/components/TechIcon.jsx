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

const BG_COLORS = [
  "bg-red-500/20",
  "bg-orange-500/20",
  "bg-amber-500/20",
  "bg-yellow-500/20",
  "bg-lime-500/20",
  "bg-green-500/20",
  "bg-emerald-500/20",
  "bg-teal-500/20",
  "bg-cyan-500/20",
  "bg-sky-500/20",
  "bg-blue-500/20",
  "bg-indigo-500/20",
  "bg-violet-500/20",
  "bg-purple-500/20",
  "bg-fuchsia-500/20",
  "bg-pink-500/20",
];

const getColorFromString = (str) => {
  let hash = 0;

  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  return BG_COLORS[Math.abs(hash) % BG_COLORS.length];
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

  const src = iconFileBase
    ? `${import.meta.env.BASE_URL}icons/${iconFileBase}.svg`
    : null;

  const initials = label
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const bgColor = getColorFromString(label);

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