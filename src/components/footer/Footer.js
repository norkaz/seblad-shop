import React from "react"
import Navigation from "../navigations/navigation/Navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import "./Footer.less"

export default function Footer() {
  return (
    <>
      <div id="footer">
        <div className="footer-container">
          <div className="menu-box">
            <Navigation
              classType="vertical"
              className="footer-navigation"
              menuName="footerMenu"
            />
          </div>
          <div className="menu-box">
            <Navigation
              classType="vertical"
              className="footer-navigation"
              menuName="mainMenu"
            />
          </div>

          <div className="menu-box">
            <div className="social-media facebook">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/search/top?q=seblad%20keramik"
              >
                {" "}
                <FontAwesomeIcon icon={faFacebook} /> Seblad Keramik
              </a>
            </div>
            <div className="social-media instagram">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/sebladkeramik/"
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
