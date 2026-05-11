import React from 'react';
import SectionHeading from './SectionHeading';
import PedagogicalSenseSection from './PedagogicalSenseSection';
import WhenSection from './WhenSection';
import WhatToEvaluateSection from './WhatToEvaluateSection';
import HowToEvaluateSection from './HowToEvaluateSection';
import ImplicationsSection from './ImplicationsSection';
import ExamplesSection from './ExamplesSection';

interface LevelProps {
  title: string;
  description: string;
  pedagogicalSense: string;
  whenMakeSense: string[];
  whenNotMakeSense: string[];
  whatToEvaluate?: string | string[];
  howToEvaluateTitle?: string;
  howToEvaluateDescription?: string;
  howToEvaluateStrategies?: { title: string; description: string }[];
  implications: { title: string; description: string }[];
  examples?: string[];
  examplesComponent?: React.ReactNode;
}

export default function AIASLevel({
  title,
  description,
  pedagogicalSense,
  whenMakeSense,
  whenNotMakeSense,
  whatToEvaluate,
  howToEvaluateTitle = "Cómo evaluar",
  howToEvaluateDescription,
  howToEvaluateStrategies,
  implications,
  examples,
  examplesComponent,
}: LevelProps) {
  return (
    <div className="mb-20">
      <SectionHeading bgcolor='#5454E9' title={title} />
      <p className="text-base text-gray-700 mb-8">{description}</p>
      
      <PedagogicalSenseSection pedagogicalSense={pedagogicalSense} />
      
      <WhenSection 
        whenMakeSense={whenMakeSense}
        whenNotMakeSense={whenNotMakeSense}
      />

      <WhatToEvaluateSection whatToEvaluate={whatToEvaluate} />

      <HowToEvaluateSection 
        howToEvaluateTitle={howToEvaluateTitle}
        howToEvaluateDescription={howToEvaluateDescription}
        howToEvaluateStrategies={howToEvaluateStrategies}
      />

      <ImplicationsSection implications={implications} />

      {examplesComponent ? (
        examplesComponent
      ) : (
        examples && examples.length > 0 ? (
          <ExamplesSection title={title} examples={examples} />
        ) : null
      )}
    </div>
  );
}