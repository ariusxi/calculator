import React from 'react'

import './styles.css'

const Display = props => {
    const { value } = props

    return (
        <div className="Display">{value}</div>
    )
}

export default Display
