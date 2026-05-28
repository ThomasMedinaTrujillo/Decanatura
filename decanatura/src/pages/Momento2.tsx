import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import IntroQuestions from '../Components/IntroQuestions';
import PermitAISection from '../Components/PermitAISection';
import AIASLevelsIntro from '../Components/AIASLevelsIntro';
import AIASLevelCards from '../Components/AIASLevelCards';
import AIASLevel from '../Components/AIASLevel';
import CustomExamplesLevel2 from '../Components/CustomExamplesLevel2';
import CustomExamplesLevel3 from '../Components/CustomExamplesLevel3';
import CustomExamplesLevel4 from '../Components/CustomExamplesLevel4';
import CustomExamplesLevel5 from '../Components/CustomExamplesLevel5';
import CTASection from '../Components/CTASection';
import Momento1Banner from '../Components/Momento1Banner';

import LimitationSection from '../Components/LimitationsSection';

import { motion, type Variants } from 'framer-motion';
import DecisionTree from '../Components/DecisionTree';
import { useNavigate } from 'react-router';

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeInUpVariants}
  >
    {children}
  </motion.div>
);

export default function Momento2() {
  const navigate = useNavigate()
  const sidebarItems = [
    { label: 'Momento 2: Criterios', href: '#' },
    { label: '¿Permitir la IA o no?', href: '#' },
    { label: 'Nivel 1: No IAG', href: '#nivel-1', isIndented: true},
    { label: 'Nivel 2: Planificación', href: '#nivel-2',isIndented: true },
    { label: 'Nivel 3: Colaboración', href: '#nivel-3' ,isIndented: true},
    { label: 'Nivel 4: Uso estratégico', href: '#nivel-4' ,isIndented: true},
    { label: 'Nivel 5: Exploración', href: '#nivel-5' ,isIndented: true},
  ];

  const levelCards = [
    {
      id: 'nivel-1',
      title: 'Nivel 1: No IAG',
      shortDescription: 'La actividad evaluativa es desarrollada sin la ayuda de la IA.'
    },
    {
      id: 'nivel-2',
      title: 'Nivel 2: Planificación',
      shortDescription: 'La IA se usa exclusivamente para apoyar la fase inicial de una tarea.'
    },
    {
      id: 'nivel-3',
      title: 'Nivel 3: Colaboración',
      shortDescription: 'La IA colabora aportando ideas y el estudiante evalúa sus contribuciones.'
    },
    {
      id: 'nivel-4',
      title: 'Nivel 4: Uso estratégico',
      shortDescription: 'El estudiante puede usar la IA a lo largo de todo el proceso.'
    },
    {
      id: 'nivel-5',
      title: 'Nivel 5: Exploración',
      shortDescription: 'La IA se usa para explorar, experimentar y co-crear nuevas posibilidades.'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      {/* Banner / Intro (can reuse Momento1Banner or make a new one) */}
      <Momento1Banner momento='Momento 2' title='Profundización'></Momento1Banner>

      <div className="w-full px-4 lg:px-8 flex gap-8 py-8">
        {/* Sidebar */}
        <div className="hidden lg:block ">
            <Sidebar 
            title="Profundización" 
            stepNumber={2} 
            items={sidebarItems} 
            />
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full space-y-12">
          <AnimatedSection>
            <IntroQuestions />
          </AnimatedSection>

          <AnimatedSection>
            <PermitAISection />
          </AnimatedSection>

        <DecisionTree></DecisionTree>


          <AnimatedSection>
            <AIASLevelsIntro />
          </AnimatedSection>

          <AnimatedSection>
            <AIASLevelCards cards={levelCards} />
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-8 lg:mt-12" />
            <AIASLevel 
                  id='nivel-1'
                title="Nivel 1: No IAG"
                description="En este nivel, la actividad evaluativa es desarrollada en su totalidad sin la ayuda de la IA."
                pedagogicalSense="Ubicar y luego diseñar una actividad en este nivel tiene un objetivo pedagógico claro: evaluar habilidades esenciales e irreductibles que el estudiante debe dominar y demostrar sin apoyo de la IAG."
                whenMakeSense={[
                  "La evaluación mide una habilidad que es prerrequisito explícito o implícito para cursos posteriores.",
                  "La IAG puede simular por completo el resultado de aprendizaje, pero se requiere evidencia de que el estudiante puede hacerlo por sí mismo.",
                  "La actividad evalúa una competencia crítica que será clave cuando el estudiante deba tomar decisiones bajo su propia responsabilidad. Estas decisiones tienen implicaciones legales, éticas o de seguridad."
                ]}
                whenNotMakeSense={[
                  "No se puede verificar que el estudiante usó IAG.",
                  "El aprendizaje no depende de trabajar sin herramientas, sino de interpretar, evaluar, diseñar o tomar decisiones en un contexto disciplinar."
                ]}
                whatToEvaluate='El dominio individual de conocimientos y habilidades fundamentales, demostrados sin apoyo externo y en condiciones controladas.'
                howToEvaluateDescription="Algunas estrategias para evaluar en este nivel son:"
                howToEvaluateStrategies={[
                  { title: "Exámenes presenciales y supervisados", description: "Puede incluir restricciones de dispositivos electrónicos." },
                  { title: "Evaluaciones con software seguro", description: "Plataformas que limitan el acceso a internet u otros recursos externos durante la actividad." },
                  { title: "Evaluaciones orales", description: "Respuesta inmediata sin preparación previa, donde se evalúa el pensamiento en situ. Como debates, resolución de problemas en tiempo real, resolución comentada en voz alta, sustentación sin notas y con preguntas espontáneas del docente y compañeros." },
                  { title: "Reflexiones situadas", description: "Respuestas en las que el estudiante analiza y da sentido a una experiencia concreta vivida (por ejemplo, en clase o en una actividad), conectando lo que hizo, pensó o decidió con el aprendizaje." },
                  { title: "Evaluaciones prácticas supervisadas", description: "Como prácticas de laboratorio, simulaciones clínicas, intervenciones supervisadas en práctica docente." }
                ]}
                implications={[
                  { title: "Reflexión sobre los resultados de aprendizaje", description: "El docente debe reflexionar sobre qué aspectos del aprendizaje son esenciales e indelegables, y por tanto justifican el uso de un Nivel 1, donde la autonomía y la ejecución directa son centrales." },
                  { title: "Garantizar un entorno controlado", description: "El docente debe diseñar la actividad garantizando que la restricción de uso de la IAG es real y no sólo discursiva. Declarar que una actividad es nivel 1, pero permitir que sea trabajo en casa o actividad en clase sin supervisión es depender de la buena intención del estudiante o de herramientas de detección cuya fiabilidad está ampliamente cuestionada en la literatura (Perkins et al. 2025)." },
                  { title: "Comunicación a estudiantes", description: "Asimismo, el docente debe comunicar claramente al estudiante la razón por la que la actividad evaluativa es sin IAG, e involucrarlo en la discusión." }
                ]}
                examples={[
                  "En un curso de licenciatura, los estudiantes discuten en grupos diferentes estrategias didácticas para un caso específico y luego escriben una reflexión situada sobre su experiencia: qué propusieron, qué aprendieron de las ideas de otros y cómo ajustarán su enfoque basándose en la interacción vivida y en los conceptos vistos en clase.",
                  "En un curso de Microeconomía, los estudiantes participan en un debate en clase donde cada grupo formula preguntas analíticas y situadas a partir de lo que exponen otros grupos, y los grupos interrogados deben responder en el momento, sin preparación previa. Luego escriben una reflexión sobre su participación, cómo sus ideas cambiaron al escuchar a otros y qué aprendieron de la dinámica. Esta interacción en tiempo real asegura que la evidencia del aprendizaje sea auténtica y no pueda generarse con IA."
                ]}
             />
          </AnimatedSection>

          <AnimatedSection>

             <AIASLevel 
                  id='nivel-2'
                  title="Nivel 2: IAG para planificación e ideación"
                  description="En este nivel, el estudiante puede utilizar la IAG exclusivamente para apoyar la fase inicial de una tarea o proyecto, tales como la exploración de ideas, esquematización, e investigación inicial. El producto final no debe tener contenido generado directamente por la IA. Siendo así, lo que realmente debe evaluarse es la capacidad del estudiante de descartar, refinar, criticar o desarrollar de forma independiente eso que la IAG le esté proponiendo."
                  pedagogicalSense="Utilizar la IAG como apoyo inicial puede enriquecer el aprendizaje, especialmente en tareas donde no importa tanto el origen de las ideas, sino cómo el estudiante las analiza y desarrolla por su cuenta."
                  whenMakeSense={[
                    "La exploración de nuevas ideas y perspectivas usando IAG amplía la mirada del estudiante y puede potenciar el proceso de aprendizaje."
                  ]}
                  whenNotMakeSense={[
                  "Se evalúan habilidades fundamentales o básicas que deben demostrarse sin herramientas externas.",
                  "La ideación, la argumentación desde cero o la exploración de soluciones es una competencia esencial que el curso busca desarrollar de forma autónoma. Este puede ser el caso en cursos introductorios de composición musical, pensamiento matemático y lógico, diagnóstico clínico, innovación o escritura creativa."
                ]}
                whatToEvaluate={[
                  "Capacidad de formular prompts con intención y criterio claro.",
                  "Selección y refinamiento de ideas generadas por la IAG.",
                  "Desarrollo autónomo de un producto final que refleje comprensión, criterio y elaboración propia."
                ]}
                howToEvaluateDescription="La evaluación se centra en el producto final y, opcionalmente, en la evidencia de interacción con IA."
                howToEvaluateStrategies={[
                  { title: "Presentación integrada en el producto final", description: "que evidencie el proceso de interacción con IAG. Por ejemplo, se muestra una lista de ideas generadas y por qué se escogió una en particular." },
                  { title: "Comentario reflexivo", description: "sobre cómo la IA apoyó en la ideación y planificación de la tarea." },
                  { title: 'Rúbrica o lista de chequeo', description: 'para evaluar el producto final. El docente puede usar su rúbrica sin cambios o hacerle un ajuste que considere como criterio el uso de la IAG para la planificación e ideación.' }
                ]}
                implications={[
                  { title: "Reflexión sobre los resultados de aprendizaje", description: "El docente debe preguntarse si el uso de la IAG como apoyo en la planificación y exploración de ideas podría potenciar o dificultar que el estudiante alcance el resultado de aprendizaje específico." },
                  { title: "Ajustar la consigna", description: "El docente debe especificar qué usos de IAG están permitidos (deben ser específicos según la tarea) y en qué momentos se puede usar la IAG (en la fase inicial, en el borrador, en el producto final, etc)." },
                  { title: "Decidir si se ajustan las evidencias", description: "El docente decide si es pertinente ajustar las evidencias para que sea visible el proceso de interacción con IAG (ejemplos en Cómo evaluar)." }
                ]}
                
             />
             <LimitationSection title='Limitaciones y consideraciones' description='Una advertencia que los autores señalan y vale tener presente: separar con precisión la fase dependiente de IAG de la fase independiente puede no ser técnicamente viable en todos los casos. No siempre es posible ni necesario trazar una línea exacta entre dónde terminó la IAG y dónde empezó el estudiante.'/>
             <CustomExamplesLevel2/>
          </AnimatedSection>
       

          <AnimatedSection>

             <AIASLevel 
                id='nivel-3'
                title="Nivel 3: Colaboración con IAG"
                description="La IAG colabora con el estudiante en el desarrollo de la actividad evaluativa. Esta puede proponer ideas, generar argumentos, dar retroalimentación y sugerencias. Sin embargo, el estudiante debe evaluar críticamente estas contribuciones y decidir qué aceptar, mejorar o descartar. Aunque se utilice la IAG como apoyo, el estudiante mantiene la responsabilidad intelectual del resultado final."
                pedagogicalSense="Enmarcar una actividad evaluativa en este nivel tiene como intención desplazar el foco al desarrollo del juicio crítico respecto al contenido generado por la IAG (el output)."
                whenMakeSense={[
                  "Quieres que tu actividad evaluativa se enfoque en la capacidad del estudiante de analizar, evaluar y mejorar los outputs de la IAG.",
                  "El proceso de aprendizaje puede ocurrir en la revisión y mejora del contenido generado."
                ]}
                whenNotMakeSense={[
                  "Quieres verificar el dominio de una competencia de forma autónoma (nivel 1).",
                  "Quieres que la IAG sea sólo usada como un apoyo inicial (nivel 2).",
                  "Quieres que la IAG se use en todo el proceso sin focalizar estrictamente en revisión crítica aislada (nivel 4)."
                ]}
                whatToEvaluate={[
                  "La reflexión y el juicio crítico respecto al contenido generado por la IAG (outputs).",
                  "La capacidad de revisión y mejora de outputs.",
                  "La integración de outputs con el propio entendimiento y perspectiva, manteniendo así la voz propia.",
                  "El razonamiento disciplinar y el producto final."
                ]}
                
                howToEvaluateDescription={"Aquí se evalúa cómo el estudiante trabaja críticamente con la IA, no solo el resultado final. Sin embargo, evaluar el juicio crítico sobre lo que genera la IAG requiere de acompañamiento y de estrategias específicas. Bearman et al. (2024) identifican tres habilidades clave para el desarrollo del juicio crítico en interacción con la IAG: evaluar la calidad de los outputs de IAG, evaluar la calidad del proceso de interacción con IAG (por ejemplo la formulación de prompts), y contrastar el propio juicio con el de la IAG para identificar discrepancias y justificar decisiones. Las siguientes estrategias abarcan esos tres focos, y pueden usarse como práctica formativa, como evidencia evaluable, o como ambas. Asimismo, se enlistan instrumentos o evidencias que concreten las estrategias."}

                downloadResource
                implications={[
                  { title: "Orientación y expectativas para estudiantes", description: "Es esencial que el docente identifique las creencias con las que llegan sus estudiantes. Muchos asumen que la IAG siempre tiene la razón o que usarla siempre es problemático. Los estudiantes deben ser apoyados para entender las limitaciones de la IAG y empoderarse de su propio conocimiento y criterio, evitando que la colaboración con IAG termine en delegación o dependencia." },
                  { title: "Pautas", description: "El docente también debe establecer directrices claras sobre cómo documentar el uso de IAG (por ejemplo, compartiendo conversaciones, extractos de interacción o explicaciones del proceso de uso)." },
                  { title: "Evaluación del proceso", description: "Más allá del producto final, se debe valorar cómo el estudiante interactúa con la IAG, analiza y mejora los outputs, y demuestra juicio propio en cada iteración." },
                  {
                    title: 'Orientación y retroalimentación', description: 'Proporcionar acompañamiento sobre cómo integrar y criticar la información de la IAG, fomentando habilidades de análisis, síntesis y evaluación.'
                  }
                ]}
                
             />
             <CustomExamplesLevel3 />
          </AnimatedSection>


          <AnimatedSection>
             <AIASLevel 
                id='nivel-4'
                title="Nivel 4: Uso estratégico de IAG"
                description="El estudiante puede utilizar la IAG a lo largo de todo el proceso de desarrollo del trabajo. La evaluación se centra en la capacidad del estudiante para utilizar la IAG de manera estratégica, crítica y fundamentada, demostrando comprensión disciplinar."
                pedagogicalSense="Este nivel prepara al estudiante para dirigir, evaluar e integrar la IAG en función de un objetivo concreto."
                whenMakeSense={[
                  "El resultado de aprendizaje se relaciona con la resolución de problemas complejos.",
                  "Quieres que el estudiante demuestre conocimiento disciplinar y criterio sobre cuándo/cómo usar la IAG según el objetivo."
                ]}
                whenNotMakeSense={[
                  "La disciplina o el momento del programa requieren demostración autónoma de competencias fundacionales — niveles 1 o 2."
                ]}
                whatToEvaluate={[
                  "Capacidad para seleccionar y utilizar herramientas de IAG de manera pertinente.",
                  "Evaluación crítica de los resultados generados por la IAG (precisión, sesgos).",
                  "Integración coherente de outputs en función de objetivos disciplinares.",
                  "Toma de decisiones fundamentadas durante todo el proceso."
                ]}
                howToEvaluateDescription="Estrategias de evaluación:"
                howToEvaluateStrategies={[
                  { title: "Componentes reflexivos", description: "Donde el estudiante explique: cómo utilizó la IAG\npor qué tomó determinadas decisiones\ncómo evaluó la calidad de los outputs" },
                  { title: "Evaluaciones complementarias", description: "Defensas orales\npreguntas no previstas\nanálisis de partes específicas del trabajo" },
                  { title: "Instrumentos de evaluación", description: "Rúbricas que valoren:\ncalidad del resultado final\npertinencia del uso de IAG\nprofundidad del análisis y la toma de decisiones" }
                ]}
                implications={[
                  { title: "Revisión de resultados de aprendizaje", description: "El docente debe asegurar que los resultados de aprendizaje valoren competencias de orden superior, como análisis, evaluación, diseño o aplicación, y no solo producción." },
                  { title: "Claridad disciplinar", description: "El docente debe tener claridad sobre qué constituye un uso estratégico de la IAG en su disciplina, ya que este varía según el campo, el tipo de tarea y los resultados de aprendizaje esperados." },
                  {
                    title: "Diseño de la consigna", description: 'Es necesario explicitar que el uso de IAG está permitido en todo el proceso, que se espera un uso estratégico y no automático, y qué tipo de decisiones y justificaciones serán evaluadas'
                  },
                  { title: "Equidad", description: "El docente debe considerar el acceso desigual a herramientas y las diferencias en habilidades de uso de IAG. Cuando sea posible, se recomienda ofrecer herramientas institucionales o diseñar tareas que no dependan de herramientas avanzadas de pago" }
                ]}
             />
             <CustomExamplesLevel4 />

             <AIASLevel 
                id='nivel-5'
                title="Nivel 5: Exploración con IAG"
                description="Este nivel promueve la co-creación de nuevos enfoques, artefactos y productos que pueden desafiar las formas tradicionales de trabajo en una disciplina."
                pedagogicalSense="Este nivel posiciona al estudiante como agente activo en la exploración, no solo como usuario. La IAG se utiliza para experimentar, analizar, cuestionar resultados y proponer usos inéditos."
                whenMakeSense={[
                  "El objetivo es que el estudiante experimente, innove o cree algo nuevo usando IA en el marco de la disciplina."
                ]}
                whenNotMakeSense={[
                  "Los estudiantes no cuentan con suficiente base y criterio disciplinar para crear con la IAG.",
                  "El objetivo prioritario es que el estudiante practique y domine habilidades básicas."
                ]}
                whatToEvaluate={[
                  "En este nivel, el estudiante debe:",
                  "Analizar y evaluar cuándo y cómo usar la IAG de forma estratégica.",
                  "Explorar distintos usos y proponer soluciones, artefactos o productos innovadores.",
                  "Justificar las decisiones tomadas incluyendo límites, riesgos e impacto de la IA."
                ]}
              
                howToEvaluateStrategies={[
                  { title: "Estrategia de evaluación", description: "Proyectos o artefactos, como prototipos o propuestas aplicadas\nComponentes reflexivos, donde el estudiante analice su proceso y hallazgos\nPresentaciones o defensas, para discutir decisiones e implicaciones" },
                  { title: "Instrumentos de evaluación", description: "Rúbricas abiertas o flexibles, centradas en:\ncalidad del análisis\ncoherencia de la propuesta\nprofundidad de la reflexión" }
                ]}
                implications={[
                  { title: "Apertura en el diseño", description: "Requiere aceptar diversidad de resultados y procesos no lineales. El docente cede control." },
                  { title: "Criterios claros pero flexibles", description: "Es necesario definir criterios de calidad (análisis, rigor, coherencia), evitando limitar la exploración." },
                  { title: "Revisión de resultados", description: "Asegurar que los resultados realmente incorporen exploración e innovación." }
                ]}
             />
             <LimitationSection title='Limitaciones y Consideraciones' description='Este nivel implica apertura e incertidumbre, lo que puede resultar desafiante. Requiere una base disciplinar suficiente para sostener el análisis crítico.
El acompañamiento docente y la claridad en los criterios son clave para asegurar la calidad del aprendizaje.' />

             <CustomExamplesLevel5 />
     </AnimatedSection>

          <CTASection onClick={()=>navigate('/transformacion')} text="Continua: transformación" />

        </div>
      </div>
    </div>
  );
}