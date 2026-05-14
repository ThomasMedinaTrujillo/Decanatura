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
  howToEvaluateTitle = 'Como evaluar',
  howToEvaluateDescription,
  howToEvaluateStrategies,
}: HowToEvaluateSectionProps) {
  return (
    <div className="mb-12 overflow-hidden border border-[#dfe2e8] bg-white shadow-[0_16px_36px_-30px_rgba(17,24,39,0.45)]">
      <div className="flex items-center justify-between bg-[#5454e9] px-5 py-3 text-white">
        <h3 className="text-[12px] font-bold uppercase tracking-[0.14em]">{howToEvaluateTitle}</h3>
        <div className="h-3 w-20 bg-[#12c96d]" />
      </div>

      <div className="px-5 py-5 md:px-6">
        {howToEvaluateDescription && (
          <p className="mb-6 text-[15px] leading-7 text-black">{howToEvaluateDescription}</p>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {howToEvaluateStrategies?.map((strategy, index) => (
            <div key={index} className="border border-[#e2e5ee] bg-[#fbfbfd]">
              <div className="border-b border-[#e2e5ee] bg-[#f1f3ff] px-4 py-3">
                <h4 className="text-[17px] font-bold text-[#5454e9]">{strategy.title}</h4>
              </div>
              <div className="px-4 py-4">
                <p className="text-[15px] leading-6 text-black">{strategy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
