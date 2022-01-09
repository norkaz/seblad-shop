import React from "react"
import "./Header.less"
import logo from "../../images/logo.png"
import { Link } from "gatsby"
import Navigation from "../navigations/navigation/Navigation"

export default function Header() {
  return (
    <div id="header">
      <div className="header-box only-mobile">
        <Navigation className={"mobile-menu"} menuName={"mobileMenuLeft"} />
      </div>
      <div className="header-box">
        <Link to="/" className="logo-link" activeClassName="active">
          <img className="logo" src={logo} alt="Seblad Keramik" />
        </Link>
      </div>
      <div className="header-box only-mobile">
        <Navigation className={"mobile-menu"} menuName={"mobileMenuRight"} />
      </div>
    </div>
  )
}
