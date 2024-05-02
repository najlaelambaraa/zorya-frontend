"use client";
import { Heading } from '@medusajs/ui';
import { useState } from 'react';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    '/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1714477967411-img_home.png&w=3840&q=50',
    '/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1714478306563-img_blog.png&w=3840&q=50',
    '/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1714477967411-img_home.png&w=3840&q=50'
  ];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[700px]">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          className={`w-full h-[700px] object-cover absolute transition-opacity duration-500 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          alt={`Slide ${index + 1}`}
        />
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 left-[153px] top-[210px] flex flex-col h-[280px] justify-center items-start text-left gap-6 text-white">
        <Heading
          level="h1"
          className="text-7xl font-bold text-center text-[#8FBF37] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
        >
        MAKE IT GLOW!
        </Heading>

        <p className="grid grid-cols-3 text-xl">
        Explorez notre sélection de vêtements de course nocturne pour une sécurité optimale. Prêt à briller dans l'obscurité?
        </p>
        <p className="mb-8">Découvrez notre collection dès maintenant !</p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-5 left-[56px] top[618px] flex items-center space-x-2 z-20">
        <button
          className={`bg-primary hover:bg-primary text-black text-sm rounded-[50px] h-[36px] w-[36px] shadow-lg transition duration-300 ease-in-out ${activeIndex === 0 ? 'opacity-50' : ''}`}
          onClick={prevSlide}
          disabled={activeIndex === 0}
        >&#10094;</button>
        <button
          className={`bg-primary hover:bg-primary text-black text-sm rounded-[50px] h-[36px] w-[36px] shadow-lg transition duration-300 ease-in-out ${activeIndex === images.length - 1 ? 'opacity-50' : ''}`}
          onClick={nextSlide}
          disabled={activeIndex === images.length - 1}
        >&#10095;</button>
      </div>
      <div className="absolute left-5 m-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-20">
      {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === activeIndex ? 'bg-primary ring-2 ring-[#8FBF37] border-2 border-[#8FBF37]' : 'bg-primary opacity-50'}`}
            onClick={() => setActiveIndex(idx)}
            style={{ transition: 'all 0.3s ease-in-out' }}
          ></button>
        ))}
        
        </div>
        {/* Center Button */}
        <div className=''>
            <button
                className="absolute mt-16 top-[619px] bottom-5 w-[65px] h-[43px] left-1/2 transform -translate-x-1/2 bg-primary text-black text-sm rounded-full shadow-lg transition duration-300 ease-in-out z-20"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
        </div>
     
    </div>
  );
}
