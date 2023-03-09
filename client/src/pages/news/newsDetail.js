import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { INDEX_NEWS_PUBLIC } from '../../settings'
import Header3 from '../../components/Header3/Header3'
import Carousel from '../../components/Carousel/Carousel'
import Paragraph from '../../components/Paragraph/Paragraph'
import Span from '../../components/Span/Span'

const NewsDetail = () => {
    const { slug } = useParams();

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(INDEX_NEWS_PUBLIC + 'detail/' + `${slug}`)
            .then(response => response.json())
            .then(data => setNews(data));
    }, []);

    return (
        <div>
            <Header3>{news.title}</Header3>
            <Carousel images={news.images}></Carousel>
            <Span>{news.creation_timestamp}</Span>
            <Span>{news.subtitle}</Span>
            <Paragraph>{news.description}</Paragraph>
        </div>
    )
}
export default NewsDetail;