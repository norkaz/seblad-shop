import React from "react"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import Structure from "../components/structure/Structure"
import Grid from "../components/gridLayout/grid/Grid"
import Widget from "../components/gridLayout/widget/Widget"

export default function Home() {
  return (
    <>
      <Structure>
        <Helmet>
          <title>{siteData.name} - Tack för ditt meddelande </title>
          <meta property="og:type" content="content-page" />
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        </Helmet>
        <Grid>
          <Widget>
            <div className="text-box">
              <h1>Din beställning är nu genomförd</h1>
              <p>
                Vi kommer kontakta dig angående leverans och lagersaldo samt
                övriga frågor.
              </p>
            </div>
          </Widget>
        </Grid>
      </Structure>
    </>
  )
}
