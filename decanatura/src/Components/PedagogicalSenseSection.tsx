interface PedagogicalSenseSectionProps {
  pedagogicalSense: string;
}

export default function PedagogicalSenseSection({ pedagogicalSense }: PedagogicalSenseSectionProps) {
  return (
    <div className="mb-12 overflow-hidden border border-[#dfe2e8] bg-white shadow-[0_14px_38px_-32px_rgba(17,24,39,0.4)]">
      <div className="bg-[#5454e9] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white">
        Sentido pedagogico
      </div>
      <div className="border-t-4 border-[#12c96d] px-5 py-5 md:px-6">
        <p className="w-full text-[16px] leading-7 text-black">{pedagogicalSense}</p>
      </div>
    </div>
  );
}
