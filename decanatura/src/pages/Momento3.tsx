import React, { useMemo, useState } from 'react';
import { motion, type Variants } from 'framer-motion';

import imgTemplatePreview from '../assets/96f660d6615c50208ecad72b513730a26d83679f.png';
import Sidebar from '../Components/Sidebar';
import Momento1Banner from '../Components/Momento1Banner';
import GPTCard from '../Components/GPTCard';
import { FileIcon } from '../Components/Icons';
import { Prompt } from '../Components/Prompt';
import Momento3OptionGroup from '../Components/Momento3OptionGroup';
import Momento3ResourceCard from '../Components/Momento3ResourceCard';
import Momento3Section from '../Components/Momento3Section';
import CTASection from '../Components/CTASection';
import { momento3Prompts } from '../prompts/prompts';

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

const sidebarItems = [
  { label: 'Diagnóstico inicial', href: '#diagnostico' },
  { label: 'Prompt 1: Resultados de aprendizaje', href: '#prompt-1', isIndented: true },
  { label: 'Prioriza', href: '#prioriza' },
  { label: 'Prompt 2: Actividades evaluativas', href: '#prompt-2', isIndented: true },
  { label: 'Decide el nivel AIAS', href: '#decide' },
  { label: 'Prompt 3: Decisión AIAS', href: '#prompt-3', isIndented: true },
  { label: 'Rediseña', href: '#redisena' },
  { label: 'Prompt 4: Rediseño', href: '#prompt-4', isIndented: true },
];

const learningQuestions = [
  '¿Qué deben saber los estudiantes al finalizar el curso?',
  '¿Qué deben ser capaces de hacer sin IAG?',
  '¿Alguno de estos resultados puede potenciarse con la IAG?',
  '¿Cuáles resultados de aprendizaje se ven impactados por la IAG?',
];

const assessmentQuestions = [
  '¿La evidencia que estoy evaluando podría haber sido generada por IA sin que el estudiante domine la competencia?',
  '¿Estoy evaluando el resultado final o el proceso de construcción del aprendizaje?',
  '¿La tarea exige decisiones fundamentadas y justificadas en su contexto?',
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
];

const aiRoleOptions = [
  'Sin IAG - no se permite su uso',
  'Herramienta de apoyo - para búsqueda de información, exploración de ideas, retroalimentación, revisión, etc.',
  'Herramienta de colaboración - parte central del proceso o producto',
  'Objeto de estudio - la IAG es analizada, diseñada o transformada como contenido del curso',
];

