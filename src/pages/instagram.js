import React from "react"
import Structure from "../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import Grid from "../components/gridLayout/grid/Grid"
import Widget from "../components/gridLayout/widget/Widget"
import InstagramWidget from "../components/controls/instagramWidget/Instagram-Widget"

export default function Instagram() {
  return (
    <>
      <Structure hideInstagram={true}>
        <Helmet>
          <title>{siteData.name} - Instagram </title>
          <meta property="og:type" content="content-page" />
        </Helmet>
        <Grid>
          <Widget>
            <InstagramWidget
              lightWidgetId={"4e0da1cf0a755352b145c133b8653a99"}
              title={"Följ mig på Instagram @sebladkeramik"}
            />
          </Widget>
        </Grid>
      </Structure>
    </>
  )
}
