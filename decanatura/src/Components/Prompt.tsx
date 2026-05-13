import { div } from "framer-motion/client";
import { useState } from "react"

export const Prompt = ({ text, prompt }: {text: string, prompt: string}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="p-[20px]">
        <button className=" bg-[#19191b] content-stretch cursor-pointer flex gap-[15px] items-center  p-[20px]" data-node-id="2059:1105" data-name="prompt 1">
                
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4cb979] text-[18px] text-left whitespace-nowrap" data-node-id="I2059:1105;1:1533">
                  {text}
                </p>

                
                
        </button>

        {isOpen && (
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-black w-full" data-node-id="2059:1045">
                {prompt}
            </p>
        )}
        </div>
    )
}