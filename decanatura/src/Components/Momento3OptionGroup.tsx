interface Momento3OptionGroupProps {
  title: string;
  description: string;
  options: string[];
  selectedOptions: string[];
  onToggleOption: (option: string) => void;
  accent?: string;
  helperText?: string;
  notice?: string;
}

export default function Momento3OptionGroup({
  title,
  description,
  options,
  selectedOptions,
  onToggleOption,
  accent = '#4cb979',
  helperText,
  notice,
}: Momento3OptionGroupProps) {
  return (
    <div className="flex flex-col gap-4 border border-[#d7d8dc] bg-white p-5">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-[#19191b]" style={{ color: accent }}>
          {title}
        </h3>
        <p className="text-sm leading-6 text-[#5d6169]">{description}</p>
        {helperText ? <p className="text-sm font-semibold leading-6 text-[#272727]">{helperText}</p> : null}
        {notice ? <p className="text-sm leading-6 text-[#5d6169]">{notice}</p> : null}
      </div>

      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option);

          return (
            <label
              key={option}
              className={`flex cursor-pointer items-start gap-3 border p-3 transition-colors ${
                isSelected ? 'bg-[#f7f7fb]' : 'bg-white'
              }`}
              style={{ borderColor: isSelected ? accent : '#ececf0' }}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggleOption(option)}
                className="mt-1 h-4 w-4 shrink-0"
                style={{ accentColor: accent }}
              />
              <p className="text-sm leading-6 text-[#272727]">{option}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
}
