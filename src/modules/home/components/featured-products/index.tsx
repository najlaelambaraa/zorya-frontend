import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import {
  getProductByHandle,
  getProductsList,
  listRegions,
  retrievePricedProductById,
} from "@lib/data"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import TitleComponent from "../titleComponent"
type Props = {
  params: { countryCode: string; handle: string }
}
   
export async function generateStaticParams() {

  const countryCodes = await listRegions().then((regions) =>
    regions?.map((r) => r.countries.map((c) => c.iso_2)).flat()
  )

  if (!countryCodes) {
    return null
  }

  const products = await Promise.all(
    countryCodes.map((countryCode) => {
      return getProductsList({ countryCode })
    })
  ).then((responses) =>
    responses.map(({ response }) => response.products).flat()
  )

  const staticParams = countryCodes
    ?.map((countryCode) =>
      products.map((product) => ({
        countryCode,
        handle: product.handle,
      }))
    )
    .flat()

  return staticParams
}
const getPricedProductByHandle = async (handle: string, region: Region) => {
  const { product } = await getProductByHandle(handle).then(
    (product) => product
  )

  if (!product || !product.id) {
    return null
  }

  const pricedProduct = await retrievePricedProductById({
    id: product.id,
    regionId: region.id,
  })

  return pricedProduct
}

export default async function FeaturedProducts({
  collections,
  region,
  params,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
  pricedProduct: PricedProduct
  params: Props
})

 {
  // const pricedProduct = await getPricedProductByHandle(params.params.handle, region);
  return <div>
        <TitleComponent title="NOS PRODUITS"/>
    {
      collections.map((collection) => (
        <>
        
        <li key={collection.id}>
          <ProductRail collection={collection} region={region} />
        </li>
        
    
        </>
        
      ))
    }
  </div>
}



export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = params

  const { product } = await getProductByHandle(handle).then(
    (product) => product
  )

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | Medusa Store`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Medusa Store`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

