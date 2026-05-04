interface AboutSectionProps {
  bgImage: string;
}

export default function AboutSection({ bgImage }: AboutSectionProps) {
  return (
    <div className="relative w-full h-[413px] flex items-center" data-node-id="7:635">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <img alt="" className="w-full h-full object-cover" src={bgImage} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[13px] items-start text-white pl-[80px] w-[612px]" data-node-id="7:636" data-name="Text">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[42px] w-full" data-node-id="7:638">
          ¿Cuál es tu punto de partida?
        </p>
        <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] w-full whitespace-pre-wrap" data-node-id="7:639">
          <p className="leading-[1.5] mb-0">{`Entra por el momento que corresponde a tu necesidad actual. `}</p>
          <p className="leading-[1.5]">Puedes cambiar de momento en cualquier momento.</p>
        </div>
      </div>
    </div>
  );
}
