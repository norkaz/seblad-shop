import React from 'react'
import './Text.less'

export default function Text({children}) {
    return (
        <div className="text-box">
            {children}
        </div>
    )
}
