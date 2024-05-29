"use client";
import { Heading } from '@medusajs/ui';
import { useState } from 'react';
import { ChevronDown } from "@medusajs/icons"
import ChevronDoubleDown from '@modules/common/icons/chevronDoubleDown';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    '/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1716661811326-coureurs.jpg&w=3840&q=50',
    '/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1716499714610-mockup%20haut%20de%20compression.jpg&w=3840&q=50',
    '/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1714477967411-img_home.png&w=3840&q=50'
  ];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[700px] md:h-[600px] lg:h-[700px]">
    {images.map((src, index) => (
      <img
        key={src}
        src={src}
        className={`w-full h-[700px] md:h-[600px] lg:h-[700px] object-cover absolute transition-opacity duration-500 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
        alt={`phosphorescent vetement de sport femme phosphorescence vetement de sport homme gilet haut visibilité gilets haute visibilité veste haute visibilité vestes haute visibilité survetement de sport vetement haute visibilité phosphorescent peinture	stickers phosphorescent t shirt haute visibilité ${index + 1}`}
      />
    ))}
  
    {/* Content Overlay */}
    <div className="absolute inset-0 left-4 md:left-[153px] top-1/4 md:top-[210px] flex flex-col h-auto md:h-[280px] justify-center items-center md:items-start text-left gap-4 md:gap-6 text-white p-4 md:p-0">
      <Heading
        level="h1"
        className="text-4xl md:text-7xl font-bold text-center text-primary [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
      >
        MAKE IT GLOW!
      </Heading>
  
      <p className="mb-2 text-base md:text-xl">
        Plongez dans l'univers de la course à pied nocturne avec nos tenues de sport phosphorescentes !
      </p>
      <p className="mb-2 md:mb-4 text-sm md:text-base">Prêt à illuminer la nuit ? </p>
      <p className="mb-4 md:mb-8 text-sm md:text-base">Let’s go !</p>
    </div>
  
    {/* Navigation Buttons */}
    <div className="absolute left-2 md:left-5 m-2 md:m-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 md:space-y-3 z-20">
      {images.map((_, idx) => (
        <button
          key={idx}
          className={`w-4 h-4 md:w-6 md:h-6 rounded-full ${idx === activeIndex ? 'border-opacity bg-primary ring-2 ring-[#8FBF37] border-2' : 'bg-primary opacity-50'}`}
          onClick={() => setActiveIndex(idx)}
          style={{
            transition: 'all 0.3s ease-in-out',
          }}
        >
        </button>
      ))}
    </div>
  
    {/* Center Button */}
    <div className=''>
      <button
        className="absolute mt-8 md:mt-16 bottom-5 w-10 h-10 md:w-[65px] md:h-[43px] left-1/2 transform -translate-x-1/2 bg-primary text-black text-sm rounded-full shadow-lg transition duration-300 ease-in-out z-20"
      >
        <a href='#nosProduits' className='flex items-center justify-center w-full h-full'>
          <ChevronDoubleDown/>
        </a>
      </button>
    </div>
  </div>
  
  );
}
