import React from "react"
import { Helmet } from "react-helmet"
import { siteData } from "../../data/site/sitedata"
import Header from "../header/Header"
import Navigation from "../navigations/navigation/Navigation"
import SideBar from "../sidebar/Side-Bar"
import Content from "../content/Content"
import SideBarOverlay from "../sidebar/Side-Bar-Overlay"
import Footer from "../footer/Footer"
import "../../styles/base.less"
import "./Structure.less"

export default function Structure({ children }) {
  return (
    <>
      <Helmet>
        <meta name="description" content={siteData.description} />
        <meta property="og:title" content={siteData.name} />
        <meta property="og:image" content={siteData.ogImage} />
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
      <div id="wrapper">
        <div id="main">
          <Header />
          <Navigation
            classType="horizontal"
            className="main-navigation"
            menuName="mainMenu"
          />
          <Content>{children}</Content>
          <Footer />
        </div>
        <SideBar type="left">
          <Navigation
            classType="vertical"
            className="sidebar-navigation"
            menuName="mainMenu"
          />
        </SideBar>
        <SideBarOverlay />
      </div>
    </>
  )
}
