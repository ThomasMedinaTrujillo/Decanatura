import type { ReactNode } from 'react';

interface Momento3SectionProps {
  id?: string;
  title: string;
  description?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}

export default function Momento3Section({
  id,
  title,
  description,
  aside,
  children,
}: Momento3SectionProps) {
  return (
    <section id={id} className="flex flex-col gap-6 bg-white p-6 shadow-sm ring-1 ring-[#e8e8ec] lg:p-8">
      <div className={`flex flex-col gap-6 ${aside ? 'xl:flex-row xl:items-start xl:justify-between' : ''}`}>
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-[#4cb979] lg:text-[30px]">{title}</h2>
          {description ? <div className="space-y-4 text-base leading-7 text-[#272727]">{description}</div> : null}
        </div>
        {aside ? <div className="w-full xl:max-w-md">{aside}</div> : null}
      </div>
      {children ? <div className="space-y-6">{children}</div> : null}
    </section>
  );
}
