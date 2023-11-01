import React, { useEffect, useState } from "react";
import { VStack, HStack, Heading, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, Route, Routes } from "react-router-dom";
import { NewsDetail } from "./NewsDetail.jsx";
import { LatestNews } from "./LatestNews";
import Loader from "./Loader.jsx";
function News() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const leftleftNews = news.slice(0, 3);
    const leftrightNews = news.slice(3, 6);
    const rightNews = news.slice(6, 12);
    const carouselNews = news.slice(15, 20);

    const api = async () => {
        try {
            let response = await fetch(
                "https://newsapi.org/v2/top-headlines?country=in&apiKey=7684b9a0b5e94656819efef1c0ed1b85"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            let result = await response.json();
            setNews(result.articles);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        finally {
            setIsLoading(false); // Whether data was successfully fetched or not, set isLoading to false
        }
    };

    useEffect(() => {
        api();
    }, []);

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (

                    <HStack spacing="24px" align="top" padding='10'>
                        <VStack spacing="24px" align="top" width="60%" paddingRight='16'>
                            {/* News Carousel */}
                            <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
                                {carouselNews.map((article, index) => (
                                    <div key={index}>
                                        <Link to={`/news/${article.title}`}>
                                            <img
                                                src={article.urlToImage}
                                                alt={article.title}
                                                style={{ width: "auto", height: "200px" }}

                                            />

                                            <Text
                                                className="TextNoDecoration"
                                                fontWeight="bold"
                                                textColor="black"
                                                style={{
                                                    maxLines: 3,
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                }}
                                            >
                                                {article.title}
                                            </Text>
                                        </Link>
                                    </div>
                                ))}
                            </Carousel>

                            <HStack>
                                <VStack pr={"10"} top={"0"} width="100%" align="flex-start" className="HStackBorderBottom">
                                    {leftleftNews.map((article, index) => (

                                        <Link to={`/news/${article.title}`}>
                                            <HStack borderBottomWidth="2" borderBottomColor="purple.700" paddingBottom="4" >
                                                <img
                                                    src={article.urlToImage}
                                                    alt={article.title}
                                                    style={{ width: "100px", height: "100px" }}
                                                />

                                                <Text
                                                    className="TextNoDecoration"
                                                    fontWeight="bold"
                                                    textColor="black"
                                                    style={{
                                                        maxLines: 3,
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                    }}
                                                >
                                                    {article.title}
                                                </Text>
                                            </HStack>
                                        </Link>
                                    ))}
                                </VStack>
                                <VStack top={"0"} pl={"10"} width="100%" className="HStackBorderBottom">
                                    {leftrightNews.map((article, index) => (
                                        <Link to={`/news/${article.title}`}>
                                            <HStack borderBottomWidth="2" borderBottomColor="purple.700" paddingBottom="4">
                                                <img
                                                    src={article.urlToImage}
                                                    alt={article.title}
                                                    style={{ width: "100px", height: "100px" }}
                                                />

                                                <Text
                                                    className="TextNoDecoration"
                                                    fontWeight="bold"
                                                    textColor="black"
                                                    style={{
                                                        maxLines: 3,
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                    }}
                                                >
                                                    {article.title}
                                                </Text>
                                            </HStack>
                                        </Link>
                                    ))}
                                </VStack>
                            </HStack>
                        </VStack>
                        <VStack
                            align="top"
                            width="40%"
                        >
                            <LatestNews />
                        </VStack>
                    </HStack>

                )}
        </>
    );
}

export default News;
