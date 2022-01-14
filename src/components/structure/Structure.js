import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { siteData } from "../../data/site/sitedata"
import Header from "../header/Header"
import Grid from "../gridLayout/grid/Grid"
import StickyWrapper from "../controls/stickyWrapper/Sticky-Wrapper"
import Widget from "../gridLayout/widget/Widget"
import Navigation from "../navigations/navigation/Navigation"
import SideBar from "../sidebar/Side-Bar"
import SideBarOverlay from "../sidebar/Side-Bar-Overlay"
import InstagramWidget from "../controls/instagramWidget/Instagram-Widget"
import Footer from "../footer/Footer"
import "../../styles/base.less"
import * as style from "./structure.module.less"

export default function Structure({ children, hideInstagram }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Helmet>
        <meta name="description" content={siteData.description} />
        <meta property="og:title" content={siteData.name} />
        <meta property="og:image" content={siteData.ogImage} />
        <script
          async
          src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        ></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a69f80" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <div id={style.wrapper}>
        <div id={style.main}>
          <StickyWrapper>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          </StickyWrapper>
          <Navigation
            horizontal={true}
            containerClassName={style.mainNavigation}
            ulClassName={style.menu}
            liClassName={style.menuItem}
            linkClassName={style.menuItemLink}
            linkActiveClassName={style.active}
            menuName="mainMenu"
          />
          <div id={style.content}>
            {children}
            {hideInstagram ? null : (
              <Grid>
                <Widget>
                  <InstagramWidget
                    lightWidgetId={"b030bd5dd1da52e9b2ae3d4e060d4178"}
                    title={"Senaste från Instagram @sebladkeramik"}
                  />
                </Widget>
              </Grid>
            )}
          </div>
          <Footer />
        </div>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} type="left">
          <Navigation
            containerClassName={style.sideBarNavigation}
            ulClassName={style.menu}
            liClassName={style.menuItem}
            linkClassName={style.menuItemLink}
            linkActiveClassName={style.active}
            menuName="mainMenu"
          />
        </SideBar>
        <SideBarOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  )
}
