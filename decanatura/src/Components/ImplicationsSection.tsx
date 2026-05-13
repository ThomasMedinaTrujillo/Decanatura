
interface Implication {
  title: string;
  description: string;
}

interface ImplicationsSectionProps {
  implications: Implication[];
}

export default function ImplicationsSection({ implications }: ImplicationsSectionProps) {
  return (
    <div className="mb-12 flex flex-col gap-[20px]">
      <h3 className="font-bold text-[#5454e9] text-[26px] leading-[normal] m-0">Lo que implica para el docente</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] px-[4px]">
        {implications.map((imp, index) => (
          <div key={index} className="border-l-3 border-[#5454e9] border-solid flex flex-col gap-[5px] px-[15px] py-[10px]">
            <h4 className="font-bold text-[#5454e9] text-[20px] w-full m-0">{imp.title}</h4>
            <p className="font-normal text-[14px] text-black w-full m-0">{imp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
