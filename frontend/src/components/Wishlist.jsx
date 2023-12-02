import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ErrorPage from './ErrorPage';
import '../style/Wishlist.css';
import Stock from './Stock_wishlist';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { Navigate } from 'react-router-dom';

const Wishlist = () => {
  const [share, setShare] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allCompaniesData, setAllCompaniesData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredShare, setFilteredShare] = useState([]);

  const token = localStorage.getItem('authToken');
  const headers = {
    'Content-Type': 'application/json',
    'auth-token': token,
  };

  const handledelfav = async (e) => {
    try {
      const res = await axios.post(
        'https://sharebb-production.up.railway.app/del-fav',
        {
          company: e,
        },
        { headers }
      );
      const data = res.status;
      if (data === 200) {
        setShare(share.filter((item) => item !== e));
        toast.success('Deleted from Favourites');
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
      const res = await axios.get('https://sharebb-production.up.railway.app/getuser', {
        headers,
      });
      if (res.status === 401) {
        Navigate('*');
      }
      const favoriteCompanies = res.data.favourites;

      const storedData = sessionStorage.getItem('priceAnalysisData');
      if (storedData) {
        setAllCompaniesData(JSON.parse(storedData));
      } else {
        const res = await axios.get('https://sharebb-production.up.railway.app/getdata');
        const data = res.data;
        setAllCompaniesData(data);
        sessionStorage.setItem('priceAnalysisData', JSON.stringify(data));
      }

      const shareData = favoriteCompanies.map((companyName) => {
        const filteredData = allCompaniesData.filter((item) => item.Name === companyName);
        return filteredData[0];
      });

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

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const filteredData = share?.filter(
      (item) => item?.Name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredShare(filteredData);
  }, [searchInput, share]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="wishlist-container">
      <div className="wishlistHeader">Your Wishlist</div>
      <div className="row height  d-flex justify-content-center align-items-center ">
        <div className="col-md-6 ">
          <div className="form mt-5 mb-2 ">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control form-input"
              placeholder="Search anything..."
              value={searchInput}
              onChange={handleSearchChange}
            />
            <span className="left-pan"></span>
          </div>
        </div>
      </div>
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="row m-5">
          {filteredShare.length > 0 ? (
            filteredShare.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <Stock
                  key={index}
                  name={item.Name}
                  ticker={item.Ticker}
                  lastClose={item.LastClose}
                  lastChange={item.LastChange}
                  handleDelFav={() => handledelfav(item.Name)}
                />
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No matching items found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Wishlist };
