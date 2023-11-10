import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { server } from '../index'
import { Container, HStack, Button, RadioGroup, Radio, Heading, Box } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
import ShareCard from './ShareCard';
import '../style/Home.css';
const Share = () => {

    const [Share, setShare] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setpage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const fecthShare = async () => {
            try {
                const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr`)
                setShare(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(true);
                setLoading(false);

            }
        }
        fecthShare();

    }, []);

    const filteredShares = Share.filter((Share) =>
        Share.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (error) return <ErrorPage />

    return (

        <Container maxW={'container.xl'}>
            {loading ? <Loader /> : <>


                <HStack justifyContent={'space-between'} >
                    <Heading size={'xl'} padding={'5'} pt='10'>Share & Price analysis</Heading>
                    <Box className='mt-4'>
                        <div className='home-search' width={'50'} pl={'10'} right={'0'}>
                            <input
                                className='me-2 home-search-bar'        
                                type='search'
                                placeholder='Search Share'
                                aria-label='Search'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className='btn btn-outline-success' type='submit'>
                                Search
                            </button>
                        </div>
                    </Box>
                </HStack>

                <HStack wrap={'wrap'} justifyContent={'space-evenly'} padding={'10'} align={'baseline'}>
                    {
                        filteredShares.map((i) => (
                            <ShareCard
                                id={i.id}
                                key={i.id}
                                name={i.name}
                                img={i.image}
                                price={i.current_price}
                                symbol={i.symbol}
                                priceChangePercentage={i.price_change_percentage_24h}

                            />

                        ))
                    }
                </HStack>



            </>}

        </Container>
    )
}



export default Share