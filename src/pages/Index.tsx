
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/sections/Header';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Achievements } from '@/components/sections/Achievements';
import { Certifications } from '@/components/sections/Certifications';
import { Passions } from '@/components/sections/Passions';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="scroll-snap-y overflow-y-auto h-screen">
        <Header />
        <hr/>
        <Experience />
        <hr/>
        <Skills />
        <hr/>
        <Projects />
        <hr/>
        <Achievements />
        <hr/>
        <Certifications />
        <hr/>
        <Education />
        <hr/>
        <Passions />
      </div>
    </ThemeProvider>
  );
};

export default Index;
