import  {type ReactNode } from 'react';

export interface ResourcePanelProps {
  icon?: ReactNode;
  normalText?: string;
  highlightedText?: string;
  className?: string;
}

export default function ResourcePanel({
  icon,
  normalText = "Los estudiantes piden más formación. Los docentes reconocen que también la necesitan. ",
  highlightedText = "Ese es exactamente el punto de partida de este recurso.",
  className = ""
}: ResourcePanelProps) {
  return (
    <div className={`flex gap-[30px] items-center relative w-full w-max-[900px] mx-auto bg-white rounded-lg ${className}`}>
      <div className="bg-[#865cf0] flex items-center justify-center p-4 relative rounded-full shrink-0 w-[80px] h-[80px] shadow-sm">
        {icon || (
          <svg 
            className="w-8 h-8 text-white" 
            viewBox="0 0 39 33" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M19.0909 2.46215C17.7584 0.952291 15.8085 0 13.6364 0H0V29.0909H13.6364C15.6447 29.0909 17.2727 30.7189 17.2727 32.7273H20.9091C20.9091 30.7189 22.5371 29.0909 24.5455 29.0909H38.1818V0H24.5455C22.3733 0 20.4235 0.952291 19.0909 2.46215ZM24.5455 3.63636C22.5371 3.63636 20.9091 5.26442 20.9091 7.27273V26.4275C21.9787 25.8087 23.2207 25.4545 24.5455 25.4545H34.5455V3.63636H24.5455ZM13.6364 25.4545C14.9611 25.4545 16.2031 25.8087 17.2727 26.4275V7.27273C17.2727 5.26442 15.6447 3.63636 13.6364 3.63636H3.63636V25.4545H13.6364Z" fill="currentColor"/>
          </svg>
        )}
      </div>
      <div className="flex flex-col items-start relative shrink-0">
        <p className="font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed relative shrink-0 text-[#88898c] sm:text-[16px] text-sm md:text-lg w-[684px]">
          <span className="font-normal">{normalText}</span>
          {highlightedText && (
             <span className="font-bold text-[#865cf0]"> {highlightedText}</span>
          )}
        </p>
      </div>
    </div>
  );
}
