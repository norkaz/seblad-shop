import React from "react"
import Structure from "../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"

export default function Instagram() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Instagram </title>
        <meta property="og:type" content="content-page" />
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      </Helmet>
      <Structure>
        <div className="section">
          <div className="grid">
            <iframe
              title="instagram"
              src="//lightwidget.com/widgets/4e0da1cf0a755352b145c133b8653a99.html"
              scrolling="no"
              allowtransparency="true"
              className="lightwidget-widget"
              style={{
                width: "100%",
                overflow: "hidden",
                border: "0",
              }}
            ></iframe>
          </div>
        </div>
      </Structure>
    </>
  )
}
