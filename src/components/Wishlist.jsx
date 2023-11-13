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
    const [wishlist, setWishlist] = useState([]);
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
                            <ShareCard {...item} addToWishlist={()=>addToWishlist(item)} />
                            <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>
                                Remove
                            </button>
                            {item.additionalDetails && selectedItem && selectedItem.id === item.id && (
                                <div className="additional-details">
                                    <VStack spacing={'4'} p="16" alignItems={'flex-start'}>
                                        <Heading size={'lg'}>{item.name}</Heading>
                                        <Stat>
                                            <StatNumber>
                                                ₹{item.market_data.current_price.inr}
                                            </StatNumber>
                                            <StatHelpText>
                                                <StatArrow
                                                    type={
                                                        item.market_data.price_change_percentage_24h > 0
                                                            ? 'increase'
                                                            : 'decrease'
                                                    }
                                                />
                                                {item.market_data.price_change_percentage_24h}%
                                            </StatHelpText>
                                        </Stat>
                                    </VStack>

                                    <HStack spacing={'20'}>
                                        <VStack>
                                            <Text color={'blackAlpha.700'}>Max Supply</Text>
                                            <Text>{item.market_data.max_supply}</Text>
                                        </VStack>
                                        <VStack>
                                            <Text color={'blackAlpha.700'}>Circulating Supply</Text>
                                            <Text>{item.market_data.circulating_supply}</Text>
                                        </VStack>
                                        <VStack>
                                            <Text color={'blackAlpha.700'}>Market Cap</Text>
                                            <Text>₹ {item.market_data.market_cap.inr}</Text>
                                        </VStack>
                                        <VStack>
                                            <Text color={'blackAlpha.700'}>All Time Low</Text>
                                            <Text>₹ {item.market_data.atl.inr}</Text>
                                        </VStack>
                                        <VStack>
                                            <Text color={'blackAlpha.700'}>All Time High</Text>
                                            <Text>₹ {item.market_data.ath.inr}</Text>
                                        </VStack>
                                    </HStack>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Wishlist;