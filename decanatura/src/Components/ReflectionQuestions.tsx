import React from 'react';

interface QuestionBoxProps {
  question: string;
}

const QuestionBox = ({ question }: QuestionBoxProps) => (
  <div className="border-l-[3px]" style={{ borderLeftColor: '#865cf0', paddingLeft: '15px', paddingTop: '10px', paddingBottom: '10px', paddingRight: '15px', height: '102px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-[17px] font-normal text-black leading-normal">
      {question}
    </p>
  </div>
);

export default function ReflectionQuestions() {
  const questions = [
    "¿Qué esperas que el estudiante sepa y pueda hacer sin ayuda de la IA?",
    "¿Podrían alcanzarse los resultados de aprendizaje incluso si el estudiante usara la IA en el proceso?",
    "¿Hay aspectos de esa evaluación en los que la IA podría ser un aliado para aprendizaje?"
  ];

  return (
    <div className="flex gap-[86px] items-start justify-center" style={{ paddingLeft: '4px', paddingRight: '4px' }}>
      {questions.map((question, index) => (
        <QuestionBox key={index} question={question} />
      ))}
    </div>
  );
}
