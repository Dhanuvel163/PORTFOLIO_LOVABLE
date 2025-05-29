
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export function AnimatedCard({ 
  children, 
  className, 
  delay = 0,
  direction = 'up'
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransformClass = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    
    switch (direction) {
      case 'left': return '-translate-x-4 lg:-translate-x-10 opacity-0';
      case 'right': return 'translate-x-4 lg:translate-x-10 opacity-0';
      case 'down': return '-translate-x-4 lg:translate-y-10 opacity-0';
      default: return '-translate-x-4 lg:translate-y-10 opacity-0';
    }
  };

  return (
    <Card
      ref={cardRef}
      className={cn(
        'transition-all duration-700 ease-out transform',
        'shadow-lg dark:shadow-2xl',
        'border border-border/50 bg-card/80 backdrop-blur-sm',
        // Mobile: no hover effects, Desktop: hover effects
        'lg:hover:shadow-xl lg:hover:-translate-y-1',
        getTransformClass(),
        className
      )}
    >
      {children}
    </Card>
  );
}
