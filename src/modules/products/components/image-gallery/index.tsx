// import { Image as MedusaImage } from "@medusajs/medusa"
// import { Container } from "@medusajs/ui"
// import Image from "next/image"

// type ImageGalleryProps = {
//   images: MedusaImage[]
// }

// const ImageGallery = ({ images }: ImageGalleryProps) => {
//   return (
//     <div className="flex items-start relative">
//       <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
//         {images.map((image, index) => {
//           return (
//             <Container
//               key={image.id}
//               className="relative aspect-[29/34] w-72 overflow-hidden bg-ui-bg-subtle"
//               id={image.id}
//             >
//               <Image
//                 src={image.url}
//                 priority={index <= 2 ? true : false}
//                 className="absolute inset-0 rounded-rounded"
//                 alt={`Product image ${index + 1}`}
//                 fill
//                 sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                 style={{
//                   objectFit: "cover",
//                 }}
//               />
//             </Container>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ImageGallery
// ImageGallery.js
"use client"
import React from "react";
import { Container } from "@medusajs/ui";
import Image from "next/image";
import { Image as MedusaImage } from "@medusajs/medusa"
type ImageGalleryProps = {
  images: MedusaImage[];
  onImageClick: (url: string) => void;  // Ajouter cette prop pour le clic
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-2">
        {images.map((image, index) => (
          <Container 
            key={image.id}
            className="relative aspect-[29/34] overflow-hidden bg-ui-bg-subtle"
            id={image.id}
            onClick={() => onImageClick(image.url)}  
          >
            <Image
              src={image.url}
              priority={index <= 2 ? true : false}
              className="absolute inset-0"
              alt={`Product image ${index + 1}`}
              fill
              sizes="(max-width: 576px) 580px, (max-width: 768px) 560px, (max-width: 992px) 980px, 900px"
              style={{ objectFit: "cover" }}
            />
          </Container>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
