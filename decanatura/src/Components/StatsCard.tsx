import React from 'react';

interface StatsCardProps {
  stat: string;
  description: string;
}

export default function StatsCard({ stat, description }: StatsCardProps) {
  return (
    <div className="bg-[#865cf0] p-[10px] flex gap-[10px] h-[110px] items-center" style={{ backgroundColor: '#865cf0' }}>
      <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="font-bold text-[46px] text-white whitespace-nowrap">
        {stat}
      </p>
      <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="font-sans text-[14px] text-white leading-tight">
        {description}
      </p>
    </div>
  );
}
