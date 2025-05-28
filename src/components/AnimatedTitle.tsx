
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4';
  showAvatar?: boolean;
  avatarSrc?: string;
  avatarFallback?: string;
}

export function AnimatedTitle({ 
  children, 
  className, 
  icon,
  level = 'h2',
  showAvatar = false,
  avatarSrc,
  avatarFallback = 'DN'
}: AnimatedTitleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Component = level;

  return (
    <Component
      ref={titleRef}
      className={cn(
        'flex items-center justify-center gap-4 font-bold transition-all duration-1000',
        level === 'h1' && 'text-4xl md:text-6xl',
        level === 'h2' && 'text-3xl md:text-4xl',
        level === 'h3' && 'text-2xl md:text-3xl',
        level === 'h4' && 'text-xl md:text-2xl',
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95',
        className
      )}
    >
      {showAvatar && (
        <Avatar 
          className={cn(
            'transition-all duration-700 delay-200',
            level === 'h1' && 'w-[7rem] h-[7rem] md:w-[7rem] md:h-[7rem]',
            level === 'h2' && 'w-12 h-12 md:w-16 md:h-16',
            level === 'h3' && 'w-10 h-10 md:w-12 md:h-12',
            level === 'h4' && 'w-8 h-8 md:w-10 md:h-10',
            isVisible ? 'rotate-0 scale-100' : 'rotate-12 scale-0'
          )}
        >
          <AvatarImage src={avatarSrc} alt="Profile" />
          <AvatarFallback className="bg-blue-600/20 text-blue-600 dark:text-blue-400 font-bold">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      )}
      
      {icon && (
        <span className={cn(
          'transition-all duration-700 delay-200',
          isVisible ? 'rotate-0 scale-100' : 'rotate-12 scale-0'
        )}>
          {icon}
        </span>
      )}
      
      <span className={cn(
        'text-blue-600 dark:text-blue-400',
        'font-black tracking-wider uppercase',
        'relative text-center',
        'text-outline-dynamic',
        'transition-all duration-1000',
        'whitespace-nowrap',
        isVisible 
          ? 'translate-x-0 animate-typography-entrance' 
          : 'translate-x-8 opacity-0'
      )}>
        {children}
      </span>
    </Component>
  );
}
