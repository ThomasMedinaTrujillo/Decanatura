interface LevelCard {
  id: string;
  title: string;
  shortDescription: string;
  icon?: string;
}

interface AIASLevelCardsProps {
  cards: LevelCard[];
}

function scrollToLevel(levelId: string) {
  const targetElement = document.getElementById(levelId);

  if (!targetElement) return;

  const navbarOffset = 120;
  const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarOffset;
  window.scrollTo({ top: targetTop, behavior: 'smooth' });
}

export default function AIASLevelCards({ cards }: AIASLevelCardsProps) {
  return (
    <div className="mb-16 grid grid-cols-1 gap-6 xl:grid-cols-2">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="overflow-hidden border border-[#dfe2e8] bg-white shadow-[0_18px_45px_-32px_rgba(22,22,56,0.45)]"
        >
          <div className="bg-[#5454e9] px-5 py-4 text-white md:px-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Nivel AIAS</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">Profundizacion</span>
            </div>
            <h3 className="mt-5 text-3xl font-bold leading-tight">{card.title}</h3>
          </div>
          <div className={`px-5 py-2 text-right text-[12px] font-semibold text-white md:px-6 ${index % 2 === 0 ? 'bg-[#12c96d]' : 'bg-[#ff6a21]'}`}>
            Navegacion rapida por niveles
          </div>
          <div className="px-5 py-6 md:px-6">
            <p className="text-[15px] leading-7 text-[#272727]">{card.shortDescription}</p>
            <button
              type="button"
              onClick={() => scrollToLevel(card.id)}
              className="mt-6 bg-[#12c96d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0cab5d]"
            >
              Conocer mas
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
