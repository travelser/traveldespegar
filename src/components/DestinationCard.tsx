import React from 'react';

interface DestinationCardProps {
  image: string;
  name: string;
  country: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, name, country }) => {
  return (
    <div className="relative rounded-lg overflow-hidden group cursor-pointer">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold text-lg">{name}</h3>
        <p className="text-gray-200 text-sm">{country}</p>
      </div>
    </div>
  );
};

export default DestinationCard;