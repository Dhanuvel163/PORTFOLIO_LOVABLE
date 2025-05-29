
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedTitle } from '../AnimatedTitle';
import { AnimatedCard } from '../AnimatedCard';
import { Badge } from '@/components/ui/badge';

export function Certifications() {
  const certifications = [
    {
      title: "Front-End JavaScript Frameworks: Angular",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/BX89CQHM5WZK",
      description: "Completed specialized React/Native and Angular course"
    },
    {
      title: "Full-Stack Web Development with React Specialization",
      provider: "Coursera", 
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/U27G62NDHNHR",
      description: "Pursued NodeJS, Express, and MongoDB course"
    },
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      provider: "Coursera", 
      link: "https://www.coursera.org/account/accomplishments/certificate/DLQSKY8RCZBS",
      description: "Pursued NodeJS, Express, and MongoDB course"
    },
    {
      title: "Multiplatform Mobile App Development with React Native",
      provider: "Coursera", 
      link: "https://www.coursera.org/account/accomplishments/certificate/QDE2N9XZN4TR",
      description: "Pursued NodeJS, Express, and MongoDB course"
    },
    {
      title: "Multiplatform Development: Ionic and Cordova",
      provider: "Coursera", 
      link: "https://www.coursera.org/account/accomplishments/certificate/Z5GH6SZTWGZM",
      description: "Pursued NodeJS, Express, and MongoDB course"
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      provider: "Coursera", 
      link: "https://www.coursera.org/account/accomplishments/certificate/Y5AALXVT39A7",
      description: "Pursued NodeJS, Express, and MongoDB course"
    }
  ];

  return (
    <AnimatedSection id="certifications" className="flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <AnimatedTitle className="text-center mb-12">
          Certifications
        </AnimatedTitle>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <AnimatedCard key={index} delay={index + 1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{cert.title}</h3>
                    {/* <p className="text-muted-foreground mb-3">{cert.description}</p> */}
                    <div className="flex items-center gap-2 text-sm"
                      onClick={()=>{if(cert.link) window.open(cert.link,"_blank")}}>
                      <Badge
                        variant="outline" 
                        className="bg-blue-50 mt-2 border-blue-200 text-blue-700 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300 px-3 py-1 text-sm font-medium flex items-center gap-2"
                      >
                        {cert.provider} 
                        {
                          cert.link &&
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        }
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
