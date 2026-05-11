import React, { useState } from 'react';

export interface SidebarItem {
  label: string;
  href: string;
  isIndented?: boolean;
}

export interface SidebarProps {
  title: string;
  stepNumber: number;
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ title, stepNumber, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <aside className="flex-shrink-0 hidden lg:flex flex-col items-start sticky top-27 self-start justify-start pt-6">
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors text-black"
          title="Mostrar opciones"
        >
          <svg className="w-[21px] h-[17px]" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 1.04167C0 0.46637 0.46637 0 1.04167 0H19.7917C20.367 0 20.8333 0.46637 20.8333 1.04167C20.8333 1.61696 20.367 2.08333 19.7917 2.08333H1.04167C0.46637 2.08333 0 1.61696 0 1.04167ZM0 8.33333C0 7.75804 0.46637 7.29167 1.04167 7.29167H19.7917C20.367 7.29167 20.8333 7.75804 20.8333 8.33333C20.8333 8.90863 20.367 9.375 19.7917 9.375H1.04167C0.46637 9.375 0 8.90863 0 8.33333ZM0 15.625C0 15.0497 0.46637 14.5833 1.04167 14.5833H19.7917C20.367 14.5833 20.8333 15.0497 20.8333 15.625C20.8333 16.2003 20.367 16.6667 19.7917 16.6667H1.04167C0.46637 16.6667 0 16.2003 0 15.625Z" fill="currentColor"/>
          </svg>
        </button>
      </aside>
    );
  }

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block sticky top-27 self-start max-h-[calc(100vh-6rem)] overflow-y-auto pr-6 pt-6 relative group transition-all duration-300">
      <div className="flex justify-between items-start w-full border-b border-[#cecfd4] pb-4 mb-4">
        {/* Header section */}
        <div className="flex flex-col items-start">
          <ol className="text-secondary text-2xl font-bold list-decimal list-inside" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} start={stepNumber}>
            <li>{title}</li>
          </ol>
        </div>
        
        {/* Hide button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="p-1 rounded-md text-black hover:text-secondary hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          title="Ocultar opciones"
        >
          <svg className="w-[19px] h-[19px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7083 1.04167L1.04167 17.7083M17.7083 17.7083L1.04167 1.04167" stroke="currentColor" strokeWidth="2.08333" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-gray-500 font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          En esta página
        </p>

        <nav className="flex flex-col gap-4 mt-2">
          {items.map((item, index) => (
            <div key={index} className={`flex items-start gap-2 ${item.isIndented ? 'pl-4' : ''}`}>
              <div className="bg-gray-400 w-1 h-4 rounded-full mt-1 flex-shrink-0" />
              <a 
                href={item.href} 
                className={`text-gray-500 hover:text-secondary ${item.isIndented ? 'text-sm font-normal' : 'text-sm font-bold'}`} 
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
