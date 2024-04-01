import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "../../components/medusa-cta"
import NewsletterForm from "../newsletters"


const fetchCollections = async () => {
  const { collections } = await getCollectionsList()
  return collections
}

const fetchCategories = async () => {
  const { product_categories } = await getCategoriesList()
  return product_categories
}

export default async function Footer() {
  const productCollections = await fetchCollections().then(
    (collections) => collections
  )
  const productCategories = await fetchCategories().then(
    (categories) => categories
  )
  return (
    <footer className="border-t border-gray-200 w-full">
      <div className="max-w-6xl mx-auto px-4 py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Catégories</h3>
            {productCategories && productCategories.length > 0 && (
              <ul>
                {productCategories.slice(0, 6).map((category) => (
                  <li key={category.id} className="mb-2">
                    <a
                      href={`/categories/${category.handle}`}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Collections</h3>
            {productCollections && productCollections.length > 0 && (
              <ul>
                {productCollections.slice(0, 6).map((collection) => (
                  <li key={collection.id} className="mb-2">
                    <a
                      href={`/collections/${collection.handle}`}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {collection.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Abonnez-vous à notre newsletter</h3>
            <NewsletterForm />
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Zorya Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}