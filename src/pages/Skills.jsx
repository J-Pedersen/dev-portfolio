// src/pages/Skills.jsx
import PageHeader from '../components/PageHeader.jsx';
import TechIcon from '../components/TechIcon.jsx';

const skills = {
  Languages: [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'TypeScript',
    'Python',
    'SQL',
    'PHP',
    'Ruby',
    'Visual Basic',
    'XML',
    'JSON',
    'YAML',
    'Kotlin',
    'Sass',
  ],

  Frameworks: [
    'Spring Boot',
    'JavaFX',
    'React',
    '.NET',
    'Ruby on Rails',
    'Node.js',
    'JSP',
    'Bootstrap',
    'Tailwind',
    'jQuery',
    'AJAX',
    'RESTful APIs',
    'WordPress',
    'Drupal',
  ],

  Databases: [
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'SQL Server',
    'MariaDB',
    'SQLite',
    'Amazon RDS',
    'DynamoDB',
  ],

  Tools: [
    'Git',
    'GitHub',
    'VS Code',
    'IntelliJ IDEA',
    'Eclipse',
    'Maven',
    'Gradle',
    'Docker',
    'Figma',
    'JUnit',
    'Photoshop',
    'Inkscape',
    'Microsoft Office',
    'Slack',
    'Zoom',
    'Teams',
    'NPM',
    'Yarn',
  ],

  Cloud: [
    'AWS',
    'Netlify',
    'GitHub Pages',
    'Azure',
    'Google Cloud',
    'Heroku',
  ],

  ProjectManagement: [
    'Requirements Gathering',
    'Project Scheduling',
    'Resource Allocation',
    'Cost Estimation',
    'Request for Proposal',
    'WBS',
    'WBS Dictionaries',
    'Network Diagrams',
    'Risk Registers',
    'Risk Analysis',
    'Quality Management Plans',
    'RFPs & Project Charters',
    'Agile & Scrum concepts',
    'Scheduling',
    'Communication Plans',
    'Stakeholder Management',
    'Status Reporting',
  ],
};

const Skills = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        kicker="Skills"
        title="My Current Toolbelt"
      >
        As a Software and Web Developer, Database Engineer, 
        and Aspiring Project Manager, this is a list of just 
        some of the technologies, frameworks, languages, and 
        project management tools I have previously used. Some 
        are more familiar to me than others but I have at least 
        dabbled in all of them.
      </PageHeader>

      <section className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => {
          const heading = category.replace(/([A-Z])/g, ' $1').trim();

          return (
            <div
              key={category}
              className="
                border
              border-brand-soft 
              bg-slate-100 
              hover:bg-slate-50 
              hover:border-brand 
                hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]
              dark:bg-slate-900/60 
              dark:hover:bg-slate-950
              dark:hover:border-brand
              dark:border-brand-soft
              "
            >
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {heading}
              </h2>

              <ul
                className="
                  grid grid-cols-3 sm:grid-cols-4
                  gap-x-6 gap-y-6
                  justify-items-center
                "
              >
                {items.map((item) => (
                  <li key={item} className="list-none">
                    <TechIcon tech={item} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          How I prefer to work
        </h2>
        <p>
          I like structure and order, but I’m not glued to a single methodology 
          when it comes to software and web development. On the project side, 
          I’m more comfortable using Agile practices because projects can and will
          change and we have to be prepared to accept those changes gracefully. 
          On the technical side, I lean toward clean, readable and well commented code 
          with clear separation of concerns because it makes my code easier to manage 
          and maintain.
        </p>
      </section>
    </div>
  );
};

export default Skills;