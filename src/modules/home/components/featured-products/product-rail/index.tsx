import { Region, Store } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "../product-preview/index"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }
  // Limiter à trois produits
  const displayedProducts = products.slice(0, 3);

  return (
    <div className="content-container py-12 small:py-24">
    <div className="flex justify-between mb-8">
      <Text className="txt-xlarge">{collection.title}</Text>
      <InteractiveLink href={`/store`}>
        Découvrir nos produits
      </InteractiveLink>
    </div>
    <ul className="grid grid-cols-3 gap-x-6 gap-y-24">
      {displayedProducts.map((product) => (
        <li key={product.id}>
          
          <ProductPreview
            productPreview={product}
            region={region}
            isFeatured
            
          />
          
        </li>
      ))}
    </ul>
  </div>
  )
}
