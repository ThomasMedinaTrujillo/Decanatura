import React from 'react';
import Navbar from '../Components/Navbar';
import Momento1Banner from '../Components/Momento1Banner';
import SectionHeading from '../Components/SectionHeading';
import ContentSection from '../Components/ContentSection';
import StatsCard from '../Components/StatsCard';
import QuoteSection from '../Components/QuoteSection';
import ResourcePanel from '../Components/ResourcePanel';
import DesignActivity from '../Components/DesignActivity';
import PanoramaSection from '../Components/PanoramaSection';
import ReflectionQuestions from '../Components/ReflectionQuestions';
import CompetencyFramework from '../Components/CompetencyFramework';
import Sidebar from '../Components/Sidebar';

import {motion} from 'framer-motion'
import CTASection from '../Components/CTASection';
import { useNavigate } from 'react-router';

export default function Momento1() {

  const navigate = useNavigate();
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6,  } }
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
  const sidebarItems = [
    { label: 'Un recurso con varios puntos de partida', href: '#' },
    { label: 'Panorama y tendencias actuales', href: '#' },
    { label: 'Todo problema (no) tiene solución', href: '#' },
    { label: '¿Permitimos el uso de IA o no?', href: '#' },
    { label: 'Una mirada a tu práctica', href: '#', isIndented: true },
    { label: 'Marcos de competencias y de integración de la IA en educación', href: '#', isIndented: true },
    { label: '¿Cómo diseñar actividades evaluativas que sean válidas?', href: '#' },
    { label: 'Qué es el AIAS, y qué no es', href: '#' },
  ];

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      {/* Moment 1 Banner */}
      <Momento1Banner momento="Momento 1" title="Exploración"/>
      

      <div className="w-full px-4  lg:px-8 flex gap-8 py-8">
        
        {/* Sidebar */}
        <Sidebar 
          title="Exploración" 
          stepNumber={1} 
          items={sidebarItems} 
        />

        {/* Main Content */}
        <div className="flex-1 w-full ">
      

        {/* Section 1: Un recurso con varios puntos de partida */}
        
        <AnimatedSection>

        <section className="mb-16">
          <SectionHeading
          
        bgcolor='#865CF0' 
            title="Un recurso con varios puntos de partida"
            subtitle=""
          />
          <ContentSection 
            leftText="Quizás ya repensaste tu práctica docente, quizás buscas unas pautas claras, quizás tienes críticas y reservas, o quizás sientes agotamiento por todos los cambios sin pausa que se han desarrollado en el marco de la IAG."
            rightText="Todas estas posiciones son comprensibles. Y todas comparten algo: el escenario ya no es el mismo de hace unos años y es momento de pensar cómo afrontar el cambio. Este recurso es un espacio para pensar con detenimiento qué está realmente en juego, y qué herramientas existen para navegarlo con criterio."
          />
        </section>
        </AnimatedSection> 
        <AnimatedSection>


        {/* Section 2: Panorama y tendencias actuales */}
        <section className="mb-16">
          <SectionHeading
          
        bgcolor='#865CF0' 
            title="Panorama y tendencias actuales"
            subtitle=""
          />
          <PanoramaSection />
        </section>

          </AnimatedSection> 
        {/* Section 3: Survey Results */}
        <AnimatedSection>


        <section className="mb-16">
          <SectionHeading
          
        bgcolor='#865CF0' 
            title="Lo que revela la encuesta regional más grande sobre IA en educación superior"
            subtitle=""
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard 
              stat="92%"
              description="de estudiantes ya usa IA en su aprendizaje"
            />
            <StatsCard 
              stat="65%"
              description="teme que la IA erosione el pensamiento crítico"
            />
            <StatsCard 
              stat="73%"
              description="espera usarla en su trabajo futuro"
            />
            <StatsCard 
              stat="+50%"
              description="de docentes reconoce limitaciones propias en comprensión y juicio crítico sobre IA"
            />
          </div>
          <div className="space-y-4 text-sm leading-6 text-gray-700">
            <p>
              Con cerca de 30.000 respuestas en 29 instituciones de América Latina, el Digital Education Council
              (2026) revela que el 92% de los estudiantes utiliza la IA en su aprendizaje, el 73% espera usarla en su
              trabajo futuro y más del 50% vería una prohibición institucional de la IA como un retroceso, no como una
              protección.
            </p>
            <p>
              Pero hay una tensión en el estudiantado que vale nombrar: el 65% teme que la IA erosione el pensamiento
              crítico y la creatividad, más del 45% considera que sus competencias en IAG son aún limitadas, y el 57%
              espera que su institución brinde mayor formación en competencias de IA. Afrontar este desafío exige
              criterio docente. Sin embargo, más del 50% de los docentes reconoce limitaciones en sus propias
              competencias de IA.
            </p>
            <p>
              Los estudiantes piden más formación. Los docentes reconocen que también la necesitan. Cerrar esta brecha
              no es una tarea sencilla, principalmente porque nos enfrentamos a un desafío que no tiene una única
              respuesta correcta.
            </p>
          </div>
        </section>
        </AnimatedSection> 
        <AnimatedSection>


        {/* Emotional Card */}
        <section className="mb-16 ">
          <ResourcePanel />
        </section>
          </AnimatedSection> 
        <AnimatedSection>


        {/* Section 4: Wicked Problems */}
        <section className="mb-16">
          <SectionHeading
          
        bgcolor='#865CF0' 
            title="Todo problema (no) tiene solución"
            subtitle=""
          />
          <ContentSection 
            leftText="Hay problemas que son síntomas de falencias estructurales más profundas: desvinculación estudiantil, mercantilización de la educación, sobrecarga laboral. Problemas que crecen y mutan más rápido de lo que cualquier política podría responder. Donde no hay forma de probar todas las soluciones posibles o de saber cuándo se resolvió el problema."
            rightText="Rittel y Webber (1973) llamaron a estos desafíos wicked problems, problemas que resisten toda solución definitiva. La evaluación en tiempos de IA exhibe justamente esas características: sin formulación única, sin criterio claro de éxito, y donde cada solución implica sacrificar algo (Corbin, Bearman, Boud y Dawson, 2025).Reconocer esto puede ser liberador. Permite al docente fallar, crear, iterar y navegar la complejidad sin la presión de encontrar la solución perfecta (Corbin et., al 2025). "/>
          <QuoteSection 
            quote="Universities that continue to chase the elusive 'right answer' to AI in assessment will exhaust their educators while failing their students. Those that embrace the wicked nature of this problem can build cultures that support thoughtful professional judgment rather than punish imperfect solutions. (Corbin et. al 2025)."
          />
        </section>
        </AnimatedSection> 
        <AnimatedSection>


        {/* Section 5: Allow AI or not */}
        <section className="mb-16">
          <SectionHeading
          
            bgcolor='#865CF0' 
            title="¿Permitimos el uso de IA o no?"
            subtitle=""
          />
          <div className="space-y-4 text-base leading-7 text-gray-700">
            <p className="font-semibold text-gray-900">La pregunta que más se hace no es la más útil.</p>
            <p>
              Dada la creciente ubicuidad de la IA, sumado a la baja fiabilidad de los detectores de IA, la pregunta
              no puede seguir siendo si permitir o prohibirla (Perkins et al., 2025).
            </p>
            <p>
              La anterior declaración invita a soltar el control, pero abre otras preocupaciones respecto al
              aprendizaje de los estudiantes: ¿el uso de la IA invalida la evaluación? ¿Invalida el aprendizaje?
            </p>
            <p>La respuesta corta es: depende.</p>
            
          </div>
          <DesignActivity />

        </section>
        </AnimatedSection> 
        <AnimatedSection>


        {/* Section 6: How to design valid assessments */}
        <section className="mb-16">
          <SectionHeading
          
        bgcolor='#865CF0' 
            title="¿Cómo diseñar actividades evaluativas que sean válidas?"
            subtitle=""
          />
          <p className="mb-6 text-base leading-7 text-gray-700">
            Responder con criterio exige primero claridad sobre qué se está evaluando y para qué.
          </p>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Una mirada a tu práctica</h3>
            <p className="text-base text-gray-700 mb-8">
              Piensa en una evaluación que haces en tu curso. No con el objetivo de juzgar, sino para observar con nuevas preguntas.
            </p>
          </div>
          <ReflectionQuestions />
          <p className="text-sm text-gray-600 mt-8">
              No es necesario tener respuestas completas por ahora; volveremos a ellas en los siguientes momentos del recurso: profundización y transformación.
          </p>
        </section>
        </AnimatedSection> 
        <AnimatedSection>


        {/* Section 7: Competency Frameworks */}
        <section className="mb-16">
          <SectionHeading
          
        bgcolor='#865CF0' 
            title="Marcos de competencias y de integración de la IA en educación"
            subtitle="Cinco marcos que lideran la literatura actual"
          />
          <CompetencyFramework />
        </section>
          </AnimatedSection> 
        <AnimatedSection>


        {/* Section 8: AIAS Definition */}
        <section className="mb-16">
          <SectionHeading
        bgcolor='#865CF0' 
        title="Qué es el AIAS, y qué no es"
        subtitle=""
          />
          <ContentSection 
            leftText="El AIAS, desarrollado por Perkins, Furze, Roe y MacVaugh (actualmente en su segunda versión, 2025), es un marco centrado en el diseño evaluativo que busca orientar la integración de la IAG en función de los resultados de aprendizaje — y no al revés."
            rightText="Está fundamentado en principios del constructivismo social, particularmente en la idea de que el aprendizaje ocurre a través de la interacción con otros, con el entorno y con las herramientas culturales disponibles (Vygotsky, 1978 citado por Perkins et al., 2025), siendo la IAG una herramienta potencial para apoyar el aprendizaje (Perkins et al., 2025)."
          />
          <div className="mt-8 space-y-4 text-base leading-7 text-gray-700">
            <p>
              Este marco propone 5 niveles de integración, que van desde el no uso de IA hasta la co-creación plena
              con IA. Los niveles no son jerárquicos, su elección depende de varias consideraciones. Con mayor detalle,
              abordaremos los niveles en los siguientes momentos.
            </p>
            
          </div>
        </section>
        </AnimatedSection> 
        <AnimatedSection>


        {/* Section 9: AIAS IS / IS NOT */}
        <section className="mb-16">
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: 1, border: '1px solid #cecfd4', padding: '10px' }}>
              <div style={{ padding: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p style={{ fontWeight: 700, lineHeight: 'normal', color: '#865cf0', fontSize: '20px' }}>
                    El AIAS es
                  </p>
                  <ul style={{ fontWeight: 400, lineHeight: 0, listStyleType: 'disc', fontSize: '14px', color: 'black' }}>
                    <li style={{ marginBottom: 0, marginLeft: '21px' }}>
                      <span style={{ lineHeight: 'normal' }}>Un marco flexible para el diseño evaluativo.</span>
                    </li>
                    <li style={{ marginBottom: 0, marginLeft: '21px' }}>
                      <span style={{ lineHeight: 'normal' }}>Una orientación para formar a estudiantes en capacidades críticas respecto a la IA. </span>
                    </li>
                    <li style={{ marginLeft: '21px' }}>
                      <span style={{ lineHeight: 'normal' }}>Un lenguaje común para hacer explícito y transparente las expectativas de docentes y estudiantes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, border: '1px solid #cecfd4', padding: '10px' }}>
              <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'fit-content' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
                  <p style={{ fontWeight: 700, lineHeight: 'normal', color: '#865cf0', fontSize: '20px' }}>
                    El AIAS no es
                  </p>
                  <ul style={{ fontWeight: 400, lineHeight: 0, listStyleType: 'disc', fontSize: '14px', color: 'black' }}>
                    <li style={{ marginBottom: 0, marginLeft: '21px' }}>
                      <span style={{ lineHeight: 'normal' }}>Una solución universal aplicable sin adaptación.</span>
                    </li>
                    <li style={{ marginLeft: '21px' }}>
                      <span style={{ lineHeight: 'normal' }}>Una herramienta para restringir o prohibir el uso de la IAG, o para permitir su uso sin buen motivo.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        </AnimatedSection> 

        {/* CTA Button */}
        <section className="mb-16 text-center">
          <CTASection onClick={() => navigate('/profundizacion')} text="Continuar: Profundización" />
        </section>
        </div>
      </div>
    </div>
  );
}
