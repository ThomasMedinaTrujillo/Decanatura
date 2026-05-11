import { imgFile } from '../assets/svg-o5q0r';

export default function ResourceInfo() {
  return (
    <div className="flex flex-col md:flex-row gap-[95px] items-start px-[80px] py-[80px] max-w-7xl" data-node-id="7:625" data-name="Container">
      <div className="flex flex-col gap-[13px] items-start w-full md:w-[589px]" data-node-id="7:626" data-name="Text">
        <p className="capitalize font-bold leading-[normal] relative shrink-0 text-[#5454e9] text-[20px] w-full" data-node-id="7:627">
          Sobre este recurso
        </p>
        <p className="font-bold leading-[normal] relative shrink-0 text-[42px] text-black w-full" data-node-id="7:628">
          Un marco, no una solución
        </p>
        <p className="font-normal leading-[1.5] relative shrink-0 text-[18px] text-black w-full" data-node-id="7:629">
          Este recurso es una iniciativa de la Decanatura de Innovación y Fortalecimiento del PEI de la Universidad Icesi, desarrollado en coherencia con los Lineamientos para el uso responsable de herramientas de Inteligencia Artificial Generativa y el Manifiesto sobre Inteligencia Artificial y Educación de la Universidad Icesi (2024).
        </p>
      </div>

      <div className="bg-[#e4eb60] flex flex-col gap-[24px] items-start justify-center px-[30px] py-[15px] w-full md:w-[618px]" data-node-id="7:630" data-name="Card text">
        <p className="capitalize font-bold leading-[normal] relative shrink-0 text-[#865cf0] text-[22px] w-full" data-node-id="7:631">
          Contexto institucional
        </p>
        <p className="font-normal leading-[1.5] relative shrink-0 text-[14px] text-black w-full" data-node-id="7:632">
          La IA generativa no llegó con instrucciones de uso para la evaluación. Este recurso tampoco las trae. Lo que sí ofrece son orientaciones pedagógicas, estrategias y ejemplos concretos para que cada docente tome decisiones más fundamentadas desde su contexto, su disciplina y sus estudiantes.
        </p>

        <ResourceLink
          title="Lineamientos para el uso responsable de IAG"
          subtitle="Universidad Icesi"
          href="https://drive.google.com/file/d/192NbTp4U0UHX4pA-WWnbLbbPhskP0AV2/view"
          target="_self"
        />

        <ResourceLink
          title="Manifiesto sobre IA y Educación"
          subtitle="Universidad Icesi 2024"
          href="https://drive.google.com/file/d/1k_faevo1L53mdAaKii_nEYPuYLmUZBqT/view"
          target="_blank"
        />
      </div>
    </div>
  );
}

interface ResourceLinkProps {
  title: string;
  subtitle: string;
  href: string;
  target: string;
}

function ResourceLink({ title, subtitle, href, target }: ResourceLinkProps) {
  return (
    <a
      className="bg-[#865cf0] content-stretch cursor-pointer flex gap-[15px] items-center pl-[15px] pr-[120px] py-[10px] relative shrink-0 w-full"
      href={href}
      target={target}
    >
      <div className="content-stretch flex items-center p-[10px] relative rounded-[5px] shrink-0">
        <div className="relative shrink-0 size-[32px]">
          <div className="absolute inset-[10%_17.5%]">
            <div className="absolute inset-[-3.91%_-4.81%]">
              <img alt="" className="block max-w-none size-full" src={imgFile} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[5px] items-start justify-center leading-[1.5] relative shrink-0 text-left text-white w-[302px]">
        <p className="font-bold relative shrink-0 text-[14px] w-[414px]">
          {title}
        </p>
        <p className="font-normal relative shrink-0 text-[12px] w-[414px]">
          {subtitle}
        </p>
      </div>
    </a>
  );
}
