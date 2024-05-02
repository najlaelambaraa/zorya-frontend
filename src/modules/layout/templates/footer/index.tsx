import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "../../components/medusa-cta"
import NewsletterForm from "../newsletters"


// const fetchCollections = async () => {
//   const { collections } = await getCollectionsList()
//   return collections
// }

// const fetchCategories = async () => {
//   const { product_categories } = await getCategoriesList()
//   return product_categories
// }

export default async function Footer() {
  // const productCollections = await fetchCollections().then(
  //   (collections) => collections
  // )
  // const productCategories = await fetchCategories().then(
  //   (categories) => categories
  // )
  return (
    <footer className="bg-bg text-white">
    <div className="max-w-6xl mx-auto px-2 py-5 lg:py-12 flex flex-col md:flex-row justify-between">
    <div className="flex flex-col mb-6 md:mb-0">
      <h2 className="text-2xl font-bold mb-1">ZORYA</h2>
      <a href="mailto:contact@zorya.fr" className="hover:underline mb-1">contact@zorya.fr</a>
      <a href="tel:0000000000" className="hover:underline">00 00 00 00</a>
    </div>
    <div className="flex flex-col md:flex-row md:items-center gap-8 justify-end">
    <LocalizedClientLink
      className="hover:underline"
      href="/account"
    >
      MENTIONS LEGALES
    </LocalizedClientLink>
    <LocalizedClientLink
      className="hover:underline"
      href="/account"
    >
      POLITIQUE DE CONFIDENTIALITE
    </LocalizedClientLink>
    <LocalizedClientLink
      className="hover:underline"
      href="/account"
    >
      CONDITION GENERALE DE VENTE (CGV)
    </LocalizedClientLink>
    </div>
   
  </div>
  <div className="pb-7 font-bold">
    <p className="text-center text-white text-sm">
      © {new Date().getFullYear()} Zorya Tous droits réservés.
    </p>
  </div>
</footer>
  )
}