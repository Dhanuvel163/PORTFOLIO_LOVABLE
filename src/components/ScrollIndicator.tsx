
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  className?: string;
  isLastSection?: boolean;
}

export function ScrollIndicator({ className, isLastSection = false }: ScrollIndicatorProps) {
  if (isLastSection) return null;

  return (
    <div className={cn(
      'absolute bottom-8 left-1/2 transform -translate-x-1/2',
      'flex flex-col items-center gap-2',
      'animate-bounce opacity-70 hover:opacity-100 transition-opacity duration-300',
      className
    )}>
      <div className="flex flex-col items-center">
        <ChevronDown className="h-6 w-6 text-primary animate-pulse" />
        <ChevronDown className="h-4 w-4 text-primary/60 -mt-2" />
      </div>
      <span className="text-xs text-muted-foreground font-medium">Scroll</span>
    </div>
  );
}
