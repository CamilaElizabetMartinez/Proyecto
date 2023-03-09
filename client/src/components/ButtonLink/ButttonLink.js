import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const ButtonLink = ({to,children}) => {
    return (
        <div>
            <Link to={to}>{children}</Link>
        </div>
    )
}

ButtonLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};

export default ButtonLink;
