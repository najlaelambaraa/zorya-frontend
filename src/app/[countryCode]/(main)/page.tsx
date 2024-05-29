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
import ValeurHomeTemplate from "@modules/layout/templates/valeurs/Valeurs-Home"
import { useState } from "react"
import dynamic from "next/dynamic"
import Popup from "@modules/home/components/popup"
import Head from 'next/head';

export const metadata: Metadata = {
  title: "Découvrez notre collection de tenues de sport phosphorescentes pour le running nocturne",
  description:
    "Découvrez les tenues de sport phosphorescentes Zorya pour vos running nocturnes. Restez visible et en sécurité avec notre gamme innovante de vestes, hauts de sport et sweats",
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

  const Popup = dynamic(() => import("@modules/home/components/popup/popupCLient"), {
    ssr: false,
  });
  return (
    <>
    
      <Head>
        <title>Découvrez notre collection de tenues de sport phosphorescentes pour le running nocturne</title>
        <meta name="description" content="Découvrez les tenues de sport phosphorescentes Zorya pour vos running nocturnes. Restez visible et en sécurité avec notre gamme innovante de vestes, hauts de sport et sweats." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    
      {/* <Hero /> */}
      <Carousel/>
      <div className="py-12 bg-secondary">
      {/* <Popup /> */}
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
        <ValeurHomeTemplate/>
        <StoryComponent
          title={<TitleComponent title="NOTRE HISTOIRE" />}
          altText="histoire zorya site de vetement de sport magasin de vetement de sport magasin  vetement de sport"
          content={ <div dangerouslySetInnerHTML={{ __html: `Welcome to the Glowsphère !<br/><br/>

          Zorya, c’est l’idée de trois potes voulant révolutionner le running nocturne ! <br/><br/>
          
          Avec son  nom inspiré de la mythologie slave, notre marque propose une gamme innovante de vêtements de sport nocturnes, intégrant de la bioluminescence pour une haute visibilité. <br/><br/>
          
        Envie d'en savoir plus sur cette histoire palpitante ?`}} />}
          buttonText="En savoir plus"
          buttonLink="/brand"
          imageSrc="/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1716661773176-coureur%20de%20nuit%202.jpg&w=3840&q=50" 
          reverse={false} 
          
      />
      </div>
    </>
  )
}
