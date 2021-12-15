import React from 'react'
import { menus } from '../../../data/menus/menus';
import { Link } from 'gatsby';
import './Navigation.less';

export default function Navigation(props) {
    

    return (
        <div className={props.class}>
            <nav className="navigation">       
                <ul className={props.type}>
                    {menus[props.menu].map((menuItem, index) => {
                        return <li key={index}><Link to={menuItem.url}>{menuItem.name}</Link></li>
                    })}                              
                </ul>
            </nav>
        </div>
    )
}
