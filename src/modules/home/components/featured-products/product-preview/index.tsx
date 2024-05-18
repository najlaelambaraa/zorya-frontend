import { ProductPreviewType } from "types/global";
import { retrievePricedProductById } from "@lib/data";
import { Region } from "@medusajs/medusa";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Thumbnail from "modules/products/components/thumbnail";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import CustomButton from "../../buttons/customButton";

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
  reverse,
}: {
  productPreview: ProductPreviewType;
  isFeatured?: boolean;
  region: Region;
  reverse: boolean;
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product);

  if (!pricedProduct) {
    return null;
  }

  return (
    <LocalizedClientLink href={`/products/${productPreview.handle}`} className="group">
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center`}>
    <div className="w-full md:w-auto md:h-auto">
      <Thumbnail
        thumbnail={productPreview.thumbnail}
        size="large"
        isFeatured={isFeatured}
      />
    </div>
    <div className={`flex flex-col justify-between ${reverse ? 'bg-primary' : 'bg-secondary'} py-4 px-4 w-full md:w-[660px] h-auto md:h-[520px]`}>
      <div className={`${reverse ? 'text-black' : 'text-white'} p-4 md:p-12`}>
        <h2 className="text-xl md:text-3xl font-bold">{pricedProduct.title}</h2>
        <p className="text-xs md:text-sm text-gray-400 font-bold py-2">{productPreview.price?.calculated_price}</p>
        <p className="text-base mb-auto py-4">{pricedProduct.description}</p>
      </div>
      <div>
        <CustomButton className={`${reverse ? 'bg-secondary text-white' : 'bg-primary text-black'}`} text="Voir le produit"/>
      </div>
    </div>
  </div>
</LocalizedClientLink>

  );
}
