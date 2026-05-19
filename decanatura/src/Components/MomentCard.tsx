interface MomentCardProps {
  momentNumber: number;
  title: string;
  description: string;
  image: string;
  titleColor: string;
  items: string[];
  knowmore:string;
}

import { useNavigate } from 'react-router';
import orange from '../assets/orange.svg'

export default function MomentCard({
  momentNumber,
  title,
  description,
  image,
  titleColor,
  items,
  knowmore,

}: MomentCardProps) {
  

  const navigate = useNavigate()

  return (
    <div
      className="bg-white border border-[#cecfd4] border-solid flex flex-col gap-[15px] items-start justify-between p-[15px] w-full max-w-[391px] min-h-[612px]"
      data-node-id={`moment-card-${momentNumber}`}
    >
      {/* Image */}
      <div className="w-full h-[241px] overflow-hidden">
        <img alt={title} className="w-full h-full object-cover" src={image} />
      </div>

      {/* Header with moment number */}
      <div className="flex flex-col gap-[5px] w-full">
        <p className="font-bold leading-[1.5] text-[20px] w-fit" style={{ color: titleColor }}>
          Momento {momentNumber}
        </p>

        <div className={`bg-[${titleColor}] !w-[63px] !h-[2px] `}>
          {title === "Profundización" && <img className='w-[63] h-[2px]' src={orange}></img>}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[13px] w-full flex-grow">
        <p className="font-bold leading-[1.5] text-[24px] text-black">
          {title}
        </p>
        <div className="font-normal text-[#88898c] text-[16px]">
          <p className="leading-[1.5] mb-2">{description}</p>
          <ul className="list-disc list-inside space-y-1">
            {items.map((item, index) => (
              <li key={index} className="leading-[1.5]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] my-2">
        <img alt="" className="w-full h-full" src="lineIcon" />
      </div>

      {/* CTA Button */}
      <button className="bg-black px-[15px] py-[10px] w-fit self-start" onClick={()=> navigate(knowmore)}>
        <p className="font-normal text-[20px] text-center text-white whitespace-nowrap">
          Conoce más
        </p>
      </button>
    </div>
  );
}
