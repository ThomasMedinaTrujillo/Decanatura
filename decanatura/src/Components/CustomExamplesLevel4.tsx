import React from 'react';

export default function CustomExamplesLevel4() {
  return (
    <div className="flex flex-col gap-[12px] items-start relative mb-12 w-full max-w-[830px]">
      <h3 className="font-bold text-[#5454e9] text-[26px] m-0">Ejemplo Nivel 4</h3>
      <div className="font-normal text-[16px] text-black w-full" style={{ lineHeight: '1.5' }}>
        <p className="mb-4">En un curso de Derecho Constitucional, los estudiantes deben elaborar un concepto jurídico (legal brief) sobre un caso complejo relacionado con la protección de derechos fundamentales en un contexto contemporáneo (por ejemplo, uso de tecnologías digitales y privacidad).</p>
        
        <p className="mb-2">Se permite el uso de herramientas de IAG a lo largo de todo el proceso, incluyendo:</p>
        <ul className="list-disc pl-[24px] mb-4">
          <li>búsqueda inicial de jurisprudencia relevante</li>
          <li>generación de posibles argumentos jurídicos</li>
          <li>estructuración del documento</li>
          <li>apoyo en redacción</li>
        </ul>
        
        <p className="mb-2">Sin embargo, la evaluación no se centra en la producción del texto en sí, sino en la capacidad del estudiante para:</p>
        <ul className="list-disc pl-[24px] mb-0">
          <li className="mb-2">Seleccionar críticamente normas, precedentes y doctrinas pertinentes, evitando errores o invenciones de la IAG;</li>
          <li className="mb-2">Evaluar la solidez jurídica de los argumentos generados, identificando inconsistencias, sesgos o simplificaciones;</li>
          <li className="mb-2">Tomar decisiones estratégicas sobre qué argumentos utilizar, cuáles descartar y cómo articularlos en función del caso;</li>
          <li className="mb-2">Adaptar el contenido al contexto jurídico específico, demostrando comprensión del marco normativo aplicable;</li>
          <li>Justificar sus elecciones jurídicas, mostrando control sobre el razonamiento desarrollado.</li>
        </ul>
      </div>
    </div>
  );
}