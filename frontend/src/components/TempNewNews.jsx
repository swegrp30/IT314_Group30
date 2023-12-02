import React, { useState, useEffect } from 'react'
import '../style/TempNews.css'
import DrawerExample from './DrawerExample'
import genralNewsData from '../Json/generalNewsData.json'

const TempNewNews = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            
            setNewsData(genralNewsData.stories.slice(0, 7)); // Use the first 8 stories
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const createArticle = (articleData) => (
        <a key={articleData.id} href={articleData.url} className="card">
            {articleData.img && <img src={articleData.img} alt="" />}
            <article>
                {articleData.category && (
                    <p className={`${articleData.category.toLowerCase()}-category`}>
                        {articleData.category}
                    </p>
                )}
                <h3>{articleData.title}</h3>
                {/* <p>{articleData.description}</p> */}
            </article>
        </a>
    );

    return (
        <div className='d-flex flex-column'>
            <div>
            <DrawerExample />
            </div>
            <div className='mt-5' >
                <div className="container">
                    <div className="articles">
                        {newsData.map((article) => createArticle(article))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TempNewNews