
import React from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '../ThemeToggle';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';

export function Header() {
  return (
    <AnimatedSection className="relative flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-glide-in">
              Dhanavel
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-600/20 blur-lg -z-10 animate-glow"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light animate-slide-in-left delay-300">
            Senior Software Engineer
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-right delay-500">
            Passionate coder with a creative approach to problem-solving
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-700">
          <Button 
            variant="outline" 
            size="lg" 
            className="group hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/dhanavel" target="_blank" rel="noopener noreferrer">
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
            <a href="https://linkedin.com/in/dhanavel" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="group hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="#projects">
              <Code className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              Portfolio
            </a>
          </Button>
        </div>

        <div className="flex justify-center items-center gap-2 text-muted-foreground animate-fade-in delay-1000">
          <Mail className="h-4 w-4" />
          <span>dhanuram99@gmail.com</span>
          <span className="mx-2">|</span>
          <span>7358961528</span>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
