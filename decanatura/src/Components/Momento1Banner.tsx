import bannerImage from '../assets/7ddfc786a7bcdcf5c85e53cfd9054089dc9a0cd3.png';

export default function Momento1Banner() {
  return (
    <div 
      className="w-full h-150 relative overflow-hidden mb-16"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay azul */}
      <div className="absolute inset-0 bg-[rgba(84,84,233,0.6)]" />
  
      {/* Contenido de texto */}
      <div className="relative h-full flex flex-col items-center justify-center px-[242px]">
        <div className="text-center">
          <p style={{fontFamily: 'Plus_Jakarta_Sans'}} className="font-bold text-[52px] text-white leading-none ">
            Momento 1
          </p>
          <p style={{fontFamily: 'Plus_Jakarta_Sans'}} className="font-bold text-[36px] text-[#e4eb60] leading-none">
            Exploración
          </p>
        </div>
      </div>
    </div>
  );
}
