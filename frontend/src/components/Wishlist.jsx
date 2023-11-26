import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ErrorPage from './ErrorPage';
import '../style/Wishlist.css';
import Stock from './Stock_wishlist';
import { toast } from 'react-toastify';
import Loader from './Loader';

const Wishlist = () => {
    const [share, setShare] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [allCompaniesData, setAllCompaniesData] = useState([]);
    const token = localStorage.getItem('authToken');
    const headers = {
        'Content-Type': 'application/json',
        'auth-token': token,
    };
    const handledelfav = async (e) => {
        try {
            const res = await axios.post("http://localhost:7000/del-fav", {
                company: e,
            }, { headers });
            const data = res.status;
            if (data === 200) {
                setShare(share.filter((item) => item !== e));
                toast.success("Deleted from Favourites");
            }
        } catch (err) {
            if (err.response) {
                console.log(err.response.status);
                console.log(err.message);
                console.log(err.response.headers);
                console.log(err.response.data);
            }
        }
    };
    const getWishlistData = async () => {
        try {
            const res = await axios.get('http://localhost:7000/getuser', { headers });
            console.log(res.data.favourites);
            const favoriteCompanies = res.data.favourites;
            // const allCompaniesData = await axios.get('http://localhost:7000/getdata');
            const storedData = sessionStorage.getItem('priceAnalysisData');
            if (storedData) {
                setAllCompaniesData(JSON.parse(storedData));
                // setShare(JSON.parse(storedData));
            }
            else {
                // Fetch data from the server if not available in session storage
                const res = await axios.get('http://localhost:7000/getdata');
                const data = res.data;
                setAllCompaniesData(data);
                // setShare(data);

                // Save data to session storage
                sessionStorage.setItem('priceAnalysisData', JSON.stringify(data));
            }
            console.log(allCompaniesData);
            const shareData = favoriteCompanies.map((companyName) => {
                console.log(companyName);
                const filteredData = allCompaniesData.filter(item => item.Name === companyName);
                return filteredData[0];
            });
            // console.log(shareData);
            setShare(shareData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching wishlist data', error);
            setError(true);
            setLoading(false);
        }
    };
    useEffect(() => {

        getWishlistData();
    }, [headers]);

    if (loading) {
        return <div>
            <Loader />
        </div>;
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
                        <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
                            <Stock
                                key={index}
                                name={item.Ticker}
                                lastClose={item.LastClose}
                                lastChange={item.LastChange}
                                handleDelFav={() => handledelfav(item.Name)}
                            />
                        </div>
                    ) : null
                ))}
            </div>
        </div>
    );
};

export { Wishlist };