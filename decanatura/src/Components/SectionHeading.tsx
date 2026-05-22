
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  bgcolor:string;
  uppertitle:string;
}

export default function SectionHeading({ title, subtitle,bgcolor,uppertitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 overflow-hidden border border-[#d9d9e8] bg-white shadow-[0_18px_45px_-32px_rgba(22,22,56,0.45)]">
      <div style={{ backgroundColor: bgcolor }} className="flex items-center justify-between px-5 py-4 text-white md:px-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-white/35 bg-white/12" />
          <span className="text-[11px] font-bold uppercase tracking-[0.16em]">{uppertitle}</span>
        </div>
      </div>
      <div className="bg-[#12c96d] px-5 py-1 text-right text-[12px] font-semibold text-white md:px-8">
      </div>
      <div className="px-5 py-7 md:px-8 md:py-9">
        <h2 className="text-2xl font-bold leading-tight text-[#5454e9] md:text-[2.4rem]">
          {title}
        </h2>
        <div className="mt-5 h-1 w-24 bg-[#ff6a21]" />
      </div>
      {subtitle && (
        <p className="px-5 pb-6 text-base text-gray-600 md:px-8">{subtitle}</p>
      )}
    </div>
  );
}
