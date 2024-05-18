import BrandSection from "@modules/brand/components";
import BrandTemplate from "@modules/brand/templates";
import InteractiveLink from "@modules/common/components/interactive-link";
import ValeurTemplate from "@modules/layout/templates/valeurs";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brand",
  description: "Notre marque.",
}

export default async function Brand() {  
  return (
<>
      
         <div className="bg-bg">
            <BrandSection
                  title="NOTRE MARQUE"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit lorem. Pellentesque et ante sapien. fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus.
                  "
                  buttonText="Voir nos produits"
                  imageSrc=""
                  altText="Image descriptive de notre marque" 
                      />
            <BrandTemplate />
         </div>
        <ValeurTemplate/>
      
</>
        
    
  );
}