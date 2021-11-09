import React from 'react'

const Paragraph = ({children}) => {
    return (
        <p>{children}</p>
    )
}

Paragraph.propType = {
    children: PropTypes.string.isRequired
}