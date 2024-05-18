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
            <div className="h-[29px] w-[144px] pl-4">
              
            <Logo/>
            </div>    
          </div> 
          }
         
    <div className="hidden md:flex items-center gap-x-6 text-white">
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

          <div className="flex items-center gap-x-4 h-full">
          <LocalizedClientLink
                className="hover:underline text-white"
                href="/account"
              >
      
               <div className="w-[20px] h-[20px]">
                {/* <Bonhomme /> */}
                <User/>
                </div> 
              </LocalizedClientLink>
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
            <SideMenu regions={regions} />
          </div>
        </nav>
      </header>
    </div>
  )
}
