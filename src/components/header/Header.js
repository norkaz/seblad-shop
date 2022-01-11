import React from "react"
import logo from "../../images/logo.png"
import { siteData } from "../../data/site/sitedata"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import * as style from "./header.module.less"

export default function Header({ setIsOpen }) {
  return (
    <div className={style.header}>
      <div
        className={[style.headerBox, "only-mobile", style.hamburger].join(" ")}
      >
        <button className={style.headerButton} onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faMugHot} />
        </button>
      </div>

      <div className={style.headerBox}>
        <Link
          to="/"
          className={style.logoLink}
          activeClassName={style.logoLinkActive}
        >
          <img className={style.logo} src={logo} alt={siteData.name} />
        </Link>
      </div>
      <div className={[style.headerBox, "only-mobile"].join(" ")}></div>
    </div>
  )
}
