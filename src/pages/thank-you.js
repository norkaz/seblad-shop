import React from "react"
import Structure from "../components/structure/Structure"
import { Helmet } from "react-helmet"
import { siteData } from "../data/site/sitedata"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Tack för ditt meddelande </title>
        <meta property="og:type" content="content-page" />
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      </Helmet>
      <Structure>
        <div className="section">
          <div className="grid">
            <div className="column">
              <div className="text-box">
                <h1>Din beställning är nu genomförd</h1>
                <p>
                  Vi kommer kontakta dig angående leverans och lagersaldo samt
                  övriga frågor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Structure>
    </>
  )
}
