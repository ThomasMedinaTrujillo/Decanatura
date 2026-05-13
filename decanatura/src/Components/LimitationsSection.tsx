import React from 'react';
import loudspeakerIcon from '../assets/puzzleicon.svg';

export default function LimitationsSection() {
  return (
    <div className="flex gap-[30px] items-center mb-12">
      <div className="bg-[#e9683b] flex items-center p-[18px] rounded-[100px] shrink-0">
        <div className="relative shrink-0 w-[43px] h-[43px] overflow-hidden">
          <img src={loudspeakerIcon} alt="Loudspeaker" className="absolute block inset-[8%_12%_6%_4%] max-w-none w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col gap-[2px] items-start justify-center shrink-0">
        <h3 className="font-bold text-[#e9683b] text-[18px] m-0 leading-[normal]">
          Limitaciones y Consideraciones
        </h3>
        <p className="font-normal text-[#88898c] text-[16px] max-w-[684px] leading-[1.5] m-0">
          Una advertencia que los autores señalan y vale tener presente: separar con precisión la fase dependiente de IAG de la fase independiente puede no ser técnicamente viable en todos los casos. No siempre es posible, ni necesario, trazar una línea exacta entre dónde terminó la IAG y dónde empezó el estudiante.
        </p>
      </div>
    </div>
  );
}