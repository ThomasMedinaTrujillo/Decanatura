import React from 'react';
import { PuzzleIcon } from './Icons';

interface ExamplesSectionProps {
  title: string;
  examples: string[];
}

export default function ExamplesSection({ title, examples }: ExamplesSectionProps) {
  return (
    <div className="mb-12 overflow-hidden border border-[#dfe2e8] bg-white shadow-[0_16px_36px_-30px_rgba(17,24,39,0.45)]">
      <div className="flex items-center justify-between bg-[#5454e9] px-5 py-3 text-white">
        <h3 className="text-[12px] font-bold uppercase tracking-[0.14em]">Ejemplos {title.split(':')[0]}</h3>
        <PuzzleIcon size={22} className="text-white" />
      </div>
      <div className="space-y-4 px-5 py-5 md:px-6">
        {examples.map((ex, index) => (
          <React.Fragment key={index}>
            <div className="flex gap-4 border border-[#e2e5ee] bg-[#fbfbfd] px-4 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12c96d] text-white">
                <PuzzleIcon size={20} className="text-white" />
              </div>
              <p className="text-[14px] leading-6 text-black">{ex}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
