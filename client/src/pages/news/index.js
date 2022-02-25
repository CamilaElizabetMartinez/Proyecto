import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Article from '../../components/Article/Article'
import { INDEX_NEWS_PUBLIC } from '../../settings'

const News = () => {
    //Se declara el estado de noticias
    const [ news, setNews ] = useState([]);
    //Se realiza la consulta a la api 
    useEffect(() => {
        fetch(INDEX_NEWS_PUBLIC)
            .then(response => response.json())
            //Se recupera las entidades de noticias
            .then(data => setNews(data.newsEntities))
    }, []);

function News() {
    return (
        //Se realiza un map para renderizar una noticia
        <div>
            {news.map(theNews => (
                <div key={theNews.id}>
                    <Article theNews={theNews} />
                </div>
            ))}
        </div>
    );
};

export default News;