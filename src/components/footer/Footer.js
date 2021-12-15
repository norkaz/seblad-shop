import React from 'react'
import Navigation from '../navigations/navigation/Navigation';
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
            </div>
        </div>
    )
}
