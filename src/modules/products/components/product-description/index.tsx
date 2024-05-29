"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"

import { useIntersection } from "@lib/hooks/use-in-view"
import { addToCart } from "@modules/cart/actions"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"

import MobileActions from "../mobile-actions"
import ProductPrice from "../product-price"
import GuideTaille from "@modules/common/icons/guide-taille"
import ChevronDown from "@modules/common/icons/chevron-down"

type ProductActionsProps = {
  product: PricedProduct
  region: Region
}

export type PriceType = {
  calculated_price: string
  original_price?: string
  price_type?: "sale" | "default"
  percentage_diff?: string
}

export default function ProductDescription({
  product,
  region,
}: ProductActionsProps): JSX.Element {
  const [options, setOptions] = useState<Record<string, string>>({})
  const [isAdding, setIsAdding] = useState(false)

  const countryCode = useParams().countryCode as string
  const productTitle = product.title
  const productDescription = product.description
  const productMaterial = product.material
  const variants = product.variants
  const variantEntretien = product.variants.map((variant) => variant.options?.find((option) => option.variant_id === '0')?.value)

  // initialize the option state
  useEffect(() => {
    const optionObj: Record<string, string> = {}

    for (const option of product.options || []) {
      Object.assign(optionObj, { [option.id]: undefined })
    }

    setOptions(optionObj)
  }, [product])

  // memoized record of the product's variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {}

    for (const variant of variants) {
      if (!variant.options || !variant.id) continue

      const temp: Record<string, string> = {}

      for (const option of variant.options) {
        temp[option.option_id] = option.value
      }

      map[variant.id] = temp
    }

    return map
  }, [variants])

  // memoized function to check if the current options are a valid variant
  const variant = useMemo(() => {
    let variantId: string | undefined = undefined

    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key
      }
    }

    return variants.find((v) => v.id === variantId)
  }, [options, variantRecord, variants])

  // if product only has one variant, then select it
  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id])
    }
  }, [variants, variantRecord])

  // update the options when a variant is selected
  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update })
  }

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    if (variant && !variant.inventory_quantity) {
      return false
    }

    if (variant && variant.allow_backorder === false) {
      return true
    }
  }, [variant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!variant?.id) return
    setIsAdding(true)
    await addToCart({
      variantId: variant.id,
      quantity: 1,
      countryCode: countryCode,
    })
    setIsAdding(false)
  }

  return (
    <>
    
    <div className="pb-10 px-2">
      <h1 className="text-4xl pb-2">Description du produit</h1>
      <p>{productDescription}</p>
      <div className="grid grid-cols-2 gap-8 mt-4 pb-10">
        <div>
          <h1 className="text-2xl pb-2">Composition</h1>
          <p>{productMaterial}</p>
        </div>
        <div className="p-2">
          <h1 className="text-2xl py-2">Entretien</h1>
          <div className="flex items-start">
            <ChevronDown className="h-5 w-5 text-gray-500 mr-2" />
            <p>Température maximum de lavage 30°c - délicat</p>
          </div>
          <div className="flex items-start">
            <ChevronDown className="h-5 w-5 text-gray-500 mr-2" />
            <p>Blanchiment interdit</p>
          </div>
          <div className="flex items-start">
            <ChevronDown className="h-5 w-5 text-gray-500 mr-2" />
            <p>Ne convient pas au séchage en machine</p>
          </div>
          <div className="flex items-start">
            <ChevronDown className="h-5 w-5 text-gray-500 mr-2" />
            <p>Repassage interdit</p>
          </div>
          <div className="flex items-start">
            <ChevronDown className="h-5 w-5 text-gray-500 mr-2" />
            <p>Séchage air libre à l’ombre, éviter le sèche-linge</p>
          </div>
        </div>
      </div>
    </div>

        
    </>
  )
}
