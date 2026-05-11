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
import Button from '../Components/Button';
import Sidebar from '../Components/Sidebar';

export default function Momento1() {
  const sidebarItems = [
    { label: 'Un recurso con varios puntos de partida', href: '#' },
    { label: 'Panorama y tendencias actuales', href: '#' },
    { label: 'Todo problema (no) tiene solución', href: '#' },
    { label: '¿Permitimos el uso de IA o no?', href: '#' },
    { label: 'Una mirada a tu práctica', href: '#', isIndented: true },
    { label: 'Marcos de competencias y de integración de la IA en educación', href: '#', isIndented: true },
    { label: '¿Cómo diseñar actividades evaluativas que sean válidas?', href: '#' },
    { label: 'Qué es el AIAS, y que no es', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      
      {/* Moment 1 Banner */}
      <Momento1Banner />
      
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
        <section className="mb-16">
          <SectionHeading 
            title="Un recurso con varios puntos de partida"
            subtitle=""
          />
          <ContentSection 
            leftText="Quizás ya repensaste tu práctica docente, quizás buscas unas pautas claras, quizás tienes críticas y reservas, o quizás sientes agotamiento por todos los cambios sin pausa que se han desarrollado en el marco de la IAG."
            rightText="Todas estas posiciones son comprensibles. Y todas comparten algo: el escenario ya no es el mismo de hace unos años y es momento de pensar cómo afrontar el cambio. Este recurso es un espacio para pensar con detenimiento qué está realmente en juego, y qué herramientas existen para navegarlo con criterio."
          />
        </section>

        {/* Section 2: Panorama y tendencias actuales */}
        <section className="mb-16">
          <SectionHeading 
            title="Panorama y tendencias actuales"
            subtitle=""
          />
          <PanoramaSection />
        </section>

        {/* Section 3: Survey Results */}
        <section className="mb-16">
          <SectionHeading 
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
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-center text-sm text-gray-600">
            Con cerca de 30.000 respuestas en 29 instituciones de América Latina, el Digital Education Council (2026).
          </p>
        </section>

        {/* Emotional Card */}
        <section className="mb-16 ">
          <ResourcePanel />
        </section>

        {/* Section 4: Wicked Problems */}
        <section className="mb-16">
          <SectionHeading 
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

        {/* Section 5: Allow AI or not */}
        <section className="mb-16">
          <SectionHeading 
            title="¿Permitimos el uso de IA o no?"
            subtitle=""
          />
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="mb-8 text-base">
            La pregunta que más se hace no es la más útil. Si estamos dispuestos a reconocer la creciente ubicuidad de la IA, sumado a la baja fiabilidad de los detectores, la pregunta no puede seguir siendo si permitir o prohibirla (Perkins et al., 2025).
          </p>
          <DesignActivity />
                    <ResourcePanel />

        </section>

        {/* Section 6: How to design valid assessments */}
        <section className="mb-16">
          <SectionHeading 
            title="¿Cómo diseñar actividades evaluativas que sean válidass?"
            subtitle=""
          />
          <div className="mb-8">
            <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serifs' }} className="text-xl font-semibold text-gray-900 mb-2">Una mirada a tu práctica</h3>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-base text-gray-700 mb-8">
              Piensa en una evaluación que haces en tu curso. No con el objetivo de juzgar, sino para observar con nuevas preguntas.
            </p>
          </div>
          <ReflectionQuestions />
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-sm text-gray-600 mt-8">
            No es necesario tener respuestas completas por ahora, volveremos a estas en los siguientes momentos del recurso, profundización y transformación.
          </p>
        </section>

        {/* Section 7: Competency Frameworks */}
        <section className="mb-16">
          <SectionHeading 
            title="Marcos de competencias y de integración de la IA en educación"
            subtitle="Cinco marcos que lideran la literatura actual"
          />
          <CompetencyFramework />
        </section>

        {/* Section 8: AIAS Definition */}
        <section className="mb-16">
          <SectionHeading 
            title="Qué es el AIAS, y que no es"
            subtitle=""
          />
          <ContentSection 
            leftText="El AIAS, desarrollado por Perkins, Furze, Roe y MacVaugh (actualmente en su segunda versión, 2025), es un marco centrado en el diseño evaluativo que busca orientar la integración de la IAG en función de los resultados de aprendizaje — y no al revés."
            rightText="Está fundamentado en principios del constructivismo social: el aprendizaje ocurre a través de la interacción con otros, con el entorno y con las herramientas culturales disponibles (Vygotsky, 1978 citado por Perkins et al., 2025), siendo la IAG una herramienta potencial para apoyar ese aprendizaje."
          />
        </section>

        {/* Section 9: AIAS IS / IS NOT */}
        <section className="mb-16">
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: 1, border: '1px solid #cecfd4', padding: '10px' }}>
              <div style={{ padding: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, lineHeight: 'normal', color: '#865cf0', fontSize: '20px' }}>
                    El AIAS es
                  </p>
                  <ul style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 400, lineHeight: 0, listStyleType: 'disc', fontSize: '14px', color: 'black' }}>
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
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, lineHeight: 'normal', color: '#865cf0', fontSize: '20px' }}>
                    El AIAS no es
                  </p>
                  <ul style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 400, lineHeight: 0, listStyleType: 'disc', fontSize: '14px', color: 'black' }}>
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
