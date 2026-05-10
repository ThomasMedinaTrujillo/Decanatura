import { Outlet, useNavigate } from "react-router";
import { MenuThree } from "./Icons";
import { useState } from "react";

const imgIcesiLogo = new URL('../assets/ad38d66a97762cd0ce5489eebd8376d08ea3c8be.png', import.meta.url).href;



export default function Navbar() {

  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
        <>  
    <div className="fixed bg-[#5454e9]  flex gap-[33px] items-center left-0 pl-[80px] pr-[180px] top-0 min-w-screen z-20" data-node-id="7:650" data-name="Nav Bar">
      <div className="h-[102.8px] relative shrink-0 w-[200px]" data-node-id="I7:650;1:147" data-name="ICESI_logo_prin_descriptor_BYN_RGB_NEGATIVO_0924 1">
        <img alt="ICESI Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcesiLogo} />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="hidden md:flex content-stretch h-full items-center px-[20px] relative shrink-0" data-node-id="I7:650;1:148" data-name="Nav items">
          <NavItem label="Inicio" isActive onclick={()=> navigate("/")} />
          <NavItem label="Exploración"onclick={()=> navigate("/Exploracion")} />
          <NavItem label="Profundización" onclick={()=> navigate("/Profundizacion")}/>
          <NavItem label="Transformación" onclick={()=> navigate("/Transformacion")}/>
        </div>
      </div>
      <button 
        className="md:hidden flex items-center justify-center p-2 text-white hover:bg-blue-600 rounded transition"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <MenuThree size={28} className="text-white" />
      </button>
    </div>
    
    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="fixed top-[102.8px] left-0 right-0 bg-[#5454e9] flex flex-col md:hidden z-20 shadow-lg">
        <NavItem label="Inicio" isActive onclick={()=> { navigate("/"); setMobileMenuOpen(false); }} />
        <NavItem label="Exploración" onclick={()=> { navigate("/Exploracion"); setMobileMenuOpen(false); }} />
        <NavItem label="Profundización" onclick={()=> { navigate("/Profundizacion"); setMobileMenuOpen(false); }} />
        <NavItem label="Transformación" onclick={()=> { navigate("/Transformacion"); setMobileMenuOpen(false); }} />
      </div>
    )}
    
      <Outlet />
      </>
  );
}

function NavItem({ label, isActive = false , onclick}: { label: string; isActive?: boolean; onclick?: () => void }) {
  return (
    <div
      className={`content-stretch flex h-full items-center justify-center min-w-[180px] relative shrink-0 ${
        isActive ? 'bg-black' : ''
      } h-[102.8px] ${isActive ? 'py-[10px]' : ''}`}
      data-node-id={`nav-item-${label}`}
      onClick={onclick}
    >
      <p
        className={`font-['Plus_Jakarta_Sans:Regular',sans-serif] font-${isActive ? 'bold' : 'normal'} leading-[normal] relative shrink-0 text-[16px] text-center text-white w-[42px]`}
      >
        {label}
      </p>
    </div>
  );
}
