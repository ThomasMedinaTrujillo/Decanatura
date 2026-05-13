import React from 'react';

export default function CustomExamplesLevel5() {
  return (
    <div className="flex flex-col gap-[48px] items-start relative mb-12 w-full">
      {/* Ejemplo 1 */}
      <div className="flex flex-col gap-[12px] items-start w-full">
        <h3 className="font-bold text-[#5454e9] text-[26px] m-0">Ejemplo 1 nivel 5</h3>
        <p className="font-normal text-[16px] text-black w-full" style={{ lineHeight: '1.5' }}>
          En un curso de Pedagogía, los estudiantes deben diseñar y prototipar una nueva forma de evaluación mediada por IAG, orientada a transformar cómo se evidencia el aprendizaje en un contexto educativo específico (por ejemplo, educación escolar, universitaria o formación corporativa).
        </p>

        <div className="flex flex-col lg:flex-row gap-[20px] items-stretch w-full mt-4">
          <div className="bg-[#5454e9] flex flex-col gap-[19px] px-[20px] py-[20px] flex-1 text-white">
            <h4 className="font-bold text-[36px] m-0">El proyecto implica:</h4>
            <ul className="list-disc pl-[24px] font-normal text-[16px] m-0 leading-[1.5]">
              <li>Analizar críticamente prácticas tradicionales de evaluación.</li>
              <li>Explorar el potencial y las limitaciones de la IAG en contextos educativos.</li>
              <li>Diseñar una propuesta de evaluación que integre IAG de manera innovadora.</li>
              <li>Prototipar la experiencia (por ejemplo, simulaciones, sistemas interactivos o evaluaciones basadas en diálogo con IA).</li>
              <li>Analizar implicaciones pedagógicas, éticas y prácticas.</li>
            </ul>
          </div>

          <div className="bg-[#5454e9] flex flex-col gap-[19px] px-[20px] py-[20px] flex-1 text-white">
            <h4 className="font-bold text-[36px] m-0">Evidencias:</h4>
            <ul className="list-disc pl-[24px] font-normal text-[16px] m-0 leading-[1.5]">
              <li>Prototipo o modelo de evaluación (digital o conceptual)</li>
              <li>Documento explicativo del diseño (propuesta pedagógica)</li>
              <li>Análisis crítico de implicaciones (éticas, prácticas, educativas)</li>
              <li>Presentación o defensa del proyecto</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ejemplo 2 */}
      <div className="flex flex-col gap-[12px] items-start w-full">
        <h3 className="font-bold text-[#5454e9] text-[26px] m-0">Ejemplo 2 nivel 5</h3>
        <p className="font-normal text-[16px] text-black w-full" style={{ lineHeight: '1.5' }}>
          En un curso de Desarrollo de Negocios Sostenibles, los estudiantes deben diseñar una propuesta de modelo de negocio que integre IAG, considerando no solo su potencial para generar valor, sino también sus implicaciones sociales, éticas y ambientales.
        </p>

        <div className="flex flex-col lg:flex-row gap-[20px] items-stretch w-full mt-4">
          <div className="bg-[#5454e9] flex flex-col gap-[19px] px-[20px] py-[20px] flex-1 text-white">
            <h4 className="font-bold text-[36px] m-0">El proyecto implica:</h4>
            <ul className="list-disc pl-[24px] font-normal text-[16px] m-0 leading-[1.5]">
              <li>Explorar usos actuales de la IAG en contextos empresariales.</li>
              <li>Identificar riesgos y tensiones (por ejemplo, consumo energético, sesgos, impacto laboral).</li>
              <li>Diseñar un modelo de negocio donde la IAG sea parte central de la propuesta de valor.</li>
              <li>Analizar la sostenibilidad del modelo en términos económicos, sociales y ambientales.</li>
              <li>Proponer estrategias para un uso responsable de la IAG</li>
            </ul>
          </div>

          <div className="bg-[#5454e9] flex flex-col gap-[19px] px-[20px] py-[20px] flex-1 text-white">
            <h4 className="font-bold text-[36px] m-0">Evidencias:</h4>
            <ul className="list-disc pl-[24px] font-normal text-[16px] m-0 leading-[1.5]">
              <li>Propuesta de modelo de negocio (canvas, documento o prototipo)</li>
              <li>Análisis de impacto (social, ético, ambiental)</li>
              <li>Documento de justificación estratégica</li>
              <li>Presentación o pitch del proyecto</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}