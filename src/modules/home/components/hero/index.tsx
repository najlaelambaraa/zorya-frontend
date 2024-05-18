import { Button, Heading } from "@medusajs/ui"
import '../../../../styles/globals.css';
import CustomButton from "../buttons/customButton";
import ActionButton from "../buttons/actionButton";

const Hero = () => {
 
  return (
    <div className="relative h-screen text-white">
    <div className="absolute bg-img bg-black inset-0 z-10 flex flex-col justify-center items-start text-left p-4 md:p-8 gap-6">
      <Heading
        level="h1"
        className="text-4xl md:text-7xl font-bold mb-6 text-primary text-center drop-shadow-2xl"
      >
        MAKE IT GLOW!
      </Heading>
  
      <p className="text-center text-lg md:text-xl mb-4 md:mb-8 px-2 md:px-4">
        Explorez notre sélection de vêtements de course nocturne pour une sécurité optimale. Prêt à briller dans l'obscurité?
      </p>
      <p className="text-center text-md md:text-lg mb-4 md:mb-8 px-2 md:px-4">Découvrez notre collection dès maintenant !</p>
    </div>
  </div>
  
  
  )
}

export default Hero
