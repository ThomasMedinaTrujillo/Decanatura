
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  bgcolor:string;

}

export default function SectionHeading({ title, subtitle,bgcolor }: SectionHeadingProps) {
  return (
    <div className="mb-8 overflow-hidden border border-[#d9d9e8] bg-white shadow-[0_18px_45px_-32px_rgba(22,22,56,0.45)]">
      
      <div style={{ backgroundColor: bgcolor }} className="px-5 py-1 text-right text-[12px] font-semibold text-white md:px-8">
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
