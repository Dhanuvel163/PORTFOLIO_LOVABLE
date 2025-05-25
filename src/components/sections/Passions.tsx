
import React from 'react';
import { Heart, Music, Code } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedTitle } from '../AnimatedTitle';
import { AnimatedCard } from '../AnimatedCard';

export function Passions() {
  const passions = [
    {
      title: "Cricket",
      description: "Passionate about playing and watching competitive cricket matches.",
      icon: "🏏",
      color: "from-green-400/20 to-green-600/20"
    },
    {
      title: "Coding",
      description: "Love building projects, solving problems, and learning tech.",
      icon: <Code className="h-8 w-8" />,
      color: "from-blue-400/20 to-blue-600/20"
    },
    {
      title: "Music",
      description: "Enjoy listening to melody, rap, and fusion music.",
      icon: <Music className="h-8 w-8" />,
      color: "from-purple-400/20 to-purple-600/20"
    }
  ];

  return (
    <AnimatedSection id="passions" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedTitle icon={<Heart className="h-10 w-10" />} className="text-center mb-12">
          Passions
        </AnimatedTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {passions.map((passion, index) => (
            <AnimatedCard key={index} delay={index + 1} className="h-full group hover:scale-105">
              <div className="p-8 text-center h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className={`p-6 bg-gradient-to-br ${passion.color} rounded-full group-hover:animate-float`}>
                    {typeof passion.icon === 'string' ? (
                      <span className="text-4xl">{passion.icon}</span>
                    ) : (
                      <div className="text-primary">{passion.icon}</div>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{passion.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{passion.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
