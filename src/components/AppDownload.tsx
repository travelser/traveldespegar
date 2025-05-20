import React from 'react';
import { QrCode, Smartphone } from 'lucide-react';

const AppDownload = () => {
  return (
    <section className="py-12 px-4 bg-[#2C4BA3]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left text-white max-w-md">
            <h2 className="text-2xl font-bold mb-4">Descarga la app de Despegar</h2>
            <p className="mb-6">
              Accede a ofertas exclusivas, recibe notificaciones sobre tus viajes y guarda tus favoritos.
              Todo desde tu celular.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-black text-white py-3 px-6 rounded-lg flex items-center justify-center">
                <span className="mr-2">App Store</span>
              </button>
              <button className="bg-black text-white py-3 px-6 rounded-lg flex items-center justify-center">
                <span className="mr-2">Google Play</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="bg-white p-4 rounded-lg">
              <QrCode className="h-32 w-32 text-[#2C4BA3]" />
              <p className="text-center text-sm font-medium mt-2 text-gray-800">Escanea para descargar</p>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-[200px] h-[400px] bg-black rounded-3xl p-3 border-4 border-gray-700">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl"></div>
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                  <Smartphone className="h-24 w-24 text-[#2C4BA3]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;