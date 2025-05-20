import React from 'react';
import { Shield, Bookmark, CreditCard, Calendar } from 'lucide-react';

const TravelAdvice = () => {
  const advice = [
    {
      id: 1,
      icon: Shield,
      title: 'Compra segura',
      description: 'El proceso de compra es 100% seguro con tus datos protegidos.'
    },
    {
      id: 2,
      icon: Bookmark,
      title: 'Mejor precio garantizado',
      description: 'Encuentra la mejor tarifa para tus viajes.'
    },
    {
      id: 3,
      icon: CreditCard,
      title: 'Múltiples formas de pago',
      description: 'Paga con tarjeta, transferencia o en efectivo.'
    },
    {
      id: 4,
      icon: Calendar,
      title: 'Flexibilidad en tus viajes',
      description: 'Opciones para cambios y cancelaciones.'
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            ¿Por qué elegir Despegar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Somos la agencia de viajes más grande de Latinoamérica, con más de 20 años de experiencia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advice.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#EFF3FE] rounded-full">
                    <Icon className="h-8 w-8 text-[#2C4BA3]" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelAdvice;