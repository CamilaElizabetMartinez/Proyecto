import React from 'react'
import PropTypes from 'prop-types'

const Image = ({src}) => {
    return (
       <img src={src}/>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired
}

export default Image;