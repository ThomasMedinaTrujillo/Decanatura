import React, { type ReactElement } from 'react';

interface GPTCardProps {
  href?: string;
  iconSrc?: ReactElement;
  title: string;
  subtitle: string;
  buttonText: string;
  bgColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  className?: string;
}

const GPTCard: React.FC<GPTCardProps> = ({
  href,
iconSrc,
  title,
  subtitle,
  buttonText,
  bgColor = 'bg-[#4cb979]',
  buttonBgColor = 'bg-white',
  buttonTextColor = 'text-black',
  className = '',
}) => (
  <a
    className={`${bgColor} content-stretch cursor-pointer flex items-center justify-between px-4 py-2.5 relative w-full ${className}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="content-stretch flex gap-4 items-center relative">
      <div className="content-stretch flex items-center p-2.5 relative rounded-[5px]">
        <div className="relative w-8 h-8">
          <div className="absolute inset-[10%_17.5%]">
            <div className="absolute inset-[-3.91%_-4.81%]">
              {iconSrc}
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-1 items-start justify-center leading-6 relative text-left text-white whitespace-normal">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative text-[14px]">
          {title}
        </p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative text-[12px]">
          {subtitle}
        </p>
      </div>
    </div>
    <div className={`${buttonBgColor} border border-[#cecfd4] border-solid content-stretch flex items-center justify-center px-3 py-2 relative`}>
      <p className={`font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative text-[14px] text-center ${buttonTextColor}`}>
        {buttonText}
      </p>
    </div>
  </a>
);

export default GPTCard;
