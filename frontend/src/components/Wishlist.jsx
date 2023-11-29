import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import ErrorPage from './ErrorPage';
import '../style/Wishlist.css';
import { toast } from 'react-toastify';
import Loader from './Loader';

const Indian = ["Reliance Industries", "Infosys", "HDFC Bank", "Tata Consultancy Services"];

const StockWithoutAddToFav = ({ name, lastClose, lastChange }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const linkStyle = isHovered
        ? { color: '#fff', textDecoration: 'underline' } 
        : { color: '#fff', textDecoration: 'none' };  

    const scaleStyle = isHovered ? { transform: "scale(1.1)" } : {};

    return (
        <div className="card l-bg-blue-dark mb-3" style={{ transition: "all 0.3s", ...scaleStyle }}>
            <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                    <i className="fas fa-users"></i>
                </div>
                <Link
                    to={`/share/${name}`}
                    className="text-decoration-none text-white"
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="mb-4">
                        <h3 className="card-title mb-0">{name}</h3>
                    </div>
                    <div className="row align-items-end mb-2">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0">
                                {Indian.includes(name) ? "₹" : "$"} {lastClose}
                            </h2>
                        </div>
                        <div className="col-4 text-right">
                            <span className={`text-success font-weight-bold`} style={{ fontSize: "20px" }}>
                                {lastChange}%
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};


const Wishlist = () => {
    const [share, setShare] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
    }, [share]);

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
                        <div key={index}>
                            <StockWithoutAddToFav
                                name={item.Ticker}
                                lastClose={item.LastClose}
                                lastChange={item.LastChange}
                            />
                            <div className="col-12 text-right">
                                <button className='btn btn-primary' onClick={() => handledelfav(item.Name)}>
                                    remove-fav
                                </button>
                            </div>
                        </div>
                    ) : null
                ))}
            </div>
        </div>
    );
};

export { Wishlist, StockWithoutAddToFav };