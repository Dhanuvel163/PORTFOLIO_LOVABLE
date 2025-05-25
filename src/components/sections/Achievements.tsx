
import React from 'react';
import { Award, Star } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedTitle } from '../AnimatedTitle';
import { AnimatedCard } from '../AnimatedCard';

export function Achievements() {
  const achievements = [
    {
      title: "Bug Buster Award",
      description: "Recognized for efficiently identifying and resolving critical bugs with precision and active problem solving.",
      icon: <Star className="h-8 w-8" />
    },
    {
      title: "The Guiding Light",
      description: "Recognition for leadership, guidance and fostering a collaborative environment that drives team success.",
      icon: <Award className="h-8 w-8" />
    }
  ];

  return (
    <AnimatedSection id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedTitle icon={<Award className="h-10 w-10" />} className="text-center mb-12">
          Achievements
        </AnimatedTitle>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedCard key={index} delay={index + 1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full animate-glow">
                    <div className="text-yellow-600 dark:text-yellow-400">{achievement.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{achievement.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
