import React from "react"
import Product from "../../../components/controls/product/Product"
import { Helmet } from "react-helmet"
import { siteData } from "../../../data/site/sitedata"

export default function product(props) {
  const splat = props.params.id || null
  if (splat == null) {
    return (
      <>
        <Helmet>
          <title>{siteData.name} - Sidan kunde hittas </title>
          <meta property="og:type" content="404" />
        </Helmet>
        <p>Ingen produkt hittades</p>
      </>
    )
  } else {
    return <Product splat={splat} />
  }
}
