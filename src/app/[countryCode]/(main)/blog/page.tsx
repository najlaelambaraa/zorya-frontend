import Cards from "@modules/blog/templates/Cards";
import BrandSection from "@modules/brand/components";
import BrandTemplate from "@modules/brand/templates";
import InteractiveLink from "@modules/common/components/interactive-link";
import ValeurTemplate from "@modules/layout/templates/valeurs";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Zorya : Conseils et Astuces pour vos running nocturnes",
  description: "Explorez le blog Zorya pour des conseils pratiques, des astuces et des articles sur le running nocturne et les tenues de sport phosphorescentes.",
}

export default async function Blog() {  
  return (
<>
      <div className="bg-black">
        <Cards/>
      </div>

</>
        
    
  );
}