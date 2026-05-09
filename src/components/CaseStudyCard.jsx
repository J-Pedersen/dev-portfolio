// src/components/CaseStudyCard.jsx
import { Link } from 'react-router-dom';
import TechIcon from './TechIcon.jsx';

import Card from './ui/Card.jsx';
import CardHeader from './ui/CardHeader.jsx';
import CardBody from './ui/CardBody.jsx';
import CardFooter from './ui/CardFooter.jsx';

const CaseStudyCard = ({ caseStudy }) => (
  <Link
    to={`/case-studies/${caseStudy.slug}`}
    className="block group h-full"
  >
    <Card className="h-full">
      <CardHeader>
        <div className="flex flex-col items-center text-center gap-2">
          <div className="flex items-center justify-center gap-2">
            {caseStudy.icon && (
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900">
                <TechIcon
                  name={caseStudy.icon}
                  hideLabel={true}
                  showBg={false}
                  interactive={false}
                  className="h-4 w-4 group-hover:scale-110 transition-transform"
                />
              </span>
            )}

            <h3
              className="
                text-lg font-semibold
                text-slate-900 group-hover:text-brand-soft
                dark:text-slate-50
                transition-colors
              "
            >
              {caseStudy.title}
            </h3>
          </div>
        </div>
      </CardHeader>

      <CardBody>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {caseStudy.summary}
        </p>
      </CardBody>

      <CardFooter>
        
        <div className="flex sm:hidden flex-wrap gap-3 justify-center">
          {(caseStudy.cardTech ?? caseStudy.techStack)
            ?.slice(0, 4)
            .map((tech) => (
              <TechIcon
                key={tech}
                tech={tech}
              />
            ))}
        </div>

        {/* Tablet/Desktop: show all */}
        <div className="hidden sm:flex flex-wrap gap-3 justify-center">
          {(caseStudy.cardTech ?? caseStudy.techStack)?.map((tech) => (
            <TechIcon
              key={tech}
              tech={tech}
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  </Link>
);

export default CaseStudyCard;