import React from 'react'
import { VStack, Image, Heading, Text, HStack , Badge, Box, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import star from "../Images/star.svg";
const ShareCard = ({ id, name, img, price, symbol, priceChangePercentage }) => {
    const getPriceChangeBadge = () => {
        const isIncrease = priceChangePercentage > 0;
        const badgeColor = isIncrease ? 'green' : 'red';
        return (
            <Badge colorScheme={badgeColor}>
                {isIncrease ? 'Increase' : 'Decrease'}
            </Badge>
        );
    };

    return (
        <Link to={`/Share/${id}`} >
            <HStack
                w={"300px"}
                cursor={"pointer"}
                color={'white'}
                shadow='dark-lg'
                p={"5"}
                borderRadius={"lg"}
                bgColor={'#962B92'}
                transition={"all 0.3s"}
                m={"5"}
                css={{
                    "&:hover": {
                        transform: "scale(1.1)",
                    },
                }}
            >
                <Image
                    src={img}
                    w={"50"}
                    h={"50"}

                    objectFit={"contain"}
                    alt={"Exchange"}
                />
                <Box>


                    <Heading size={"md"} noOfLines={1} textTransform={"uppercase"}>
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

                <Button>
                    <Image
                        src={star}
                        w={"10"}
                        h={"10"}
                        alt={"Favorite"}
                    />
                </Button>

            </HStack>
        </Link>
    );
};
export default ShareCard;
