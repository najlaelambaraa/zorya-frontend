import { Image as MedusaImage } from "@medusajs/medusa"
import { Container, clx } from "@medusajs/ui"
import Image from "next/image"
import React from "react"

import PlaceholderImage from "@modules/common/icons/placeholder-image"

type ThumbnailProps = {
  thumbnail?: string | null
  images?: MedusaImage[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "medium",
  isFeatured,
  className,
}) => {
  const initialImage = thumbnail || images?.[0]?.url

  return (
    <Container
      className={clx(
        "relative overflow-hidden bg-ui-bg-subtle shadow-elevation-card-rest  group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 w-[660px] h-[520px]",
        className,
        {
          "h-64 w-64": size === "medium", // Example fixed size for 'medium'
          // Add additional fixed sizes for other sizes if necessary
          "w-full h-auto": size === "full", // 'full' can be responsive if that's intended
        }
      )}
    >
      <ImageOrPlaceholder image={initialImage} size={size} />
    </Container>
  )
}

const ImageOrPlaceholder = ({
  image,
  size,
}: Pick<ThumbnailProps, "size"> & { image?: string }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className="absolute inset-0 object-cover object-center"
      draggable={false}
      quality={50}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      fill
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  )
}

export default Thumbnail
