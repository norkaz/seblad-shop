import React from "react"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import Structure from "../components/structure/Structure"
import Text from "../components/controls/text/Text"

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Sidan kunde hittas </title>
        <meta property="og:type" content="404" />
      </Helmet>
      <Structure>
        <div className="section">
          <Text>
            <h1>Hoppsan!</h1>
            <p>Sidan verkar ha försvunnit någonstans. Testa Googla</p>
          </Text>
        </div>
      </Structure>
    </>
  )
}
