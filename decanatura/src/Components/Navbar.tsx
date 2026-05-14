import { Outlet, useLocation, useNavigate } from 'react-router';
import { useState } from 'react';

import { MenuThree } from './Icons';

const imgIcesiLogo = new URL('../assets/ad38d66a97762cd0ce5489eebd8376d08ea3c8be.png', import.meta.url).href;

const navItems = [
  { label: 'Inicio', route: '/', activeColor: 'black' },
  { label: 'Exploracion', route: '/Exploracion', activeColor: '#E4EB60' },
  { label: 'Profundizacion', route: '/Profundizacion', activeColor: '#E4EB60' },
  { label: 'Transformacion', route: '/Transformacion', activeColor: '#E4EB60' },
  { label: 'Ficha tecnica', route: '/Ficha-tecnica', activeColor: '#E4EB60' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getActive = (route: string) => {
    if (route === '/' && location.pathname === '/') return true;
    if (route !== '/' && location.pathname.toLowerCase().includes(route.toLowerCase().replace('/', ''))) return true;
    return false;
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-20 flex min-w-screen items-center gap-[33px] bg-[#5454e9] pl-[80px] pr-[180px]">
        <div className="relative h-[102.8px] w-[200px] shrink-0">
          <img alt="ICESI Logo" className="pointer-events-none absolute inset-0 size-full object-cover" src={imgIcesiLogo} />
        </div>

        <div className="flex flex-row items-center self-stretch">
          <div className="relative hidden h-full shrink-0 items-center px-[20px] md:flex">
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
          className="flex items-center justify-center rounded p-2 text-white transition hover:bg-blue-600 md:hidden"
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
      className={`relative flex h-[102.8px] min-w-[150px] shrink-0 items-center justify-center ${isActive ? (activeColor === 'black' ? 'bg-black' : '') : ''}`}
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
