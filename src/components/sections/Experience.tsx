
import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedTitle } from '../AnimatedTitle';
import { AnimatedCard } from '../AnimatedCard';

export function Experience() {
  const experiences = [
    {
      company: "RISKCOVRY",
      role: "Senior Software Engineer",
      period: "Sept 2023 – Present",
      location: "Bangalore",
      achievements: [
        "Led agile development of 5+ major features for health insurance products, improving customer onboarding efficiency by 25%.",
        "Redesigned ICICI Renewal Flow, improving data accuracy for 1K+ policyholders and reducing renewal support tickets by 40%.",
        "Streamlined partner API, closing 15+ integration gaps.",
        "Programmed custom config-based solution supporting unlimited sum insured and age-specific logic for 10K+ users.",
        "Ensured pan card and multi-policy-flow solutions across diverse partner environments."
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
          description: "Integrated 30+ API across 50+ insurance partners enabling intelligent pricing for 100K+ purchases. Enhanced add-ons and product comparison tools, boosting user conversion by 20%."
        },
        {
          name: "KALAIGNAR TV",
          description: "Developed RESTful API with Node.js handling 1000+ concurrent users. Led 5-member team delivering 3 modules within 2-month sprints."
        },
        {
          name: "EXTRA MILE",
          description: "Crafted system for managing games with plans for 50+ organizations with 100+ users each. Set up CI/CD pipeline reducing release time by 40%."
        }
      ]
    }
  ];

  return (
    <AnimatedSection id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedTitle icon={<Briefcase className="h-10 w-10" />} className="text-center mb-12">
          Experience
        </AnimatedTitle>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedCard key={index} delay={index + 1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{exp.company}</h3>
                    <h4 className="text-xl font-semibold mb-2">{exp.role}</h4>
                  </div>
                  <div className="flex flex-col md:items-end space-y-1 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
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
                          <h6 className="font-semibold text-primary mb-2">{project.name}</h6>
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
