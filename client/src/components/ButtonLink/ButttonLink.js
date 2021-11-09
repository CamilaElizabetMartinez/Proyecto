import React from 'react'
import {Link} from 'react-router-dom'

const ButtonLink = ({to,children}) => {
    return (
        <div>
            <Link to={to}>{children}</Link>
        </div>
    )
}

Button.propTypes = {
    to: PropTypes.string.isRequired,
    childre: PropTypes.string,isRequired
};

export default ButtonLink;
