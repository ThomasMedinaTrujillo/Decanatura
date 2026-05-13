interface Momento3ResourceCardProps {
  title: string;
  description: string;
  href: string;
  cta: string;
  eyebrow?: string;
  imageSrc?: string;
}

export default function Momento3ResourceCard({
  title,
  description,
  href,
  cta,
  eyebrow,
  imageSrc,
}: Momento3ResourceCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-5 border border-[#d7d8dc] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="space-y-3">
        {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#4cb979]">{eyebrow}</p> : null}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-[#19191b]">{title}</h3>
          <p className="text-sm leading-6 text-[#5d6169]">{description}</p>
        </div>
      </div>

      {imageSrc ? (
        <div className="overflow-hidden border border-[#ececf0]">
          <img src={imageSrc} alt={title} className="h-56 w-full object-cover" />
        </div>
      ) : null}

      <span className="inline-flex w-fit items-center bg-black px-4 py-2 text-sm font-semibold text-white">
        {cta}
      </span>
    </a>
  );
}
