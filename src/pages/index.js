import React from "react"
import Structure from "../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import Grid from "../components/gridLayout/grid/Grid"
import Widget from "../components/gridLayout/widget/Widget"
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
        <Grid isFull={true}>
          <Widget>
            <Img
              src={"https://facegram.se/CDN/9-2.jpg"}
              alt={"https://facegram.se/CDN/9-2.jpg"}
            />
          </Widget>
          <Widget>
            <Img
              src={"https://facegram.se/CDN/19-2.jpg"}
              alt={"https://facegram.se/CDN/19-2.jpg"}
            />
          </Widget>
          <Widget>
            <Img
              src={"https://facegram.se/CDN/20-2.jpg"}
              alt={"https://facegram.se/CDN/20-2.jpg"}
            />
          </Widget>
        </Grid>
        <Grid>
          <Widget>
            <Img
              popup={true}
              src={"https://facegram.se/CDN/12-2.jpg"}
              srcLarge={"https://facegram.se/CDN/12-2_L.jpg"}
              alt={"https://facegram.se/CDN/12-2_L.jpg"}
            />
          </Widget>
          <Widget>
            <Img
              popup={true}
              src={"https://facegram.se/CDN/1-2.jpg"}
              srcLarge={"https://facegram.se/CDN/1-2_L.jpg"}
              alt={"https://facegram.se/CDN/1-2_L.jpg"}
            />
          </Widget>
          <Widget>
            <Img
              popup={true}
              src={"https://facegram.se/CDN/8-2.jpg"}
              srcLarge={"https://facegram.se/CDN/8-2_L.jpg"}
              alt={"https://facegram.se/CDN/8-2_L.jpg"}
            />
          </Widget>
        </Grid>
      </Structure>
    </>
  )
}
