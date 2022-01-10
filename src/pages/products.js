import React from "react"

import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import Structure from "../components/structure/Structure"
import Grid from "../components/gridLayout/grid/Grid"
import Widget from "../components/gridLayout/widget/Widget"
import ImageBanner from "../components/controls/imageBanner/Image-Banner"
import ShopWindow from "../components/controls/shopWindow/Shop-Window"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Produkter </title>
        <meta property="og:type" content="content-page" />
      </Helmet>
      <Structure>
        <ImageBanner
          src="https://facegram.se/CDN/13-2.jpg"
          header="Produkter"
          headertag="h1"
          color="#FFF"
          shadow={false}
        />
        <Grid>
          <Widget>
            <ShopWindow />
          </Widget>
        </Grid>
      </Structure>
    </>
  )
}
