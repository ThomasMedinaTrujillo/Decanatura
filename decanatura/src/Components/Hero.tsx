import Button from './Button';
import { imgArrowDown } from '../assets/svg-o5q0r';
import './hero.css'
const imgBanner = new URL('../assets/Heroo.png', import.meta.url).href;

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center flex flex-col items-start justify-center overflow-hidden" data-node-id="7:613">
      {/* Banner Background */}
      <div className=" absolute inset-0 -z-10 pointer-events-none">
        <img alt="Banner" className="w-full h-full object-cover" src={imgBanner} />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-[rgba(84,84,233,0.6)] -z-10" />

      {/* Tag */}
      <div className="bg-black px-[80px] pr-[19px] py-[5px] mb-8" data-node-id="7:620">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[20px] text-center text-white whitespace-nowrap">
          <span>{`Un recurso hecho para `}</span>
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">{`docentes`}</span>
        </p>
      </div>

      {/* Title */}
      <div className="pl-[80px] mb-6" data-node-id="7:616">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[96px] text-white leading-[1.1]">
          Evaluar en tiempos
        </p>
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[96px] text-[#e4eb60] leading-[1.1]">
          de IAG
        </p>
      </div>

      {/* Subtitle */}
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[20px] text-[rgba(255,255,255,0.8)] w-[712px] leading-[1.5] pl-[80px] mb-8">
        <span>{`Un marco de trabajo para tomar decisiones fundamentadas sobre el rol de la `}</span>
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">inteligencia artificial generativa (IAG)</span>
        <span>{` en el diseño evaluativo.`}</span>
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-[50px] pl-[80px] mb-8">
        <Button variant="primary">Introducción</Button>
        <Button variant="secondary">Explorar recurso</Button>
      </div>

      {/* Arrow Down */}
      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 size-25 flex items-center justify-center cursor-pointer" data-node-id="7:624">
        <div className="w-1/2 h-1/2">
          <img alt="Scroll down" className="w-full h-full" src={imgArrowDown} />
        </div>
      </button>
    </div>
  );
}
