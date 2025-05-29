
import React from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedTitle } from '../AnimatedTitle';
import { AnimatedCard } from '../AnimatedCard';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  const experiences = [
    {
      company: "RISKCOVRY",
      role: "Senior Software Engineer",
      period: "Sept 2023 – Present",
      location: "Bangalore",
      achievements: [
        "Led agile development of 5+ major features for health insurance products, improving customer onboarding efficiency by 25%.",
        "Redesigned ICICI Renewal Flow, improving data accuracy for 1K+ policyholders and reducing renewal support tickets by 40%. Worked on health offline upload feature to make it compatible with renewals.",
        "Streamlined partner API, closing 15+ integration gaps.",
        "Programmed custom config-based solution to support unlimited sum insured and age-specific logic, enhancing personalization for 10K+ Nivabhupa Aspire and ICICI users.",
        "Ensured plan card and multi-policy flow solutions, driving efficient and scalable integration across diverse partner environments."
      ]
    },
    {
      company: "CODINGMART",
      role: "Product Engineer",
      period: "Mar 2021 – Sept 2023",
      location: "Bangalore",
      projects: [
        {
          name: "RISKCOVRY",
          link: 'https://riskcovry.com/',
          description: "Integrated 30+ API across 50+ insurance partners from different pods like health, motor etc enabling intelligent pricing and facilitating over 100 K+ purchases. Enhanced add-ons and product comparison tools, boosting user conversion by 20% on partner portals."
        },
        {
          name: "KALANJU",
          link: 'https://kalanju.com/',
          description: "Developed a RESTful API with Node.js to handle employee data supporting 1000+ concurrent users with minimal latency. Led 5-member development team to deliver 3 modules : leads, invoicing and project tracking within 2-month sprint cycles."
        },
        {
          name: "EXTRA MILE",
          link: 'https://extramileplay.com/',
          description: "Identified requirements for scalable features across organization / user management, subscriptions and game management. Crafted a system for managing games with plans, enabling efficient allocation adopted by 50+ organizations, each with 100+ users. Set up a CI/CD pipeline that automated deployments, reducing release time by 40% and ensuring efficient delivery across all microservices."
        }
      ]
    }
  ];

  return (
    <AnimatedSection id="experience" className="py-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <AnimatedTitle 
          className="text-center mb-12"
        >
          Experience
        </AnimatedTitle>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedCard key={index} delay={index + 1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{exp.company}</h3>
                    <h4 className="text-xl font-semibold mb-4">{exp.role}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge 
                      variant="outline" 
                      className="bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300 px-3 py-1 text-sm font-medium flex items-center gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="bg-green-50 border-green-200 text-green-700 dark:bg-green-950 dark:border-green-800 dark:text-green-300 px-3 py-1 text-sm font-medium flex items-center gap-2"
                    >
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </Badge>
                  </div>
                </div>

                {exp.achievements && (
                  <div className="space-y-3">
                    <h5 className="font-semibold text-lg mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.projects && (
                  <div className="space-y-4">
                    <h5 className="font-semibold text-lg mb-3">Projects:</h5>
                    <div className="grid gap-4">
                      {exp.projects.map((project, i) => (
                        <div key={i} className="border-l-4 border-primary/30 pl-4">
                          <h6 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            {project.name}
                            {
                              project.link &&
                              <ExternalLink className="h-4 w-4 text-muted-foreground" 
                                onClick={()=>{window.open(project.link)}}/>
                            }
                          </h6>
                          <p className="text-muted-foreground">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
