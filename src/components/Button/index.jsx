import React from 'react'

import './styles.css'

const Button = props => {
    const {
        double,
        label,
        operation,
        triple,

        // Events
        onClick,
    } = props

    const getClassButton = () => {
        let classes = 'Button '

        classes += operation ? 'operation' : ''
        classes += double ? 'double' : ''
        classes += triple ? 'triple' : ''

        console.log(label, classes)

        return classes
    }

    return (
        <button
            onClick={e => onClick && onClick(label)}
            className={getClassButton()}>
            {label}
        </button>
    )
}

export default Button
