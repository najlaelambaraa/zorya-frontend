import Cards from "@modules/blog/templates/Cards";
import BrandSection from "@modules/brand/components";
import BrandTemplate from "@modules/brand/templates";
import InteractiveLink from "@modules/common/components/interactive-link";
import ValeurTemplate from "@modules/layout/templates/valeurs";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Notre blog.",
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