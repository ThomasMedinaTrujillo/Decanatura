import React from 'react';
import { CheckCircle, CloseCircle } from './Icons';

interface WhenSectionProps {
  whenMakeSense: string[];
  whenNotMakeSense: string[];
}

export default function WhenSection({ whenMakeSense, whenNotMakeSense }: WhenSectionProps) {
  if (!whenMakeSense?.length && !whenNotMakeSense?.length) return null;

  return (
    <div className="flex flex-col gap-12 mb-12">
      {/* Cuándo tiene sentido */}
      {whenMakeSense && whenMakeSense.length > 0 && (
        <div className="flex flex-col gap-[20px] w-full">
          <div className="border-l-2 border-[#5454e9] px-[10px]">
            <h3 className="font-bold text-[22px] text-[#5454e9] m-0 leading-none">Cuándo tiene sentido</h3>
          </div>
          
          <div className="flex flex-col md:flex-row gap-[20px] w-full items-stretch">
            {whenMakeSense.map((item, index) => (
              <div key={index} className="border border-[#cecfd4] flex-1 flex flex-col justify-center p-[16px]">
                <p className="font-normal text-[18px] text-black w-full m-0">{item}</p>
              </div>
            ))}
            <div className="flex items-center justify-center p-[10px] shrink-0">
              <CheckCircle size={49} className="text-[#5454e9]" />
            </div>
          </div>
        </div>
      )}

      {/* Cuándo no tiene sentido */}
      {whenNotMakeSense && whenNotMakeSense.length > 0 && (
        <div className="flex flex-col gap-[20px] w-full">
          <div className="border-l-2 border-[#5454e9] px-[10px]">
            <h3 className="font-bold text-[22px] text-[#5454e9] m-0 leading-none">Cuándo no tiene sentido</h3>
          </div>
          
          <div className="flex flex-col md:flex-row gap-[20px] w-full items-stretch">
            {whenNotMakeSense.map((item, index) => (
              <div key={index} className="border border-[#cecfd4] flex-1 flex flex-col justify-center p-[16px]">
                <p className="font-normal text-[18px] text-black w-full m-0">{item}</p>
              </div>
            ))}
            <div className="flex items-center justify-center p-[10px] shrink-0">
              <CloseCircle size={49} className="text-[#5454e9]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
