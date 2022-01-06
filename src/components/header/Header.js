import React from "react"
import "./Header.less"
import logo from "../../images/logo.png"
import Navigation from "../navigations/navigation/Navigation"

export default function Header() {
  return (
    <div id="header">
      <div className="header-box only-mobile">
        <Navigation menuName={"mobileMenuLeft"} />
      </div>
      <div className="header-box">
        <a className="logo-link" href="/">
          <img className="logo" src={logo} alt="Seblad Keramik" />
        </a>
      </div>
      <div className="header-box only-mobile">
        <Navigation menuName={"mobileMenuRight"} />
      </div>
    </div>
  )
}
