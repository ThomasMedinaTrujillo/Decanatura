import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-base text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
