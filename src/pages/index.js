import React from "react"
import Structure from "../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import Video from "../components/controls/video/Video"
import Img from "../components/controls/img/Img"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Hem </title>
        <meta property="og:type" content="content-page" />
      </Helmet>
      <Structure>
        <Video
          height={"300px"}
          poster={"https://facegram.se/CDN/9-2.jpg"}
          autoplay
          loop
          muted
          width="100%"
          type="video/mp4"
          src={"https://facegram.se/CDN/centrera-facebook-1920x1080.m4v"}
        />
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
          <div className="grid">
            <div className="column">
              <Img
                link="/products"
                color="#FFF"
                header="produkter"
                headerTag="h3"
                src="https://facegram.se/CDN/13-2.jpg"
              />
            </div>
            <div className="column">
              <Video
                autoplay={true}
                loop={true}
                muted={true}
                width="100%"
                type="video/mp4"
                src={"https://facegram.se/CDN/dreja-instagram-640x360.m4v"}
              />
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <Img src="https://facegram.se/CDN/9-2.jpg" />
            </div>
          </div>
          <div className="grid">
            <div className="column">
              <Img src="https://facegram.se/CDN/19-2.jpg" />
            </div>
            <div className="column">
              <Img src="https://facegram.se/CDN/20-2.jpg" />
            </div>
          </div>
        </div>
      </Structure>
    </>
  )
}
