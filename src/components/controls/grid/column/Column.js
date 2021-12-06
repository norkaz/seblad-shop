import React from 'react'

export default function Column(props) {
    return (
        <div className={props.type ? props.type + 'column' : 'column'}>
            {props.children}
        </div>
    )
}
