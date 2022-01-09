import React from "react"
import "./Header.less"
import logo from "../../images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

export default function Header({ setIsOpen }) {
  return (
    <div id="header">
      <div className="header-box only-mobile hamburger">
        <button onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faMugHot} />
        </button>
      </div>

      <div className="header-box">
        <Link to="/" className="logo-link" activeClassName="active">
          <img className="logo" src={logo} alt="Seblad Keramik" />
        </Link>
      </div>
      <div className="header-box only-mobile"></div>
    </div>
  )
}
