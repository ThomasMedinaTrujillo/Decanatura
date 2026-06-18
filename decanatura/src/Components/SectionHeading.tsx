
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  bgcolor: string;
  buttonclick?: () => void;
}

export default function SectionHeading({ title, subtitle, bgcolor, buttonclick }: SectionHeadingProps) {
  return (
    <div style={{ borderTop: `8px solid ${bgcolor}` }} className="mb-8 overflow-hidden flex flex-col border border-[#d9d9e8] bg-white shadow-[0_18px_45px_-32px_rgba(22,22,56,0.45)] items-start justify-between">
      <div>

      
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
      {buttonclick && (
        <div className="px-5 pb-6 md:px-8 ">
          <button
            onClick={buttonclick}
            className="inline-flex items-center justify-center border border-[#d7d8dc] bg-[#5454e9] px-4 py-2 text-base font-semibold text-[#FFFFFF] hover:bg-[#f7f7f8] hover:text-[#000000]"
          >
            Ver guía de uso
          </button>
        </div>
      )}
    </div>
  );
}
