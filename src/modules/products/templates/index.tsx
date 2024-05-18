import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"
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
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
          <ProductOnboardingCta />
          <Suspense
            fallback={<ProductActions product={product} region={region} />}
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div className="content-container my-16 small:my-32">
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
     
    </>
  )
}

export default ProductTemplate
// ProductTemplate.js
// "use client"
// ProductTemplate.js
// import React, { Suspense, useState } from "react";
// import ImageGallery from "@modules/products/components/image-gallery";
// import Image from "next/image";  // Import du composant Image de Next.js
// import ProductActionsWrapper from "./product-actions-wrapper";
// import ProductOnboardingCta from "../components/product-onboarding-cta";
// import ProductActions from "../components/product-actions";

// const ProductTemplate = ({ product, region, countryCode }: ProductTemplateProps) => {
//   const [selectedImageUrl, setSelectedImageUrl] = useState("");

//   const handleImageClick = (url: string) => {
//     setSelectedImageUrl(url);
//   };

//   if (!product || !product.id) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <>
//       <div className="content-container flex flex-col small:flex-row py-6 relative">
//         <div className="flex small:flex-row">
//           <ImageGallery images={product?.images || []} onImageClick={handleImageClick} />
//           <div className="">
//             {selectedImageUrl && (
//               <div className="w-1/2 ">
//                 <Image src={selectedImageUrl} alt="Selected product image" width={500} height={500} objectFit="cover" />
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
//         {/* <ProductOnboardingCta />
//            <Suspense
//             fallback={<ProductActions product={product} region={region} />}
//           >
//             <ProductActionsWrapper id={product.id} region={region} />
//           </Suspense> */}
 
//       </div>
//       </div>
//       // Autres composants...
//     </>
//   );
// }

// export default ProductTemplate;
