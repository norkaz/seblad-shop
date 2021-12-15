import React from 'react'

export default function Column( {type, children }) {
    return (
        <div className={type ? type + ' column' : 'column'}>
            {children}
        </div>
    )
}
