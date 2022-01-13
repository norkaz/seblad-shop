import React from "react"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
import Grid from "../components/gridLayout/grid/Grid"
import Widget from "../components/gridLayout/widget/Widget"
import Structure from "../components/structure/Structure"
import { Link } from "gatsby"

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Sidan kunde hittas </title>
        <meta property="og:type" content="404" />
      </Helmet>
      <Structure>
        <Grid>
          <Widget>
            <h1>404 Page not found</h1>
            <h2>Hoppsan! Sidan du försökte gå till hittades inte</h2>
            <p>
              Gå till <Link to="/products">produkter</Link> eller till{" "}
              <Link to="/">startsidan</Link>.
            </p>
          </Widget>
        </Grid>
      </Structure>
    </>
  )
}
