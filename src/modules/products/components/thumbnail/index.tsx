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
        "relative overflow-hidden bg-ui-bg-subtle shadow-elevation-card-rest  group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150",
        className,
        {
          "h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[300px] md:w-[300px]": size === "medium",
          "h-[263px] md:w-[660px] w-[330px] md:h-[520px]": size === "large",
          "w-[300px] h-[300px]": size === "full",
          "h-[700px] w-[720px]": size === "small",
          "h-[100px] w-[120px]": size === "square",

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
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 600px"
      fill
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  )
}

export default Thumbnail
