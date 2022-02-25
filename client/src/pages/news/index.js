import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Article from '../../components/Article/Article'
import { INDEX_NEWS_PUBLIC } from '../../settings'

const News = () => {
    //Se declara el estado de noticias
    const [ news, setNews ] = useState([]);

function News() {
    return (
        <div className="container">
            <h1>Articulos</h1>
            <p></p>
        </div>
    );
};

export default News;