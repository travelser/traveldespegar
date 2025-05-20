import React from 'react';
import { Calendar, MapPin, Users, Plus } from 'lucide-react';

const PackageSearch = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#2C0E5D] mb-6">Paquetes turísticos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Origen</label>
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C0E5D] focus-within:ring-1 focus-within:ring-[#2C0E5D]">
            <MapPin className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="¿De dónde sales?"
              className="flex-1 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Destino</label>
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C0E5D] focus-within:ring-1 focus-within:ring-[#2C0E5D]">
            <MapPin className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="¿A dónde viajas?"
              className="flex-1 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Fechas</label>
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C0E5D] focus-within:ring-1 focus-within:ring-[#2C0E5D]">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Entrada - Salida"
              className="flex-1 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Habitaciones y Huéspedes</label>
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C0E5D] focus-within:ring-1 focus-within:ring-[#2C0E5D]">
            <Users className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="1 Habitación, 2 Adultos"
              className="flex-1 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6 text-sm text-[#2C0E5D]">
        <Plus className="h-4 w-4" />
        <span>Agregar segundo destino para alojarme</span>
      </div>

      <div className="flex justify-center">
        <button className="bg-[#FF385C] hover:bg-[#FF385C]/90 text-white font-bold py-3 px-12 rounded-lg transition duration-200 text-lg">
          Buscar
        </button>
      </div>
    </div>
  );
};

export default PackageSearch;