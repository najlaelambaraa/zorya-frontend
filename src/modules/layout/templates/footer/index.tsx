import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "../../components/medusa-cta"
import NewsletterForm from "../newsletters"


export default async function Footer() {
  return (
    <footer className="bg-bg text-white">
       {/* Conteneur principal avec des classes pour la mise en page et le style */}
    <div className="max-w-6xl mx-auto px-2 py-5 lg:py-12 flex flex-col md:flex-row justify-between">
    <div className="flex flex-col mb-6 md:mb-0">
      {/* Section de gauche : informations de contact */}
      <h2 className="text-2xl font-bold mb-1">ZORYA</h2>
      <a href="mailto:gregoire14.delarue@gmail.com" className="hover:underline mb-1">gregoire14.delarue@gmail.com</a>
      <a className="hover:underline">06 71 60 43 05</a>
    </div>
     {/* Section de droite : liens de navigation */}
    <div className="flex flex-col md:flex-row md:items-center gap-8 justify-end">
    <LocalizedClientLink
      className="hover:underline"
      href="/mentions-legales"
    >
      MENTIONS LEGALES
    </LocalizedClientLink>
    <LocalizedClientLink
      className="hover:underline"
      href="/cgu"
    >
      CGU
    </LocalizedClientLink>
    <LocalizedClientLink
      className="hover:underline"
      href="/politique-de-confidentialite"
    >
      POLITIQUE DE CONFIDENTIALITE
    </LocalizedClientLink>
    <LocalizedClientLink
      className="hover:underline"
      href="/condition-de-vente"
    >
      CONDITION GENERALE DE VENTE (CGV)
    </LocalizedClientLink>
    </div>
   
  </div>
        
      {/* Section de bas de page : message de copyright */}
  <div className="pb-7 font-bold">
    <p className="text-center text-white text-sm">
      S.A.S Zorya protege {new Date().getFullYear()} 
    </p>
  </div>
</footer>
  )
}