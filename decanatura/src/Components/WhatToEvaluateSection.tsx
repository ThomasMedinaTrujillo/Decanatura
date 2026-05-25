interface WhatToEvaluateSectionProps {
  whatToEvaluate: string | string[] | undefined;
}

export default function WhatToEvaluateSection({ whatToEvaluate }: WhatToEvaluateSectionProps) {
  if (!whatToEvaluate) return null;

  return (
    <div className="mb-12 overflow-hidden border border-[#dfe2e8] bg-white shadow-[0_16px_36px_-30px_rgba(17,24,39,0.45)]">
      <div className="bg-[#12c96d] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white">
        Qué evaluar
      </div>
      <div className="px-5 py-5 md:px-6">
        {Array.isArray(whatToEvaluate) ? (
          <div className="space-y-3">
            {whatToEvaluate.map((item, idx) => (
              <div key={idx} className="border border-[#e2e5ee] bg-[#f8f9fd] px-4 py-3">
                <p className="text-[15px] leading-6 text-black">{item}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="border border-[#e2e5ee] bg-[#f8f9fd] px-4 py-3">
              <p className="text-[15px] leading-6 text-black">{whatToEvaluate}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
