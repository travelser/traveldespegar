import PromotionCard from './PromotionCard';
import WhatsAppButton from './WhatsAppButton';

const PromoSection = () => {
  const promotions = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Cancún - Todo Incluido',
      subtitle: 'Vuelo + Hotel por 4 noches',
      price: 'MXN $9,899',
      discount: 'MXN $12,599',
      label: '25% OFF'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Los Cabos - Semana de Lujo',
      subtitle: 'Paquete con traslados incluidos',
      price: 'MXN $15,299',
      discount: 'MXN $18,999',
      label: '20% OFF'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'CDMX - Fin de Semana',
      subtitle: 'Hotel 5 estrellas por 3 noches',
      price: 'MXN $9,599',
      label: 'POPULAR'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Riviera Maya - Experiencia',
      subtitle: 'Vuelo + Hotel + Traslados',
      price: 'MXN $11,899',
      discount: 'MXN $13,799',
      label: '15% OFF'
    }
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Ofertas y Promociones</h2>
          <a href="#" className="text-[#2C4BA3] font-medium text-sm hover:underline">
            Ver todas
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo) => (
            <PromotionCard 
              key={promo.id}
              image={promo.image}
              title={promo.title}
              subtitle={promo.subtitle}
              price={promo.price}
              discount={promo.discount}
              label={promo.label}
            />
          ))}
        </div>
      </div>
      <WhatsAppButton />
    </section>
  );
};

export default PromoSection;