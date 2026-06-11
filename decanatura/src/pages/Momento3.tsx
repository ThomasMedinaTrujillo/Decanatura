import React, { useMemo, useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Momento1Banner from '../Components/Momento1Banner';
import SectionHeading from '../Components/SectionHeading';
import GPTCard from '../Components/GPTCard';
import { FileIcon } from '../Components/Icons';
import { Prompt } from '../Components/Prompt';
import Momento3OptionGroup from '../Components/Momento3OptionGroup';
import CTASection from '../Components/CTASection';
import { momento3Prompts } from '../prompts/prompts';
import { useNavigate } from 'react-router';

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    variants={fadeInUpVariants}
  >
    {children}
  </motion.div>
);

const PromptStepGuide = ({
  steps,
}: {
  steps: string[];
  targetId: string;
  buttonLabel: string;
}) => (
  <div className="rounded-sm border border-[#d7d8dc] bg-[#fcfcfd] p-5">
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4cb979]">Paso a paso</p>
    <div className="mt-4 space-y-3 border-l-2 border-[#d7d8dc] pl-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-start gap-3">
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4cb979] text-xs font-bold text-white">
            {index + 1}
          </div>
          <p className={`${index === 0 ? 'text-sm font-semibold text-[#19191b]' : 'text-sm font-medium text-[#272727]'}`}>
            {step.replace(/^[0-9]+\.\s*/, '')}
          </p>
        </div>
      ))}
    </div>
    <div className="mt-5">

    </div>
  </div>
);

const sidebarItems = [
  { label: 'Diagnóstico inicial', href: '#diagnostico' },
  { label: 'Prompt 1: Analiza resultados de aprendizaje', href: '#prompt-1', isIndented: true },
  { label: 'Analiza tus actividades evaluativas', href: '#prioriza' },
  { label: 'Prompt 2: Analiza actividades evaluativas', href: '#prompt-2', isIndented: true },
  { label: 'Decide el nivel AIAS', href: '#decide' },
  { label: 'Prompt 3: Decisión AIAS', href: '#prompt-3', isIndented: true },
  { label: 'Rediseña una actividad evaluativa', href: '#redisena' },
  { label: 'Prompt 4: Rediseña una actividad evaluativa', href: '#prompt-4', isIndented: true },
];

const learningQuestions = [
  '¿Qué deben ser capaces de hacer mis estudiantes sin IAG?',
  '¿Cuáles resultados de aprendizaje pueden ser simulados por la IAG?',
  '¿Cuáles podrían ser transformados y ajustados debido a los cambios que trae la IAG?',

];


const expectedPerformanceOptions = [
  'Razonamiento disciplinar autónomo',
  'Exploración y búsqueda inicial de información',
  'Organización y selección de ideas relevantes generadas por la IAG',
  'Juicio crítico sobre los outputs de la IAG',
  'Revisión y mejora del contenido generado por la IAG',
  'Integración de ideas generadas por IAG manteniendo voz propia',
  'Reflexión estructurada sobre el uso de la IAG en el proceso',
  'Toma de decisiones estratégicas sobre el uso de la IAG en todo el proceso',
  'Adaptación creativa de herramientas de IAG',
  'Creación de artefactos, sistemas o nuevos enfoques basados en IAG',
  'Aún no lo tengo claro',
];

const aiRoleOptions = [
  'Sin IAG - no se permite su uso',
  'Herramienta de apoyo - para búsqueda de información, exploración de ideas, retroalimentación, revisión, etc.',
  'Herramienta de colaboración - parte central del proceso o producto',
  'Objeto de estudio - la IAG es analizada, diseñada o transformada como contenido del curso',
  'Aún no lo tengo claro',
];

const participationOptions = [
  'Solo en la planificación o tareas previas',
  'Durante la revisión y mejora',
  'Durante algunos momentos de la producción del trabajo',
  'En todas las fases del proceso',
  'Aún no lo tengo claro',
];


function buildDynamicPrompt({
  selectedPerformance,
  selectedRoles,
  selectedPhases,
}: {
  selectedPerformance: string[];
  selectedRoles: string[];
  selectedPhases: string[];
}) {
  const performanceText = selectedPerformance.length > 0 ? selectedPerformance.map((item) => `- ${item}`).join('\n') : '- Aun no he marcado opciones en la Lista A.';
  const roleText = selectedRoles.length > 0 ? selectedRoles.map((item) => `- ${item}`).join('\n') : '- Aun no he marcado opciones en la Lista B.';
  const phaseText = selectedPhases.length > 0 ? selectedPhases.map((item) => `- ${item}`).join('\n') : '- Aun no he marcado opciones en la Lista C.';

  return `Estoy revisando una actividad evaluativa de mi curso y necesito tu ayuda para determinar el nivel AIAS más adecuado.

Información de la actividad evaluativa

Descripción de la actividad evaluativa: [Describe tu actividad evaluativa: qué deben hacer los estudiantes, formato de entrega como ensayo o defensa oral, si es grupal o individual, si hay fases en el proceso o solo se entrega producto final, si hay instrumento de evaluación, etc.]

Resultado de aprendizaje asociado: [Pega del syllabus]

Tipo de pensamiento o decisión que debe demostrar el estudiante: [Por ejemplo: analizar, argumentar, aplicar conceptos, resolver problemas, tomar decisiones]

Lista A - Desempeño esperado con o sin IAG
Esto fue lo que marque:
${performanceText}

Lista B - Rol de la IAG
Esto fue lo que marque:
${roleText}

Lista C - Fase de participación
Esto fue lo que marque:
${phaseText}

Instrucción importante:
Ten en cuenta TODAS las opciones marcadas por el docente. Si hay tensiones, solapamientos o inconsistencias entre lo marcado en las listas A, B y C, señálalas con claridad antes de recomendar un nivel.

Con base en el marco AIAS, analiza mi caso como si estuvieras ejecutando un árbol de decisiones.

Instrucciones para GPT

Antes de recomendar un nivel AIAS:
Haz preguntas claras al docente sobre cualquier detalle faltante, solo si es esencial para generar el texto resumen.

Fase 1
Solo cuando tengas suficiente información, genera una tabla titulada "Decisión AIAS", que incluya las siguientes columnas (no modifiques los títulos):
Actividad evaluativa
Resultado de aprendizaje
Tipo de pensamiento o decision asociado
Desempeño, rol y fase de la IA seleccionados por el docente

GPT indica si el desempeño esperado, el rol y la fase de la IA escogidos por el docente son coherentes con la actividad. Pégalos si no hay que hacer cambios. De lo contrario señala inconsistencias entre la actividad y estos elementos, y propone la mejora. Explicación breve y clara.

Nivel AIAS
Recomienda el nivel AIAS más coherente (1-5). OBLIGATORIO: explica por qué ese nivel, cuál es el sentido pedagógico, cuál es la oportunidad de potenciar el aprendizaje que ofrece el nivel, etc.

Otros niveles
Explica brevemente por qué NO son más adecuados los niveles adyacentes.

  Tipo de rediseño
GPT indica si se requiere: "No requiere ajuste / Ajuste menor / Rediseño estructural" para que la actividad se alinee con el nivel AIAS recomendado. Relaciona la respuesta explicando cómo la visibilidad del proceso, la oportunidad positiva de uso de la IA para el aprendizaje y la validez de la evaluación influyen en la decisión. También debe especificar dónde debería ocurrir el ajuste, por ejemplo:

Alineación mecanismo de evaluación y resultado de aprendizaje
Tipo de pensamiento o procesos cognitivos de la tarea
Consigna de la actividad
Rúbrica o criterios de evaluación
Evidencias solicitadas
Uso de la IA en la tarea

Fase 2
Genera un resumen en bullets de la tabla titulado "Resumen Decisión AIAS" con los puntos clave de la tabla, con explicación breve de esos puntos e incluye 2 o 3 implicaciones para el diseño evaluativo.

Formato:
- Tabla clara y legible
- Lenguaje aplicable al diseño docente
- Lenguaje claro y profesional, pero accesible para docentes de cualquier área que no sean especialistas en pedagogía
- Evita frases abstractas
- Cada idea debe poder entenderse en una lectura rápida
- Prioriza frases concretas sobre explicaciones conceptuales

Interaccion con el usuario (OBLIGATORIO)
Al finalizar la respuesta pregunta al usuario:
"El nivel recomendado coincide con lo que quieres?
Tienes alguna duda sobre la tabla o el resumen generado?"`;
}

