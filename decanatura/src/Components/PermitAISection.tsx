import SectionHeading from './SectionHeading';

export default function PermitAISection() {
  return (
    <section className="mb-16">
      <SectionHeading bgcolor='#5454E9' title="¿Permitir la IA o no en la evaluación?" />
      <p className="text-base text-gray-700 mb-4 bg-gray-50 p-6 rounded-lg">
        Formule las siguientes preguntas para una evaluación de su curso: ¿Hay competencias en esta evaluación que el estudiante debe demostrar de forma completamente autónoma, sin apoyo externo de ningún tipo, porque son fundamento para lo que viene después, en el programa o en su vida profesional? ¿El uso de IAG invalidaría la evidencia del aprendizaje que quiero evaluar?
      </p>
    </section>
  );
}
