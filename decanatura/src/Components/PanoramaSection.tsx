import bgImage from '../assets/2b1266ad54e3fa1928e96cd96fc0713a6083f676.png';

export default function PanoramaSection() {
  return (
    <div className="content-stretch flex flex-col gap-[49px] items-center justify-end pb-[55px] pt-[87px] px-[109px] relative size-full min-h-[500px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <img alt="" className="absolute max-w-none object-cover size-full" src={bgImage} />
        <div className="absolute bg-[rgba(69,44,131,0.6)] inset-0" />
      </div>
      <p className="font-bold leading-[normal] relative shrink-0 text-[32px] text-white whitespace-nowrap z-10">
        La IA está transformando el mercado laboral
      </p>
      <div className="content-stretch flex h-[172px] items-center justify-between relative shrink-0 w-[714px] z-10">
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[rgba(0,0,0,0.59)] content-stretch flex flex-col gap-[10px] h-full items-center leading-[normal] px-[20px] py-[12px] relative shrink-0 text-center w-[329px]">
            <p className="font-bold relative shrink-0 text-[#e4eb60] text-[46px] whitespace-nowrap">
              3x
            </p>
            <p className="font-medium min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">
              Más crecimiento en ingresos por empleado en organizaciones que lideran el uso de IA
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[rgba(0,0,0,0.59)] content-stretch flex flex-col gap-[10px] h-full items-center leading-[normal] px-[20px] py-[12px] relative shrink-0 text-center w-[329px] ">
            <p className="font-bold relative shrink-0 text-[#e4eb60] text-[46px] w-[150px]">
              100%
            </p>
            <p className="font-medium min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">
              De las industrias está ampliando su uso de IA. En los roles más expuestos, las habilidades demandadas cambian un 66% más rápido
            </p>
          </div>
        </div>
      </div>
      <p className="font-normal leading-[normal] relative shrink-0 text-[21px] text-center text-white w-[930px] whitespace-pre-wrap z-10">{`Un análisis de cerca de mil millones de ofertas de empleo en seis continentes — The Fearless Future, PwC (2025),  revela que el impacto de la IA es transversal y está ocurriendo ahora`}</p>
    </div>
  );
}
