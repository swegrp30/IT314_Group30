import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { server } from '../index'
import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
import ShareCard from './ShareCard';
const Share = () => {

    const [Share, setShare] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setpage] = useState(1);
    const changePage = (page) => {
        setpage(page);
        setLoading(true);
    };




    useEffect(() => {
        const fecthShare = async () => {
            try {
                const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr`)
                console.log(data)
                setShare(data);
                setLoading(false);

            } catch (error) {
                console.log(error);
                setError(true);
                setLoading(false);

            }
        }
        fecthShare();

    }, [ page]);

    if (error) return <ErrorPage />

    return (

        <Container maxW={'container.xl'}>
            {loading ? <Loader /> : <>

                

                <HStack wrap={'wrap'} justifyContent={'space-evenly'} padding={'10'} align={'baseline'}>
                    {
                        Share.map((i) => (
                            <ShareCard
                                id={i.id}
                                key={i.id}
                                name={i.name}
                                img={i.image}
                                price={i.current_price}
                                symbol={i.symbol}

                            />

                        ))
                    }
                </HStack>



            </>}

        </Container>
    )
}



export default Share