import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { MessageSquare } from 'lucide-react';

import { CloseCircle, MenuThree } from './Icons';

type FeedbackPayload = {
  source: 'site-feedback';
  sheetName: 'feedback';
  profesor: string;
  comentarios: string;
  page: string;
};

type FeedbackStorageItem = FeedbackPayload & {
  storedAt: string;
};

const imgIcesiLogo = new URL('../assets/ad38d66a97762cd0ce5489eebd8376d08ea3c8be.png', import.meta.url).href;

const navItems = [
  { label: 'Inicio', route: '/', activeColor: 'black' },
  { label: 'Exploración', route: '/Exploracion', activeColor: '#E4EB60' },
  { label: 'Profundización', route: '/Profundizacion', activeColor: '#E4EB60' },
  { label: 'Transformación', route: '/Transformacion', activeColor: '#E4EB60' },
  { label: 'Ficha técnica', route: '/Ficha-tecnica', activeColor: '#E4EB60' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    profesor: '',
    comentarios: '',
  });
  const [feedbackStatus, setFeedbackStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const feedbackEndpoint = import.meta.env.VITE_MOMENTO3_FORM_POST_URL as string | undefined;

  useEffect(() => {
    document.body.style.overflow = feedbackOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [feedbackOpen]);

  const getActive = (route: string) => {
    if (route === '/' && location.pathname === '/') return true;
    if (route !== '/' && location.pathname.toLowerCase().includes(route.toLowerCase().replace('/', ''))) return true;
    return false;
  };

  const handleFeedbackSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload: FeedbackPayload = {
      source: 'site-feedback',
      sheetName: 'feedback',
      profesor: feedbackForm.profesor,
      comentarios: feedbackForm.comentarios,
      page: location.pathname,
    };

    setFeedbackStatus(null);

    if (feedbackEndpoint) {
      try {
        await fetch(feedbackEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        setFeedbackStatus({
          type: 'success',
          message: 'Comentario enviado con éxito.',
        });
        setFeedbackForm({ profesor: '', comentarios: '' });
        return;
      } catch (error) {
        setFeedbackStatus({
          type: 'error',
          message: 'No se pudo enviar el comentario.',
        });
        return;
      }
    }

    try {
      const storedFeedback = JSON.parse(localStorage.getItem('decanatura-feedback-queue') || '[]') as FeedbackStorageItem[];
      storedFeedback.push({
        ...payload,
        storedAt: new Date().toISOString(),
      });
      localStorage.setItem('decanatura-feedback-queue', JSON.stringify(storedFeedback));

      setFeedbackStatus({
        type: 'success',
        message: 'Comentarios guardados localmente. Configura VITE_FEEDBACK_POST_URL para enviarlos.',
      });
      setFeedbackForm({ profesor: '', comentarios: '' });
    } catch (error) {
      setFeedbackStatus({
        type: 'error',
        message: 'No se pudieron guardar los comentarios.',
      });
    }
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-20 flex min-w-screen items-center bg-[#5454e9]">
        <div className="relative h-[102.8px] w-50 shrink-0">
          <img alt="ICESI Logo" className="pointer-events-none absolute inset-0 size-full object-cover" src={imgIcesiLogo} />
        </div>

        <div className="flex flex-row items-center">
          <div className="relative hidden h-full items-center px-5 md:flex">
            {navItems.map((item) => (
              <NavItem
                key={item.route}
                label={item.label}
                isActive={getActive(item.route)}
                activeColor={item.activeColor}
                onclick={() => navigate(item.route)}
              />
            ))}
          </div>
        </div>

        <button
          className="flex items-center justify-center p-2 text-white transition hover:bg-blue-600 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <MenuThree size={28} className="text-white" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed left-0 right-0 top-[102.8px] z-20 flex flex-col bg-[#5454e9] shadow-lg md:hidden">
          {navItems.map((item) => (
            <NavItem
              key={item.route}
              label={item.label}
              isActive={getActive(item.route)}
              activeColor={item.activeColor}
              onclick={() => {
                navigate(item.route);
                setMobileMenuOpen(false);
              }}
            />
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setFeedbackOpen(true)}
        className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-3 bg-[#19191b] px-5 py-3 text-sm font-bold text-white shadow-[0_20px_45px_rgba(25,25,27,0.28)] transition hover:-translate-y-0.5 hover:bg-[#2c2c30] focus:outline-none focus:ring-2 focus:ring-[#e4eb60] focus:ring-offset-2 focus:ring-offset-white"
      >
        <MessageSquare size={18} />
        Comentarios
      </button>

      {feedbackOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          role="presentation"
          onClick={() => setFeedbackOpen(false)}
        >
          <div
            className="relative w-full max-w-xl  bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] ring-1 ring-black/10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setFeedbackOpen(false)}
              className="absolute right-4 top-4 p-1 text-[#5454e9] transition hover:bg-[#f1f3ff] focus:outline-none focus:ring-2 focus:ring-[#5454e9]"
              aria-label="Cerrar comentarios"
            >
              <CloseCircle size={28} />
            </button>

            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#5454e9]">Comentarios</p>
            <h2 id="feedback-dialog-title" className="mt-2 text-2xl font-bold text-[#19191b]">
              Cuéntanos qué mejorar
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#57585c]">
              Comparte una observación breve sobre la experiencia en la página y la revisamos.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleFeedbackSubmit}>
              <label className="block">
                <span className="text-sm font-semibold text-[#19191b]">Nombre del profesor</span>
                <input
                  type="text"
                  value={feedbackForm.profesor}
                  onChange={(event) => setFeedbackForm((current) => ({ ...current, profesor: event.target.value }))}
                  placeholder="Ingresa el nombre"
                  className="mt-2 w-full border border-[#d7d8dc] bg-[#fcfcfd] px-4 py-3 text-sm text-[#19191b] outline-none transition placeholder:text-[#9a9aa2] focus:border-[#5454e9] focus:ring-2 focus:ring-[#5454e9]/15"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#19191b]">Comentarios sobre la página</span>
                <textarea
                  value={feedbackForm.comentarios}
                  onChange={(event) => setFeedbackForm((current) => ({ ...current, comentarios: event.target.value }))}
                  placeholder="Escribe aquí tus comentarios"
                  rows={5}
                  className="mt-2 w-full resize-none border border-[#d7d8dc] bg-[#fcfcfd] px-4 py-3 text-sm text-[#19191b] outline-none transition placeholder:text-[#9a9aa2] focus:border-[#5454e9] focus:ring-2 focus:ring-[#5454e9]/15"
                />
              </label>

              {feedbackStatus && (
                <p className={`text-sm font-medium ${feedbackStatus.type === 'success' ? 'text-[#1f7a46]' : 'text-[#c33f3f]'}`}>
                  {feedbackStatus.message}
                </p>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setFeedbackOpen(false)}
                  className="border border-[#d7d8dc] bg-white px-5 py-3 text-sm font-bold text-[#19191b] transition hover:bg-[#f6f7fa]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className=" bg-[#5454e9] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#3f3fc2]"
                >
                  Enviar comentario
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
}

function NavItem({
  label,
  isActive = false,
  onclick,
  activeColor,
}: {
  label: string;
  isActive?: boolean;
  onclick?: () => void;
  activeColor?: string;
}) {
  return (
    <div
      className={`relative flex h-[102.8px] min-w-37.5 shrink-0 items-center justify-center ${isActive ? (activeColor === 'black' ? 'bg-black' : '') : ''}`}
      style={isActive && activeColor !== 'black' ? { background: activeColor } : {}}
      data-node-id={`nav-item-${label}`}
      onClick={onclick}
    >
      <p className="w-full truncate px-2 text-center text-[16px] leading-[normal] text-white" style={{ maxWidth: '140px' }}>
        {label}
      </p>
    </div>
  );
}
