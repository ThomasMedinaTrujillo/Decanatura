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
        <div className="overflow-hidden border border-[#8b5cf6] bg-[#6d28d9]">
        <button
            className="flex w-full cursor-pointer items-center justify-between gap-4 bg-[#6d28d9] px-5 py-4 text-left transition-colors hover:bg-[#5b21b6]"
            data-node-id="2059:1105"
            data-name="prompt 1"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
        >
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] relative shrink-0 text-[18px] font-bold leading-[normal] text-white" data-node-id="I2059:1105;1:1533">
                  {text}
                </p>
                <span className="text-sm font-semibold text-white/90">
                  {isOpen ? 'Ocultar' : 'Ver prompt'}
                </span>
        </button>

        {isOpen && (
            <div className="border-t border-white/15 bg-[#5b21b6] px-5 py-4 text-white">
                <div className="mb-4 flex justify-end">
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="cursor-pointer bg-white px-4 py-2 text-sm font-semibold text-[#6d28d9] transition-colors hover:bg-[#f5f3ff]"
                    >
                        {copied ? 'Copiado' : 'Copiar prompt'}
                    </button>
                </div>
                <pre className="whitespace-pre-wrap font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] leading-6 text-white">
                    {prompt}
                </pre>
            </div>
        )}
        </div>
    )
}