export default function Momento3() {
  const navigate = useNavigate()
  const [selectedPerformance, setSelectedPerformance] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedPhases, setSelectedPhases] = useState<string[]>([]);
  const [prompt3Text, setPrompt3Text] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('prompt3Text');
      return saved || momento3Prompts.prompt3;
    } catch (e) {
      return momento3Prompts.prompt3;
    }
  });
  const [] = useState({
    productSheet: 'producto1',
    profesor: '',
    curso: '',
    // Producto 1 fields
    resultadoAprendizaje: '',
    clasificacion: '',
    justificacion: '',
    ajuste: '',
    // Producto 2 fields
    mecanismo: '',
    resultadoActividad: '',
    problemaPrincipal: '',
    recomendacion: '',
    // Producto 3 fields
    actividadEvaluativa: '',
    resultadoProducto3: '',
    nivelAIAS: '',
    justificacionBreve3: '',
  });
  const [] = useState(false);
  const [] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [] = useState({
    profesor: '',
    curso: '',
    email: '',
    mecanismoEvaluacion: '',
    resultadoAprendizaje: '',
    nivelAIAS: '',
    queEvaluar: '',
    comoEvaluar: '',
    consignaEstudiante: '',
    recursos: '',
    notasObservaciones: '',
    comentariosPreguntas: '',
  });
  const [] = useState(false);
  const [] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const dynamicPromptPreview = useMemo(
    () =>
      buildDynamicPrompt({
        selectedPerformance,
        selectedRoles,
        selectedPhases,
      }),
    [selectedPerformance, selectedRoles, selectedPhases],
  );

  const toggleSelection = (value: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter((current) => (current.includes(value) ? current.filter((item) => item !== value) : [...current, value]));
  };

  const updatePromptWithSelections = () => {
    // Build only the lists block and inject it into the original prompt template
    const performanceText = selectedPerformance.length > 0 ? selectedPerformance.map((item) => `- ${item}`).join('\n') : '- Aun no he marcado opciones en la Lista A.';
    const roleText = selectedRoles.length > 0 ? selectedRoles.map((item) => `- ${item}`).join('\n') : '- Aun no he marcado opciones en la Lista B.';
    const phaseText = selectedPhases.length > 0 ? selectedPhases.map((item) => `- ${item}`).join('\n') : '- Aun no he marcado opciones en la Lista C.';

    const listsBlock = `\nEn mi actividad evaluativa quiero que se considere lo siguiente:\n\nDesempeño esperado con IAG:\n${performanceText}\n\nRol de la IAG:\n${roleText}\n\nFase de participación de la IAG:\n${phaseText}\n\n`;

    // Inject listsBlock into the original template. First try targeted placeholder replacement,
    // then fall back to replacing a larger section if present.
    const base = momento3Prompts.prompt3;
    let newPrompt = base
      .replace(/\[opción seleccionada de la lista A\]/g, performanceText)
      .replace(/\[opción seleccionada de la lista B\]/g, roleText)
      .replace(/\[opción seleccionada de la lista C\]/g, phaseText);

    // Fallback: if original template uses a different block, attempt to replace that whole block
    if (newPrompt === base) {
      newPrompt = base.replace(/En mi actividad evaluativa quiero que se considere lo siguiente:[\s\S]*?PASO 3:/, () => {
        return listsBlock + 'PASO 3:';
      });
    }

    setPrompt3Text(newPrompt);
    try {
      localStorage.setItem('prompt3Text', newPrompt);
    } catch (e) {
      // ignore storage errors
    }
  };

  // If the source prompt in prompts.ts changes during development, keep local copy
  useEffect(() => {
    try {
      const saved = localStorage.getItem('prompt3Text');
      if (!saved) {
        localStorage.setItem('prompt3Text', momento3Prompts.prompt3);
      }
    } catch (e) {
      // ignore
    }
  }, []);





  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Momento1Banner momento="Momento 3" title="Transformación" />

      <div className="w-full px-4 lg:px-8 flex gap-8 py-8">
        <div className="hidden lg:block">
          <Sidebar title="Transformación" stepNumber={3} items={sidebarItems} />
        </div>

        <main className="flex-1 w-full space-y-12">
          <AnimatedSection>
            <section className="mb-16" id="diagnostico">
              <SectionHeading bgcolor="#4cb979" title="Objetivo" subtitle="" />
              <p className="mb-6 text-base text-[#272727]">
                Este momento te invita a analizar y reflexionar sobre tu curso. A través de una secuencia guiada de pasos, podrás identificar oportunidades de mejora, tomar decisiones sobre posibles ajustes al diseño del curso y rediseñar tus actividades evaluativas.           
                   </p>
              <p className="mb-6 text-base text-[#272727]">
Durante el proceso, también tendrás la opción de apoyarte en el GPT desarrollado por los autores del AIAS.                </p>
              <SectionHeading bgcolor="#4cb979" title="Nota importante" subtitle="" />
              <p className="mb-4 text-base font-semibold">Sobre el uso del GPT del AIAS</p>
              <ul className="mb-4 list-inside list-disc text-base text-[#272727]">
                <li>Necesitas iniciar sesión en ChatGPT para usar el GPT del AIAS y adjuntar documentos.</li>
                <li>Las recomendaciones del GPT son un punto de partida: revísalas con criterio, cuestiona lo que no te convenza y recuerda que el juicio pedagógico final es tuyo.</li>
              </ul>
              <p className="mb-4 text-base font-semibold">Sobre los formatos de este momento
</p>
              <ul className="mb-4 list-inside list-disc text-base text-[#272727]">
                <li>En cada paso te encontrarás con una serie de formatos, te invitamos a completarlos. Su propósito es registrar de manera organizada los análisis y reflexiones que desarrolles durante este proceso. 
