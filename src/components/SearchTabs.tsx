import React, { useState } from 'react';
import { Plane, Building, Package, Car, Map } from 'lucide-react';
import FlightSearch from './search/FlightSearch';
import HotelSearch from './search/HotelSearch';
import PackageSearch from './search/PackageSearch';
import CarSearch from './search/CarSearch';
import ActivitySearch from './search/ActivitySearch';

type TabType = 'flights' | 'hotels' | 'packages' | 'cars' | 'activities';

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>('packages');

  const tabs = [
    { id: 'packages', label: 'Paquetes', icon: Package },
    { id: 'flights', label: 'Vuelos', icon: Plane },
    { id: 'hotels', label: 'Alojamientos', icon: Building },
    { id: 'cars', label: 'Autos', icon: Car },
    { id: 'activities', label: 'Actividades', icon: Map },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'flights':
        return <FlightSearch />;
      case 'hotels':
        return <HotelSearch />;
      case 'packages':
        return <PackageSearch />;
      case 'cars':
        return <CarSearch />;
      case 'activities':
        return <ActivitySearch />;
      default:
        return <PackageSearch />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg max-w-screen-lg mx-auto -mt-24 relative z-20 overflow-hidden">
      <div className="flex">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex-1 min-w-[120px] flex flex-col items-center justify-center py-4 px-2 transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-[#2C0E5D] bg-white'
                  : 'text-gray-500 hover:text-gray-900 bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className="p-6 bg-white">{renderContent()}</div>
    </div>
  );
};

export default SearchTabs;