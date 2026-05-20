import { CheckCircle, CloseCircle, PuzzleIcon } from './Icons';

export default function DesignActivity() {
  return (
    <div>
      <p className="text-base text-gray-700 font-semibold mb-6">
        ¿El uso de la IA invalida la evaluación? ¿Invalida el aprendizaje? La respuesta corta es: depende.
      </p>

      <div className="flex flex-wrap gap-[20px] items-center justify-center">
        {/* Good Use */}
        <div className="flex gap-[4px] items-center" style={{ width: '413.333px' }}>
          <div className="flex-shrink-0">
            <CheckCircle size={49} className="text-[#865CF0]"/>
          </div>
          <div className="flex flex-col gap-[5px] items-start p-[10px]">
            <h4 className="font-bold text-[18px] text-black">Buen uso</h4>
            <p className="text-[14px] text-black leading-normal">
              Un estudiante de ciencia política usa IA para generar contraargumentos, los analiza críticamente, descarta los débiles y construye una posición propia.
            </p>
          </div>
        </div>

        {/* Misuse */}
        <div className="flex gap-[4px] items-center" style={{ width: '413.333px' }}>
          <div className="flex-shrink-0">
            <CloseCircle size={49} className="text-[#865CF0]" />
          </div>
          <div className="flex flex-col gap-[5px] items-start p-[10px] h-[102px]">
            <h4 className="font-bold text-[18px] text-black">Uso incorrecto</h4>
            <p className="text-[14px] text-black leading-normal">
              Un estudiante entrega un ensayo generado por IA en un curso de escritura académica.
            </p>
          </div>
        </div>

        {/* Key Insight */}
        <div className="flex flex-1 gap-[20px] items-center"style={{ width: '413.333px', paddingLeft: '27px', paddingRight: '27px', paddingTop: '20px', paddingBottom: '20px' }}>
          <div className="border-2 border-[#CECFD4] border-solid flex items-center p-[12.2px] rounded-[67px] shrink-0">
            <div className="relative shrink-0 w-[24px] h-[24px]">
              <PuzzleIcon size={24} className="text-[#CECFD4]" />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[16px] text-[#88898c] leading-[1.5]">
              <span className="font-normal">La conversación debe desplazarse hacia donde tenemos mayor agencia: </span>
              <span className="font-bold text-[#865cf0]">el diseño y propósito de nuestras actividades evaluativas.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
