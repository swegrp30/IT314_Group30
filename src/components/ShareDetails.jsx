import {
    Badge,
    Box,
    Button,
    Container,
    Divider,
    HStack,
    Heading,
    Image,
    Progress,
    Radio,
    RadioGroup,
    Stat,
    StatArrow,
    StatHelpText,
    StatLabel,
    StatNumber,
    Text,
    VStack,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chart from './Chart';
import ErrorPage from './ErrorPage';
import Loader from './Loader';
import Notes from './Notes';
import Nav from './Nav';
import Footer from './Footer';

const CoinDetails = () => {
    const params = useParams();
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [days, setDays] = useState('24h');
    const [chartArray, setChartArray] = useState([]);



    const timeRanges = ['24h', '7d', '14d', '30d', '60d', '200d', '1y', 'max'];

    const switchChartStats = (index) => {
        const key = timeRanges[index];
        switch (key) {
            case '24h':
                setDays('24h');
                setLoading(true);
                break;
            case '7d':
                setDays('7d');
                setLoading(true);
                break;
            case '14d':
                setDays('14d');
                setLoading(true);
                break;
            case '30d':
                setDays('30d');
                setLoading(true);
                break;
            case '60d':
                setDays('60d');
                setLoading(true);
                break;
            case '200d':
                setDays('200d');
                setLoading(true);
                break;
            case '1y':
                setDays('365d');
                setLoading(true);
                break;
            case 'max':
                setDays('max');
                setLoading(true);
                break;

            default:
                setDays('24h');
                setLoading(true);
                break;
        }
    };

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`);
                console.log(data);
                const { data: chartData } = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=inr&days=${days}`
                );
                setCoin(data);
                setChartArray(chartData.prices);
                console.log(chartData.prices);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchCoin();
    }, [params.id, days]);

    if (error) return <ErrorPage />;

    return (
        <>
        <Container maxW={'container.xl'}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <VStack spacing={'4'} p="16" alignItems={'flex-start'}>
                        <Heading size={'lg'}>{coin.name}</Heading>
                        <Stat>
                            <StatNumber>
                                ₹
                                {coin.market_data.current_price.inr}
                            </StatNumber>
                            <StatHelpText>
                                <StatArrow
                                    type={
                                        coin.market_data.price_change_percentage_24h > 0
                                            ? 'increase'
                                            : 'decrease'
                                    }
                                />
                                {coin.market_data.price_change_percentage_24h}%
                            </StatHelpText>
                        </Stat>
                    </VStack>

                    <HStack spacing={'20'}>
                        <VStack>
                            <Text color={'blackAlpha.700'}>Max Supply</Text>
                            <Text>{coin.market_data.max_supply}</Text>
                        </VStack>
                        <VStack>
                            <Text color={'blackAlpha.700'}>Circulating Supply</Text>
                            <Text>{coin.market_data.circulating_supply}</Text>
                        </VStack>
                        <VStack>
                            <Text color={'blackAlpha.700'}>Market Cap</Text>
                            <Text>₹ {coin.market_data.market_cap.inr}</Text>
                        </VStack>
                        <VStack>
                            <Text color={'blackAlpha.700'}>All Time Low</Text>
                            <Text>₹ {coin.market_data.atl.inr}</Text>
                        </VStack>
                        <VStack>
                            <Text color={'blackAlpha.700'}>All Time High</Text>
                            <Text>₹ {coin.market_data.ath.inr}</Text>
                        </VStack>
                    </HStack>

                    <Divider
                        borderWidth="2px"
                        borderColor="gray.800"
                        backgroundColor="gray.800"
                    />

                    <Heading size={'4xl'} color={'#962B92'}> {coin.name}  Past Analysis </Heading>
                    <Text fontSize={'small'} alignSelf="center" opacity={0.7}>
                        Last Updated On{' '}
                        {Date(coin.market_data.last_updated).split('G')[0]}
                    </Text>

                    <HStack p="4" overflowX={'auto'}>
                        {timeRanges.map(i => (
                            <Button
                                disabled={days === i}
                                key={i}
                                onClick={() => switchChartStats(i)}
                            >
                                {i}
                            </Button>
                        ))}
                    </HStack>


                    <Box width={'full'} borderWidth={1}>
                        <Chart arr={chartArray} days={days} />
                    </Box>
                </>
            )}

            <Notes />   
        </Container>
        </>
    );
};

const Item = ({ title, value }) => (
    <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
        <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>
            {title}
        </Text>
        <Text>{value}</Text>
    </HStack>
);


export default CoinDetails;