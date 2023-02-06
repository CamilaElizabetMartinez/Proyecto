import React from 'react' 
import PropTypes from 'prop-types'

const Span = ({children}) => {
    return (
        <span>{children}</span>
    )
}
Span.propTypes = {
    children:PropTypes.string.isRequired
}
export default Span;

