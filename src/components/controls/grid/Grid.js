import React from 'react'
import './Grid.less'

export default function Grid(props) {
    return (
        <div className={`grid ${props.col}`}>
            {props.children}
        </div>
    )
}
