
import React from 'react';
import { Code, Database, Settings } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedTitle } from '../AnimatedTitle';
import { AnimatedCard } from '../AnimatedCard';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript", "Python", "Ruby", "SQL", "MongoDB"]
    },
    {
      title: "Framework",
      icon: <Database className="h-6 w-6" />,
      skills: ["ReactJS", "NodeJS", "Angular", "Next.js"]
    },
    {
      title: "Technology",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Git", "Github", "AWS", "Linux", "Jira", "GCP"]
    }
  ];

  return (
    <AnimatedSection id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedTitle 
          className="text-center mb-12"
        >
          Skills
        </AnimatedTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedCard key={index} delay={index + 1} className="h-full">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <div className="text-primary">{category.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative overflow-hidden bg-secondary/30 border border-gray-300 dark:border-gray-600 rounded-full py-2 px-4 hover:bg-primary/10 transition-all duration-300"
                    >
                      <span className="relative z-10 font-medium">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
