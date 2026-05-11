import React from 'react';
import Navbar from '../Components/Navbar';
import SectionHeading from '../Components/SectionHeading';
import Sidebar from '../Components/Sidebar';
import Button from '../Components/Button';
import AIASLevel from '../Components/AIASLevel';

export default function Momento2() {
  const sidebarItems = [
    { label: 'Momento 2: Criterios', href: '#' },
    { label: 'Permitir la IA o no', href: '#' },
    { label: 'Nivel 1: No IAG', href: '#' },
    { label: 'Nivel 2: Planificación', href: '#' },
    { label: 'Nivel 3: Colaboración', href: '#' },
    { label: 'Nivel 4: Uso estratégico', href: '#' },
    { label: 'Nivel 5: Exploración', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      
      {/* Banner / Intro (can reuse Momento1Banner or make a new one) */}
      <div className="bg-[#865CF0] text-white py-12 px-4 lg:px-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Momento 2: Profundización</h1>
        <p className="text-lg max-w-3xl font-['Plus_Jakarta_Sans']">
          Este momento busca explicar en detalle lo que implica evaluar con o sin IAG, tomando como marco la escala AIAS. No es necesario recorrerlo en orden ni completo. Identifica qué pregunta te trajo hasta aquí y empieza por esa.
        </p>
      </div>

      <div className="w-full px-4 lg:px-8 flex gap-8 py-8">
        {/* Sidebar */}
        <div className="hidden lg:block w-1/4">
            <Sidebar 
            title="Profundización" 
            stepNumber={2} 
            items={sidebarItems} 
            />
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full font-['Plus_Jakarta_Sans']">

          {/* Intro questions */}
          <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded shadow-sm text-center font-bold text-gray-700">"No sé si debo permitir IAG en mi evaluación"</div>
            <div className="p-4 border rounded shadow-sm text-center font-bold text-gray-700">"¿Qué implica cada nivel del AIAS?"</div>
            <div className="p-4 border rounded shadow-sm text-center font-bold text-gray-700">"Quiero ver cómo lo hacen en mi disciplina"</div>
          </section>

          {/* Permitir IA o no */}
          <section className="mb-16">
             <SectionHeading title="Permitir la IA o no en la evaluación" />
             <p className="text-base text-gray-700 mb-4 bg-gray-50 p-6 rounded-lg">
               Formule las siguientes preguntas para una evaluación de su curso: ¿Hay competencias en esta evaluación que el estudiante debe demostrar de forma completamente autónoma, sin apoyo externo de ningún tipo, porque son fundamento para lo que viene después, en el programa o en su vida profesional? ¿El uso de IAG invalidaría la evidencia del aprendizaje que quiero evaluar?
             </p>
          </section>

          <section className="mb-16">
             <SectionHeading title="Qué implica cada nivel del AIAS" />
             <p className="text-base text-gray-700 mb-8">
               En este apartado encontrarás el sentido pedagógico, criterios claros de qué y cómo evaluar, y ejemplos concretos de cada nivel del AIAS. Puedes recorrerlo en orden o ir directamente al nivel que más se ajusta a lo que buscas.
             </p>

             {/* Niveles del AIAS */}
             <AIASLevel 
                title="Nivel 1: No IAG"
                description="En este nivel, la actividad evaluativa es desarrollada en su totalidad sin la ayuda de la IA."
                pedagogicalSense="Ubicar, y luego diseñar, una actividad en este nivel, tiene un objetivo pedagógico claro: evaluar habilidades esenciales e irreductibles, que el estudiante debe dominar y demostrar sin apoyo de la IAG."
                whenMakeSense={[
                  "La evaluación mide una habilidad que es prerrequisito explícito o implícito para cursos posteriores.",
                  "La IAG puede simular por completo el resultado de aprendizaje, pero se requiere evidencia de que el estudiante puede hacerlo por sí mismo.",
                  "La actividad evalúa una competencia crítica que será clave cuando el estudiante deba tomar decisiones críticas bajo su propia responsabilidad."
                ]}
                whenNotMakeSense={[
                  "No se puede verificar que el estudiante usó IAG.",
                  "El aprendizaje no depende de trabajar sin herramientas, sino de interpretar, evaluar, diseñar o tomar decisiones en un contexto disciplinar."
                ]}
                howToEvaluateDescription="Algunas estrategias para evaluar en este nivel son:"
                howToEvaluateStrategies={[
                  { title: "Exámenes presenciales y supervisados", description: "Puede incluir restricciones de dispositivos electrónicos." },
                  { title: "Evaluaciones con software seguro", description: "Plataformas que limitan el acceso a internet u otros recursos externos durante la actividad." },
                  { title: "Evaluaciones orales", description: "Respuesta inmediata sin preparación previa, donde se evalúa el pensamiento in situ. Como debates, resolución de problemas en tiempo real, resolución comentada en voz alta." },
                  { title: "Reflexiones situadas", description: "Respuestas en las que el estudiante analiza y da sentido a una experiencia concreta vivida, conectando lo que hizo, pensó o decidió con el aprendizaje." },
                  { title: "Evaluaciones prácticas supervisadas", description: "Como prácticas de laboratorio, simulaciones clínicas, intervenciones supervisadas en práctica docente." }
                ]}
                implications={[
                  { title: "Reflexión sobre los resultados", description: "El docente debe reflexionar sobre qué aspectos del aprendizaje son esenciales e indelegables, y por tanto justifican el uso de un Nivel 1." },
                  { title: "Garantizar un entorno controlado", description: "El docente debe diseñar la actividad garantizando que la restricción de uso de la IAG es real y no sólo discursiva." },
                  { title: "Comunicación a estudiantes", description: "Asimismo, el docente debe comunicar claramente al estudiante la razón por la que la actividad evaluativa es sin IAG, e involucrarlo en la discusión." }
                ]}
                examples={[
                  "En un curso de licenciatura, los estudiantes discuten en grupos diferentes estrategias didácticas para un caso específico y luego escriben una reflexión situada sobre su experiencia: qué propusieron, qué aprendieron de las ideas de otros y cómo ajustarán su enfoque basándose en la interacción vivida.",
                  "En un curso de Microeconomía, los estudiantes participan en un debate en clase donde cada grupo formula preguntas analíticas y situadas a partir de lo que exponen otros grupos, y los interrogados deben responder en el momento. Luego escriben una reflexión sobre su participación."
                ]}
             />

             <AIASLevel 
                title="Nivel 2: IAG para planificación e ideación"
                description="En este nivel, el estudiante puede utilizar la IAG exclusivamente para apoyar la fase inicial de una tarea o proyecto, tales como la exploración de ideas, esquematización, e investigación inicial. El producto final no debe tener contenido generado directamente por la IA."
                pedagogicalSense="Utilizar la IAG como apoyo inicial puede enriquecer el aprendizaje, especialmente en tareas donde no importa tanto el origen de las ideas, sino cómo el estudiante las analiza y desarrolla por su cuenta."
                whenMakeSense={[
                  "La exploración de nuevas ideas y perspectivas usando IAG amplía la mirada del estudiante y puede potenciar el proceso de aprendizaje."
                ]}
                whenNotMakeSense={[
                  "Se evalúan habilidades fundamentales o básicas que deben demostrarse sin herramientas externas.",
                  "La ideación, la argumentación desde cero, o la exploración de soluciones, es una competencia esencial que el curso busca desarrollar de forma autónoma (ej: composición musical introductoria, pensamiento lógico)."
                ]}
                whatToEvaluate={[
                  "Capacidad de formular prompts con intención y criterio claro.",
                  "Selección y refinamiento de ideas generadas por la IAG.",
                  "Desarrollo autónomo de un producto final que refleje comprensión, criterio y elaboración propia."
                ]}
                howToEvaluateDescription="La evaluación se centra en el producto final, y opcionalmente la evidencia de interacción con IA."
                howToEvaluateStrategies={[
                  { title: "Presentación integrada en el producto final", description: "que evidencie el proceso de interacción con IAG. Por ejemplo, se muestra una lista de ideas generadas y el por qué se escogió una." },
                  { title: "Comentario reflexivo", description: "sobre cómo la IA apoyó en la ideación y planificación de la tarea." },
                  { title: "Rúbrica o lista de chequeo", description: "para evaluar el producto final. El docente puede usar su rúbrica sin cambios o hacerle un ajuste que considere este criterio." }
                ]}
                implications={[
                  { title: "Reflexión sobre los resultados", description: "Preguntarse si el uso de la IAG potenciaría o dificultaría alcanzar el resultado de aprendizaje específico." },
                  { title: "Ajustar la consigna", description: "Especificar qué usos están permitidos y en qué momentos se puede usar la IAG." },
                  { title: "Decidir si se ajustan evidencias", description: "Decidir si es pertinente pedir evidencias del proceso de interacción con IAG." }
                ]}
                examples={[
                  "En un curso de Diseño de Medios Interactivos, los estudiantes desarrollan una pieza multimedia. En la fase inicial, usan IAG para explorar ideas de concepto. Lo evaluado no es esa exploración, sino el desarrollo construido: el storyboard, decisiones de visuales y pieza final."
                ]}
             />

             <AIASLevel 
                title="Nivel 3: Colaboración con IAG"
                description="La IAG colabora con el estudiante en el desarrollo de la actividad evaluativa aportando ideas, argumentos o feedback. El estudiante evalúa estas contribuciones y decide qué aceptar. Mantiene la responsabilidad intelectual del final."
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
                  "El razonamiento disciplinar y El producto final."
                ]}
                howToEvaluateDescription="Aquí se evalúa cómo el estudiante trabaja críticamente con la IA, no solo el resultado final. Involucra evaluar la calidad de los outputs, la del proceso de interacción, y contrastar juicios."
                implications={[
                  { title: "Orientación y expectativas", description: "Los estudiantes deben ser apoyados en entender las limitaciones de la IAG, para empoderar su criterio e impedir dependencia." },
                  { title: "Pautas de documentación", description: "El docente debe establecer directrices claras de cómo documentar el uso de IAG." },
                  { title: "Evaluación del proceso", description: "Más allá del producto, se debe valorar cómo el estudiante interactúa con la IAG, analiza y mejora los outputs." }
                ]}
                examples={[
                  "En un curso de Biología, estudiantes usan IAG para generar hipótesis experimentales. Luego las analizan críticamente sin IAG y modifican el diseño para que sea válido científicamente. Esta fase se realiza sin apoyo para asegurar que demuestren su razonamiento independiente."
                ]}
             />

             <AIASLevel 
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
                howToEvaluateDescription="Estrategias orientadas en explicar por qué tomó decisiones y cómo evaluó calidad:"
                howToEvaluateStrategies={[
                  { title: "Componentes reflexivos", description: "Donde el estudiante explique: cómo utilizó la IAG, sus decisiones, y cómo evaluó los outputs." },
                  { title: "Evaluaciones complementarias", description: "Defensas orales, preguntas no previstas, análisis de partes concretas del trabajo." },
                  { title: "Instrumentos", description: "Rúbricas que valoren la calidad del resultado final y la pertinencia del uso de IAG." }
                ]}
                implications={[
                  { title: "Revisión de resultados", description: "Asegurar que valoren competencias superiores (análisis, evaluación, diseño, aplicación) y no solo producción." },
                  { title: "Claridad disciplinar y diseño", description: "Clarificar qué es uso estratégico. Explicitar que se permite en todo el proceso y que se espera uso fundamentado." },
                  { title: "Equidad", description: "Considerar el acceso desigual a herramientas, promoviendo el uso de herramientas institucionales gratuitas." }
                ]}
                examples={[
                  "En Derecho Constitucional, estudiantes elaboran un legal brief sobre protección de derechos con ayuda de IAG en todo momento. La nota es sobre su capacidad de seleccionar, evaluar aserciones de la herramienta, argumentar y no sobre la redacción automatizada misma."
                ]}
             />

             <AIASLevel 
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
                  "Analizar y evaluar cuándo y cómo usar la IAG de forma estratégica.",
                  "Explorar distintos usos y proponer soluciones, artefactos o productos innovadores.",
                  "Justificar las decisiones tomadas incluyendo límites, riesgos e impacto de la IA."
                ]}
                howToEvaluateDescription="Debido a lo abierto de la exploración, la evaluación requiere formatos más libres."
                howToEvaluateStrategies={[
                  { title: "Proyectos o artefactos", description: "Prototipos o propuestas aplicadas que nacen de la exploración iterativa con la IA." },
                  { title: "Defensas y rúbricas flexibles", description: "Discutir decisiones y evaluar calidad de los hallazgos en vez de ceñirse a una instrucción rígida." }
                ]}
                implications={[
                  { title: "Apertura en el diseño", description: "Requiere aceptar diversidad de resultados y procesos no lineales. El docente cede control." },
                  { title: "Criterios claros pero flexibles", description: "Es necesario definir criterios de calidad (análisis, rigor, coherencia), evitando limitar la exploración." },
                  { title: "Revisión de resultados", description: "Asegurar que los resultados realmente incorporen exploración e innovación." }
                ]}
                examples={[
                  "En Pedagogía, estudiantes diseñan y prototipan una nueva forma de evaluación mediada por IAG orientada a transformar la prueba de aprendizaje.",
                  "En Desarrollo de Negocios Sostenibles, diseñan un modelo de negocio con IAG central pero analizando explícitamente su impacto ético y ambiental (Ej: consumo energético)."
                ]}
             />

          </section>

          {/* CTA Button */}
          <section className="mb-16 text-center">
            <Button variant="primary" size="lg">
              Continuar al siguiente momento
            </Button>
          </section>

        </div>
      </div>
    </div>
  );
}