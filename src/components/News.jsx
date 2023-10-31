import React, { useEffect, useState } from "react";
import { VStack, HStack, Heading, Box, Text, Stack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import NewsDetail from "./NewsDetail.jsx";
import { LatestNews } from "./LatestNews";
function News() {
    const [news, setNews] = useState([]);

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
            console.log(result.articles);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        api();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/news/" element={<Home news={news} />} />
                <Route
                    path="/news/:title/*"
                    element={<NewsDetail news={news} />}
                />{" "}
                {/* Use * to capture the title */}
            </Routes>
        </BrowserRouter>
    );
}

function Home({ news }) {
    const leftleftNews = news.slice(0, 3);
    const leftrightNews = news.slice(3, 6);
    const rightNews = news.slice(6, 12);
    const carouselNews = news.slice(15, 20);

    return (
        <HStack spacing="24px" align="top" className="p-8">
            <VStack spacing="24px" align="top" width="60%" className="pr-16">
                {/* News Carousel */}
                <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
                    {carouselNews.map((article, index) => (
                        <div key={index}>
                            <Link to={`/news/${article.title}`}>
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    style={{ width: "auto", height: "200px" }}
                                    className="w-full h-64 object-cover rounded-lg"
                                />

                                <Heading as="h2" fontWeight="bold">
                                    {article.title}
                                </Heading>
                            </Link>
                        </div>
                    ))}
                </Carousel>

                <HStack>
                    <VStack pr={"10"} top={"0"} width="100%" align="flex-start">
                        {leftleftNews.map((article, index) => (
                            // <Box key={index}  >

                            <Link to={`/news/${article.title}`}>
                                <HStack className="border-b-2 border-purple-700 pb-4">
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        style={{ width: "100px", height: "100px" }}
                                    />

                                    <Text
                                        fontWeight="bold"
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

                            // </Box>
                        ))}
                    </VStack>
                    <VStack top={"0"} pl={"10"} width="100%">
                        {leftrightNews.map((article, index) => (
                            <Link to={`/news/${article.title}`}>
                                <HStack className="border-b-2 border-purple-700 pb-4">
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        style={{ width: "100px", height: "100px" }}
                                    />

                                    <Text
                                        fontWeight="bold"
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
                            // </Box>
                        ))}
                    </VStack>
                </HStack>
            </VStack>
            <VStack
                spacing="24px"
                align="top"
                shadow="2xl"
                padding="1.5"
                width="40%"
                pl={"10"}
            >
                <LatestNews />
            </VStack>
        </HStack>
    );
}

export default News;
