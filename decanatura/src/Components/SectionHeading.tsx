import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 ">
      <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-1xl  bg-[#865CF0] px-[10px] md:text-3xl font-bold text-white mb-0">
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-base text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
