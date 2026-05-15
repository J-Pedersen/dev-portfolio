// src/pages/Skills.jsx
import PageHeader from '../components/PageHeader.jsx';
import TechIcon from '../components/TechIcon.jsx';
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Card from '../components/ui/Card.jsx';
import CardHeader from '../components/ui/CardHeader.jsx';
import CardBody from '../components/ui/CardBody.jsx';
import BackToTopButton from "../components/BackToTopButton.jsx";

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
    'ThymeLeaf',
    'jQuery',
    'AJAX',
    'REST APIs',
    'WordPress',
    'Drupal',
  ],

  ProjectManagement: [
    'Requirements Gathering',
    'Project Scheduling',
    'Resource Allocation',
    'Cost Estimation',
    'RFPs',
    'WBS',
    'WBS Dictionaries',
    'Network Diagrams',
    'Risk Registers',
    'Risk Analysis',
    'Quality Management', 
    'Project Charters',
    'Agile', 
    'Scrum',
    'Communication Plans',
    'Stakeholder Management',
    'Status Reporting',
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

};

const Skills = () => {
  return (
    <div className="space-y-8">
      <Breadcrumbs current="Skills" />
      <PageHeader
        kicker="Skills"
        title="My Current Toolbelt"
      >
        As a Software and Web Developer, Database Engineer, 
        and Project Manager, this is a list of just 
        some of the technologies, frameworks, libraries, languages, and 
        project management tools I have previously used. Some 
        are more familiar to me than others but I have at least 
        dabbled in all of them.
      </PageHeader>

      <section className="grid gap-6 md:grid-cols-2 items-stretch">
        {Object.entries(skills).map(([category, items]) => {
          const heading = category.replace(/([A-Z])/g, ' $1').trim();

          return (
            <Card key={category} className="h-full">

              <CardHeader>
                <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 text-center w-full">
                  {heading}
                </h2>
              </CardHeader>

              <CardBody>
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
              </CardBody>

            </Card>
          );
        })}
      </section>

      <section className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
          How I Prefer To Work
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
      <BackToTopButton
        showAfter={500}
        label="Back to Top"
      />
    </div>
  );
};

export default Skills;