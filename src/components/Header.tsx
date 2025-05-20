import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, HelpCircle, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full bg-[#2C0E5D] text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">Para ventas 555 067 7546</span>
              </div>
              <button className="text-sm flex items-center">
                <HelpCircle className="h-4 w-4 mr-1" />
                Ayuda
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <a href="tel:8000624319" className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-1" />
                <span>800-062-4319</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="text-sm flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span className="hidden md:inline">Mis Viajes</span>
              </button>
              <button className="text-sm px-2 md:px-4 py-1 bg-gray-100/10 rounded truncate">
                <span className="hidden md:inline">Beneficios Pasaporte</span>
                <span className="md:hidden">Beneficios</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#2C0E5D]">
                despe<span className="text-[#3DB0A0]">gar</span>
              </div>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <button className="hidden md:flex items-center text-sm text-gray-700 hover:text-[#2C0E5D]">
              <User className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-t">
        <div className="max-w-screen-xl mx-auto px-4">
          <nav className="flex items-center h-14 overflow-x-auto hide-scrollbar">
            <div className="flex space-x-8 min-w-max">
              <a href="#" className="flex flex-col items-center text-[#2C0E5D] border-b-2 border-[#2C0E5D] h-full justify-center">
                <span className="text-xs font-medium whitespace-nowrap">Paquetes</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-600 hover:text-[#2C0E5D] h-full justify-center">
                <span className="text-xs font-medium whitespace-nowrap">Alojamientos</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-600 hover:text-[#2C0E5D] h-full justify-center">
                <span className="text-xs font-medium whitespace-nowrap">Vuelos</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-600 hover:text-[#2C0E5D] h-full justify-center">
                <span className="text-xs font-medium whitespace-nowrap">Ofertas</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-600 hover:text-[#2C0E5D] h-full justify-center">
                <span className="text-xs font-medium whitespace-nowrap">Actividades</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-600 hover:text-[#2C0E5D] h-full justify-center">
                <span className="text-xs font-medium whitespace-nowrap">Autos</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-600 hover:text-[#2C0E5D] h-full justify-center">
                <span className="text-xs font-medium whitespace-nowrap">Disney</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-600 hover:text-[#2C0E5D] h-full justify-center">
                <span className="text-xs font-medium whitespace-nowrap">Asistencias</span>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-2">
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center text-sm text-gray-600">
                <HelpCircle className="h-4 w-4 mr-2" />
                Ayuda
              </a>
              <a href="#" className="flex items-center text-sm text-gray-600">
                <MessageCircle className="h-4 w-4 mr-2" />
                Mis Viajes
              </a>
              <a href="#" className="flex items-center text-sm text-gray-600">
                <User className="h-4 w-4 mr-2" />
                Mi Cuenta
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;