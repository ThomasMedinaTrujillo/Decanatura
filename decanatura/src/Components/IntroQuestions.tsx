import SectionHeading from './SectionHeading';

export default function IntroQuestions() {
  const questions = [
    '"No sé si debo permitir IAG en mi evaluación"',
    '"¿Qué implica cada nivel del AIAS?"',
    '"Quiero ver cómo lo hacen en mi disciplina"'
  ];

  return (
    <>
    <SectionHeading bgcolor='#5454E9' title="Profundización"  subtitle='Este momento busca explicar en detalle lo que implica evaluar con o sin IAG, tomando como marco la escala AIAS. 
No es necesario recorrerlo en orden ni completo. Identifica qué pregunta te trajo hasta aquí y empieza por esa.'/>
    <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        
      {questions.map((question, index) => (
        <div
          key={index}
          className="p-4  text-center font-bold text-gray-700"
        >
          {question}
        </div>
      ))}
    </section>
    </>
  );
}
