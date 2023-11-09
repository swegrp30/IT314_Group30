import React from 'react'
import { VStack, Image, Heading, Text, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ShareCard = ({ id, name, img, price, symbol }) => (
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
            <VStack>
            <Heading size={"md"} noOfLines={1} textTransform={"uppercase"}>
                {symbol}
            </Heading>

            <Text noOfLines={1}>{name}</Text>
            <Text noOfLines={2}>{price} ₹</Text>

            </VStack>

            

        </HStack>
    </Link>
)

export default ShareCard