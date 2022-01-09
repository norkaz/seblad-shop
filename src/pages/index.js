import React from "react"
import Structure from "../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import Img from "../components/controls/img/Img"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Hem </title>
        <meta property="og:type" content="content-page" />
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      </Helmet>
      <Structure>
        <div className="section full">
          <div className="grid">
            <div className="column">
              <Img src="https://facegram.se/CDN/9-2.jpg" />
            </div>
            <div className="column">
              <Img src="https://facegram.se/CDN/19-2.jpg" />
            </div>
            <div className="column">
              <Img src="https://facegram.se/CDN/20-2.jpg" />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="grid">
            <div className="column">
              <Img
                popup={true}
                src="https://facegram.se/CDN/12-2.jpg"
                srcLarge="https://facegram.se/CDN/12-2_L.jpg"
              />
            </div>
            <div className="column">
              <Img
                popup={true}
                src="https://facegram.se/CDN/1-2.jpg"
                srcLarge="https://facegram.se/CDN/1-2_L.jpg"
              />
            </div>
            <div className="column">
              <Img
                popup={true}
                src="https://facegram.se/CDN/8-2.jpg"
                srcLarge="https://facegram.se/CDN/8-2_L.jpg"
              />
            </div>
          </div>
        </div>
      </Structure>
    </>
  )
}
