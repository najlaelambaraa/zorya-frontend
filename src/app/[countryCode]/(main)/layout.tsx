import { Metadata } from "next"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import NewsletterForm from "@modules/layout/templates/newsletters"
import ValeurTemplate from "@modules/layout/templates/valeurs"
import Valeur from "@modules/layout/templates/valeurs/valeur"
import ProductCard from "@modules/home/components/product/Product-Layout"
import ProductsGrid from "@modules/home/components/product/Product-Layout"
import Grid from "@modules/home/components/product/MyPage"
import MyPage from "@modules/home/components/product/MyPage"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
 
  
  return (
    <>
      <Nav />
      {props.children}
      <NewsletterForm />
      <Footer />
      
    </>
  )
}
