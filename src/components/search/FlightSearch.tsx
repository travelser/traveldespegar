import React, { useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('roundtrip');

  return (
    <div>
      <div className="flex flex-wrap mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="tripType"
              value="roundtrip"
              checked={tripType === 'roundtrip'}
              onChange={() => setTripType('roundtrip')}
              className="form-radio h-4 w-4 text-[#2C4BA3]"
            />
            <span className="ml-2 text-sm text-gray-700">Ida y vuelta</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="tripType"
              value="oneway"
              checked={tripType === 'oneway'}
              onChange={() => setTripType('oneway')}
              className="form-radio h-4 w-4 text-[#2C4BA3]"
            />
            <span className="ml-2 text-sm text-gray-700">Solo ida</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="tripType"
              value="multicity"
              checked={tripType === 'multicity'}
              onChange={() => setTripType('multicity')}
              className="form-radio h-4 w-4 text-[#2C4BA3]"
            />
            <span className="ml-2 text-sm text-gray-700">Multi-destino</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Origen</label>
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C4BA3] focus-within:ring-1 focus-within:ring-[#2C4BA3]">
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
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C4BA3] focus-within:ring-1 focus-within:ring-[#2C4BA3]">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {tripType === 'oneway' ? 'Fecha de salida' : 'Fechas'}
          </label>
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C4BA3] focus-within:ring-1 focus-within:ring-[#2C4BA3]">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder={tripType === 'oneway' ? 'Selecciona fecha' : 'Ida - Vuelta'}
              className="flex-1 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Pasajeros y Clase</label>
          <div className="flex items-center border border-gray-300 rounded-md p-3 focus-within:border-[#2C4BA3] focus-within:ring-1 focus-within:ring-[#2C4BA3]">
            <Users className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="1 Adulto, Económica"
              className="flex-1 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-[#2C4BA3] hover:bg-[#243c82] text-white font-bold py-3 px-12 rounded-lg transition duration-200">
          Buscar vuelos
        </button>
      </div>
    </div>
  );
};

export default FlightSearch;