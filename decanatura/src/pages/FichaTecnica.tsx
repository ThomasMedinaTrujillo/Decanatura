import { useNavigate } from 'react-router';

import Momento1Banner from '../Components/Momento1Banner';

const generalData = [
  { label: 'Nombre del recurso', value: 'Evaluar en tiempos de IA: un recurso para docentes' },
  { label: 'Tipo', value: 'Sitio web de orientación pedagógica' },
  { label: 'Formato', value: 'Recurso digital interactivo' },
  { label: 'Idioma', value: 'Español' },
  { label: 'Versión', value: '1.0' },
  { label: 'Estado', value: 'Publicado' },
];

const fichaTecnica = [
  { label: 'Título', value: 'Evaluar en tiempos de IA: un recurso para docentes' },
  { label: 'Autor/a', value: 'Laura Sofía Gutiérrez Martínez' },
  { label: 'Correo', value: 'laura.gutierrez5@u.icesi.edu.co' },
  { label: 'Institución', value: 'Universidad Icesi' },
  { label: 'Decanatura', value: 'Decanatura de Innovación y Fortalecimiento del PEI' },
  { label: 'Área', value: 'IA + TIC para la educación' },
  { label: 'Revisor/a', value: 'Henry Taquez' },
  { label: 'Año', value: '2026' },
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

const bibliography = [
  'Bekiaridis, G., & Attwell, G. (2024). Supplement to the DigCompEDU Framework: Outlining the skills and competences of educators related to AI in education. University of Bremen: Institut Technik und Bildung (ITB). https://doi.org/10.26092/elib/2708',
  'Bearman, M., Tai, J., Dawson, P., Boud, D., & Ajjawi, R. (2024). Developing evaluative judgement for a time of generative artificial intelligence. Assessment & Evaluation in Higher Education, 49(6), 893-905.'
  ,'Corbin, T., Bearman, M., Boud, D., & Dawson, P. (2025). The wicked problem of AI and assessment. Assessment & evaluation in higher education, 1-17.',
  'Cosgrove, J., & Cachia, R. (2025). DigComp 3.0: European Digital Competence Framework - Fifth edition. Publications Office of the European Union. https://data.europa.eu/doi/10.2760/0001149',
  'Digital Education Council. (2026). Encuesta sobre la IA en la educación superior en América Latina.',
  'Liu, D., and A. Bridgeman. (2023). What to Do about Assessments If we Can’t out-Design or out-Run AI? Teaching@Sydney. https://educational-innovation.sydney.edu.au/teaching%40sydney/what-to-do-about-assessments-if-we-cant-out-design-or-out-run-ai/',
  'Miao, F., & Cukurova, M. (2025). Marco de competencias para docentes en materia de IA. UNESCO. https://doi.org/10.54675/AQKZ9414',
  'Perkins, M., Roe, J., & Furze, L. (2025). Reimagining the Artificial Intelligence Assessment Scale (AIAS): A refined framework for educational assessment. Journal of University Teaching and Learning Practice, 22(7). https://doi.org/10.53761/rrm4y757',
  'PwC. (2025). The Fearless Future: 2025 Global AI Jobs Barometer. PricewaterhouseCoopers. https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer/2025/report.pdf',
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

        <section className="bg-white p-6 shadow-sm ring-1 ring-[#e8e8ec] lg:p-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#5454e9]">Ficha técnica</p>
            <h2 className="text-2xl font-bold text-[#19191b]">Información del documento</h2>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fichaTecnica.map((item) => (
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

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="bg-white p-6 shadow-sm ring-1 ring-[#e8e8ec] lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#4cb979]">Licencia</p>
            <h2 className="mt-2 text-2xl font-bold text-[#19191b]">Creative Commons Atribución 4.0 Internacional</h2>
            <p className="mt-4 text-sm leading-6 text-[#272727]">
              Este recurso puede ser reproducido, distribuido y adaptado libremente, siempre que se cite la autoría
              original.
            </p>

            <div className="mt-6 flex flex-col gap-4 border border-[#d7d8dc] bg-[#fcfcfd] p-5 sm:flex-row sm:items-center">
              <div>
                <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">
                  <img alt="Licencia Creative Commons" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png" />
                </a>
                <br />
                This work is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>
              </div>

            </div>

          </div>
            <div className="bg-white p-6 shadow-sm ring-1 ring-[#e8e8ec] lg:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#e9683b]">Bibliografía</p>
              <h2 className="mt-2 text-2xl font-bold text-[#19191b]">Referencias del recurso</h2>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-[#272727]">
                {bibliography.map((item) => (
                  <li key={item} className="ml-5 list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
        </section>
      </main>
    </div>
  );
}
