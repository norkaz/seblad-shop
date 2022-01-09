import React from "react"
import Structure from "../../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../../data/site/sitedata"
import Video from "../../components/controls/video/Video"

export default function Videos() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Filmer </title>
        <meta property="og:type" content="content-page" />
      </Helmet>
      <Structure>
        <div className="section">
          <div className="grid">
            <div className="column">
              <Video
                hideInMobile={true}
                height={"auto"}
                controls
                width="100%"
                type="video/mp4"
                src={"https://facegram.se/CDN/centrera-facebook-1920x1080.m4v"}
              />
            </div>
            <div className="column">
              <Video
                hideInMobile={true}
                controls
                width="100%"
                type="video/mp4"
                src={"https://facegram.se/CDN/dreja-instagram-640x360.m4v"}
              />
            </div>
          </div>
        </div>
      </Structure>
    </>
  )
}
