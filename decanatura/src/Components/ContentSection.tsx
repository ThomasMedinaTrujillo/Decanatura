
interface ContentSectionProps {
  leftText: string;
  rightText: string;
}

export default function ContentSection({ leftText, rightText }: ContentSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="text-base text-gray-700 leading-relaxed">
        <p>{leftText}</p>
      </div>
      <div className="text-base text-gray-700 leading-relaxed">
        <p>{rightText}</p>
      </div>
    </div>
  );
}
