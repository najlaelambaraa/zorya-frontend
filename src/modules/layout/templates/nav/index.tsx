import { headers } from "next/headers"
import { Suspense } from "react"
import { ShoppingBag } from "@medusajs/icons"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Panier from "@modules/common/icons/madeFrance"
import Logo from "@modules/common/icons/logo"
import Bonhomme from "@modules/common/icons/bonhomme"
import { User } from "@medusajs/icons"
import { useRouter } from "next/router"


export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)
  

  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-bg">
      <header className="relative h-[59px] mx-auto">
        <nav className="flex items-center justify-between py-3">
          { <div className="flex items-center gap-x-6">
            <div className="h-[29px] w-[144px]">
              {/* <SideMenu regions={regions} /> */}
             <img className="pl-4 ml-4" src="/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1714507426551-logo%20picto%20(1).png&w=3840&q=50" alt="Logo" />
          
            </div>    
          </div> 
          }
         
         <div className="flex items-center gap-x-6 text-white">
      <LocalizedClientLink
        href="/"
        className=""
      >
        PRODUITS
      </LocalizedClientLink>
      <LocalizedClientLink
        href="/brand"
        className="text-primary"
      >
        NOTRE MARQUE
      </LocalizedClientLink>
      <LocalizedClientLink
        href="/blog"
        className=""
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
                
                
               <div className="w-[20px] h-[20px]">
                {/* <Bonhomme /> */}
                <User/>
                </div> 
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-white bg-lime-700 hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                >
                  Panier(0)
                  
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
