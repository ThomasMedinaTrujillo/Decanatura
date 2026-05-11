import React from 'react';
import puzzleIcon from '../assets/puzzleicon.svg';

interface ExamplesSectionProps {
  title: string;
  examples: string[];
}

export default function ExamplesSection({ title, examples }: ExamplesSectionProps) {
  return (
    <div className="flex flex-col gap-[20px] items-start w-full mb-12">
      <h3 className="font-bold text-[#5454e9] text-[26px] leading-[normal] m-0">Ejemplos {title.split(':')[0]}</h3>
      
      <div className="flex flex-col gap-[20px] items-center w-full">
        {examples.map((ex, index) => (
          <React.Fragment key={index}>
            <div className="flex gap-[20px] items-center px-[27px] py-[20px] w-full">
              <div className="border-2 border-[#5454e9] border-solid flex items-center p-[12.2px] rounded-[67px] shrink-0">
                <div className="relative shrink-0 w-[24px] h-[24px]">
                  <img src={puzzleIcon} alt="puzzle" className="absolute block inset-0 max-w-none w-full h-full" />
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-col items-start min-w-px">
                <p className="font-normal text-[14px] text-black w-full m-0">{ex}</p>
              </div>
            </div>
            {index < examples.length - 1 && (
              <div className="border-t border-[#cecfd4] w-[90%]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
