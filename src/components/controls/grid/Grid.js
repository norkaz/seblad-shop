import React from 'react'
import './Grid.less'

export default function Grid(props) {
    return (
        <div className={props.type ? props.type + 'grid' : 'grid'} style={{gap: props.gap, padding: props.gap}}>
            {props.children}
        </div>
    )
}
