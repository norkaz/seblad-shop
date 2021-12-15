import React from 'react'
// import './Video.less';

export default function Video({ src, type, muted, loop, autoplay }) {
    return (
        <>
            <div className="videoContainer">
            <video width="100%" autoPlay={autoplay} muted={muted} loop={loop}>
                <source src={src} type={type}/>
            </video>
            </div>
        </>
    )
}