import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getRegion } from "app/actions"
import { ProductCollectionWithPreviews } from "types/global"
import StoryComponent from "@modules/home/components/Story"
import ValeurTemplate from "@modules/layout/templates/valeurs"
import TitleComponent from "@modules/home/components/titleComponent"
import BrandSection from "@modules/brand/components"
import brandTemplate from "@modules/brand/templates"
import BrandTemplate from "@modules/brand/templates"
import Cards from "@modules/blog/templates/Cards"
import Carousel from "@modules/home/components/carousel"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = async (
  countryCode: string
): Promise<ProductCollectionWithPreviews[] | null> => {
  const { collections } = await getCollectionsList(0, 3).then(
    (collections) => collections
  )

  if (!collections) {
    return null
  }

  const collectionIds = collections.map((collection) => collection.id)

  await Promise.all(
    collectionIds.map((id) =>
      getProductsList({
        queryParams: { collection_id: [id] },
        countryCode,
      })
    )
  ).then((responses) =>
    responses.forEach(({ response, queryParams }) => {
      let collection

      if (collections) {
        collection = collections.find(
          (collection) => collection.id === queryParams?.collection_id?.[0]
        )
      }

      if (!collection) {
        return
      }

      collection.products = response.products as unknown as Product[]
    })
  )

  return collections as unknown as ProductCollectionWithPreviews[]
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      {/* <Hero /> */}
      <Carousel/>
      <div className="py-12 bg-secondary">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
        <ValeurTemplate/>
        <StoryComponent
          title={<TitleComponent title="NOTRE HISTOIRE" />}
          altText="Notre histoire"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit lorem. Pellentesque et ante sapien. fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit lorem. Pellentesque et ante sapien. fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit lorem. Pellentesque et ante sapien. fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus."
          buttonText="En savoir plus"
          buttonLink="/histoire"
          imageSrc="/public/" 
          reverse={false} 
      />
     
      </div>
    </>
  )
}
