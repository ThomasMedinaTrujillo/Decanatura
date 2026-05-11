import React from 'react';

export default function CustomExamplesLevel3() {
  return (
    <div className="flex flex-col gap-[36px] items-start relative mb-12 w-full">
      <div className="bg-white border border-[#cecfd4] border-solid flex gap-[20px] items-center px-[20px] py-[10px] w-[300px]">
        <h3 className="font-bold text-[22px] text-black m-0">Ejemplo Nivel 3</h3>
      </div>
      
      <div className="flex flex-col gap-[30px] items-start w-full">
        <div className="flex flex-col gap-[10px] items-start w-full">
          <h4 className="font-bold text-[#5454e9] text-[18px] m-0 px-[10px]">instrucciones a estudiantes</h4>
        </div>
        
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-[28px] w-full items-stretch">
          <div className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] px-[20px] py-[15px] flex-1">
            <ol className="list-decimal pl-[24px] font-bold text-[#5454e9] text-[20px] m-0" start={1}>
              <li><span className="leading-[normal]">Puedes utilizar la IAG para generar:</span></li>
            </ol>
            <ul className="list-disc pl-[24px] font-normal text-[16px] text-black m-0">
              <li>Al menos tres posibles preguntas de investigación</li>
              <li>Hipótesis asociadas</li>
              <li>Propuestas iniciales de diseño</li>
            </ul>
          </div>
          <div className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] px-[20px] py-[15px] flex-1">
            <ol className="list-decimal pl-[24px] font-bold text-[#5454e9] text-[20px] m-0" start={2}>
              <li><span className="leading-[normal]">Sin ayuda de la IAG, analiza las propuestas generadas e identifica:</span></li>
            </ol>
            <ul className="list-disc pl-[24px] font-normal text-[16px] text-black m-0">
              <li>La IAG solo puede utilizarse en la fase de ideación y planificación.</li>
              <li>El storyboard, las decisiones de diseño visual y la pieza multimedia final deben ser desarrollados por el estudiante.</li>
              <li>El producto final debe reflejar decisiones propias, refinamiento y desarrollo independiente.</li>
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-[28px] w-full items-stretch">
          <div className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] px-[20px] py-[15px] flex-1">
            <ol className="list-decimal pl-[24px] font-bold text-[#5454e9] text-[20px] m-0" start={3}>
              <li><span className="leading-[normal]">Refinación:</span></li>
            </ol>
            <ul className="list-disc pl-[24px] font-normal text-[16px] text-black m-0">
              <li>Sin ayuda de la IAG, refina el diseño experimental seleccionado.</li>
            </ul>
          </div>
          <div className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] px-[20px] py-[15px] flex-1">
            <ol className="list-decimal pl-[24px] font-bold text-[#5454e9] text-[20px] m-0" start={4}>
              <li><span className="leading-[normal]">Intercambia tu diseño refinado con un compañero. Tu par evaluará:</span></li>
            </ol>
            <ul className="list-disc pl-[24px] font-normal text-[16px] text-black m-0">
              <li>La IAG solo puede utilizarse en la fase de ideación y planificación.</li>
              <li>El storyboard, las decisiones de diseño visual y la pieza multimedia final deben ser desarrollados por el estudiante.</li>
              <li>El producto final debe reflejar decisiones propias, refinamiento y desarrollo independiente.</li>
            </ul>
          </div>
        </div>

        {/* Final step */}
        <div className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] items-center px-[20px] py-[15px] w-full">
          <ol className="list-decimal pl-[24px] font-bold text-[#5454e9] text-[20px] m-0" start={5}>
            <li><span className="leading-[normal]">Ajustes de proceso:</span></li>
          </ol>
          <p className="font-normal text-[16px] text-black w-full text-center">
            Sin ayuda de la IAG, redacta el protocolo experimental incorporando los ajustes del proceso de coevaluación.
          </p>
        </div>

        {/* Evidences */}
        <h4 className="font-bold text-[#5454e9] text-[20px] m-0 w-full text-center mt-6">Posibles evidencias</h4>
        
        <div className="flex flex-col gap-[20px] w-full">
          <div className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] px-[20px] py-[15px] w-full">
            <h5 className="font-bold text-[#5454e9] text-[20px] m-0">Diseño anotado con feedback del par</h5>
            <p className="font-normal text-[16px] text-black m-0">
              El estudiante entrega su diseño de la etapa 3 con los comentarios de coevaluación recibidos y una nota breve sobre qué incorporó y qué descartó, con justificación.
            </p>
          </div>
          <div className="border border-[#cecfd4] border-solid flex flex-col gap-[10px] px-[20px] py-[15px] w-full">
            <h5 className="font-bold text-[#5454e9] text-[20px] m-0">Protocolo final</h5>
            <p className="font-normal text-[16px] text-black m-0">
              Evaluado con rúbrica que incluye un criterio explícito sobre la coherencia entre el análisis crítico de los outputs de IAG y las decisiones metodológicas del diseño final.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}