import { HStack, VStack, Text, Heading } from "@chakra-ui/react";
import { LatestNews } from "./LatestNews";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <HStack width={"full"} padding={"1"}>
            <VStack width="60%" paddingRight="4rem" marginTop={'-250'} >
                <Heading color="purple.500"  paddingBottom="20" p={'20'}>
                    {article.title}
                </Heading>
                <img
                    src={article.urlToImage}
                    alt={article.title}
                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
                <Text pl={'10'} paddingTop="5">{article.description}</Text>
                {/* You can display other details of the article here */}
            </VStack>

            <VStack width="40%" paddingLeft="4rem" pt={'20'}>
                <LatestNews  / >
            </VStack>
        </HStack>
    );
}

export default NewsDetail;
