import BrandSection from "@modules/brand/components";
import BrandTemplate from "@modules/brand/templates";
import InteractiveLink from "@modules/common/components/interactive-link";
import ValeurTemplate from "@modules/layout/templates/valeurs";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "L'Histoire de Zorya : Innovation et Sécurité dans le Running nocturne",
  description: "Découvrez l'histoire de Zorya, la marque novatrice dans les vêtement de sport phosphorescents. Un parcours dédié à l'innovation, la sécurité et la durabilité",
}

export default async function Brand() {  
  return (
<>
      
         <div className="bg-bg">
         <BrandSection
  title="ZORYA ET LA PHOSPHORESCENCE"
  content={
    <div dangerouslySetInnerHTML={{ __html: `
      Bienvenue dans la Glowsphère !<br/><br/>

      Au début, c'est l'histoire de deux amis, Hugo Monnier et Grégoire Delarue, qui un jour ont eu une idée un peu folle : comment révolutionner le running nocturne ? Ensuite, Nino Parement a rejoint l'aventure pour ajouter sa touche à l'équipe. Et voilà comment Zorya est née !<br/><br/>

      Pourquoi "Zorya" ?<br/><br/>

      Tout simplement pour faire un clin d’œil à trois déesses de la mythologie slave, qui veillent sur le jour du lever au coucher du soleil ! C'est donc le nom parfait pour la marque qui rend lumineux les sportifs nocturnes !<br/><br/>

      Zorya, c’est la marque qui allie running nocturne et sécurité !<br/><br/>

      Notre gamme de tenues de sport spécialement conçues pour les sportifs nocturnes est à la fois cool, confortable, mais surtout hyper lumineuse. Notre gamme de produits se distingue par l’utilisation de la “bioluminescence” intégrée directement dans nos tissus, en complément des bandes réfléchissantes.<br/><br/>

      Cela signifie que nos tenues de sport brillent d'elles-mêmes dans l'obscurité, comme des lucioles. Que vous soyez un passionné de course à pied nocturne, de trail nocturne, ou un adepte de la marche sous les étoiles, nos tenues de sport phosphorescentes sont là pour illuminer vos performances en toute sécurité !<br/><br/>

      Zorya n’oublie pas la planète !<br/><br/>

      En plus d’offrir une haute visibilité, nos tenues de sport sont fabriquées avec des matériaux de qualité, soigneusement sélectionnés pour leur durabilité et leur respect de l’environnement. Nous adoptons une démarche écoresponsable en privilégiant l'utilisation de matériaux recyclés et recyclables.<br/><br/>

      Zorya se veut locale !<br/><br/>

      Nos produits sont finalisés en Normandie, dans l’atelier situé à Bretteville-sur-Odon, dans le Calvados, au cœur de la superbe Normandie ! Des produits durables et respectueux de l’environnement.<br/><br/>

      Alors, prêt à vous démarquer avec une marque de vêtements de sport innovante et moderne ?<br/><br/>

      Rejoignez la Glowsphère !<br/><br/>

      Make it glow
    `}} />
  }
  buttonText="Voir nos produits"
  imageSrc="/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1716659267040-mockup%20haut%20de%20compr%C3%83%C2%A9ssion%20homme.jpg&w=3840&q=50"
  altText="phosphorescent  phosphorescence vetement de sport homme gilet haut visibilité gilets haute visibilité veste haute visibilité  gilet haute visibilité survetement de sport vetement haute magasin vetement de sport visibilité phosphorescent peinture  gilets haute visibilité site de vetement de sport magasin de vetement de sport magasin  vetement de sport"
  buttonLink="/"
/>
<BrandTemplate />


         </div>
        <ValeurTemplate/>
      
</>
        
    
  );
}