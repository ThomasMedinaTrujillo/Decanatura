import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  bgcolor:string;
}

export default function SectionHeading({ title, subtitle,bgcolor }: SectionHeadingProps) {
  return (
    <div className="mb-8 ">
      <h2 className={"text-1xl  px-[10px] md:text-3xl font-bold text-white mb-0 "} style={{ backgroundColor: bgcolor }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
