import React from 'react';

interface HowToEvaluateStrategy {
  title: string;
  description: string;
}

interface HowToEvaluateSectionProps {
  howToEvaluateTitle?: string;
  howToEvaluateDescription?: string;
  howToEvaluateStrategies?: HowToEvaluateStrategy[];
}

export default function HowToEvaluateSection({
  howToEvaluateTitle = "Cómo evaluar",
  howToEvaluateDescription,
  howToEvaluateStrategies,
}: HowToEvaluateSectionProps) {
  if (!howToEvaluateStrategies || howToEvaluateStrategies.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h3 className="font-bold text-[#5454e9] text-[26px] leading-[normal] mb-3 m-0">{howToEvaluateTitle}</h3>
      {howToEvaluateDescription && (
        <p className="font-normal text-[16px] text-black w-full leading-[1.5] mb-6">{howToEvaluateDescription}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
        {howToEvaluateStrategies.map((strategy, index) => (
          <div key={index} className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] p-[10px]">
            <h4 className="font-bold text-[#5454e9] text-[20px] w-full m-0">{strategy.title}</h4>
            <p className="font-normal text-[18px] text-black w-full m-0 leading-[1.4]">{strategy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
