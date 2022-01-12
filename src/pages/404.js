import React from "react"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"
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
        <div className="text-box">
          <h1>Hoppsan! Sidan du försökte gå till hittades inte</h1>
          <p>
            Gå till <Link to="/products">produkter</Link> eller till{" "}
            <Link to="/">startsidan</Link>.
          </p>
        </div>
      </Structure>
    </>
  )
}
