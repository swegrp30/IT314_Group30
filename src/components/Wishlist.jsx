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
import ErrorPage from "./ErrorPage";
import { Link } from 'react-router-dom';
import '../style/Wishlist.css';
import ShareCard from './ShareCard';
import Nav from './Nav';
import Footer from './Footer';
import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
// import star from '../Images/StarIconAfter.svg';

// const WishlistProvider = ({ children }) => {
//     const [wishlist, dispatch] = useReducer(wishlistReducer, []);
//     const token = localStorage.getItem('authToken')
//     // console.log(token)

//     const headers = {
//         'Content-Type': 'application/json',
//         'auth-token': token,

//     }
//     // useEffect(() => {
//     //     // Fetch wishlist data from the backend when the component mounts
//     //     const fetchWishlist = async () => {
//     //         try {
//     //             const response = await axios.get('http://localhost:7000/getuser',{headers});
//     //             dispatch({ type: 'SET_WISHLIST', payload: response.data });
//     //         } catch (error) {
//     //             console.error('Error fetching wishlist data', error);
//     //         }
//     //     };

//     //     fetchWishlist();
//     // }, []);

//     const addToWishlist = async (item) => {
//         try {
//             // Add the item to the local state
//             dispatch({ type: 'ADD_TO_WISHLIST', payload: item });

//             // Add the item to the backend
//             await axios.post('http://localhost:7000/add-fav', { company: item.name });

//         } catch (error) {
//             console.error('Error adding item to wishlist', error);
//         }
//     };

//     const removeFromWishlist = async (item) => {
//         try {
//             // Remove the item from the local state
//             dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item });

//             // Remove the item from the backend
//             await axios.post('http://localhost:7000/del-fav', { company: item.name });

//         } catch (error) {
//             console.error('Error removing item from wishlist', error);
//         }
//     };

//     return (
//         <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//             {children}
//         </WishlistContext.Provider>
//     );
// }

// const useWishlist = () => {
//     return useContext(WishlistContext);
// };

// Wishlist Component
const Wishlist = () => {
    const [Share, setShare] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    // const { wishlist } = useWishlist();
    const [wishes, setwishes] = useState([]);
    // useEffect(() => {
    //     console.log("Wishlist data:", wishlist);
    // }, [wishlist]);

    const token = localStorage.getItem("authToken");
    const [d, setd] = useState()
    const headers = {
        "Content-Type": "application/json",
        "auth-token": token,
    };
    const getfav = async () => {
        const res = await axios.get(
            "http://localhost:7000/getuser",
            { headers }
        );
        // console.log(res.data[0].comment);
        // console.log(res.data.favourites)
        setwishes(res.data.favourites);
    }
    setTimeout(() => {
        getfav()
    }, 1000)
    const fecthShare = async () => {
        try {
            const { data } = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr`
            );
            setShare(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(true);
            setLoading(false);
        }
        console.log(Share)
    };
    fecthShare();
    const filteredShares = Share.filter((Share) =>
        Share.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const getCompanyData = async (companyName) => {
        const foundElement = filteredShares.find(item => item.name === companyName);
        return foundElement;
        // try {
        //     const { data } = await axios.get(
        //         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr`
        //     );
        //     return data[0]; // Assuming that the API response is an array and you want the first item
        // } catch (error) {
        //     console.error('Error fetching company data', error);
        //     return null;
        // }
    };
    if (error) return <ErrorPage />;
    return (
        <div className="wishlist-container">
            <div className="wishlist-header">
                <h2>Your Wishlist</h2>
            </div>
            <HStack
                wrap={"wrap"}
                justifyContent={"space-evenly"}
                padding={"10"}
                align={"baseline"}
            >
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    wishes.map(async (item) => {
                        const companyData = await getCompanyData(item);
                        console.log(companyData);
                        setd(companyData);
                        return d ? (
                            <ShareCard
                                id={d.id}
                                key={d.id}
                                name={d.name}
                                img={d.image}
                                price={d.current_price}
                                symbol={d.symbol}
                                priceChangePercentage={d.price_change_percentage_24h}
                            />
                        ) : null;
                    })
                )}

            </HStack>
        </div>
    );
};

export { Wishlist };