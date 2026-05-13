import React from 'react';
import SectionHeading from './SectionHeading';
import PedagogicalSenseSection from './PedagogicalSenseSection';
import WhenSection from './WhenSection';
import WhatToEvaluateSection from './WhatToEvaluateSection';
import HowToEvaluateSection from './HowToEvaluateSection';
import ImplicationsSection from './ImplicationsSection';
import ExamplesSection from './ExamplesSection';
import GPTCard from './GPTCard';
import { FileIcon } from './Icons';

interface LevelProps {
  id?: string;
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
  downloadResource?: boolean;
}

export default function AIASLevel({
  id,
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
  downloadResource,
}: LevelProps) {
  return (
    <div className="mb-20" id={id }>
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

      {
        downloadResource && <div className="mb-12">
        <h3 className="font-bold text-[#5454e9] text-[26px] leading-[normal] m-0">Estrategias para el desarrollo del juicio crítico en la interacción con la IAG</h3>

        <GPTCard title='Estrategias para el desarrollo del juicio crítico en la interacción con la IAG' subtitle='Recurso Genially' buttonText='Descargar' bgColor='bg-[#5454E9]' href='https://view.genially.com/69c1f4b3e7704f3390d16e62' iconSrc={<FileIcon className="text-white"/>}/>
    
        </div>
      }

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