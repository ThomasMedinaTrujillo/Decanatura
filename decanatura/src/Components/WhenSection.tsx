import { CheckCircle, CloseCircle } from './Icons';

interface WhenSectionProps {
  whenMakeSense: string[];
  whenNotMakeSense: string[];
}

function MailingPanel({
  title,
  items,
  icon,
  accent,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  accent: string;
}) {
  if (!items?.length) return null;

  return (
    <div className="overflow-hidden border border-[#dfe2e8] bg-white shadow-[0_16px_36px_-30px_rgba(17,24,39,0.45)]">
      <div className="flex items-center justify-between px-5 py-3 text-white" style={{ backgroundColor: accent }}>
        <h3 className="text-[12px] font-bold uppercase tracking-[0.14em]">{title}</h3>
        <div className="text-white">{icon}</div>
      </div>
      <div className="space-y-3 px-5 py-5">
        {items.map((item, index) => (
          <div key={index} className="border-l-4 border-[#12c96d] bg-[#f8f9fd] px-4 py-3">
            <p className="text-[15px] leading-6 text-black">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhenSection({ whenMakeSense, whenNotMakeSense }: WhenSectionProps) {
  if (!whenMakeSense?.length && !whenNotMakeSense?.length) return null;

  return (
    <div className="mb-12 grid grid-cols-1 gap-6 xl:grid-cols-2">
      <MailingPanel
        title="Cuando tiene sentido"
        items={whenMakeSense}
        accent="#5454e9"
        icon={<CheckCircle size={28} className="text-white" />}
      />
      <MailingPanel
        title="Cuando no tiene sentido"
        items={whenNotMakeSense}
        accent="#ff6a21"
        icon={<CloseCircle size={28} className="text-white" />}
      />
    </div>
  );
}
