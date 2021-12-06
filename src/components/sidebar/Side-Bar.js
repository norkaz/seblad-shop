import React from 'react';

import './Side-Bar.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function SideBar(props) {
    
    return (
        <>
        <div id={ props.type ? props.type : null } className="sidebar" >
            <div className="sidebar-container">
                <div className="close-btn">
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
                <div className="sidebar-content">
                    {props.children}
                </div>
            </div>
        </div>
        </>
    )
}
