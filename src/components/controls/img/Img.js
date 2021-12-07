import React from 'react'
import './Img.less';

export default function Img(props) {
    return (
        <div className="resp-img" style={{backgroundImage: 'url(' + props.src + ')'}}>
            {props.header ? 
               <span className="splash-header">
                   {props.header}
               </span>
                : <img src={props.src} alt={props.alt}/>
            }
        </div> 
    )
}
