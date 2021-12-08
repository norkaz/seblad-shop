import React from 'react'
import { Link } from 'gatsby';
import './Main-Navigation.less';

export default function MainNavigation(props) {
    return (
        <nav className="navigation">
            <ul className={props.type}>
                <li><Link to="/">Hem</Link></li>
                <li><Link to="/content/about">Om mig</Link></li>
                <li><Link to="/content/contact">Kontakt</Link></li>
                <li><Link to="/design/design">Grafisk profil</Link></li>
                <li><Link to="/error">404</Link></li>
            </ul>
        </nav>
    )
}
