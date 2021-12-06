import React from 'react';
import './Header.less';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSearch, faHamburger } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div id="header">
            <div className="header-box">
                <div className="btn-toggle"><FontAwesomeIcon icon={faHamburger} /></div>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="header-box">
                <a href="/">
                    <img className="logo" src={logo} alt="Seblad Keramik"/>
                </a>
            </div>
            <div className="header-box">
                <FontAwesomeIcon icon={faShoppingBag} />
            </div>
            
        </div>
    )
}