</li>
                <li>Para editar los formatos, crea una copia del archivo y edítalo directamente.</li>
              </ul>

            </section>
          </AnimatedSection>

          <AnimatedSection>
            <section className="mb-16" id="prompt-1">
              <SectionHeading bgcolor="#4cb979" title="1. Analiza tus resultados de aprendizaje" subtitle="" />
              <p className="mb-4 text-base font-semibold">
                Revisa los resultados de aprendizaje de tu curso con estas preguntas:
              </p>
              <ul className="mb-4 space-y-2 text-base leading-7 text-[#272727] list-inside">
                {learningQuestions.map((question) => (
                  <li key={question} className="">
                    {question}
                  </li>
                ))}
              </ul>
              <p className="mb-6 text-base leading-7 text-[#272727]">
                Puedes apoyar tu análisis con apoyo del GPT del AIAS:
              </p>

              <div className="flex flex-col gap-6">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
                  <PromptStepGuide
                    steps={[
                      'Abre el GPT del AIAS.',
                      'Adjunta el PDF de tu syllabus y pega el Prompt 1 en el mismo mensaje.',
                      'Consolida tu reflexión en el formato 1 Análisis de resultados de aprendizaje.'

                    ]}
                    targetId="productos-compartidos-form"
                    buttonLabel="Ir al producto 1"
                  />

                  <div className="flex flex-col gap-4">
                    <GPTCard
                      title="GPT del AIAS"
                      subtitle=""
                      buttonText="Abrir GPT"
                      iconSrc={<FileIcon className="text-white" />}
                      href="https://chatgpt.com/g/g-m39Sn0uZq-ai-assessment-scale-aias"
                    />
                    <a
                      href="https://icesiedu-my.sharepoint.com/:x:/g/personal/1061821674_u_icesi_edu_co/IQARsVP2MhP6TLP9_DOLJSU6AZWHMAZ4eHRwT4KTrl32U1s?e=Vxa9eg"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center border border-[#d7d8dc] bg-white px-4 py-2 text-base font-semibold text-[#19191b] hover:bg-[#f7f7f8]"
                    >
                      Formato 1 Análisis de resultados de aprendizaje
                    </a>
                  </div>
                </div>

                <Prompt text="Prompt 1: Análisis resultados de aprendizaje" prompt={momento3Prompts.prompt1} />
              </div>
            </section>
          </AnimatedSection>



          <AnimatedSection>
            <section className="mb-16" id="prioriza">
              <SectionHeading bgcolor="#4cb979" title="2. Analiza tus actividades evaluativas" subtitle="" />
              <p className="mb-4 text-base leading-7 text-[#272727]">
                Con los resultados de aprendizaje analizados, el siguiente paso es revisar tus actividades evaluativas. Pregúntate:
              </p>
              <ul className="mb-4 space-y-2 text-base leading-7 text-[#272727] list-inside">
                <li>¿La evidencia que estoy evaluando podría haber sido generada por IA sin que el estudiante realmente domine la competencia?</li>
                <li>¿Estoy evaluando el resultado final o el proceso de construcción del aprendizaje?</li>
              </ul>
              <p className="mb-8 text-base leading-7 text-[#272727]">Para apoyar tu análisis puedes seguir la conversación en el mismo chat del GPT del AIAS.</p>
              <div className="flex flex-col gap-6">
                <div id="prompt-2">
                  <Prompt text="Prompt 2: Analisis actividades evaluativas" prompt={momento3Prompts.prompt2} />
                </div>





                <div className="border border-[#d7d8dc] bg-white p-5">

                  <div className="mb-6">
                    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
                      <PromptStepGuide
                        steps={['Pega el Prompt 2 en el mismo chat. ', "Consolida tu reflexión en el formato 2 Análisis de actividades evaluativas. "]}
                        targetId="productos-compartidos-form"
                        buttonLabel="Ir al producto 2"
                      />

                      <div className="flex flex-col gap-4">
                        <GPTCard
                          title="GPT del AIAS"
                          subtitle=""
                          buttonText="Abrir GPT"
                          iconSrc={<FileIcon className="text-white" />}
                          href="https://chatgpt.com/g/g-m39Sn0uZq-ai-assessment-scale-aias"
                        />
                        <a
                          href="https://icesiedu-my.sharepoint.com/:x:/g/personal/1061821674_u_icesi_edu_co/IQARsVP2MhP6TLP9_DOLJSU6AZWHMAZ4eHRwT4KTrl32U1s?e=Vxa9eg"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center border border-[#d7d8dc] bg-white px-4 py-2 text-base font-semibold text-[#19191b] hover:bg-[#f7f7f8]"
                        >
                          Formato 2 Análisis de actividades evaluativas

                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <section className="mb-6" id="decide">
              <SectionHeading bgcolor="#4cb979" title="3. Decide el nivel AIAS" subtitle="" />
              <p className="mb-6 text-base leading-7 text-[#272727]">
                El siguiente paso es asignar un nivel AIAS a una actividad evaluativa de tu curso. Pregúntate:               </p>
              <ul className="mb-4 space-y-2 text-base leading-7 text-[#272727] list-inside">
                <li>¿Qué quieres que el estudiante demuestre con o sin la IAG?</li>
                <li>¿Qué rol quieres que la IAG tenga en la evaluación?</li>
                <li>¿En qué momentos de la actividad evaluativa podría el estudiante usar la IAG?</li>
              </ul>
              <div className="mt-6">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
                  <PromptStepGuide
                    steps={[
                      'Escoge una actividad evaluativa del Producto 2.',
                      'Con esa actividad en mente, lee las listas y selecciona una opción en cada una. Las listas pueden ayudarte a clarificar tu intención pedagógica respecto a la IAG en tu actividad evaluativa. ',
                      'Presiona “Actualizar Prompt 3” (al actualizar el prompt 3 lo que selecciones en las listas se incluye en este).',
                      'Pega el prompt en el GPT del AIAS. Si tienes archivos relacionados a la actividad evaluativa (la consigna, rúbrica, presentación, etc) adjunta estos en el mismo mensaje.',
                      'Consolida tu análisis en el formato 3 Decide el nivel AIAS. '
                    ]}
                    targetId="productos-compartidos-form"
                    buttonLabel="Ir al producto 3"
                  />

                  <div className="flex flex-col gap-4">
                    <GPTCard
                      title="GPT del AIAS"
                      subtitle=""
                      buttonText="Abrir GPT"
                      iconSrc={<FileIcon className="text-white" />}
                      href="https://chatgpt.com/g/g-m39Sn0uZq-ai-assessment-scale-aias"
                    />
                    <a
                      href="https://icesiedu-my.sharepoint.com/:x:/g/personal/1061821674_u_icesi_edu_co/IQARsVP2MhP6TLP9_DOLJSU6AZWHMAZ4eHRwT4KTrl32U1s?e=Vxa9eg"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center border border-[#d7d8dc] bg-white px-4 py-2 text-base font-semibold text-[#19191b] hover:bg-[#f7f7f8]"
                    >
                      Formato 3 Decide el nivel AIAS
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid my-6 gap-6 lg:grid-cols-3">
                <Momento3OptionGroup
                  title="Lista A - Desempeño esperado con o sin IAG"
                  description="¿Qué quieres que el estudiante demuestre con o sin la IAG?"
                  helperText="Selecciona la opción más alta que aplique a tu caso."
                  notice="Importante: las opciones están organizadas en orden progresivo y cada opción incluye las anteriores."
                  options={expectedPerformanceOptions}
                  selectedOptions={selectedPerformance}
                  onToggleOption={(option) => toggleSelection(option, setSelectedPerformance)}
                />
                <Momento3OptionGroup
                  title="Lista B - Rol de la IAG"
                  description="Selecciona el rol que mejor describe cómo debería participar la IAG en la actividad."
                  options={aiRoleOptions}
                  selectedOptions={selectedRoles}
                  onToggleOption={(option) => toggleSelection(option, setSelectedRoles)}
                  accent="#5454e9"
                />
                <Momento3OptionGroup
                  title="Lista C - Fase de participación"
                  description="Indica en qué momento quieres que participe la IAG."
                  options={participationOptions}
                  selectedOptions={selectedPhases}
                  onToggleOption={(option) => toggleSelection(option, setSelectedPhases)}
                  accent="#e9683b"
                />
              </div>

              <div className="mb-6 rounded-sm border border-[#d7d8dc] bg-[#fcfcfd] p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#19191b]">Generar prompt con selecciones</h3>
                    <p className="text-base leading-6 text-[#5d6169]">
                      Ajusta las selecciones y genera el Prompt 3 desde aquí.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={updatePromptWithSelections}
                    className="bg-[#5454e9] px-5 py-3 text-base font-bold text-white transition hover:bg-[#3d3dcc]"
                  >
                    Actualizar Prompt 3
                  </button>
                </div>
              </div>



              <div id="prompt-3">
                <Prompt text="Prompt 3: Decisión AIAS" prompt={prompt3Text} />
              </div>
            </section>
          </AnimatedSection>

          {/* {<AnimatedSection>
            <section className="mb-16" id="productos-compartidos">
              <SectionHeading  bgcolor="#4cb979" title="Formulario compartido para productos 1, 2 y 3" subtitle="" />
              <p className="mb-6 text-base">
                Completa aquí los productos compartidos asociados al análisis y priorización.
              </p>
              <p className="mb-8 text-base">
                Luego continúa con el rediseño en el Prompt 4 y completa el formulario final.
              </p>
              <form id="productos-compartidos-form" onSubmit={submitSharedProductForm} className="scroll-mt-24 border border-[#d7d8dc] bg-white p-5">
                <div className="space-y-2">
                  <p className="text-base font-bold uppercase tracking-[0.12em] text-[#4cb979]">Productos 1, 2 y 3</p>
                  <h3 className="text-xl font-bold text-[#19191b]">Formulario compartido por hoja</h3>
                  <p className="text-base leading-6 text-[#5d6169]">
                    Selecciona el producto y envía una nueva fila a la pestaña correspondiente.
                  </p>
                </div>

                <div className="mt-6 grid gap-5">
                  <label className="grid gap-2">
                    <span className="text-base font-semibold text-[#19191b]">Nombre del profesor</span>
                    <textarea
                      value={sharedProductForm.profesor}
                      onChange={(event) => handleSharedProductChange('profesor', event.target.value)}
                      className="min-h-24 w-full resize-y border border-[#d7d8dc] bg-white p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                      placeholder="Escribe el nombre del profesor"
                      required
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-base font-semibold text-[#19191b]">Curso</span>
                    <textarea
                      value={sharedProductForm.curso}
                      onChange={(event) => handleSharedProductChange('curso', event.target.value)}
                      className="min-h-24 w-full resize-y border border-[#d7d8dc] bg-white p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                      placeholder="Escribe el curso al que aplica la transformación"
                      required
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-base font-semibold text-[#19191b]">Producto</span>
                    <select
                      value={sharedProductForm.productSheet}
                      onChange={(event) => handleSharedProductChange('productSheet', event.target.value)}
                      className="border border-[#d7d8dc] bg-white p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                    >
                      {sharedProductOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  
                  {sharedProductForm.productSheet === 'producto1' && (
                    <>
                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Resultado de aprendizaje</span>
                        <textarea
                          value={sharedProductForm.resultadoAprendizaje}
                          onChange={(event) => handleSharedProductChange('resultadoAprendizaje', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Escribe el resultado de aprendizaje"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Clasificación según impacto de la IA</span>
                        <textarea
                          value={sharedProductForm.clasificacion}
                          onChange={(event) => handleSharedProductChange('clasificacion', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] bg-white p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Escribe la clasificación según impacto de la IA"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Justificación breve</span>
                        <textarea
                          value={sharedProductForm.justificacion}
                          onChange={(event) => handleSharedProductChange('justificacion', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Explica en pocas líneas por qué clasificaste así el resultado"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Ajuste al resultado de aprendizaje (si aplica)</span>
                        <textarea
                          value={sharedProductForm.ajuste}
                          onChange={(event) => handleSharedProductChange('ajuste', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Si hace falta, propone un ajuste breve"
                        />
                      </label>
                    </>
                  )}

                  {sharedProductForm.productSheet === 'producto2' && (
                    <>
                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Mecanismo o actividad evaluativa</span>
                        <textarea
                          value={sharedProductForm.mecanismo}
                          onChange={(event) => handleSharedProductChange('mecanismo', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Describe el mecanismo o actividad evaluativa"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Resultado de aprendizaje (original o ajustado)</span>
                        <textarea
                          value={sharedProductForm.resultadoActividad}
                          onChange={(event) => handleSharedProductChange('resultadoActividad', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Pega el resultado de aprendizaje original o el ajustado"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Principal problema identificado</span>
                        <textarea
                          value={sharedProductForm.problemaPrincipal}
                          onChange={(event) => handleSharedProductChange('problemaPrincipal', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Describe el principal problema identificado"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Recomendación</span>
                        <textarea
                          value={sharedProductForm.recomendacion}
                          onChange={(event) => handleSharedProductChange('recomendacion', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Propuesta de recomendación breve"
                          required
                        />
                      </label>
                    </>
                  )}

                  {sharedProductForm.productSheet === 'producto3' && (
                    <>
                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Actividad evaluativa</span>
                        <textarea
                          value={sharedProductForm.actividadEvaluativa}
                          onChange={(event) => handleSharedProductChange('actividadEvaluativa', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Describe la actividad evaluativa"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Resultado de aprendizaje</span>
                        <textarea
                          value={sharedProductForm.resultadoProducto3}
                          onChange={(event) => handleSharedProductChange('resultadoProducto3', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Resultado de aprendizaje asociado"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Nivel AIAS decidido</span>
                        <textarea
                          value={sharedProductForm.nivelAIAS}
                          onChange={(event) => handleSharedProductChange('nivelAIAS', event.target.value)}
                          className="min-h-12 w-full resize-y border border-[#d7d8dc] p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Indica el nivel AIAS decidido (1-5)"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-base font-semibold text-[#19191b]">Justificación Breve</span>
                        <textarea
                          value={sharedProductForm.justificacionBreve3}
                          onChange={(event) => handleSharedProductChange('justificacionBreve3', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Justificación breve del nivel AIAS elegido"
                          required
                        />
                      </label>
                    </>
                  )}
                </div>

                <div className="mt-6">
                  <label className="grid gap-2">
                    <span className="text-base font-semibold text-[#19191b]">Comentarios y preguntas</span>
                    <textarea
                      value={finalForm.comentariosPreguntas}
                      onChange={(event) => handleFinalFormChange('comentariosPreguntas', event.target.value)}
                      className="min-h-20 w-full resize-y border border-[#d7d8dc] p-2 text-base leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                      placeholder="Escribe aquí dudas, comentarios o preguntas sobre tu rediseño (opcional)"
                      aria-label="Comentarios y preguntas"
                    />
                  </label>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmittingSharedProductForm}
                    className="bg-black px-5 py-3 text-base font-bold text-white transition hover:bg-[#1f1f1f] disabled:cursor-not-allowed disabled:bg-[#8f9094]"
                  >
                    {isSubmittingSharedProductForm ? 'Enviando...' : 'Enviar a hoja del producto'}
                  </button>
                 </div>

                {sharedProductFormStatus ? (
                  <p
                    className={`mt-4 text-base leading-6 ${sharedProductFormStatus.type === 'success' ? 'text-[#248a46]' : 'text-[#b63b26]'
                      }`}
                  >
                    {sharedProductFormStatus.message}
                  </p>
                ) : null}
              </form>
            </section>
          </AnimatedSection>} */}

          <AnimatedSection>
            <section className="" id="redisena">
              <SectionHeading bgcolor="#4cb979" title="4. Rediseña una actividad evaluativa" subtitle="" />
              <p className="mb-6 text-base leading-7 text-[#272727]">
                En la fase anterior decidiste el mejor nivel del AIAS para una actividad evaluativa, ahora el último paso es rediseñar o ajustar esa actividad. Pregúntate:

              </p>
              <ul className="mb-4 space-y-2 text-base leading-7 text-[#272727] list-inside">
                <li><b>
                  ¿Qué añade o cambia el nivel AIAS elegido en lo que quiero evaluar?
                </b>
                  Por ejemplo, una evaluación en Nivel 3 debería preguntarse por la capacidad de juicio crítico que tiene el estudiante respecto a lo que la IAG genera.</li>
                <li><b>¿Qué estrategias y formatos evaluativos son coherentes con lo que quiero evidenciar? </b>
                  Un examen presencial protege la autonomía en el Nivel 1, una defensa oral donde el estudiante justifica sus decisiones sobre los outputs de IAG funciona mejor en el Nivel 3 o 4, etc.
                </li>
              </ul>
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">

                <div className="mb-6">

                  <PromptStepGuide
                    steps={[
                      'Pega el Prompt 4 en el mismo chat. ',
                      'Completa el formato 4 Rediseña tus actividades evaluativas',
                      'Repite la fase 3 (Decide el nivel AIAS) y 4 (Rediseña una actividad evaluativa) para otra actividad de evaluación en tu curso. ',
                    ]}
                    targetId="formulario-final"
                    buttonLabel="Ir al formulario final"
                  />



                </div>
                <div className="flex flex-col gap-4">
                  <GPTCard
                    title="GPT del AIAS"
                    subtitle=""
                    buttonText="Abrir GPT"
                    iconSrc={<FileIcon className="text-white" />}
                    href="https://chatgpt.com/g/g-m39Sn0uZq-ai-assessment-scale-aias"
                  />
                  <a
                    href="https://icesiedu-my.sharepoint.com/:x:/g/personal/1061821674_u_icesi_edu_co/IQARsVP2MhP6TLP9_DOLJSU6AZWHMAZ4eHRwT4KTrl32U1s?e=Vxa9eg"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-sm border border-[#d7d8dc] bg-white px-4 py-2 text-base font-semibold text-[#19191b] hover:bg-[#f7f7f8]"
                  >
                    Formato 4 Rediseña tus actividades evaluativa
                  </a>
                </div>
              </div>
              <div id="prompt-4" className="mb-6">
                <Prompt text="Prompt 4: Rediseño de actividades" prompt={momento3Prompts.prompt4} />
              </div>

              {/* <form id="formulario-final" onSubmit={submitFinalForm} className="scroll-mt-24 mt-6 border border-[#d7d8dc] bg-white p-5">
                <div className="space-y-2">
                  <p className="text-base font-bold uppercase tracking-[0.12em] text-[#4cb979]">Formulario Opcional</p>
                  <h3 className="text-xl font-bold text-[#19191b]"><b>¿Quieres compartir tu proceso con nosotros?
                  </b></h3>
                  <p>Si completaste el diseño evaluativo, te invitamos a registrarlo en el siguiente formulario. Es opcional. Tu información nos ayuda a entender cómo está siendo usado este recurso, identificar necesidades de acompañamiento y, si lo deseas, ofrecerte retroalimentación desde el equipo sobre tu rediseño</p>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-1 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-[#19191b]">Nombre del profesor</span>

                    <input
                      value={finalForm.profesor}
                      onChange={(event) => handleFinalFormChange('profesor', event.target.value)}
                      className="w-full border border-[#d7d8dc] bg-white p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                      placeholder="Nombre del profesor"
                      required
                    />
                    <span className="text-sm font-semibold text-[#19191b]">Correo electrónico</span>

                    <input
                      value={finalForm.email}
                      onChange={(event) => handleFinalFormChange('email', event.target.value)}
                      className="mt-2 w-full border border-[#d7d8dc] bg-white p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                      placeholder="Correo electrónico (opcional)"
                      type="email"
                      aria-label="Correo electrónico"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-[#19191b]">Curso</span>
                    <input
                      value={finalForm.curso}
                      onChange={(event) => handleFinalFormChange('curso', event.target.value)}
                      className="w-full border border-[#d7d8dc] bg-white p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                      placeholder="Curso"
                      required
                    />
                  </label>
                </div>

                <div className="mt-6 overflow-x-auto border border-[#d7d8dc]">
                  <table className="min-w-300 w-full border-collapse text-sm">
                    <thead className="bg-[#f3f4f8]">
                      <tr>
                        <th className="border border-[#d7d8dc] p-3 text-left font-semibold text-[#19191b]">Mecanismo de evaluación</th>
                        <th className="border border-[#d7d8dc] p-3 text-left font-semibold text-[#19191b]">Resultado de aprendizaje</th>
                        <th className="border border-[#d7d8dc] p-3 text-left font-semibold text-[#19191b]">Nivel AIAS</th>
                        <th className="border border-[#d7d8dc] p-3 text-left font-semibold text-[#19191b]">Qué evaluar (desempeño esperado)</th>
                        <th className="border border-[#d7d8dc] p-3 text-left font-semibold text-[#19191b]">Cómo evaluar (estrategias y evidencias)</th>
                        <th className="border border-[#d7d8dc] p-3 text-left font-semibold text-[#19191b]">Consigna al estudiante</th>
                        <th className="border border-[#d7d8dc] p-3 text-left font-semibold text-[#19191b]">Recursos (si aplica)</th>
                        <th className="border border-[#d7d8dc] p-3 text-left font-semibold text-[#19191b]">Notas / Observaciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-[#d7d8dc] p-2 align-top">
                          <textarea
                            value={finalForm.mecanismoEvaluacion}
                            onChange={(event) => handleFinalFormChange('mecanismoEvaluacion', event.target.value)}
                            className="min-h-28 w-full resize-y border border-[#d7d8dc] p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                            placeholder="Escribe el mecanismo de evaluación"
                            aria-label="Mecanismo de evaluación"
                            required
                          />
                        </td>
                        <td className="border border-[#d7d8dc] p-2 align-top">
                          <textarea
                            value={finalForm.resultadoAprendizaje}
                            onChange={(event) => handleFinalFormChange('resultadoAprendizaje', event.target.value)}
                            className="min-h-28 w-full resize-y border border-[#d7d8dc] p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                            placeholder="Escribe el resultado de aprendizaje"
                            aria-label="Resultado de aprendizaje"
                            required
                          />
                        </td>
                        <td className="border border-[#d7d8dc] p-2 align-top">
                          <textarea
                            value={finalForm.nivelAIAS}
                            onChange={(event) => handleFinalFormChange('nivelAIAS', event.target.value)}
                            className="min-h-28 w-full resize-y border border-[#d7d8dc] p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                            placeholder="Ej: Nivel 3"
                            aria-label="Nivel AIAS"
                            required
                          />
                        </td>
                        <td className="border border-[#d7d8dc] p-2 align-top">
                          <textarea
                            value={finalForm.queEvaluar}
                            onChange={(event) => handleFinalFormChange('queEvaluar', event.target.value)}
                            className="min-h-28 w-full resize-y border border-[#d7d8dc] p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                            placeholder="Describe el desempeño esperado"
                            aria-label="Qué evaluar"
                            required
                          />
                        </td>
                        <td className="border border-[#d7d8dc] p-2 align-top">
                          <textarea
                            value={finalForm.comoEvaluar}
                            onChange={(event) => handleFinalFormChange('comoEvaluar', event.target.value)}
                            className="min-h-28 w-full resize-y border border-[#d7d8dc] p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                            placeholder="Estrategias e evidencias"
                            aria-label="Cómo evaluar"
                            required
                          />
                        </td>
                        <td className="border border-[#d7d8dc] p-2 align-top">
                          <textarea
                            value={finalForm.consignaEstudiante}
                            onChange={(event) => handleFinalFormChange('consignaEstudiante', event.target.value)}
                            className="min-h-28 w-full resize-y border border-[#d7d8dc] p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                            placeholder="Escribe la consigna al estudiante"
                            aria-label="Consigna al estudiante"
                            required
                          />
                        </td>
                        <td className="border border-[#d7d8dc] p-2 align-top">
                          <textarea
                            value={finalForm.recursos}
                            onChange={(event) => handleFinalFormChange('recursos', event.target.value)}
                            className="min-h-28 w-full resize-y border border-[#d7d8dc] p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                            placeholder="Recursos utilizados"
                            aria-label="Recursos"
                            required
                          />
                        </td>
                        <td className="border border-[#d7d8dc] p-2 align-top">
                          <textarea
                            value={finalForm.notasObservaciones}
                            onChange={(event) => handleFinalFormChange('notasObservaciones', event.target.value)}
                            className="min-h-28 w-full resize-y border border-[#d7d8dc] p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                            placeholder="Opcional"
                            aria-label="Notas u observaciones"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-[#19191b]">Comentarios y preguntas</span>
                    <textarea
                      value={finalForm.comentariosPreguntas}
                      onChange={(event) => handleFinalFormChange('comentariosPreguntas', event.target.value)}
                      className="min-h-20 w-full resize-y border border-[#d7d8dc] p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                      placeholder="Escribe aquí dudas, comentarios o preguntas sobre tu rediseño (opcional)"
                      aria-label="Comentarios y preguntas"
                    />
                  </label>
                </div>


                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmittingFinalForm}
                    className="bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1f1f1f] disabled:cursor-not-allowed disabled:bg-[#8f9094]"
                  >
                    {isSubmittingFinalForm ? 'Enviando...' : 'Enviar a hoja compartida'}
                  </button>

                </div>

                {finalFormStatus ? (
                  <p
                    className={`mt-4 text-sm leading-6 ${finalFormStatus.type === 'success' ? 'text-[#248a46]' : 'text-[#b63b26]'
                      }`}
                  >
                    {finalFormStatus.message}
                  </p>
                ) : null}
              </form> */}
              <SectionHeading title ="¿Quieres compartir tu proceso con nosotros?" bgcolor='#4cb979'></SectionHeading>
               <p className="mb-6 text-base leading-7 text-[#272727]">
Te invitamos a completar el siguiente formulario para contarnos sobre tu proceso. Allí podrás adjuntar los formatos diligenciados y compartir tus consultas, solicitudes de acompañamiento, dudas o comentarios sobre este recurso.
              </p>
              <p className="mb-6 text-base leading-7 text-[#272727]">
Tu participación también nos ayuda a comprender cómo está siendo utilizado este material, identificar las necesidades de apoyo del profesorado y seguir mejorando los recursos y estrategias de acompañamiento que ofrecemos.              
      </p>
                <a
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=KweU6T5S_kuG4kQsXhCyROZDY48y8nlNuE0cg9gKhSBUOVdGNzdLNVM4TTZXV0dFQjc0VVNMTlk1Mi4u"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center border border-[#d7d8dc] bg-white px-8 py-4 text-base font-semibold text-[#19191b] hover:bg-[#f7f7f8]"
                  >
                    Formulario de asesoria
                  </a>
            </section>
          </AnimatedSection>

          <CTASection onClick={() => navigate('/ficha-tecnica')} text="Continúa: ficha técnica" />
        </main>
      </div>
    </div>
  );
}
