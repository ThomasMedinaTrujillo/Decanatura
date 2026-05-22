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
    <div className="mb-20 grid grid-cols-1 gap-8 xl:grid-cols-2">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="mx-auto w-full max-w-[520px] overflow-hidden border border-[#dfe2e8] bg-white shadow-[0_18px_45px_-32px_rgba(22,22,56,0.45)]"
        >
          <div className="bg-[#5454e9] px-4 py-3 text-white md:px-5 md:py-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Nivel AIAS</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">Profundización</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold leading-tight md:text-[2rem]">{card.title}</h3>
          </div>
          <div className={`px-4 py-2 text-right text-[11px] font-semibold text-white md:px-5 ${index % 2 === 0 ? 'bg-[#12c96d]' : 'bg-[#ff6a21]'}`}>
            Navegacion rapida por niveles
          </div>
          <div className="px-4 py-5 md:px-5 md:py-6">
            <p className="text-[14px] leading-6 text-[#272727] md:text-[15px] md:leading-7">{card.shortDescription}</p>
            <button
              type="button"
              onClick={() => scrollToLevel(card.id)}
              className="mt-5 bg-[#12c96d] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0cab5d] md:px-5 md:py-3"
            >
              Conocer mas
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
