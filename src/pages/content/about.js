import React from "react"

import { Helmet } from "react-helmet"
import { siteData } from "../../data/site/sitedata"
import Structure from "../../components/structure/Structure"
import Grid from "../../components/gridLayout/grid/Grid"
import Widget from "../../components/gridLayout/widget/Widget"
import ImageBanner from "../../components/controls/imageBanner/Image-Banner"
import Img from "../../components/controls/img/Img"

export default function About() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Om mig</title>
        <meta property="og:type" content="content-page" />
      </Helmet>
      <Structure>
        <ImageBanner
          src="https://facegram.se/CDN/13-2.jpg"
          header="Om Seblad Keramik"
          headertag="h1"
          color="#FFF"
          shadow={false}
        />
        <Grid>
          <Widget>
            <Img src={"https://facegram.se/CDN/about.jpg"} alt="Bild" />
          </Widget>
          <Widget>
            <div className="text-box">
              <h1>Seblad keramik</h1>
              <p>
                Nils Seblad började dreja för över 35 år sen och har sedan dess
                ägnat all sin lediga tid åt keramiken. Han har bland annat gått
                två konstnärliga utbildningar på Nyckelviksskolan och
                Gerlesborgsskolan, byggt fem specialdesignade keramikverkstäder,
                drejat miljontals föremål, testat tusentals kombinationer av
                glasyrer och blev nu i år klar med sin 10 kvm stora vedeldade
                keramikugn.
              </p>
              <p>
                Till skillnad från en traditionell elektrisk keramikugn ger en
                vedeldad ugn andra effekter på keramiken. Genom att strypa syret
                i ugnen försöker elden istället leta upp och dra ut det syre som
                finns i leran och glasyren. Det gör att glasyren ändrar struktur
                och färg, och att varje föremål blir helt unikt.
              </p>
              <p>
                Seblad keramik använder sig av stengodslera och designar enkla
                och strama föremål för vardagsbruk. Nils drivs av att kombinera
                funktionalitet med ett konstnärligt uttryck. Det ska helt enkelt
                vara härligt och inspirerande att använda hans bruksföremål!
              </p>
              <h3>Vill du beställa?</h3>
              <p>
                Om du har frågor eller om du vill beställa är du välkommen att
                höra av dig!
              </p>
              <p>nils@sebladkeramik.se</p>
            </div>
          </Widget>
        </Grid>
      </Structure>
    </>
  )
}
