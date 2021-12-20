import React from "react"
import Structure from "../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import Grid from "../components/controls/grid/Grid"
import Column from "../components/controls/grid/column/Column"
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
        <Grid gap="20px">
          <Column type="full">
            <Img
              src="https://facegram.se/CDN/13-2.jpg"
              header="Produkter"
              headertag="h1"
              color="#FFF"
              shadow={false}
            />
          </Column>
        </Grid>
        <div className="section">
          <ShopWindow />
        </div>
      </Structure>
    </>
  )
}
