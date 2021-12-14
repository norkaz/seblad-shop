import React from 'react'
import Structure from '../../components/structure/Structure'
import { Helmet } from 'react-helmet';
import { siteData } from '../../data/site/sitedata';
import Grid from '../../components/controls/grid/Grid'
import Column from '../../components/controls/grid/column/Column'
import Img from '../../components/controls/img/Img'
import image from '../../../static/img/content/about.jpg';
import Text from '../../components/controls/text/Text'

export default function About() {
    return (
        <>
        <Helmet>
            <title>{siteData.name} - Om mig</title>   
            <meta property="og:type" content="content-page" />
        </Helmet>
        <Structure>          
            <Img 
                src="https://wallpapercave.com/wp/wp7615079.jpg"
                header="Om Seblad Keramik"
                headertag="h1"
                color="#FFF"
                shadow={true}
            />
            <section>
                <Grid gap="40px">
                    <Column>
                        <Img 
                        src={image}
                        alt="Bild" 
                        />
                    </Column>
                    <Column>
                        <Text>
                            <h1>Seblad keramik</h1>
                            <p>
                                Nils Seblad började dreja för över 35 år sen och har sedan dess ägnat all sin lediga tid åt keramiken. Han har bland annat gått två konstnärliga utbildningar på Nyckelviksskolan och Gerlesborgsskolan, byggt fem specialdesignade keramikverkstäder, drejat miljontals föremål, testat tusentals kombinationer av glasyrer och blev nu i år klar med sin 10 kvm stora vedeldade keramikugn.
                            </p>
                            <p>
                                Till skillnad från en traditionell elektrisk keramikugn ger en vedeldad ugn andra effekter på keramiken. Genom att strypa syret i ugnen försöker elden istället leta upp och dra ut det syre som finns i leran och glasyren. Det gör att glasyren ändrar struktur och färg, och att varje föremål blir helt unikt.
                            </p>
                            <p>
                                Seblad keramik använder sig av stengodslera och designar enkla och strama föremål för vardagsbruk. Nils drivs av att kombinera funktionalitet med ett konstnärligt uttryck. Det ska helt enkelt vara härligt och inspirerande att använda hans bruksföremål!
                            </p>
                            <h3>Vill du beställa?</h3>
                            <p>
                                Om du har frågor eller om du vill beställa är du välkommen att höra av dig!
                            </p>
                            <p>nils@sebladkeramik.se</p>
                        </Text>
                    </Column>
                </Grid>
            </section>
        </Structure>
        </>
    )
}
