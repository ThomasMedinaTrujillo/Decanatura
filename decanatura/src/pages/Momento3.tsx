import React, { useMemo, useState } from 'react';
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

const sidebarItems = [
  { label: 'Diagnóstico inicial', href: '#diagnostico' },
  { label: 'Prompt 1: Resultados de aprendizaje', href: '#prompt-1', isIndented: true },
  { label: 'Cómo estás evaluando', href: '#prioriza' },
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

const sharedProductOptions = [
  { label: 'Producto 1', value: 'producto1' },
  { label: 'Producto 2', value: 'producto2' },
  { label: 'Producto 3', value: 'producto3' },
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
  const [prompt3Text, setPrompt3Text] = useState<string>(momento3Prompts.prompt3);
  const [sharedProductForm, setSharedProductForm] = useState({
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
  const [isSubmittingSharedProductForm, setIsSubmittingSharedProductForm] = useState(false);
  const [sharedProductFormStatus, setSharedProductFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [finalForm, setFinalForm] = useState({
    profesor: '',
    curso: '',
    mecanismoEvaluacion: '',
    resultadoAprendizaje: '',
    nivelAIAS: '',
    queEvaluar: '',
    comoEvaluar: '',
    consignaEstudiante: '',
    recursos: '',
    notasObservaciones: '',
  });
  const [isSubmittingFinalForm, setIsSubmittingFinalForm] = useState(false);
  const [finalFormStatus, setFinalFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

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

  const handleFinalFormChange = (field: keyof typeof finalForm, value: string) => {
    setFinalForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSharedProductChange = (field: keyof typeof sharedProductForm, value: string) => {
    setSharedProductForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const submitSharedProductForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = (import.meta.env.VITE_MOMENTO3_FORM_POST_URL as string | undefined) || (import.meta.env.VITE_MOMENTO3_FINAL_POST_URL as string | undefined);

    if (!endpoint) {
      setSharedProductFormStatus({
        type: 'error',
        message: 'Falta configurar VITE_MOMENTO3_FORM_POST_URL para enviar a la hoja correcta.',
      });
      return;
    }

    setIsSubmittingSharedProductForm(true);
    setSharedProductFormStatus(null);

    try {
      const payload = {
        source: 'momento-3-producto-compartido',
        sheetName: sharedProductForm.productSheet,
        profesor: sharedProductForm.profesor,
        curso: sharedProductForm.curso,
        // Producto 1
        resultadoAprendizaje: sharedProductForm.resultadoAprendizaje,
        clasificacion: sharedProductForm.clasificacion,
        justificacion: sharedProductForm.justificacion,
        ajuste: sharedProductForm.ajuste,
        // Producto 2
        mecanismo: sharedProductForm.mecanismo,
        resultadoActividad: sharedProductForm.resultadoActividad,
        problemaPrincipal: sharedProductForm.problemaPrincipal,
        recomendacion: sharedProductForm.recomendacion,
        // Producto 3
        actividadEvaluativa: sharedProductForm.actividadEvaluativa,
        resultadoProducto3: sharedProductForm.resultadoProducto3,
        nivelAIAS: sharedProductForm.nivelAIAS,
        justificacionBreve3: sharedProductForm.justificacionBreve3,
      };

      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      setSharedProductFormStatus({
        type: 'success',
        message: `Registro enviado a la hoja ${sharedProductForm.productSheet}.`,
      });

      // Clear all shared product fields after successful submit
      setSharedProductForm((current) => ({
        ...current,
        profesor: '',
        curso: '',
        resultadoAprendizaje: '',
        clasificacion: '',
        justificacion: '',
        ajuste: '',
        mecanismo: '',
        resultadoActividad: '',
        problemaPrincipal: '',
        recomendacion: '',
        actividadEvaluativa: '',
        resultadoProducto3: '',
        nivelAIAS: '',
        justificacionBreve3: '',
      }));
    } catch (error) {
      setSharedProductFormStatus({
        type: 'error',
        message: 'No se pudo enviar el formulario compartido. Revisa el endpoint y permisos.',
      });
    } finally {
      setIsSubmittingSharedProductForm(false);
    }
  };

  const submitFinalForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = import.meta.env.VITE_MOMENTO3_FINAL_POST_URL as string | undefined;

    if (!endpoint) {
      setFinalFormStatus({
        type: 'error',
        message: 'Falta configurar VITE_MOMENTO3_FINAL_POST_URL para enviar el formulario a Sheets o Excel.',
      });
      return;
    }

    setIsSubmittingFinalForm(true);
    setFinalFormStatus(null);

    try {
      const payload = {
        source: 'momento-3-formulario-final',
        sheetName: 'productoFinal',
        ...finalForm,
      };

      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      setFinalFormStatus({
        type: 'success',
        message: 'Registro enviado. Si el endpoint está conectado a Sheets, la fila quedará guardada.',
      });

      setFinalForm((current) => ({
        ...current,
        profesor: '',
        curso: '',
        mecanismoEvaluacion: '',
        resultadoAprendizaje: '',
        nivelAIAS: '',
        queEvaluar: '',
        comoEvaluar: '',
        consignaEstudiante: '',
        recursos: '',
        notasObservaciones: '',
      }));
    } catch (error) {
      setFinalFormStatus({
        type: 'error',
        message: 'No se pudo enviar el formulario. Revisa el endpoint, permisos y CORS.',
      });
    } finally {
      setIsSubmittingFinalForm(false);
    }
  };

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
              <SectionHeading uppertitle='Transformación' bgcolor="#4cb979" title="Diagnóstico inicial" subtitle="" />
              <p className="mb-6 text-base">
                Este momento te guía desde el diagnóstico de lo que tienes hoy hasta el rediseño concreto de tus
                evaluaciones, paso a paso y con apoyo del GPT del AIAS.
              </p>
              <p className="mb-8 text-base">
                Aquí revisas dos elementos de tu syllabus: los resultados de aprendizaje y las actividades
                evaluativas. La meta es identificar qué ajustar primero y llegar a una decisión de diseño clara.
              </p>
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
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <section className="mb-16" id="prompt-1">
              <SectionHeading uppertitle='Transformación' bgcolor="#4cb979" title="Análisis resultados de aprendizaje" subtitle="" />
              <p className="mb-6 text-base">
                Adjunta el PDF de tu syllabus y usa este prompt para analizar los resultados de aprendizaje.
              </p>
              <p className="mb-8 text-base">
                Después, completa la tabla del producto 1 con la información generada. Recuerda crear una copia
                antes de editarla.
              </p>
              <div className="flex flex-col gap-6">
                <Prompt text="Prompt 1: Análisis resultados de aprendizaje" prompt={momento3Prompts.prompt1} />
              </div>
            </section>
          </AnimatedSection>



          <AnimatedSection>
            <section className="mb-16" id="prioriza">
              <SectionHeading uppertitle='Transformación' bgcolor="#4cb979" title="Cómo estás evaluando" subtitle="" />
              <p className="mb-6 font-semibold text-[#19191b]">No tienes que repensarlo todo.</p>
              <p className="mb-8 text-base">
                Consolida los hallazgos del diagnóstico en una tabla, una fila por actividad evaluativa. Las
                actividades con recomendación de rediseño estructural son la prioridad; las de ajuste menor pueden
                seguir despues.
              </p>
              <div className="flex flex-col gap-6">
                <div className="border border-[#d7d8dc] bg-[#fcfcfd] p-5">
                  <h3 className="text-xl font-bold text-[#4cb979]">Prioriza</h3>
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
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <section className="mb-16" id="decide">
              <SectionHeading uppertitle='Transformación' bgcolor="#4cb979" title="Decide el nivel AIAS" subtitle="" />
              <p className="mb-6 text-base">
                Ya con el diagnóstico claro, este paso te ayuda a traducir lo que quieres evaluar en una decisión
                concreta sobre desempeño esperado, rol de la IAG y fase de participación.
              </p>
              <p className="mb-8 text-base">
                Marca todas las opciones que apliquen a tu caso y luego actualiza el prompt con el boton.
              </p>
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
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <section className="mb-16" id="productos-compartidos">
              <SectionHeading uppertitle='Transformación' bgcolor="#4cb979" title="Formulario compartido para productos 1, 2 y 3" subtitle="" />
              <p className="mb-6 text-base">
                Usa el mismo formulario para registrar los productos 1, 2 y 3. Solo cambia la hoja destino dentro
                del mismo Google Sheets.
              </p>
              <p className="mb-8 text-base">
                El producto final sigue aparte porque necesita otro flujo de registro.
              </p>
              <form onSubmit={submitSharedProductForm} className="border border-[#d7d8dc] bg-white p-5">
                <div className="space-y-2">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#4cb979]">Productos 1, 2 y 3</p>
                  <h3 className="text-xl font-bold text-[#19191b]">Formulario compartido por hoja</h3>
                  <p className="text-sm leading-6 text-[#5d6169]">
                    Selecciona el producto y envía una nueva fila a la pestaña correspondiente.
                  </p>
                </div>

                <div className="mt-6 grid gap-5">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-[#19191b]">Nombre del profesor</span>
                    <textarea
                      value={sharedProductForm.profesor}
                      onChange={(event) => handleSharedProductChange('profesor', event.target.value)}
                      className="min-h-24 w-full resize-y border border-[#d7d8dc] bg-white p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                      placeholder="Escribe el nombre del profesor"
                      required
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-[#19191b]">Curso</span>
                    <textarea
                      value={sharedProductForm.curso}
                      onChange={(event) => handleSharedProductChange('curso', event.target.value)}
                      className="min-h-24 w-full resize-y border border-[#d7d8dc] bg-white p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                      placeholder="Escribe el curso al que aplica la transformación"
                      required
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-[#19191b]">Producto</span>
                    <select
                      value={sharedProductForm.productSheet}
                      onChange={(event) => handleSharedProductChange('productSheet', event.target.value)}
                      className="border border-[#d7d8dc] bg-white p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                    >
                      {sharedProductOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {sharedProductForm.productSheet === 'producto1' && (
                      <p>
                        Te invitamos a completar la siguiente tabla usando la información generada en el paso anterior.
                      </p>
                    )}
                    {sharedProductForm.productSheet === 'producto2' && (
                      <p>
                        Con el diagnóstico en mano, consolida los hallazgos en la siguiente tabla, una fila por actividad evaluativa. Usa la columna de recomendación del diagnóstico como punto de partida. Una vez completa, tendrás una vista general de tu curso que te permitirá identificar por dónde empezar: las actividades con recomendación de rediseño estructural son la prioridad, las de ajuste menor pueden seguir, y las que están bien pueden mantenerse con solo declarar el nivel AIAS.
                      </p>)}
                    {
                      sharedProductForm.productSheet === 'producto3' && (
                        <p>
                          Te invitamos a completar la siguiente tabla con la reflexión que realizaste en el paso anterior:
                        </p>
                      )
                    }
                  </label>

                  {/* Render fields depending on selected product */}
                  {sharedProductForm.productSheet === 'producto1' && (
                    <>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Resultado de aprendizaje</span>
                        <textarea
                          value={sharedProductForm.resultadoAprendizaje}
                          onChange={(event) => handleSharedProductChange('resultadoAprendizaje', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Escribe el resultado de aprendizaje"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Clasificación según impacto de la IA</span>
                        <textarea
                          value={sharedProductForm.clasificacion}
                          onChange={(event) => handleSharedProductChange('clasificacion', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] bg-white p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Escribe la clasificación según impacto de la IA"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Justificación breve</span>
                        <textarea
                          value={sharedProductForm.justificacion}
                          onChange={(event) => handleSharedProductChange('justificacion', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Explica en pocas líneas por qué clasificaste así el resultado"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Ajuste al resultado de aprendizaje (si aplica)</span>
                        <textarea
                          value={sharedProductForm.ajuste}
                          onChange={(event) => handleSharedProductChange('ajuste', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Si hace falta, propone un ajuste breve"
                        />
                      </label>
                    </>
                  )}

                  {sharedProductForm.productSheet === 'producto2' && (
                    <>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Mecanismo o actividad evaluativa</span>
                        <textarea
                          value={sharedProductForm.mecanismo}
                          onChange={(event) => handleSharedProductChange('mecanismo', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Describe el mecanismo o actividad evaluativa"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Resultado de aprendizaje (original o ajustado)</span>
                        <textarea
                          value={sharedProductForm.resultadoActividad}
                          onChange={(event) => handleSharedProductChange('resultadoActividad', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Pega el resultado de aprendizaje original o el ajustado"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Principal problema identificado</span>
                        <textarea
                          value={sharedProductForm.problemaPrincipal}
                          onChange={(event) => handleSharedProductChange('problemaPrincipal', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Describe el principal problema identificado"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Recomendación</span>
                        <textarea
                          value={sharedProductForm.recomendacion}
                          onChange={(event) => handleSharedProductChange('recomendacion', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Propuesta de recomendación breve"
                          required
                        />
                      </label>
                    </>
                  )}

                  {sharedProductForm.productSheet === 'producto3' && (
                    <>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Actividad evaluativa</span>
                        <textarea
                          value={sharedProductForm.actividadEvaluativa}
                          onChange={(event) => handleSharedProductChange('actividadEvaluativa', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Describe la actividad evaluativa"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Resultado de aprendizaje</span>
                        <textarea
                          value={sharedProductForm.resultadoProducto3}
                          onChange={(event) => handleSharedProductChange('resultadoProducto3', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Resultado de aprendizaje asociado"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Nivel AIAS decidido</span>
                        <textarea
                          value={sharedProductForm.nivelAIAS}
                          onChange={(event) => handleSharedProductChange('nivelAIAS', event.target.value)}
                          className="min-h-12 w-full resize-y border border-[#d7d8dc] p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Indica el nivel AIAS decidido (1-5)"
                          required
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#19191b]">Justificación Breve</span>
                        <textarea
                          value={sharedProductForm.justificacionBreve3}
                          onChange={(event) => handleSharedProductChange('justificacionBreve3', event.target.value)}
                          className="min-h-24 w-full resize-y border border-[#d7d8dc] p-3 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                          placeholder="Justificación breve del nivel AIAS elegido"
                          required
                        />
                      </label>
                    </>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmittingSharedProductForm}
                    className="bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1f1f1f] disabled:cursor-not-allowed disabled:bg-[#8f9094]"
                  >
                    {isSubmittingSharedProductForm ? 'Enviando...' : 'Enviar a hoja del producto'}
                  </button>
                 </div>

                {sharedProductFormStatus ? (
                  <p
                    className={`mt-4 text-sm leading-6 ${sharedProductFormStatus.type === 'success' ? 'text-[#248a46]' : 'text-[#b63b26]'
                      }`}
                  >
                    {sharedProductFormStatus.message}
                  </p>
                ) : null}
              </form>
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <section className="mb-16" id="redisena">
              <SectionHeading uppertitle='Transformación' bgcolor="#4cb979" title="Rediseña" subtitle="" />
              <p className="mb-6 text-base">
                Ya tienes lo más difícil resuelto: sabes qué quieres evaluar y qué nivel es el más coherente con
                ese proposito.
              </p>
              <p className="mb-8 text-base">
                Este paso te ayuda a traducir esa decisión en cambios concretos sobre la actividad, la consigna, el
                instrumento de evaluación y las evidencias solicitadas.
              </p>
              <div id="prompt-4">
                <Prompt text="Prompt 4: Rediseño de actividades" prompt={momento3Prompts.prompt4} />
              </div>

              <form onSubmit={submitFinalForm} className="border border-[#d7d8dc] bg-white p-5">
                <div className="space-y-2">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#4cb979]">Producto final</p>
                  <h3 className="text-xl font-bold text-[#19191b]">Formulario de registro evaluativo</h3>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-[#19191b]">Nombre del profesor</span>
                    <input
                      value={finalForm.profesor}
                      onChange={(event) => handleFinalFormChange('profesor', event.target.value)}
                      className="w-full border border-[#d7d8dc] bg-white p-2 text-sm leading-6 text-[#272727] focus:border-[#5454e9] focus:outline-none"
                      placeholder="Nombre del profesor"
                      required
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
              </form>
            </section>
          </AnimatedSection>

          <CTASection onClick={() => navigate('/ficha-tecnica')} text="Continúa: ficha técnica" />
        </main>
      </div>
    </div>
  );
}
