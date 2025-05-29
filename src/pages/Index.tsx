
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
        <hr className='bg-[var(--divider)] h-[1.5px]'/>
        <Experience />
        <hr className='bg-[#2e394b] h-[1.5px]'/>
        <Skills />
        <hr className='bg-[#2e394b] h-[1.5px]'/>
        <Projects />
        <hr className='bg-[#2e394b] h-[1.5px]'/>
        <Achievements />
        <hr className='bg-[#2e394b] h-[1.5px]'/>
        <Certifications />
        <hr className='bg-[#2e394b] h-[1.5px]'/>
        <Education />
        <hr className='bg-[#2e394b] h-[1.5px]'/>
        <Passions />
      </div>
    </ThemeProvider>
  );
};

export default Index;
