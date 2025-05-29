
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ScrollIndicator } from './ScrollIndicator';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  showScrollIndicator?: boolean;
  isLastSection?: boolean;
}

export function AnimatedSection({ 
  children, 
  className, 
  id, 
  fullHeight = true,
  showScrollIndicator = true,
  isLastSection = false
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        'scroll-snap-start transition-all duration-700 ease-out relative',
        fullHeight && 'min-h-screen',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 lg:translate-y-10',
        className
      )}
    >
      {children}
      {showScrollIndicator && (
        <ScrollIndicator isLastSection={isLastSection} />
      )}
    </section>
  );
}
