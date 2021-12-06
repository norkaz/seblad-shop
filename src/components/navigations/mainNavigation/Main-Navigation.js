import React from 'react'
import { Link } from 'gatsby';
import './Main-Navigation.less';

export default function MainNavigation(props) {
    return (
        <nav className="navigation">
            <ul className={props.type}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/content/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
                <li><Link to="/dwadwadsadwad">404</Link></li>
            </ul>
        </nav>
    )
}
