import React from "react"
import Structure from "../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import Img from "../components/controls/img/Img"
import ShopWindow from "../components/controls/shopWindow/Shop-Window"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Produkter </title>
        <meta property="og:type" content="content-page" />
      </Helmet>
      <Structure>
        <Img
          src="https://facegram.se/CDN/13-2.jpg"
          header="Produkter"
          headertag="h1"
          color="#FFF"
          shadow={false}
        />
        <div className="section">
          <ShopWindow />
        </div>
      </Structure>
    </>
  )
}
