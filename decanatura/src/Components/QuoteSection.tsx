import React from 'react';

interface QuoteSectionProps {
  quote: string;
}

export default function QuoteSection({ quote }: QuoteSectionProps) {
  return (
    <div className="flex gap-4 my-8 px-6 py-8 bg-gray-50 rounded-lg">
      <div className="flex-shrink-0 w-1 bg-gray-400 rounded-full"></div>
      <blockquote className="text-base italic text-gray-800 leading-relaxed flex-1">
        &quot;{quote}&quot;
      </blockquote>
    </div>
  );
}
