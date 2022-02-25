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
        <div className="container">
            <h1>Articulos</h1>
            <p></p>
        </div>
    );
};

export default News;