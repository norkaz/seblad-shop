import React from 'react'
import './Side-Bar-Overlay.less';


export default function SideBarOverlay({children}) {
    return (
        <>
        <div className="sidebar-overlay" >
            {children}
        </div>
        </>
    )
}
