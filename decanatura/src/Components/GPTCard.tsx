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
    className={`${bgColor} content-stretch cursor-pointer flex items-center justify-between px-[15px] py-[10px] relative shrink-0 w-full ${className}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="content-stretch flex items-center p-[10px] relative rounded-[5px] shrink-0">
        <div className="relative shrink-0 size-[32px]">
          <div className="absolute inset-[10%_17.5%]">
            <div className="absolute inset-[-3.91%_-4.81%]">
              {iconSrc}
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[5px] items-start justify-center leading-[1.5] relative shrink-0 text-left text-white whitespace-nowrap">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">
          {title}
        </p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[12px]">
          {subtitle}
        </p>
      </div>
    </div>
    <div className={`${buttonBgColor} border border-[#cecfd4] border-solid content-stretch flex items-center justify-center px-[15px] py-[10px] relative shrink-0`}>
      <p className={`font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-center whitespace-nowrap ${buttonTextColor}`}>
        {buttonText}
      </p>
    </div>
  </a>
);

export default GPTCard;
