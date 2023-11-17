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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Wishlist.css';
import ShareCard from './ShareCard';

function Wishlist() {
    const [wishlist, setWishlist] = useState([{
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        "current_price": 3030580,
        "market_cap": 59521241852195,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 63952279047807,
        "total_volume": 2152380166371,
        "high_24h": 3048343,
        "low_24h": 2960769,
        "price_change_24h": -7186.070432448294,
        "price_change_percentage_24h": -0.23656,
        "market_cap_change_24h": 147187586379,
        "market_cap_change_percentage_24h": 0.2479,
        "circulating_supply": 19544981,
        "total_supply": 21000000,
        "max_supply": 21000000,
        "ath": 5128383,
        "ath_change_percentage": -41.61463,
        "ath_date": "2021-11-10T14:24:11.849Z",
        "atl": 3993.42,
        "atl_change_percentage": 74878.97979,
        "atl_date": "2013-07-05T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-11-17T17:14:44.894Z"
    },
    {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        "current_price": 3030580,
        "market_cap": 59521241852195,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 63952279047807,
        "total_volume": 2152380166371,
        "high_24h": 3048343,
        "low_24h": 2960769,
        "price_change_24h": -7186.070432448294,
        "price_change_percentage_24h": -0.23656,
        "market_cap_change_24h": 147187586379,
        "market_cap_change_percentage_24h": 0.2479,
        "circulating_supply": 19544981,
        "total_supply": 21000000,
        "max_supply": 21000000,
        "ath": 5128383,
        "ath_change_percentage": -41.61463,
        "ath_date": "2021-11-10T14:24:11.849Z",
        "atl": 3993.42,
        "atl_change_percentage": 74878.97979,
        "atl_date": "2013-07-05T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-11-17T17:14:44.894Z"
    }]);
    const [selectedItem, setSelectedItem] = useState(null);

    const addToWishlist = (share) => {
        if (!wishlist.find((item) => item.id === share.id)) {
            setWishlist([...wishlist, { ...share, additionalDetails: true }]);
        }
    };

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id));
    };

    const showAdditionalDetails = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="wishlist-container">
            <div className="wishlist-header">
                <h2>Your Wishlist</h2>
            </div>

            {wishlist.length === 0 ? (
                <div className="empty-wishlist">
                    <p>Your wishlist is empty.</p>
                </div>
            ) : (
                <div className="wishlist-items">
                    {wishlist.map((item) => (
                        <div key={item.id} className="wishlist-item">
                            <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>
                                Remove
                            </button>
                            <div className="additional-details">
                                <VStack spacing={'4'} p="16" alignItems={'flex-start'}>
                                    <Heading size={'lg'}>{item.name}</Heading>
                                    <Stat>
                                        <StatNumber>
                                            ₹{item.current_price}
                                        </StatNumber>
                                        <StatHelpText>
                                            <StatArrow
                                                type={
                                                    item.price_change_percentage_24h > 0
                                                        ? 'increase'
                                                        : 'decrease'
                                                }
                                            />
                                            {item.price_change_percentage_24h}%
                                        </StatHelpText>
                                    </Stat>
                                </VStack>

                                <HStack spacing={'20'}>
                                    <VStack>
                                        <Text color={'blackAlpha.700'}>Max Supply</Text>
                                        <Text>{item.max_supply}</Text>
                                    </VStack>
                                    <VStack>
                                        <Text color={'blackAlpha.700'}>Circulating Supply</Text>
                                        <Text>{item.circulating_supply}</Text>
                                    </VStack>
                                    <VStack>
                                        <Text color={'blackAlpha.700'}>Market Cap</Text>
                                        <Text>₹ {item.market_cap}</Text>
                                    </VStack>
                                    <VStack>
                                        <Text color={'blackAlpha.700'}>All Time Low</Text>
                                        <Text>₹ {item.atl}</Text>
                                    </VStack>
                                    <VStack>
                                        <Text color={'blackAlpha.700'}>All Time High</Text>
                                        <Text>₹ {item.ath}</Text>
                                    </VStack>
                                </HStack>

                                <Divider
                                    borderWidth="2px"
                                    borderColor="gray.800"
                                    backgroundColor="gray.800"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Wishlist;