import React from 'react';

interface FrameworkCardProps {
  name: string;
  description: string;
  attribution: string;
}

const FrameworkCard = ({ name, description, attribution }: FrameworkCardProps) => (
  <div className="bg-white border" style={{ borderColor: '#cecfd4', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '234px' }}>
    <div className="flex flex-col gap-[13.175px]">
      <p className="font-bold leading-[1.5]" style={{ color: '#865cf0', fontSize: '24px' }}>
        {name}
      </p>
      <p className="font-normal leading-normal" style={{ fontSize: '14px', color: 'black' }}>
        {description}
      </p>
    </div>
    <p className="font-normal italic" style={{ fontSize: '14px', color: '#88898c' }}>
      {attribution}
    </p>
  </div>
);

export default function CompetencyFramework() {
  const frameworks = [
    {
      id: 1,
      name: 'Two-Lane Model',
      description: 'Divide las evaluaciones en dos carriles: evaluaciones seguras, donde se garantiza que el trabajo es del estudiante, y evaluaciones abiertas, donde se asume que la IAG puede estar presente. ',
      attribution: 'Liu & Bridgeman, Universidad de Sydney (2023)',
    },
    {
      id: 2,
      name: 'Marco de Competencias en IA para Docentes',
      description: 'Marco amplio e integral. Propone estándares de competencia en IA para docentes en cinco dimensiones: pedagogía, currículo, evaluación, desarrollo profesional y ética. ',
      attribution: 'Liu & Bridgeman, Universidad de Sydney (2023)',
    },
    {
      id: 3,
      name: 'DigComp 3.0',
      description: 'Quinta edición del Marco Europeo de Competencias Digitales que consolida la IA como un componente transversal de la ciudadanía. Define los conocimientos y actitudes necesarios para interactuar con sistemas inteligentes, haciendo especial énfasis en la curación de datos, la mitigación de sesgos y la seguridad en entornos automatizados.',
      attribution: 'Liu & Bridgeman, Universidad de Sydney (2023)',
    },
    {
      id: 4,
      name: 'Suplemento DigCompEdu',
      description: 'Amplía el marco original de la Comisión Europea mediante la definición de competencias específicas en IA. Se centra en la alfabetización en IA (AI Literacy), capacitando a los docentes para comprender el funcionamiento de los algoritmos, gestionar la ética y la privacidad, y utilizar la IA generativa para la creación de recursos y la inclusión educativa.',
      attribution: 'Liu & Bridgeman, Universidad de Sydney (2023)',
    },
    {
      id: 5,
      name: 'AI Assessment Scale (AIAS)',
      description: 'Marco centrado en el diseño evaluativo. Propone cinco posiciones de integración de la IAG en función de los resultados de aprendizaje. ',
      attribution: 'Perkins, Furze, Roe y MacVaugh (2025)',
    },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px', gridAutoRows: 'fit-content(100%)' }}>
      {frameworks.slice(0, 3).map((framework) => (
        <FrameworkCard
          key={framework.id}
          name={framework.name}
          description={framework.description}
          attribution={framework.attribution}
        />
      ))}
      
      {frameworks.slice(3, 4).map((framework) => (
        <FrameworkCard
          key={framework.id}
          name={framework.name}
          description={framework.description}
          attribution={framework.attribution}
        />
      ))}
      {frameworks.slice(4).map((framework) => (
        <FrameworkCard
          key={framework.id}
          name={framework.name}
          description={framework.description}
          attribution={framework.attribution}
        />
      ))}
      
      <div style={{ gridColumn: '3', padding: '10px', fontSize: '16px', color: 'black' }}>
        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 400, marginBottom: '0.5em' }}>
          Estos marcos proporcionan una base conceptual y ética para comprender el nuevo rol docente y las competencias asociadas en la era de la inteligencia artificial.
        </p>
        <p>
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 400 }}>Volviendo a la pregunta central de este apartado: </span>
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>¿cómo diseñar actividades evaluativas que sean válidas?</span>
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 400 }}> Este recurso desarrolla en profundidad la escala AIAS, por su orientación práctica y énfasis en el rediseño estructural de las evaluaciones.</span>
        </p>
      </div>
    </div>
  );
}
