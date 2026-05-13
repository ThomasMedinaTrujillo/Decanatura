import Button from './Button';

interface LevelCard {
  id: string;
  title: string;
  shortDescription: string;
  icon?: string;
}

interface AIASLevelCardsProps {
  cards: LevelCard[];
}

export default function AIASLevelCards({ cards }: AIASLevelCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 justify-items-center">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white border w-80 border-gray-200 p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="font-bold text-lg text-[#E9683B] mb-3">{card.title}</h3>
          <p className="text-sm text-gray-700">{card.shortDescription}</p>
          <Button className='mt-1.5' href={"#"+card.id} >Conocer más</Button>
        </div>
      ))}
    </div>
  );
}
