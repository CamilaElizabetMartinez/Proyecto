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

export default NewsDetail;