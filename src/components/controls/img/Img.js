import React from 'react'
import ModalImage from "react-modal-image";
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
                : props.popup ?
                <div className="resp-img">
                <ModalImage className="resp-img-popup"
                    smallSrcSet={props.src}
                    small={props.src}
                    large={props.src}
                    alt={props.alt}
                />    
                </div>                
                : 
                <div className="resp-img">
                    <img src={props.src} height={props.height} width={props.width} alt={props.alt ? props.alt : 'Bild'}/>                   
                </div>                         
            }
        </>
    )
}
