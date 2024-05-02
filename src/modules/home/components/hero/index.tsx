import { Button, Heading } from "@medusajs/ui"
import '../../../../styles/globals.css';
import CustomButton from "../buttons/customButton";
import ActionButton from "../buttons/actionButton";

const Hero = () => {
 
  return (
  <div className="relative h-screen text-white ">
    <div className="absolute bg-img bg-black inset-0 z-10 flex flex-col justify-center items-start text-left p-8 gap-6 ">

      <Heading
        level="h1"
        className="text-7xl font-bold mb-6 text-center text-lime-600 drop-shadow-2xl"
      >
      MAKE IT GLOW!
      </Heading>
      
 
      <p className="grid grid-cols-3 text-xl mb-8 text-center px-4">
      Explorez notre sélection de vêtements de course nocturne pour une sécurité optimale. Prêt à briller dans l'obscurité?
      </p>
      <p className="mb-8 px-4">Découvrez notre collection dès maintenant !</p>
     </div>
  </div>
  )
}

export default Hero
