import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ErrorPage from './ErrorPage';
import '../style/Wishlist.css';
import Stock from './Stock';

const Wishlist = () => {
    const [share, setShare] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const token = localStorage.getItem('authToken');
    const headers = {
        'Content-Type': 'application/json',
        'auth-token': token,
    };

    useEffect(() => {
        const getWishlistData = async () => {
            try {
                const res = await axios.get('http://localhost:7000/getuser', { headers });
                console.log(res.data.favourites);
                const favoriteCompanies = res.data.favourites;
                const allCompaniesData = await axios.get('http://localhost:7000/getdata');
                const shareData = favoriteCompanies.map((companyName) => {
                    const filteredData = allCompaniesData.data.filter(item => item.Name === companyName);
                    return filteredData[0];
                });
                console.log(shareData);
                setShare(shareData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching wishlist data', error);
                setError(true);
                setLoading(false);
            }
        };

        getWishlistData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <ErrorPage />;
    }

    return (
        <div className="wishlist-container">
            <div className="wishlist-header">
                <h2>Your Wishlist</h2>
            </div>
            <div className="row m-5">
                {share && share.map((item, index) => (
                    item ? (
                        <Stock
                          key={index}
                          name={item.Ticker}
                          lastClose={item.LastClose}
                          lastChange={item.LastChange}
                        />
                      ) : null
        ))}
            </div>
        </div>
    );
};

export { Wishlist };