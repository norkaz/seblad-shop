import React from "react"
import Structure from "../../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../../data/site/sitedata"
import Img from "../../components/controls/img/Img"

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Kontakt</title>
        <meta property="og:type" content="content-page" />
      </Helmet>
      <Structure>
        <Img
          color="#FFF"
          shadow={true}
          headertag="h1"
          header="Kontakt"
          src="https://wallpapercave.com/wp/wp7614970.jpg"
        />
      </Structure>
    </>
  )
}
