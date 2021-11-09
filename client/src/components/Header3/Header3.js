import React from 'react'

const Header3 = ({children}) => {
    return (
        <h3>{children}</h3>
    )
}

Header3.propTypes = {
    children: PropTypes.string.isRequired
}

export default Header3;
