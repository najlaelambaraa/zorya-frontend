import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense, useState } from "react"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { Image as MedusaImage } from "@medusajs/medusa"
import ProductDescription from "../components/product-description"
import Image from "next/image";
type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
  
}

type ThumbnailProps = {
  thumbnail?: string | null
  images?: MedusaImage[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
}
const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,

}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
       
        <div className="block w-full relative">
          <ImageGallery images={product?.images || []} />
          
        </div>
        <div className="flex flex-col small:sticky small:top-48 small:py-0 w-full py-8 gap-y-12">
          <ProductOnboardingCta />
          <Suspense
            fallback={<ProductActions product={product} region={region} />}
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div className="content-container my-16 small:my-32">
      <Suspense
            fallback={<ProductDescription product={product} region={region} />}
          >
            {/* <ProductActionsWrapper id={product.id} region={region} />
             */}
             <ProductDescription product={product} region={region} />
          </Suspense>

        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
        
      </div>
     
    </>
  )
}

export default ProductTemplate;
