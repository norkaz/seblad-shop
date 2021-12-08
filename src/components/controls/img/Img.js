import React from 'react'
import './Img.less';

export default function Img({ headertag: Tag = 'h2', ...props}) {
    return (
        <>
            {props.header ? 
                <div className="resp-img" style={{backgroundImage: 'url(' + props.src + ')'}}>
                    <Tag className="splash-header" style={props.shadow ? {textShadow: '0px 0px 18px #000', color: props.color} : {color: props.color}}>
                        {props.header}
                    </Tag> 
                </div>               
                : 
                <div className="resp-img">
                    <img src={props.src} alt={props.alt}/>
                </div>            
            }
        </>
        
    )
}
