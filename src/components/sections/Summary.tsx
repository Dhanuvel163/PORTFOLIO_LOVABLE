
import React from 'react';
import { User } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedTitle } from '../AnimatedTitle';
import { AnimatedCard } from '../AnimatedCard';

export function Summary() {
  return (
    <AnimatedSection id="summary" className="flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <AnimatedTitle icon={<User className="h-10 w-10" />} className="text-center mb-12">
          Summary
        </AnimatedTitle>
        
        <div className="max-w-4xl mx-auto">
          <AnimatedCard className="p-8 text-center">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              A passionate coder with a creative approach to problem-solving, contributing to 
              organizational improvements, team collaboration, and achieving key business goals. 
              Specialties include{' '}
              <span className="text-primary font-semibold">responsive web design</span>, 
              <span className="text-primary font-semibold"> application performance optimization</span>, 
              and <span className="text-primary font-semibold">rapid learning of new skills</span>. 
              Enthusiastic about exploring emerging technologies.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </AnimatedSection>
  );
}
