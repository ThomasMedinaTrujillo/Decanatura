import { useState } from "react"

export const Prompt = ({ text, prompt }: {text: string, prompt: string}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prompt);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy prompt', error);
        }
    };

    return (
        <div className="border border-[#d7d8dc] bg-white">
        <button
            className="flex w-full items-center justify-between gap-4 bg-[#19191b] px-5 py-4 text-left cursor-pointer"
            data-node-id="2059:1105"
            data-name="prompt 1"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
        >
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4cb979] text-[18px]" data-node-id="I2059:1105;1:1533">
                  {text}
                </p>
                <span className="text-sm font-semibold text-white">
                  {isOpen ? 'Ocultar' : 'Ver prompt'}
                </span>
        </button>

        {isOpen && (
            <div className="border-t border-[#d7d8dc] px-5 py-4">
                <div className="mb-4 flex justify-end">
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="bg-black px-4 py-2 text-sm font-semibold text-white cursor-pointer"
                    >
                        {copied ? 'Copiado' : 'Copiar prompt'}
                    </button>
                </div>
                <pre className="whitespace-pre-wrap font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] leading-6 text-black">
                    {prompt}
                </pre>
            </div>
        )}
        </div>
    )
}
