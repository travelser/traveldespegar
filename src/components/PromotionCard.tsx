import React from 'react';

interface PromotionCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  discount?: string;
  label?: string;
}

const PromotionCard: React.FC<PromotionCardProps> = ({
  image,
  title,
  subtitle,
  price,
  discount,
  label
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white h-full flex flex-col">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-44 object-cover" />
        {label && (
          <div className="absolute top-3 left-3 bg-[#FE375A] text-white text-xs font-semibold py-1 px-2 rounded">
            {label}
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
        <div className="mt-auto">
          {discount && (
            <p className="text-xs text-gray-500 line-through">{discount}</p>
          )}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">Desde</p>
            <p className="text-lg font-bold text-[#2C4BA3]">{price}</p>
          </div>
          <p className="text-xs text-gray-500">Precio final por persona</p>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;