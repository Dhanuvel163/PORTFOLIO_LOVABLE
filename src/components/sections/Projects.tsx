
import React from 'react';
import { Code, Github, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedTitle } from '../AnimatedTitle';
import { AnimatedCard } from '../AnimatedCard';
import { Button } from '@/components/ui/button';

export function Projects() {
  const projects = [
    {
      title: "LinkedIn for Lawyers",
      tech: "MERN",
      description: "A web app serving as a social media platform for lawyers and the general public with responsive design.",
      achievements: [
        "Optimized page load performance to achieve Google Lighthouse score of 100",
        "Reduced bundle size from 20 MB to 2 MB with same features",
        "Responsive design for exceptional user experience"
      ],
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Dhanuvel163/PEPLAW-PREACT",
      website: "https://pep-law-react.web.app/home"
    },
    {
      title: "Application Monitoring",
      tech: "MERN",
      description: "A website that monitors the availability status of websites with automated reporting.",
      achievements: [
        "Real-time website availability monitoring",
        "Automated email notifications with PDF reports",
        "Comprehensive failure analysis and reporting"
      ],
      tags: ["React", "Lighthouse", "Email", "PDF Generation"],
      github: "https://github.com/Dhanuvel163/WEBMON-NODESERVER",
      website: "https://webmon-react.vercel.app/"
    }
  ];

  return (
    <AnimatedSection id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedTitle className="text-center mb-12">
          Projects
        </AnimatedTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={index} delay={index + 1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {project.tech}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {
                      project.github &&
                      <Button size="sm" variant="outline" className="flex-1" 
                        onClick={()=>{window.open(project.github, '_blank')}}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    }
                    {
                      project.website &&
                      <Button size="sm" className="flex-1"
                        onClick={()=>{window.open(project.website, '_blank')}}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    }
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
