import React, { useEffect, useState } from 'react';
import News from '../News/News';




const TopHeadLines = () => {
    const [articles, setArticle] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fd4d720dd7794e26a268d8bb298dca39')
        .then(res => res.json())
        //.then(res => console.log(res))
        .then(data => setArticle(data.articles))
    }, [])
    return (
        <div>
            <h1>TOP HEADLINES: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)  
            }

        </div>
    );
};

export default TopHeadLines;