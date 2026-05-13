interface Momento3OptionGroupProps {
  title: string;
  description: string;
  options: string[];
  accent?: string;
}

export default function Momento3OptionGroup({
  title,
  description,
  options,
  accent = '#4cb979',
}: Momento3OptionGroupProps) {
  return (
    <div className="flex flex-col gap-4 border border-[#d7d8dc] bg-white p-5">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-[#19191b]" style={{ color: accent }}>
          {title}
        </h3>
        <p className="text-sm leading-6 text-[#5d6169]">{description}</p>
      </div>
      <div className="space-y-3">
        {options.map((option) => (
          <div key={option} className="flex items-start gap-3 border border-[#ececf0] p-3">
            <span
              aria-hidden="true"
              className="mt-1 block h-4 w-4 shrink-0 rounded border"
              style={{ borderColor: accent }}
            />
            <p className="text-sm leading-6 text-[#272727]">{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
