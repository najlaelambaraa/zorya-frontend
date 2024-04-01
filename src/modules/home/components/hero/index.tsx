import { Button, Heading } from "@medusajs/ui"
import backgroundImage from "../../../../assets/images/hero-pattern.png";
const Hero = () => {
 
  return (
    <div
      className="relative h-screen bg-hero-pattern text-white "
       
      
    >
  <div className="absolute inset-0 z-10 flex flex-col justify-center items-start text-left p-8 gap-6">
    
      <Heading
        level="h1"
        className="text-7xl font-bold mb-6 text-cente text-lime-600"
      >
      MAKE IT GLOW!
      </Heading>
      
 
    <p className="text-xl mb-8 text-center px-4">
          Explorez notre sélection de vêtements de course nocturne pour une sécurité optimale. Prêt à briller dans l'obscurité?
    </p>

    <p className="mb-8 text-center">
          Découvrez notre collection dès maintenant !
    </p>

    <a
      href="/store"
      target="_blank"
      className="font-bold text-lg" 
    >
     <button className="bg-lime-600 text-black font-bold py-4 px-6 rounded-full hover:bg-slate-200 focus:outline-none focus:ring-2 focus:bg-slate-200 focus:ring-opacity-50 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
     Voir nos produits
    </button>

    </a>
  </div>
</div>


  )
  
}

export default Hero
