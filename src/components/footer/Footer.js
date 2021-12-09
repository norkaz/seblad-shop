import React from 'react'
import Navigation from '../navigations/navigation/Navigation';
import './Footer.less';

export default function Footer() {
    return (
        <div id="footer">
            <div class="footer-container">
                <div class="menu-box">
                    <Navigation type="vertical" class="footer-navigation" menu="footerMenu" />
                </div>
                <div class="menu-box">
                    <Navigation type="vertical" class="footer-navigation" menu="mainMenu" />
                </div>
            </div>
        </div>
    )
}
