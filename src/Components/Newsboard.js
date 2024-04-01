import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';

function Newsboard({category}) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1f6a0758bf154adeb545603b1281ca0d`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching news:', error));
    }, [category]); // Empty dependency array to ensure useEffect runs only once

    return (
        <div>
            <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
            {articles.map((news, index) => (
                <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
}

export default Newsboard;
