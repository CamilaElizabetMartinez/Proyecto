import React from 'react'
import Image from '../Image/Image'
import Header3 from '../Header3/Header3'
// import Paragraph from '../Paragraph'
import ButtonLink from '../ButtonLink/ButttonLink'
import PropTypes from 'prop-types'


const Card = ({products}) => {
    return (
        <div>
            <div>
                <Image src={products.img_principal} />
            </div>
            <div>
                <Header3>{products.name}</Header3>
                <Header3>{products.category_name}</Header3>
                {/* Añadir descripcion a la entidad product */}
                {/* <Paragraph>{}</Paragraph> */}
            </div>
            <div>
            <ButtonLink to={`/detalle-de-producto/${products.slug}`}>{products.url}Detalle del producto</ButtonLink>
            {/* <ButtonLink to={}>{}</ButtonLink> */}
            </div>
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.array.isRequired
}

export default Card;