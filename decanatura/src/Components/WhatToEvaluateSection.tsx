import React from 'react';

interface WhatToEvaluateSectionProps {
  whatToEvaluate: string | string[] | undefined;
}

export default function WhatToEvaluateSection({ whatToEvaluate }: WhatToEvaluateSectionProps) {
  if (!whatToEvaluate) return null;

  return (
    <div className="flex flex-col gap-[2px] items-start relative shrink-0 mb-12">
      <h3 className="font-bold text-[#5454e9] text-[26px] leading-[normal] m-0">Qué evaluar</h3>
      {Array.isArray(whatToEvaluate) ? (
        <div className="font-normal text-[16px] text-black w-full leading-[1.5] space-y-2">
          {whatToEvaluate.map((item, idx) => (
            <p key={idx} className="flex gap-3">
              <span>•</span>
              <span>{item}</span>
            </p>
          ))}
        </div>
      ) : (
        <p className="font-normal text-[16px] text-black w-full leading-[1.5]">{whatToEvaluate}</p>
      )}
    </div>
  );
}
