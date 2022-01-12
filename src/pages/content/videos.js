import React from "react"
import { Helmet } from "react-helmet"
import { siteData } from "../../data/site/sitedata"
import Structure from "../../components/structure/Structure"
import Grid from "../../components/gridLayout/grid/Grid"
import Widget from "../../components/gridLayout/widget/Widget"
import Video from "../../components/controls/video/Video"

export default function Videos() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Filmer </title>
        <meta property="og:type" content="content-page" />
      </Helmet>
      <Structure>
        <Grid>
          <Widget>
            <Video
              hideInMobile={false}
              height={"auto"}
              controls
              width="100%"
              type="video/mp4"
              src={"https://facegram.se/CDN/centrera-facebook-1920x1080.m4v"}
            />
          </Widget>
          <Widget>
            <Video
              hideInMobile={false}
              controls
              width="100%"
              type="video/mp4"
              src={"https://facegram.se/CDN/dreja-instagram-640x360.m4v"}
            />
          </Widget>
        </Grid>
      </Structure>
    </>
  )
}
