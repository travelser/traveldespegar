import React from 'react';
import DestinationCard from './DestinationCard';

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2498505/pexels-photo-2498505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Cancún',
      country: 'México'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Ciudad de México',
      country: 'México'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/7245326/pexels-photo-7245326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Puerto Vallarta',
      country: 'México'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/9376815/pexels-photo-9376815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Los Cabos',
      country: 'México'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Acapulco',
      country: 'México'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/6494015/pexels-photo-6494015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Mérida',
      country: 'México'
    }
  ];

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Destinos Populares</h2>
          <a href="#" className="text-[#2C4BA3] font-medium text-sm hover:underline">
            Ver todos
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination.id}
              image={destination.image}
              name={destination.name}
              country={destination.country}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;