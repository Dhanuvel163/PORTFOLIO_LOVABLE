
import React from 'react';
import { Book, GraduationCap, Calendar } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedTitle } from '../AnimatedTitle';
import { AnimatedCard } from '../AnimatedCard';

export function Education() {
  const education = [
    {
      institution: "St. Joseph's College",
      degree: "B.Tech Information Technology",
      period: "2017 – 2021",
      location: "Chennai",
      grade: "CGPA: 8.2 / 10"
    },
    {
      institution: "Bharath Montessori",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2016 – 2017",
      location: "Tenkasi",
      grade: "Completed"
    }
  ];

  return (
    <AnimatedSection id="education" className="flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <AnimatedTitle className="text-center mb-12">
          Education
        </AnimatedTitle>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <AnimatedCard key={index} delay={index + 1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {edu.institution}
                        </h3>
                        <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                      {edu.grade}
                    </span>
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
