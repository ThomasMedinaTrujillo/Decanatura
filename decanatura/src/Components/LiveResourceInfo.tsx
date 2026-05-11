import { imgIcon2 } from '../assets/svg-o5q0r';

export default function LiveResourceInfo() {
  return (
    <div className="bg-white border border-[#88898c] border-solid flex flex-col items-start mx-[80px] my-[40px] px-[27px] py-[30px] max-w-[1281px]" data-node-id="7:642" data-name="side">
      <div className="flex gap-[30px] items-center" data-node-id="7:643" data-name="text icon">
        <div className="bg-[#4cb979] size-20 flex items-center justify-center p-[18px] rounded-full flex-shrink-0" data-node-id="7:644" data-name="Light-icon">
          <div className="h-11 w-8" data-node-id="7:645" data-name="lightbulb-01">
            <img alt="" className="w-full h-full" src={imgIcon2} />
          </div>
        </div>
        <div className="flex flex-col gap-[2px] items-start leading-[1.5] flex-grow" data-node-id="7:646" data-name="text">
          <p className="font-bold text-[#4cb979] text-[20px]" data-node-id="7:647">
            Este recurso es vivo
          </p>
          <p className="font-normal text-[#88898c] text-[16px]" data-node-id="7:648">
            La IA generativa seguirá cambiando, y con ella las preguntas que los docentes necesitan hacerse. Está diseñado para ser consultado cuando lo necesites, no solo leído una vez de principio a fin. Usa el índice lateral dentro de cada momento para navegar directamente a lo que buscas.
          </p>
        </div>
      </div>
    </div>
  );
}
