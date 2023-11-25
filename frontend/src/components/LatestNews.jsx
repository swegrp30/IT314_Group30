import React, { useEffect, useState } from "react";
import { VStack, HStack, Heading, Box, Text, Stack, Divider, Container } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import NewsDetail from "./NewsDetail.jsx";


export const LatestNews = () => {

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
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        api();
    }, []);

    const leftleftNews = news.slice(0, 3);
    const leftrightNews = news.slice(3, 6);
    const rightNews = news.slice(6, 20);
    const carouselNews = news.slice(20, 25);



    return (
        <>
            <Container borderLeft={'4px'} pl={'20'}  pr={'-10'} >

                <Heading as="h1" size="lg" fontWeight="bold" top={'0'} marginTop={'10'} borderBottom={'4px'}  paddingBottom={'5'} textAlign={'center'}>
                    Latest News
                </Heading>

                <Box position={'relative'} overflow={'scroll'} h={'140vh'}  mt={'5'} w={'100'} >
                    {rightNews.map((article, index) => (
                        <HStack key={index}  >
                            <Link to={`/news/${article.title}`}>
                                <Box borderBottom={'2px'}  p={'1'} >
                                <HStack  m={'1'}  >
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        style={{ width: "100px", height: "100px" }}

                                    />

                                    <Text textColor={'black'} fontSize={'md'}>
                                        {article.title}
                                    </Text>
                                </HStack >
                                </Box>
                            </Link>
                        </HStack>
                    ))}

                </Box>

            </Container>


        </>
    )
}
