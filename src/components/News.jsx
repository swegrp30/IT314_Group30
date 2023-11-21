import React, { useEffect, useState } from "react";
import { VStack, HStack, Heading, Text, Container, Box, Divider } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, Route, Routes } from "react-router-dom";
import { NewsDetail } from "./NewsDetail.jsx";
import { LatestNews } from "./LatestNews";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Loader from "./Loader.jsx";
function News() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const leftleftNews = news.slice(0, 10);
    const rightNews = news.slice(11, 20);
    const carouselNews = news.slice(2, 5);

    const api = async () => {
        try {
            let response = await fetch(
                "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7684b9a0b5e94656819efef1c0ed1b85"
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
                    
                    <HStack spacing="24px" align="top" padding='10' border={'4px'} margin={'10'} marginBottom={'-10'} borderRadius={'20'} shadow={'dark-lg'}>
                        <VStack spacing="24px" align="top" width="60%" paddingRight='16'>
                            {/* News Carousel */}
                            <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
                                {carouselNews.map((article, index) => (
                                    <div key={index}>
                                        <Link to={`/news/${article.title}`}>
                                        <Text
                                                className="TextNoDecoration"
                                                textColor="black"
                                                style={{
                                                    maxLines: 3,
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                }}
                                            >
                                                {article.title}
                                            </Text>
                                            <img
                                                src={article.urlToImage}
                                                alt={article.title}
                                                style={{ width: "auto", height: "250px" }}

                                            />

                                           
                                        </Link>
                                    </div>
                                ))}
                            </Carousel>
                                
                            <Divider orientation="horizontal" borderColor='black' borderWidth="2px" my={4} />
                            <HStack>

                                <Box h="100vh" display="flex" flexWrap="wrap" justifyContent="space-between" overflow={'scroll'}>
                                    {leftleftNews.map((article, index) => (
                                        <Container key={index} p={4} borderWidth="2px" borderRadius="md" maxW={'48%'} mb={2} borderColor={'black'} >
                                            <Link to={`/news/${article.title}`} style={{ textDecoration: 'none' }}>
                                                <Box>
                                                    <img
                                                        src={article.urlToImage}
                                                        alt={article.title}
                                                        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: 'md' }}
                                                    />
                                                </Box>
                                                <Box mt={2}>
                                                    <Text textColor={'black'} fontSize={'md'} fontWeight="bold">
                                                        {article.title}
                                                    </Text>
                                                </Box>
                                            </Link>
                                        </Container>
                                    ))}
                                </Box>


                            </HStack>
                        </VStack>
                        <VStack
                            align="top"
                            width="40%"
                            h={'100vh'}
                        >
                            <LatestNews />
                        </VStack>
                    </HStack>

                )}
                
        </>
    );
}

export default News;
