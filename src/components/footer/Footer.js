import React from "react"
import Navigation from "../navigations/navigation/Navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import * as style from "./footer.module.less"

export default function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footerContainer}>
          <div className={style.menuBox}>
            <Navigation
              classType={"vertical"}
              className={"footer-navigation"}
              menuName={"footerMenu"}
            />
          </div>
          <div className={style.menuBox}>
            <Navigation
              classType={"vertical"}
              className={style.footerNavigation}
              menuName={"mainMenu"}
            />
          </div>

          <div className={style.menuBox}>
            <div className={style.socialMedia}>
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href={"https://www.facebook.com/sebladkeramik"}
              >
                {" "}
                <FontAwesomeIcon icon={faFacebook} /> Seblad Keramik
              </a>
            </div>
            <div className={style.socialMedia}>
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href={"https://www.instagram.com/sebladkeramik/"}
              >
                {" "}
                <FontAwesomeIcon icon={faInstagram} /> sebladkeramik
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
