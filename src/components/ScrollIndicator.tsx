
import React, { MouseEventHandler } from 'react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  className?: string;
  isLastSection?: boolean;
  onClick?:MouseEventHandler<HTMLDivElement>;
}

export function ScrollIndicator({ className, isLastSection = false, onClick }: ScrollIndicatorProps) {
  if (isLastSection) return null;

  return (
    <div className={cn(
      'absolute bottom-8 left-1/2 transform -translate-x-1/2',
      'flex flex-col items-center',
      'opacity-70 hover:opacity-100 transition-opacity duration-300 z-10',
      className
    )} 
    onClick={onClick}>
      <div className="flex flex-col items-center">
        {/* First Arrow */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          className="text-primary"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-[wave-draw_3s_ease-in-out_infinite]"
            style={{
              strokeDasharray: '20',
              strokeDashoffset: '20'
            }}
          />
        </svg>
        
        {/* Second Arrow */}
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          className="text-primary/70 -mt-2"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-[wave-draw_3s_ease-in-out_infinite_0.5s]"
            style={{
              strokeDasharray: '20',
              strokeDashoffset: '10'
            }}
          />
        </svg>

        {/* Third Arrow */}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          className="text-primary/40 -mt-2"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-[wave-draw_3s_ease-in-out_infinite_1s]"
            style={{
              strokeDasharray: '20',
              strokeDashoffset: '20'
            }}
          />
        </svg>
      </div>
    </div>
  );
}
