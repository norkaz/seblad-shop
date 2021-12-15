import React from 'react'
import Navigation from '../navigations/navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.less';

export default function Footer() {
    return (
        <div id="footer">
            <div className="footer-container">
                <div className="menu-box">
                    <Navigation type="vertical" class="footer-navigation" menu="footerMenu" />
                </div>
                <div className="menu-box">
                    <Navigation type="vertical" class="footer-navigation" menu="mainMenu" />
                </div>
                <div className="facebook">
                    <a href="https://www.facebook.com/search/top?q=seblad%20keramik"> <FontAwesomeIcon icon={faFacebook}/> Seblad Keramik</a>
                </div>
            </div>
        </div>
    )
}
