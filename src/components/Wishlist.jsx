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
import Nav from './Nav';
import Footer from './Footer';
import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
// import star from '../Images/StarIconAfter.svg';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WISHLIST':
            return action.payload;
        case 'ADD_TO_WISHLIST':
            return [...state, action.payload];
        case 'REMOVE_FROM_WISHLIST':
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};

const WishlistProvider = ({ children }) => {
    const [wishlist, dispatch] = useReducer(wishlistReducer, []);
    const token = localStorage.getItem('authToken')
  // console.log(token)

  const headers = {
    'Content-Type': 'application/json',
    'auth-token': token,

  }
    useEffect(() => {
        // Fetch wishlist data from the backend when the component mounts
        const fetchWishlist = async () => {
            try {
                const response = await axios.get('http://localhost:7000/getuser',{headers});
                dispatch({ type: 'SET_WISHLIST', payload: response.data });
            } catch (error) {
                console.error('Error fetching wishlist data', error);
            }
        };

        fetchWishlist();
    }, []);

    const addToWishlist = async (item) => {
        try {
            // Add the item to the local state
            dispatch({ type: 'ADD_TO_WISHLIST', payload: item });

            // Add the item to the backend
            await axios.post('http://localhost:7000/add-fav', { company: item.name });

        } catch (error) {
            console.error('Error adding item to wishlist', error);
        }
    };

    const removeFromWishlist = async (item) => {
        try {
            // Remove the item from the local state
            dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item });

            // Remove the item from the backend
            await axios.post('http://localhost:7000/del-fav', { company: item.name });

        } catch (error) {
            console.error('Error removing item from wishlist', error);
        }
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

const useWishlist = () => {
    return useContext(WishlistContext);
};

// Wishlist Component
const Wishlist = () => {
    const { wishlist } = useWishlist();

    return (
        <div className="wishlist-container">
            <Nav />
            <div className="wishlist-header">
                <h2>Your Wishlist</h2>
            </div>
            
            <h1>Wishlist</h1>
            {wishlist.map(item => (
                <ShareCard key={item.id} {...item} />
            ))}
            <Footer />
        </div>
    );
};

export { WishlistProvider, useWishlist, Wishlist };