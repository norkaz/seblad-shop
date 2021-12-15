import React from "react"
import Structure from "../components/structure/Structure"
import { Helmet } from 'react-helmet';
import { siteData } from "../data/site/sitedata";
import Grid from "../components/controls/grid/Grid";
import Column from "../components/controls/grid/column/Column";
import ShopWindow from "../components/controls/shopWindow/Shop-Window"
import Video from "../components/controls/video/Video";
import Img from "../components/controls/img/Img"
import Text from "../components/controls/text/Text"

export default function Home() {
  
  return (
    <>
    <Helmet>
      <title>{siteData.name} - Hem </title>
      <meta property="og:type" content="content-page" />
    </Helmet>
    <Structure>   
      <Grid gap="20px">
        <Column type="full">
          <Video height={'300px'} poster={'https://facegram.se/CDN/9-2.jpg'} autoplay loop muted width="100%" type="video/mp4" src={'https://facegram.se/CDN/centrera-facebook-1920x1080.mp4'}/>
        </Column>
      </Grid>
      <section>
        <Grid gap="20px">
          <Column>
            <Img src="https://facegram.se/CDN/12-2.jpg"/>
          </Column>
          <Column>
            <Img src="https://facegram.se/CDN/1-2.jpg"/>
          </Column>
          <Column>
            <Img src="https://facegram.se/CDN/8-2.jpg"/>
          </Column>
        </Grid> 
        <Grid gap="20px">
          <Column>
            <Img src="https://facegram.se/CDN/13-2.jpg"/>
          </Column>
          <Column>
            <Video autoplay={true} loop={true} muted={true} width="100%" type="video/mp4" src={'https://facegram.se/CDN/dreja-instagram-640x360.mp4'}/>
          </Column>
        </Grid>
        <Grid gap="20px">
          <Column>
            <Img src="https://facegram.se/CDN/9-2.jpg"/>
          </Column>
        </Grid>
        <Grid gap="20px">
          <Column>
            <Img src="https://facegram.se/CDN/19-2.jpg"/>
          </Column>
          <Column>
            <Img src="https://facegram.se/CDN/20-2.jpg"/>
          </Column>
        </Grid>
        <Text>
        </Text>
      </section>
      <section>     
        <ShopWindow header="Skyltfönster"/>
      </section>
      {/* <section>
        <ShopWindow isCarousel={true} header="Karusell" />    
      </section> */}
    </Structure>
    </>
  )
}