import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const CarSearch = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad de recogida</label>
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C4BA3] focus-within:ring-1 focus-within:ring-[#2C4BA3]">
            <MapPin className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="¿Dónde recogerás tu auto?"
              className="flex-1 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Lugar de recogida</label>
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C4BA3] focus-within:ring-1 focus-within:ring-[#2C4BA3]">
            <MapPin className="h-5 w-5 text-gray-500 mr-2" />
            <select className="flex-1 text-sm focus:outline-none bg-transparent appearance-none">
              <option>Aeropuerto</option>
              <option>Ciudad</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha y hora de recogida</label>
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C4BA3] focus-within:ring-1 focus-within:ring-[#2C4BA3]">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Fecha y hora"
              className="flex-1 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha y hora de devolución</label>
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C4BA3] focus-within:ring-1 focus-within:ring-[#2C4BA3]">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Fecha y hora"
              className="flex-1 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-[#2C4BA3] hover:bg-[#243c82] text-white font-bold py-3 px-12 rounded-lg transition duration-200">
          Buscar autos
        </button>
      </div>
    </div>
  );
};

export default CarSearch;