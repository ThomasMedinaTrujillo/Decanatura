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
  howToEvaluateTitle = 'Como evaluar',
  howToEvaluateDescription,
  howToEvaluateStrategies,
  implications,
  examples,
  examplesComponent,
  downloadResource,
}: LevelProps) {
  return (
    <div className="mb-20" id={id}>
      <SectionHeading uppertitle='Profundización' bgcolor="#5454E9" title={title} />

      <div className="mb-8 overflow-hidden border border-[#dfe2e8] bg-white shadow-[0_16px_36px_-30px_rgba(17,24,39,0.45)]">
        <div className="bg-[#ff6a21] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white">
          Resumen del nivel
        </div>
        <div className="px-5 py-5 md:px-6">
          <p className="text-base leading-7 text-gray-700">{description}</p>
        </div>
      </div>

      <PedagogicalSenseSection pedagogicalSense={pedagogicalSense} />

      <WhenSection whenMakeSense={whenMakeSense} whenNotMakeSense={whenNotMakeSense} />

      <WhatToEvaluateSection whatToEvaluate={whatToEvaluate} />

      <HowToEvaluateSection
        howToEvaluateTitle={howToEvaluateTitle}
        howToEvaluateDescription={howToEvaluateDescription}
        howToEvaluateStrategies={howToEvaluateStrategies}
      />

      {downloadResource && (
        <div className="mb-12 overflow-hidden border border-[#dfe2e8] bg-white p-5 shadow-[0_16px_36px_-30px_rgba(17,24,39,0.45)] md:p-6">
          <h3 className="mb-5 text-[22px] font-bold leading-[normal] text-[#5454e9]">
            Estrategias para el desarrollo del juicio critico en la interaccion con la IAG
          </h3>

          <GPTCard
            title="Estrategias para el desarrollo del juicio critico en la interaccion con la IAG"
            subtitle="Recurso Genially"
            buttonText="Descargar"
            bgColor="bg-[#5454E9]"
            href="https://view.genially.com/69c1f4b3e7704f3390d16e62"
            iconSrc={<FileIcon className="text-white" />}
          />
        </div>
      )}

      <ImplicationsSection implications={implications} />

      {examplesComponent ? examplesComponent : examples && examples.length > 0 ? <ExamplesSection title={title} examples={examples} /> : null}
    </div>
  );
}
