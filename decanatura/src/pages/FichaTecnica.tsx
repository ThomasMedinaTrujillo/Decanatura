import { useNavigate } from 'react-router';

import Momento1Banner from '../Components/Momento1Banner';

const generalData = [
  { label: 'Nombre del recurso', value: 'Guía AIAS para evaluación con IAG' },
  { label: 'Tipo', value: 'Sitio web de orientación pedagógica' },
  { label: 'Formato', value: 'Recurso digital interactivo' },
  { label: 'Idioma', value: 'Español' },
  { label: 'Versión', value: '1.0' },
  { label: 'Estado', value: 'Publicado' },
];

const audience = [
  'Docentes que necesitan revisar o rediseñar actividades evaluativas.',
  'Equipos académicos que quieren definir criterios de uso de IAG.',
  'Programas que necesitan una ruta guiada para aplicar AIAS.',
];

const includedSections = [
  'Momento 1: exploración del problema y del marco AIAS.',
  'Momento 2: profundización en niveles, criterios y ejemplos.',
  'Momento 3: transformación con prompts, decisiones y rediseño.',
  'Recursos de apoyo enlazados para plantillas y materiales complementarios.',
];

const technicalNotes = [
  'La navegación interna fue ajustada para desplazamiento por secciones dentro de páginas con hash router.',
  'La interfaz está organizada en React, TypeScript, Vite y Tailwind CSS.',
  'El recurso está pensado para consulta autónoma y uso progresivo por momentos.',
];

export default function FichaTecnica() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f7f9]">
      <Momento1Banner momento="Recurso" title="Ficha técnica" />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
          <div className="bg-white p-6 shadow-sm ring-1 ring-[#e8e8ec] lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#5454e9]">Resumen</p>
            <h1 className="mt-3 text-3xl font-bold text-[#19191b]">Ficha técnica del recurso</h1>
            <div className="mt-5 space-y-4 text-base leading-7 text-[#272727]">
              <p>
                Esta página consolida la información general del sitio, su propósito pedagógico y los elementos
                técnicos más relevantes para su consulta y mantenimiento.
              </p>
              <p>
                La ficha técnica funciona como referencia rápida para equipos docentes, coordinaciones académicas y
                personas que necesiten entender el alcance del recurso sin recorrer todas sus secciones.
              </p>
            </div>
          </div>

          <aside className="bg-[#eef3ff] p-6 shadow-sm ring-1 ring-[#d7def7] lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#5454e9]">Acciones</p>
            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="bg-[#5454e9] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#3f3fc2]"
              >
                Volver al inicio
              </button>
              <button
                type="button"
                onClick={() => navigate('/transformacion')}
                className="border border-[#5454e9] bg-white px-5 py-3 text-sm font-bold text-[#5454e9] transition hover:bg-[#f4f4fe]"
              >
                Ir a transformación
              </button>
            </div>
          </aside>
        </section>

        <section className="bg-white p-6 shadow-sm ring-1 ring-[#e8e8ec] lg:p-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#4cb979]">Datos generales</p>
            <h2 className="text-2xl font-bold text-[#19191b]">Información base del recurso</h2>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {generalData.map((item) => (
              <div key={item.label} className="border border-[#d7d8dc] bg-[#fcfcfd] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#88898c]">{item.label}</p>
                <p className="mt-3 text-base font-semibold text-[#19191b]">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="bg-white p-6 shadow-sm ring-1 ring-[#e8e8ec] lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#e9683b]">Público objetivo</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#272727]">
              {audience.map((item) => (
                <li key={item} className="ml-5 list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 shadow-sm ring-1 ring-[#e8e8ec] lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#5454e9]">Contenido incluido</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#272727]">
              {includedSections.map((item) => (
                <li key={item} className="ml-5 list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 shadow-sm ring-1 ring-[#e8e8ec] lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#4cb979]">Notas técnicas</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#272727]">
              {technicalNotes.map((item) => (
                <li key={item} className="ml-5 list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white p-6 shadow-sm ring-1 ring-[#e8e8ec] lg:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#5454e9]">Uso recomendado</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="border border-[#d7d8dc] p-5">
              <p className="text-lg font-bold text-[#19191b]">1. Consulta</p>
              <p className="mt-3 text-sm leading-6 text-[#272727]">
                Revisar la estructura general del recurso y ubicar el momento que mejor responde a la necesidad del
                curso o del equipo académico.
              </p>
            </div>
            <div className="border border-[#d7d8dc] p-5">
              <p className="text-lg font-bold text-[#19191b]">2. Decisión</p>
              <p className="mt-3 text-sm leading-6 text-[#272727]">
                Contrastar resultados de aprendizaje, condiciones de evaluación y nivel AIAS antes de rediseñar una
                actividad.
              </p>
            </div>
            <div className="border border-[#d7d8dc] p-5">
              <p className="text-lg font-bold text-[#19191b]">3. Implementación</p>
              <p className="mt-3 text-sm leading-6 text-[#272727]">
                Usar los prompts, plantillas y recursos enlazados para documentar cambios y concretar el rediseño
                evaluativo.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
