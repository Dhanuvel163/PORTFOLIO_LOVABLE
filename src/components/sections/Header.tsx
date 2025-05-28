
import React from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '../ThemeToggle';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedTitle } from '../AnimatedTitle';

export function Header() {
  return (
    <AnimatedSection className="relative flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 text-center space-y-8">
        <div className="space-y-8 animate-fade-in">
          <AnimatedTitle 
            level="h1" 
            className="mb-8"
          >
            Dhanavel
          </AnimatedTitle>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light animate-slide-in-left delay-300">
            Senior Software Engineer
          </h2>
          
          <div className="max-w-4xl mx-auto mt-8 animate-slide-in-right delay-500">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              A passionate coder with a creative approach to problem-solving, contributing to 
              organizational improvements, team collaboration, and achieving key business goals. 
              Specialties include{' '}
              <span className="text-primary font-semibold">responsive web design</span>, 
              <span className="text-primary font-semibold"> application performance optimization</span>, 
              and <span className="text-primary font-semibold">rapid learning of new skills</span>. 
              Enthusiastic about exploring emerging technologies.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-700">
          <Button 
            variant="outline" 
            size="lg" 
            className="group hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Dhanuvel163" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              GitHub
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="group hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://www.linkedin.com/in/dhanavel-ramachandran-721802193/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="flex justify-center items-center gap-2 text-muted-foreground animate-fade-in delay-1000">
          <Mail className="h-4 w-4" />
          <span>dhanuram99@gmail.com</span>
          <span className="mx-2">|</span>
          <span>7358961528</span>
        </div>
      </div>
    </AnimatedSection>
  );
}
