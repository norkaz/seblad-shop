import React from "react"
import Structure from "../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import InstagramWidget from "../components/controls/instagramWidget/Instagram-Widget"

export default function Instagram() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Instagram </title>
        <meta property="og:type" content="content-page" />
      </Helmet>
      <Structure hideInstagram={true}>
        <div className="section">
          <div className="grid">
            <div className="column">
              <InstagramWidget
                lightWidgetId={"4e0da1cf0a755352b145c133b8653a99"}
                title={"Följ mig på Instagram @sebladkeramik"}
              />
            </div>
          </div>
        </div>
      </Structure>
    </>
  )
}
