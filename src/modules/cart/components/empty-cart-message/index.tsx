import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"


const EmptyCartMessage = () => {
  return (
    <div className="py-20 px-4 md:px-6 lg:px-8 flex flex-col justify-center items-center bg-white shadow-lg rounded-lg max-w-4xl mx-auto my-12 border border-gray-200">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">Panier Vide</h1>
      <p className="text-lg text-gray-600 max-w-md text-center mb-6">
        Il n'y a aucun article dans votre panier. Utilisez le lien ci-dessous pour commencer à parcourir nos produits.
      </p>
      <InteractiveLink
        href="/store"
      >
        <div className="text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Voir les produits Zorya
        </div>
      </InteractiveLink>
    </div>
  )
}

export default EmptyCartMessage


