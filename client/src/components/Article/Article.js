import React from 'react'
import { useParams } from 'react-router-dom';
import Image from '../Image/Image'
import Header3 from '../Header3/Header3'
import Span from '../Span/Span'
import Paragraph from '../Paragraph/Paragraph'
import ButtonLink from '../ButtonLink/ButttonLink'
import PropTypes from 'prop-types'


const Article = ({ theNews }) => {
    const { slug } = useParams();
    return (
        <div className=''>
            <div className="col-xl-4 col-md-6 col-sm-12">
                <Image src={theNews.img_principal} />
            </div>
            <div className="col-xl-8 col-md-6 col-sm-12">
                <Header3>{theNews.title}</Header3>
                <Span >{theNews.creation_timestamp}</Span>
                <Paragraph>{theNews.description}</Paragraph>
                <ButtonLink to={`/detalle-de-noticia/${theNews.slug}`}>{theNews.url}Leer más</ButtonLink>
            </div>
        </div>
    )
}

Article.propTypes = {
    News: PropTypes.array.isRequired
}

export default Article;