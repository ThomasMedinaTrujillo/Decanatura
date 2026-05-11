import React from 'react';

interface PedagogicalSenseSectionProps {
  pedagogicalSense: string;
}

export default function PedagogicalSenseSection({ pedagogicalSense }: PedagogicalSenseSectionProps) {
  return (
    <div className="flex flex-col mb-12 gap-[6px]">
      <h3 className="font-bold text-[#5454e9] text-[22px] m-0 leading-none whitespace-nowrap">Sentido pedagógico</h3>
      <p className="font-normal text-[16px] text-black w-full">{pedagogicalSense}</p>
    </div>
  );
}
