import React from 'react'
import './Content.less';

export default function Content(props) {
    return (
        <div id="content">{props.children}</div> 
    )
}
