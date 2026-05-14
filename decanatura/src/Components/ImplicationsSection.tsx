interface Implication {
  title: string;
  description: string;
}

interface ImplicationsSectionProps {
  implications: Implication[];
}

export default function ImplicationsSection({ implications }: ImplicationsSectionProps) {
  return (
    <div className="mb-12 overflow-hidden border border-[#dfe2e8] bg-white shadow-[0_16px_36px_-30px_rgba(17,24,39,0.45)]">
      <div className="bg-[#ff6a21] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white">
        Lo que implica para el docente
      </div>
      <div className="grid grid-cols-1 gap-4 px-5 py-5 md:grid-cols-2 xl:grid-cols-3 md:px-6">
        {implications.map((imp, index) => (
          <div key={index} className="border border-[#e2e5ee] bg-[#fbfbfd] p-4">
            <h4 className="mb-3 text-[17px] font-bold text-[#5454e9]">{imp.title}</h4>
            <p className="text-[14px] leading-6 text-black">{imp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
