import { LatestNews } from "./LatestNews";
import React, { useState, useEffect } from "react";

function NewsDetail() {
    const { title } = useParams();
    const [news, setNews] = useState([]);
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(
                    "https://newsapi.org/v2/top-headlines?country=in&apiKey=7684b9a0b5e94656819efef1c0ed1b85"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                let result = await response.json();
                setNews(result.articles);

                const foundArticle = result.articles.find(
                    (article) => article.title === title
                );

                if (foundArticle) {
                    setArticle(foundArticle);
                } else {
                    setArticle(null);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [title]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="w-full flex p-10">
            <div className="w-3/5 pr-16">
                <div className="text-purple-700 font-bold pb-14">{article.title}</div>
                <img src={article.urlToImage} alt={article.title} />
                <p className="pt-10">{article.description}</p>
                {/* You can display other details of the article here */}
            </div>

            <div className="w-2/5 pl-16">
                <LatestNews />
            </div>
        </div>
    );
}

export default NewsDetail;