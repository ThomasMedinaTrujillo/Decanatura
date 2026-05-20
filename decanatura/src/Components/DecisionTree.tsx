import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon,  RotateCcw } from 'lucide-react';

const Q1 = '¿Hay competencias en esta evaluación que el estudiante debe demostrar de forma completamente autónoma —sin apoyo externo de ningún tipo— porque son fundamento para lo que viene después, en el programa o en su vida profesional?';
const Q2 = '¿Puede garantizar un entorno controlado o supervisado donde efectivamente no se utilice IA?';

const LEVELS = [
  { n: 1, colorCls: 'bg-[#9494B8]', txt: 'Quiero evaluar habilidades esenciales sin IAG.', href: '#nivel-1' },
  { n: 2, colorCls: 'bg-[#5454E9]', txt: 'Quiero que la IAG sea solo una herramienta de apoyo, para la planeación e ideación previas a la tarea a evaluar.', href: '#nivel-2' },
  { n: 3, colorCls: 'bg-[#5454E9]', txt: 'Quiero que la IAG participe en la elaboración de la tarea y haya un foco en el juicio crítico de lo que genera la IA.', href: '#nivel-3' },
  { n: 4, colorCls: 'bg-[#5454E9]', txt: 'Quiero que el uso crítico y estratégico de la IAG sea parte explícita de lo que se evalúa.', href: '#nivel-4' },
  { n: 5, colorCls: 'bg-[#5454E9]', txt: 'Quiero que la innovación, creación y exploración de nuevas posibilidades con la IAG sea parte central de la tarea.', href: '#nivel-5' },
];

