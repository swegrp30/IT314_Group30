import React from "react";
import { useParams } from "react-router-dom";
import { LatestNews } from "./LatestNews";
function NewsDetail({ news }) {
    const { title } = useParams();
    let article;

    if (news) {
        article = news.find((article) => article.title === title);
        console.log(article);
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
