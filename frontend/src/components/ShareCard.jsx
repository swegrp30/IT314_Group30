import React from 'react';
import { HStack, Image, Heading, Text, Badge, Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import star from '../Images/star.svg';
import Wishlist from './Wishlist';

const ShareCard = ({ id, name, img, price, symbol, priceChangePercentage, addToWishlist }) => {
    const getPriceChangeBadge = () => {
        const isIncrease = priceChangePercentage > 0;
        const badgeColor = isIncrease ? 'green' : 'red';
        return (
            <Badge colorScheme={badgeColor}>
                {isIncrease ? 'Increase' : 'Decrease'}
            </Badge>
        );
    };
    // console.log(addToWishlist);
    return (
        <HStack
            w={'300px'}
            cursor={'pointer'}
            color={'white'}
            shadow='dark-lg'
            p={'5'}
            borderRadius={'lg'}
            bgColor={'#962B92'}
            transition={'all 0.3s'}
            m={'5'}
            css={{
                '&:hover': {
                    transform: 'scale(1.1)',
                },
            }}
        >
            <Link to={`/Share/${id}`}>
                <Image src={img} w={'50'} h={'50'} objectFit={'contain'} alt={'Exchange'} />
            

            <Box>
                <Heading size={'md'} noOfLines={1} textTransform={'uppercase'}>
                    {symbol}
                </Heading>

                <Text noOfLines={1}>{name}</Text>
                <Text noOfLines={2}>{price} ₹</Text>

                {priceChangePercentage !== undefined && (
                    <>
                        <Text noOfLines={1}>Price Change</Text>
                        {getPriceChangeBadge()} {priceChangePercentage}%
                    </>
                )}
            </Box>
            </Link>

            <Button onClick={() => addToWishlist({ id, name, img, price, symbol, priceChangePercentage })}>
                <Image src={star} w={'5'} h={'5'} alt={'Favorite'} />
            </Button>
        </HStack>
    );
};

export default ShareCard;