export default function DecisionTree() {
  const [step, setStep] = useState<1 | 2 | 'r-25' | 'r-n1' | 'r-rediseno'>(1);
  const [answers, setAnswers] = useState<string[]>([]);

  const navigateToSection = (href: string) => {
    if (!href.startsWith('#')) {
      window.location.assign(href);
      return;
    }

    const targetId = href.slice(1);

    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    const navbarOffset = 120;
    const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  };

  const handleQ1 = (ans: string) => {
    setAnswers([ans]);
    setStep(ans === 'NO' ? 'r-25' : 2);
  };

  const handleQ2 = (ans: string) => {
    setAnswers(prev => [...prev, ans]);
    setStep(ans === 'SÍ' ? 'r-n1' : 'r-rediseno');
  };

  const restart = () => {
    setStep(1);
    setAnswers([]);
  };

  const References = () => (
    <div className="mt-9 pt-5 border-t-[1.5px] border-gray-200">
      <div className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-2">Referencia</div>
      <div className="text-[12.5px] text-gray-500 leading-relaxed">
        Perkins, M., Roe, J., & Furze, L. (2025). Reimagining the Artificial Intelligence Assessment Scale (AIAS): A refined framework for educational assessment. <em className="italic">Journal of University Teaching and Learning Practice, 22</em>(7).{' '}
        <a href="https://doi.org/10.53761/rrm4y757" target="_blank" rel="noreferrer" className="text-[#5454E9] hover:underline">https://doi.org/10.53761/rrm4y757</a>
      </div>
      <div className="mt-1 text-xs text-gray-400">Adaptado por Laura Sofía Gutiérrez.</div>
    </div>
  );

  const LevelCards = ({ include }: { include: number[] }) => (
    <div className="flex flex-col gap-2.5 mb-8">
      {include.map(n => {
        const l = LEVELS[n - 1];
        return (
          <button
            key={l.n}
            type="button"
            onClick={() => navigateToSection(l.href)}
            className="flex items-center gap-4 px-5 py-4 border-[#e0e0f5] text-[#0f0f2d] hover:border-[#5454E9] hover:bg-[#F4F4FE] hover:translate-x-1 hover:shadow-sm transition-all duration-200"
          >
            <div className={`w-9 h-9  flex items-center justify-center text-[13px] font-extrabold text-white shrink-0 ${l.colorCls}`}>
              N{l.n}
            </div>
            <div className="text-[14.5px] font-medium leading-snug flex-1">
              {l.txt}
            </div>
            <ArrowRightIcon className="text-[#5454E9] shrink-0" size={18} />
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="w-full max-w-[860px] mx-auto font-sans shadow-lg  overflow-hidden">
      {/* HEADER */}
      <div className="bg-[#5454E9]  px-6 md:px-12 py-10 text-white">
        <div className="text-[11px] font-bold tracking-[0.13em] uppercase text-[#E4EB60] mb-2.5">
          Árbol de decisión
        </div>
        <h1 className="text-[30px] font-extrabold leading-tight max-w-[600px]">
          Guía rápida de IAG en la evaluación
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed opacity-90 max-w-[580px]">
          Este recorrido breve puede ayudarte a:
        </p>
        <ul className="mt-2.5 pl-5 opacity-90 text-[15px] leading-relaxed list-disc">
          <li>reflexionar sobre cuándo permitir o restringir el uso de IAG;</li>
          <li>e identificar el nivel del AIAS que más se aproxima a tu intención pedagógica.</li>
        </ul>
        <div className="flex gap-2 mt-7">
          <div className={`w-2.5 h-2.5 transition-colors duration-300 ${step === 1 ? 'bg-[#E4EB60]' : 'bg-white'}`} />
          <div className={`w-2.5 h-2.5 transition-colors duration-300 ${step === 1 ? 'bg-white/25' : step === 2 ? 'bg-[#E4EB60]' : 'bg-white'}`} />
        </div>
      </div>

      {/* BODY */}
      <div className="bg-white px-6 md:px-12 py-10 border-[1.5px] border-t-0 border-[#d9d9f5]  min-h-[280px]">
        {/* HISTORY */}
        <AnimatePresence>
          {answers.map((ans, i) => {
            const qText = i === 0 ? Q1 : Q2;
            const badgeCls = ans === 'SÍ' ? 'bg-[#5454E9] text-white' : ans === 'NO' ? 'bg-[#9494B8] text-white' : 'bg-[#E4EB60] text-[#1a1a2e]';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3.5 px-4 py-3.5 bg-[#F4F4FE] border-l-4 border-[#5454E9]  mb-4"
              >
                <div className="text-[13.5px] text-[#555] flex-1 leading-snug">
                  <strong>Pregunta {i + 1}:</strong> {qText}
                </div>
                <span className={`text-[11px] font-extrabold tracking-[0.08em] uppercase px-3.5 py-1.5  whitespace-nowrap shrink-0 ${badgeCls}`}>
                  {ans}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* PARCIALMENTE NOTE */}
        <AnimatePresence>
          {answers[0] === 'PARCIALMENTE' && step === 2 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-[#FAFAE2] border-[1.5px] border-[#E4EB60]  px-5 py-4 mb-5 text-[14px] text-[#444] leading-relaxed"
            >
              💡 <strong>Nota:</strong> Considera <strong>dividir la evaluación</strong>: una parte sin IAG (Nivel 1) para las competencias que requieren autonomía total, y otra donde sí la permites (Niveles 2–5) para el resto. Con eso en mente, avanza a la siguiente pregunta.
            </motion.div>
          )}
        </AnimatePresence>

        {/* CURRENT STEP */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.15 } }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className="pt-2">
                <div className="text-[11.5px] font-bold text-[#5454E9] tracking-[0.1em] uppercase mb-2.5">Pregunta 1 de 2</div>
                <div className="text-[21px] font-bold text-[#0f0f2d] leading-snug mb-7">{Q1}</div>
                <div className="flex gap-3 flex-wrap">
                  <button onClick={() => handleQ1('SÍ')} className="px-8 py-3.5 font-bold text-[15px] bg-[#5454E9] text-white border-2 border-[#5454E9] hover:bg-[#3a3abf] hover:border-[#3a3abf] hover:-translate-y-1 hover:shadow-lg transition-all">Sí</button>
                  <button onClick={() => handleQ1('NO')} className="px-8 py-3.5 font-bold text-[15px] bg-white text-[#5454E9] border-2 border-[#5454E9] hover:bg-[#F0F0FF] hover:-translate-y-1 hover:shadow-lg transition-all">No</button>
                  <button onClick={() => handleQ1('PARCIALMENTE')} className="px-8 py-3.5  font-bold text-[15px] bg-[#E4EB60] text-[#0f0f2d] border-2 border-[#E4EB60] hover:bg-[#d5dc4a] hover:border-[#d5dc4a] hover:-translate-y-1 hover:shadow-lg transition-all">Parcialmente</button>
                </div>
                <References />
              </div>
            )}

            {step === 2 && (
              <div className="pt-2">
                <div className="text-[11.5px] font-bold text-[#5454E9] tracking-[0.1em] uppercase mb-2.5">Pregunta 2 de 2</div>
                <div className="text-[21px] font-bold text-[#0f0f2d] leading-snug mb-7">{Q2}</div>
                <div className="flex gap-3 flex-wrap">
                  <button onClick={() => handleQ2('SÍ')} className="px-8 py-3.5 font-bold text-[15px] bg-[#5454E9] text-white border-2 border-[#5454E9] hover:bg-[#3a3abf] hover:border-[#3a3abf] hover:-translate-y-1 hover:shadow-lg transition-all">Sí</button>
                  <button onClick={() => handleQ2('NO')} className="px-8 py-3.5 font-bold text-[15px] bg-white text-[#5454E9] border-2 border-[#5454E9] hover:bg-[#F0F0FF] hover:-translate-y-1 hover:shadow-lg transition-all">No</button>
                </div>
                <References />
              </div>
            )}

            {step === 'r-25' && (
              <div className="pt-2">
                <div className="inline-block text-[11.5px] font-extrabold tracking-[0.1em] uppercase px-4 py-1.5  mb-4 bg-[#E4EB60] text-[#0f0f2d]">Resultado</div>
                <div className="text-[24px] font-extrabold text-[#0f0f2d] leading-snug mb-3.5">Los Niveles 2 al 5 son el territorio pertinente para su evaluación</div>
                <div className="text-[15.5px] text-[#444] leading-relaxed mb-6">Dado que no hay competencias que exijan demostración completamente autónoma, puede diseñar evaluaciones donde la IAG tenga un rol activo y pedagógicamente justificado. ¿Cuánta participación quiere darle? Elija la afirmación que mejor describe su intención:</div>
                <div className="text-[13px] font-bold text-[#5454E9] uppercase tracking-[0.09em] mb-3.5">Ir directamente al nivel que busco</div>
                <LevelCards include={[2, 3, 4, 5]} />
                <hr className="border-t-[1.5px] border-gray-200 mb-5" />
                <button onClick={restart} className="flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-[#5454E9] transition-colors"><RotateCcw size={16} /> Volver a empezar</button>
                <References />
              </div>
            )}

            {step === 'r-n1' && (
              <div className="pt-2">
                <div className="inline-block text-[11.5px] font-extrabold tracking-[0.1em] uppercase px-4 py-1.5 mb-4 bg-[#5454E9] text-white">Nivel 1 · Sin IAG</div>
                <div className="text-[24px] font-extrabold text-[#0f0f2d] leading-snug mb-3.5">Su evaluación se ubica en el Nivel 1: Sin uso de IAG</div>
                <div className="text-[15.5px] text-[#444] leading-relaxed mb-6">Hay competencias que requieren demostración autónoma <em>y</em> puede garantizar las condiciones para verificarlo. Puede declarar su evaluación libre de IAG con respaldo pedagógico sólido.</div>
                <div className="flex flex-wrap gap-3 mb-8">
                  <button
                    type="button"
                    onClick={() => navigateToSection('#nivel-1')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-[14.5px] bg-[#5454E9] text-white hover:bg-[#3a3abf] hover:-translate-y-1 hover:shadow-lg transition-all"
                  >
                    Ver Nivel 1 en detalle <ArrowRightIcon size={18} />
                  </button>
                </div>
                <hr className="border-t-[1.5px] border-gray-200 mb-5" />
                <button onClick={restart} className="flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-[#5454E9] transition-colors"><RotateCcw size={16} /> Volver a empezar</button>
                <References />
              </div>
            )}

            {step === 'r-rediseno' && (
              <div className="pt-2">
                <div className="inline-block text-[11.5px] font-extrabold tracking-[0.1em] uppercase px-4 py-1.5 r mb-4 bg-[#0f0f2d] text-white">Acción requerida</div>
                <div className="text-[24px] font-extrabold text-[#0f0f2d] leading-snug mb-3.5">Su evaluación necesita ser rediseñada</div>
                <div className="text-[15.5px] text-[#444] leading-relaxed mb-6">Declarar "sin IAG" sin poder verificarlo no protege el aprendizaje. Tiene dos caminos: rediseñar las condiciones de aplicación para garantizar el entorno controlado, o replantear la evaluación para que la IAG tenga un rol deliberado y con propósito. ¿Qué dirección se ajusta más a lo que busca?</div>
                <div className="text-[13px] font-bold text-[#5454E9] uppercase tracking-[0.09em] mb-3.5">Explorar los niveles del AIAS</div>
                <LevelCards include={[1, 2, 3, 4, 5]} />
                <hr className="border-t-[1.5px] border-gray-200 mb-5" />
                <button onClick={restart} className="flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-[#5454E9] transition-colors"><RotateCcw size={16} /> Volver a empezar</button>
                <References />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
