
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedTitle } from '../AnimatedTitle';
import { AnimatedCard } from '../AnimatedCard';

export function Certifications() {
  const certifications = [
    {
      title: "React/Native and Angular",
      provider: "Coursera",
      description: "Completed specialized React/Native and Angular course"
    },
    {
      title: "NodeJS, Express and MongoDB",
      provider: "Coursera", 
      description: "Pursued NodeJS, Express, and MongoDB course"
    }
  ];

  return (
    <AnimatedSection id="certifications" className="flex items-center justify-center py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedTitle icon={<Award className="h-10 w-10" />} className="text-center mb-12">
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
                    <p className="text-muted-foreground mb-3">{cert.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {cert.provider}
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
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
