
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/sections/Header';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Achievements } from '@/components/sections/Achievements';
import { Certifications } from '@/components/sections/Certifications';
import { Passions } from '@/components/sections/Passions';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="scroll-snap-y overflow-y-auto h-screen">
        <Header />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Achievements />
        <Certifications />
        <Passions />
      </div>
    </ThemeProvider>
  );
};

export default Index;
