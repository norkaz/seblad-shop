import React from 'react'
import './Grid.less'

export default function Grid({ type, gap, children }) {
    return (
        <div className={type ? type + ' grid' : 'grid'} style={{gap: gap, paddingBottom: gap}}>
            {children}
        </div>
    )
}
