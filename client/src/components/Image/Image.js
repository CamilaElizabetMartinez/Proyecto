import React from 'react'

const Image = ({src}) => {
    return (
       <img src={src}/>
    )
}

Image.proptypes = {
    src: PropTypes.string.isRequired
}

export default Image;