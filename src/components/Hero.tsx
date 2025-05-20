import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[500px] overflow-hidden bg-gradient-to-r from-[#7B3FE4] to-[#A45CFF]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
          Encontrá los mejores precios para tu próximo viaje
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mb-8 opacity-90">
          Las mejores ofertas en vuelos, hoteles, paquetes y más
        </p>
      </div>
    </div>
  );
};

export default Hero;