const participationOptions = [
  'Solo en la planificación o tareas previas',
  'Durante la revisión y mejora',
  'Durante algunos momentos de la producción del trabajo',
  'En todas las fases del proceso',
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
  const [selectedPerformance, setSelectedPerformance] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedPhases, setSelectedPhases] = useState<string[]>([]);
  const [prompt3Text, setPrompt3Text] = useState<string>(momento3Prompts.prompt3);

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
    setPrompt3Text(dynamicPromptPreview);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f9]">
      <Momento1Banner momento="Momento 3" title="Transformación" />

      <div className="flex gap-8 px-4 py-8 lg:px-8">
        <Sidebar title="Transformación" stepNumber={3} items={sidebarItems} />

        <main className="flex-1 space-y-8">
          <AnimatedSection>
            <Momento3Section
              id="diagnostico"
              title="Diagnóstico inicial"
              description={
                <>
                  <p>
                    Este momento te guía desde el diagnóstico de lo que tienes hoy hasta el rediseño concreto de tus
                    evaluaciones, paso a paso y con apoyo del GPT del AIAS.
                  </p>
                  <p>
                    Aquí revisas dos elementos de tu syllabus: los resultados de aprendizaje y las actividades
                    evaluativas. La meta es identificar qué ajustar primero y llegar a una decisión de diseño clara.
                  </p>
                </>
              }
              aside={
                <div className="bg-[#eef8f2] p-5 ring-1 ring-[#dceee3]">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#4cb979]">Producto final</p>
                  <p className="mt-3 text-sm leading-6 text-[#272727]">
                    La plantilla final está pensada para consolidar el rediseño de tus actividades evaluativas. Completa
                    una fila por actividad intervenida.
                  </p>
                </div>
              }
            >
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
                <div className="border border-[#d7d8dc] bg-[#fcfcfd] p-5">
                  <h3 className="text-xl font-bold text-[#4cb979]">Qué estás evaluando</h3>
                  <p className="mt-3 text-sm leading-6 text-[#272727]">
                    Antes de modificar una actividad evaluativa, revisa los resultados de aprendizaje del curso.
                    Pregúntate:
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-[#272727]">
                    {learningQuestions.map((question) => (
                      <li key={question} className="ml-5 list-disc">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-[#d7d8dc] bg-white p-5">
                  <div className="mb-5 border-l-2 border-[#4cb979] pl-4 text-sm leading-6 text-[#272727]">
                    Si quieres usar el GPT para reflexionar, pega los siguientes prompts en el GPT del AIAS diseñado por
                    los mismos autores.
                  </div>
                  <GPTCard
                    title="GPT del AIAS"
                    subtitle="Universidad Icesi"
                    buttonText="Probar"
                    iconSrc={<FileIcon className="text-white" />}
                    href="https://chatgpt.com/g/g-m39Sn0uZq-the-ai-assessment-scale-aias"
                  />
                </div>
              </div>
            </Momento3Section>
          </AnimatedSection>

          <AnimatedSection>
            <Momento3Section
              id="prompt-1"
              title="Prompt 1 y Producto 1"
              description={
                <>
                    <p>Adjunta el PDF de tu syllabus y usa este prompt para analizar los resultados de aprendizaje.</p>
                  <p>
                    Después, completa la tabla del producto 1 con la información generada. Recuerda crear una copia
                    antes de editarla.
                  </p>
                </>
              }
            >
              <div className="flex flex-col gap-6">
                <Prompt text="Prompt 1: Análisis resultados de aprendizaje" prompt={momento3Prompts.prompt1} />
                <Momento3ResourceCard
                  eyebrow="Producto 1"
                  title="Recursos tablas IAG resultados"
                  description="Plantilla para organizar el análisis de resultados de aprendizaje y dejar trazabilidad de los hallazgos del diagnóstico."
                  href="https://1drv.ms/x/c/486392b43e092453/IQB0XwvvYwLXT48USC9GueWgAdTzGUEnhRV6I1JQEIOBdkg?e=wt5ZCr"
                  cta="Abrir tabla"
                  imageSrc={imgTemplatePreview}
                />
              </div>
            </Momento3Section>
          </AnimatedSection>

          <AnimatedSection>
            <Momento3Section
              id="prioriza"
              title="Prioriza"
              description={
                <>
                  <p className="font-semibold text-[#19191b]">No tienes que repensarlo todo.</p>
                  <p>
                    Consolida los hallazgos del diagnóstico en una tabla, una fila por actividad evaluativa. Las
                    actividades con recomendación de rediseño estructural son la prioridad; las de ajuste menor pueden
                    seguir despues.
                  </p>
                </>
              }
            >
              <div className="flex flex-col gap-6">
                <div className="border border-[#d7d8dc] bg-[#fcfcfd] p-5">
                  <h3 className="text-xl font-bold text-[#4cb979]">Cómo estás evaluando</h3>
                  <p className="mt-3 text-sm leading-6 text-[#272727]">
                    Algunas preguntas que puedes hacerte respecto a tus actividades evaluativas son:
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-[#272727]">
                    {assessmentQuestions.map((question) => (
                      <li key={question} className="ml-5 list-disc">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-[#d7d8dc] bg-white p-5">
                  <div className="mb-5 border-l-2 border-[#4cb979] pl-4 text-sm leading-6 text-[#272727]">
                    Usa el siguiente prompt para analizar mecanismos de evaluación con más detalle antes de decidir qué
                    rediseñar.
                  </div>
                  <div id="prompt-2">
                    <Prompt text="Prompt 2: Analisis actividades evaluativas" prompt={momento3Prompts.prompt2} />
                  </div>
                </div>
              </div>

              <Momento3ResourceCard
                eyebrow="Producto 3"
                title="Plantilla de priorizacion y producto final"
                description="Consolida en una sola vista las actividades del curso, su recomendación y el punto de partida para el rediseño."
                href="https://1drv.ms/x/c/486392b43e092453/IQB0XwvvYwLXT48USC9GueWgAdTzGUEnhRV6I1JQEIOBdkg?e=wt5ZCr"
                cta="Abrir recurso"
                imageSrc={imgTemplatePreview}
              />
            </Momento3Section>
          </AnimatedSection>

          <AnimatedSection>
            <Momento3Section
              id="decide"
              title="Decide el nivel AIAS"
              description={
                <>
                  <p>
                    Ya con el diagnóstico claro, este paso te ayuda a traducir lo que quieres evaluar en una decisión
                    concreta sobre desempeño esperado, rol de la IAG y fase de participación.
                  </p>
                  <p>Marca todas las opciones que apliquen a tu caso y luego actualiza el prompt con el boton.</p>
                </>
              }
            >
              <div className="grid gap-6 lg:grid-cols-3">
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

              <div className="rounded-sm border border-[#d7d8dc] bg-[#fcfcfd] p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#19191b]">Generar prompt con selecciones</h3>
                    <p className="text-sm leading-6 text-[#5d6169]">
                      Cuando termines de marcar los checkboxes, usa este botón para actualizar el Prompt 3 con tus
                      selecciones actuales.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={updatePromptWithSelections}
                    className="bg-[#5454e9] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#3d3dcc]"
                  >
                    Actualizar Prompt 3
                  </button>
                </div>
              </div>

              <div id="prompt-3">
                <Prompt text="Prompt 3: Decisión AIAS" prompt={prompt3Text} />
              </div>
            </Momento3Section>
          </AnimatedSection>

          <AnimatedSection>
            <Momento3Section
              id="redisena"
              title="Rediseña"
              description={
                <>
                  <p>
                    Ya tienes lo más difícil resuelto: sabes qué quieres evaluar y qué nivel es el más coherente con
                    ese proposito.
                  </p>
                  <p>
                    Este paso te ayuda a traducir esa decisión en cambios concretos sobre la actividad, la consigna, el
                    instrumento de evaluación y las evidencias solicitadas.
                  </p>
                </>
              }
            >
              <div id="prompt-4">
                <Prompt text="Prompt 4: Rediseño de actividades" prompt={momento3Prompts.prompt4} />
              </div>

              <Momento3ResourceCard
                eyebrow="Producto final"
                title="Diseño evaluativo con IAG"
                description="Descarga la plantilla final para consolidar el rediseño de la actividad, sus criterios y el uso esperado de la IAG."
                href="https://icesiedu-my.sharepoint.com/:x:/g/personal/1061821674_u_icesi_edu_co/IQDCEPn7uhlSSZxm5kP2xi5iATtSn-XI4zfP3yIlV04t2g0?e=nd3jTS"
                cta="Descargar"
              />
            </Momento3Section>
          </AnimatedSection>

          <CTASection text="Continúa: transformación" />
        </main>
      </div>
    </div>
  );
}
