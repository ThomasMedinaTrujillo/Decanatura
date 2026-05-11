import React, { useState } from 'react';
import SectionHeading from './SectionHeading';

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
  examples: string[];
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
}: LevelProps) {
  const [examplesOpen, setExamplesOpen] = useState(false);

  return (
    <div className="mb-20">
      <SectionHeading title={title} />
      <p className="text-gray-700 mb-6">{description}</p>
      
      <h3 className="font-bold text-lg text-[#865CF0] mb-2">Sentido pedagógico</h3>
      <p className="text-gray-700 mb-6">{pedagogicalSense}</p>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-lg text-green-600 mb-4 flex items-center gap-2">✓ Cuándo tiene sentido</h3>
          <ul className="space-y-3 text-sm flex flex-col gap-2">
            {whenMakeSense.map((item, index) => (
              <li key={index} className="bg-green-50 p-4 rounded border-l-4 border-green-500">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg text-red-600 mb-4 flex items-center gap-2">✗ Cuándo no tiene sentido</h3>
          <ul className="space-y-3 text-sm flex flex-col gap-2">
            {whenNotMakeSense.map((item, index) => (
              <li key={index} className="bg-red-50 p-4 rounded border-l-4 border-red-500">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {whatToEvaluate && (
        <div className="bg-[#865CF0] text-white p-6 rounded-lg mb-8 shadow">
          <h3 className="font-bold text-lg mb-2">Qué evaluar</h3>
          {Array.isArray(whatToEvaluate) ? (
            <ul className="list-disc pl-5 space-y-1">
              {whatToEvaluate.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{whatToEvaluate}</p>
          )}
        </div>
      )}

      <h3 className="font-bold text-lg text-[#865CF0] mb-2">{howToEvaluateTitle}</h3>
      {howToEvaluateDescription && <p className="text-gray-700 mb-4">{howToEvaluateDescription}</p>}
      
      {howToEvaluateStrategies && howToEvaluateStrategies.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {howToEvaluateStrategies.map((strategy, index) => (
            <div key={index} className="border p-4 rounded shadow-sm bg-white">
              <h4 className="font-bold mb-2">{strategy.title}</h4>
              <p className="text-sm text-gray-700">{strategy.description}</p>
            </div>
          ))}
        </div>
      )}

      <h3 className="font-bold text-lg text-[#865CF0] mb-2">Lo que implica para el docente</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {implications.map((imp, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded border">
            <h4 className="font-bold mb-2">{imp.title}</h4>
            <p className="text-sm text-gray-700">{imp.description}</p>
          </div>
        ))}
      </div>

      <div 
        className="flex justify-between items-center cursor-pointer bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-2"
        onClick={() => setExamplesOpen(!examplesOpen)}
      >
        <h3 className="font-bold text-lg text-gray-800 m-0">Ejemplos {title.split(':')[0]}</h3>
        <span className="text-gray-500">
          {examplesOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      </div>

      {examplesOpen && (
        <div className="bg-[#f8f5ff] p-6 rounded-lg mb-8 space-y-4">
          {examples.map((ex, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="bg-white p-2 rounded shadow shrink-0 pb-0">💡</div>
              <p className="text-sm text-gray-800">{ex}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}