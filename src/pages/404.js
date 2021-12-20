import React from "react"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import Structure from "../components/structure/Structure"

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Sidan kunde hittas </title>
        <meta property="og:type" content="404" />
      </Helmet>
      <Structure>
        <div className="section">
          <h1>Hoppsan!</h1>
          <p>Sidan verkar ha försvunnit någonstans. Testa Googla</p>
        </div>
      </Structure>
    </>
  )
}
