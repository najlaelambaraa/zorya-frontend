import React from "react"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import NewsletterForm from "./newsletters"
import MyPage from "@modules/home/components/product/MyPage"


const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="relative">{children}</main>
      <NewsletterForm />
      <MyPage />
      <Footer />
      
    </div>
  )
}

export default Layout
