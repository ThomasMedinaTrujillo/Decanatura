import  { useState } from 'react';
import { ChevronIconCircle } from './Icons';

export default function CustomExamplesLevel2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-[36px] items-start relative w-full">

      <h3 className="font-bold text-[#5454e9] text-[26px] leading-[normal] m-0">Ejemplo Nivel 2</h3>
      <p className="font-normal text-[16px] text-black w-full leading-[1.5]">En un curso de Diseño de Medios Interactivos, los estudiantes desarrollan una pieza multimedia a lo largo del semestre. En la fase inicial, pueden usar IAG para explorar ideas de concepto, posibles estructuras narrativas y propuestas de público objetivo. Lo que se evalúa no es esa exploración sino el desarrollo que el estudiante construye a partir de ella: el storyboard, las decisiones de diseño visual y la pieza final.</p>

      <div 
        className="bg-white border border-[#cecfd4] border-solid flex justify-between items-center px-[20px] py-[10px] w-[300px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-[22px] text-black m-0">Ejemplo Nivel 2</h3>
        <ChevronIconCircle className={`text-[#5454e9] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={24} />
      </div>
      
      <div 
        className="flex flex-col lg:flex-row gap-[30px] items-start w-full overflow-hidden transition-all duration-300"
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        {/* Left column */}
        <div className="flex flex-col gap-[20px] w-full lg:w-1/3">
          <div className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] items-start px-[20px] py-[15px] w-full">
            <h4 className="font-bold text-[#5454e9] text-[20px] m-0">Posibles evidencias</h4>
            <div className="font-normal text-[16px] text-black w-full" style={{ lineHeight: '1.5' }}>
              <p className="mb-2">Un breve documento (ej. 500–800 palabras) donde el estudiante explique:</p>
              <ul className="list-disc pl-[24px] mb-4">
                <li>por qué eligió ese concepto</li>
                <li>cómo evolucionó desde la fase de ideación</li>
                <li>cómo responde al público objetivo</li>
              </ul>
              
              <p className="mb-2">Pieza multimedia final</p>
              <ul className="list-disc pl-[24px] mb-4">
                <li>prototipo multimedia</li>
                <li>experiencia digital</li>
                <li>narrativa transmedia</li>
              </ul>
              
              <p className="mb-2">Si es necesario, el docente puede añadir un componente controlado como:</p>
              <ul className="list-disc pl-[24px]">
                <li>una defensa del proyecto con sesión de preguntas espontáneas realizadas por el docente y compañeros.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-[20px] w-full lg:w-2/3">
          <div className="flex flex-col gap-[10px] items-start px-[10px] w-full">
            <h4 className="font-bold text-[#5454e9] text-[18px] m-0">Ejemplo instrucciones a estudiantes</h4>
            <p className="font-normal text-[16px] text-black m-0">
              En la fase inicial de conceptualización, puedes utilizar herramientas de Inteligencia Artificial Generativa (IAG) para apoyar procesos de ideación.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-[28px] w-full">
            <div className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] px-[20px] py-[15px] flex-1">
              <h4 className="font-bold text-[#5454e9] text-[20px] m-0">Usos permitidos de IAG</h4>
              <ul className="list-disc pl-[24px] font-normal text-[16px] text-black m-0 leading-[1.5]">
                <li>Generar ideas de concepto para la pieza multimedia.</li>
                <li>Explorar posibles estructuras narrativas.</li>
                <li>Identificar perfiles de público objetivo.</li>
                <li>Crear listas preliminares de enfoques creativos o referencias.</li>
              </ul>
            </div>
            <div className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] px-[20px] py-[15px] flex-1">
              <h4 className="font-bold text-[#5454e9] text-[20px] m-0">Límites de uso</h4>
              <ul className="list-disc pl-[24px] font-normal text-[16px] text-black m-0 leading-[1.5]">
                <li>La IAG solo puede utilizarse en la fase de ideación y planificación.</li>
                <li>El storyboard, las decisiones de diseño visual y la pieza multimedia final deben ser desarrollados por el estudiante.</li>
                <li>El producto final debe reflejar decisiones propias, refinamiento y desarrollo independiente.</li>
              </ul>
            </div>
          </div>

          <div className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] px-[20px] py-[15px] w-full">
            <h4 className="font-bold text-[#5454e9] text-[20px] m-0">Transparencia del uso de IAG</h4>
            <div className="font-normal text-[16px] text-black w-full" style={{ lineHeight: '1.5' }}>
              <p className="mb-2">Debes incluir una breve declaración de uso de IA indicando:</p>
              <ul className="list-disc pl-[24px] mb-0">
                <li>Qué herramienta utilizaste (si aplica).</li>
                <li>Para qué etapa del proceso la utilizaste.</li>
                <li>Qué ideas decidiste desarrollar y cuáles descartaste.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}