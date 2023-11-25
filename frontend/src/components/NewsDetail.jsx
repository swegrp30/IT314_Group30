import { HStack, VStack, Text, Heading,Divider} from "@chakra-ui/react";
import { LatestNews } from "./LatestNews";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader.jsx";
import ErrorPage from "./ErrorPage.jsx";
function NewsDetail() {
    const { title } = useParams();
    const [news, setNews] = useState([]);
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
                setError(true);
                setLoading(false);
            }
        };

        fetchData();
    }, [title]);

    if (loading) {
        return <div>  <Loader /> </div>
    }

    if (!article) {
        return <div>Article not found</div>;
    }
    if (error) {
        return <ErrorPage />;
    }


    return (
        <HStack width={'96%'} padding={"1"} border={'4px'} margin={'10'} shadow={'dark-lg'} borderRadius={'20'} marginBottom={'-10'} alignItems={'center'}  >
            <VStack width="60%" paddingRight="3rem"  >
                <Heading color="#962B92" paddingBottom="10"  textAlign={'center'} fontFamily={'inherit'}  >
                    {article.title}
                    
                </Heading>
                <img
                    src={article.urlToImage}
                    alt={article.title}
                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
                <Text pl={'10'} paddingTop="4" fontSize={'2xl'}>{article.description}</Text>
                {/* You can display other details of the article here */}
            </VStack>
            <VStack width="45%"  textAlign={'center'}>
                <LatestNews />
            </VStack>
        </HStack>
    );
}

export default NewsDetail;
