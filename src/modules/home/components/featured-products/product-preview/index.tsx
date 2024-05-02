import { ProductPreviewType } from "types/global"
import { retrievePricedProductById } from "@lib/data"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "modules/products/components/thumbnail"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import CustomButton from "../../buttons/customButton"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
  reverse,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
  reverse: boolean
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
 
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  return (
    <LocalizedClientLink href={`/products/${productPreview.handle}`} className="group">
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center`}>
    <div className=""> 
      <Thumbnail
        thumbnail={productPreview.thumbnail}
        size="large"
        isFeatured={isFeatured}
      />
    </div>
    <div className="flex flex-col justify-between bg-secondary py-4 p-4 w-[660px] h-[520px]">
      <div>
        <h2 className="text-white text-3xl/[30px] font-bold">{pricedProduct.title}</h2>
        <p className="text-sx/[10px] text-gray-400 py-2">{productPreview.price?.calculated_price}</p>
        <p className="text-white text-base mb-auto py-4">{pricedProduct.description}</p> 
      </div>
      <div>
      <CustomButton text="Voir le produit"/>
      </div>
    </div>
  </div>
</LocalizedClientLink>

  

  )
}
