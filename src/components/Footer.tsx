import React from 'react';
import { CreditCard, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-sm mb-4">NOSOTROS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Quiénes somos</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Trabaja con nosotros</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Socios estratégicos</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Sustentabilidad</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm mb-4">DESTINOS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Cancún</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Ciudad de México</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Acapulco</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Guadalajara</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Monterrey</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Puerto Vallarta</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm mb-4">PRODUCTOS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Vuelos</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Hoteles</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Paquetes</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Autos</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Actividades</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Disney</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm mb-4">AYUDA</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Preguntas frecuentes</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Centro de ayuda</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Políticas de privacidad</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Términos y condiciones</a></li>
              <li><a href="#" className="text-xs text-gray-600 hover:text-[#2C4BA3]">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 pb-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold text-[#2C4BA3] mb-4">
                despe<span className="text-[#3DB0A0]">gar</span>
              </div>
              <p className="text-xs text-gray-600 max-w-md">
                Despegar es la agencia de viajes líder de Latinoamérica. Con más de 20 años en el mercado, ofrecemos las mejores opciones para tus viajes.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-sm mb-2">FORMAS DE PAGO</h3>
              <div className="flex space-x-2 mb-4">
                <CreditCard className="h-6 w-6 text-gray-600" />
                <CreditCard className="h-6 w-6 text-gray-600" />
                <CreditCard className="h-6 w-6 text-gray-600" />
                <CreditCard className="h-6 w-6 text-gray-600" />
              </div>
              
              <h3 className="font-semibold text-sm mb-2">SÍGUENOS</h3>
              <div className="flex space-x-2">
                <Facebook className="h-5 w-5 text-gray-600" />
                <Twitter className="h-5 w-5 text-gray-600" />
                <Instagram className="h-5 w-5 text-gray-600" />
                <Linkedin className="h-5 w-5 text-gray-600" />
                <Youtube className="h-5 w-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-600 mt-4">
          <p>© 2025 Despegar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;