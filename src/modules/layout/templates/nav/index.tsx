import { headers } from "next/headers"
import { Suspense } from "react"
import { ShoppingBag } from "@medusajs/icons"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-lime-700">
      <header className="relative h-16 mx-auto">
        <nav className="flex items-center justify-between h-full px-6">
          { <div className="flex items-center gap-x-6">
            <div className="h-full">
              <SideMenu regions={regions} />
              <img src="" alt="Logo" className="h-full w-auto text-white" />
            </div>    
          </div> 
          }
         
          <div className="flex items-center gap-x-6 text-white">
            <LocalizedClientLink
              href="/"
              className="hover:underline"
            >
              PRODUITS
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="hover:underline"
            >
              NOTRE MARQUE
            </LocalizedClientLink>
            <LocalizedClientLink
                className="hover:underline"
                href="/store" 
              >
                BLOG
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:underline hidden sm:block text-white"
                  href="/search"
                  scroll={false}
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:underline hidden sm:block text-white"
                href="/account"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-white hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                >
                  augs(0)
                  
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
