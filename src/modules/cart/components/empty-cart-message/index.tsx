import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import LocalizedClientLink from "@modules/common/components/localized-client-link"


const EmptyCartMessage = () => {
  return (
    <div className="py-20 px-4 md:px-6 lg:px-8 flex flex-col justify-center items-center bg-white shadow-lg rounded-lg max-w-4xl mx-auto my-12 border border-gray-200">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">Panier Vide</h1>
      <p className="text-lg text-gray-600 max-w-md text-center mb-6">
        Il n'y a aucun article dans votre panier. Utilisez le lien ci-dessous pour commencer à parcourir nos produits.
      </p>
      <LocalizedClientLink
        href="/"
      >
        <div className="button">
          Voir les produits Zorya
        </div>
      </LocalizedClientLink>
    </div>
  )
}

export default EmptyCartMessage


