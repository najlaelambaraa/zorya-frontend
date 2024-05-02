import { Region, Store } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "../product-preview/index"
import { ProductCollectionWithPreviews } from "types/global"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import StoryComponent from "../../Story"
import TitleComponent from "../../titleComponent"

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
  //const displayedProducts = products.slice(0, 3);

  return (
    <div className="content-container py-5 bg-bg">
     
      <ul className="grid grid-cols-1 small:grid-cols-1">
        {products.map((product, index) => (
          <li key={product.id}>
            <ProductPreview
              productPreview={product}
              region={region}
              reverse={index % 2 !== 0}
              isFeatured={false}
            />
          </li>
        ))}
      </ul>
      

    </div>
    
  )
}
