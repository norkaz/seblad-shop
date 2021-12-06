import React from 'react'
import './Side-Bar-Overlay.less';
import OutsideClick from "./Toggle-Side-Bar";
import { useRef } from "react";


export default function SideBarOverlay() {
    const boxRef = useRef(null);
    const boxOutsideClick = OutsideClick(boxRef);
    return (
        <>
        <div className={boxOutsideClick && 'sidebar-overlay closed' } ref={boxRef} >
        </div>
        </>
    )
}
