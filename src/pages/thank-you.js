import React from "react"
import Structure from "../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Tack för ditt meddelande </title>
        <meta property="og:type" content="content-page" />
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      </Helmet>
      <Structure>
        <div className="section">
          <div className="grid">Tack för ditt meddelande</div>
        </div>
      </Structure>
    </>
  )
}
