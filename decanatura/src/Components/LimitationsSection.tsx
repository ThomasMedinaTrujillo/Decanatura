import { LoudspeakerIcon } from './Icons';

interface LimitationsSectionProps {
  title?: string;
  description?: string;
}

export default function LimitationsSection({
  title = "Limitaciones y Consideraciones",
  description = "Una advertencia que los autores señalan y vale tener presente: separar con precisión la fase dependiente de IAG de la fase independiente puede no ser técnicamente viable en todos los casos. No siempre es posible, ni necesario, trazar una línea exacta entre dónde terminó la IAG y dónde empezó el estudiante."
}: LimitationsSectionProps) {
  return (
   <div className="flex items-center w-full justify-center ">
    <div className="flex gap-[30px] items-center mb-12 w-200">
      <div className="bg-[#e9683b] flex items-center justify-center p-[18px] rounded-[100px] shrink-0 w-[80px] h-[80px]">
        <LoudspeakerIcon size={32}  className="text-white" />
      </div>
      <div className="flex flex-col gap-[2px] items-start justify-center flex-1">
        <h3 className="font-bold text-[#e9683b] text-[18px] m-0 leading-[normal]">
          {title}
        </h3>
        <p className="font-normal text-[#88898c] text-[16px] w-full leading-[1.5] m-0">
          {description}
        </p>
      </div>
    </div>
    </div> 
  );
}