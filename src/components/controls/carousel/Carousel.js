import React from 'react'
import './Carousel.less';

export default function Carousel({children}) {
    return (
        <div className="carousel-wrapper">
            <div className="carousel">  
                {children}     
            </div>
            <div className="nav left">LEFT</div>
            <div className="nav right">RIGHT</div>
        </div>
    )
}
