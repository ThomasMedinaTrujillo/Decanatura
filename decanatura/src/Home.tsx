
import Hero from './Components/Hero';
import ResourceInfo from './Components/ResourceInfo';
import AboutSection from './Components/AboutSection';
import MomentCard from './Components/MomentCard';
import LiveResourceInfo from './Components/LiveResourceInfo';


const imgRectangle3 = new URL('./assets/ea4e799565a7949f0a9b64152e259734e9596d20.png', import.meta.url).href;
const imgAttractiveFreelanceAsianFemaleCreativePersonWearCasualYellowClothHandPointWriteDownPaperNoteStickReminderCoworkingSpaceNewLifestyleWithThoughfulFreshnessEmotion1 = new URL('./assets/232ad235ee629687e125b7baf0dda9f10bf2f127.png', import.meta.url).href;
const imgGroupGraphicDesignersInteractingGraph1 = new URL('./assets/f7bac446758034b4bc3d6651f13558691011bd7c.png', import.meta.url).href;
const imgAsianBusinessmenBusinesswomenMeetingBrainstormingIdeasAboutCreativeWebDesignPlanningApplicationDevelopingTemplateLayoutMobilePhoneProjectWorkingTogetherSmallOffice1 = new URL('./assets/d7c83af7cff199032e816b273fd0b371a7d3b8a2.png', import.meta.url).href;

export default function Home() {
  return (
    <div className=" w-full" data-node-id="7:612" data-name="Home">
      
      
      <div className="pt-25.5">
        <Hero />
      </div>

      <div className="py-20">
        <ResourceInfo />
      </div>

      <div>
        <AboutSection bgImage={imgRectangle3} />
      </div>

      <div className="relative top-[-70px] px-20">
        <div className="flex flex-row justify-between gap-7.5">
          <MomentCard
            momentNumber={1}
            title="Exploración"
            description="Reflexiona sobre el problema y posibles formas de abordarlo."
            image={imgAttractiveFreelanceAsianFemaleCreativePersonWearCasualYellowClothHandPointWriteDownPaperNoteStickReminderCoworkingSpaceNewLifestyleWithThoughfulFreshnessEmotion1}
            titleColor="#865cf0"
            items={[
              'Panorama actual',
              'El problema de la evaluación en tiempos de IAG',
              'Qué es el AIAS y por qué usarlo',
            ]}
            knowmore='/exploracion'
        
          />

          <MomentCard
            momentNumber={2}
            title="Profundización"
            description="Conoce los niveles del AIAS en detalle."
            image={imgAsianBusinessmenBusinesswomenMeetingBrainstormingIdeasAboutCreativeWebDesignPlanningApplicationDevelopingTemplateLayoutMobilePhoneProjectWorkingTogetherSmallOffice1}
            titleColor='#e9683b'
            items={[
              'Niveles 1–5 del AIAS en detalle',
              'Sentido pedagógico de cada nivel',
              'Qué y cómo evaluar',
              'Ejemplos concretos por nivel',
            ]}
            knowmore='/profundizacion'


          />

          <MomentCard
            momentNumber={3}
            title="Transformación"
            description="Rediseña tus evaluaciones paso a paso."
            image={imgGroupGraphicDesignersInteractingGraph1}
            titleColor="#4cb979"
            items={[
              'Diagnóstico de tu syllabus actual',
              'Selección del nivel adecuado para cada actividad',
              'Herramientas y prompts para el GPT del AIAS',
            ]}
            knowmore='/transformacion'
          />
        </div>
      </div>

      <div className="py-20">
        <LiveResourceInfo />
      </div>
    </div>
  );
}
