
import { Link } from "react-router-dom";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { toast } from 'react-toastify';
import "../style/stock.css";

const Stock = (prop) => {
  const isPositiveChange = prop.lastChange > 0;
  const arrowIconClass = isPositiveChange
    ? "fa-arrow-up text-success"
    : "fa-arrow-down text-danger";
  const percentageChangeColor = isPositiveChange
    ? "text-success"
    : "text-danger";

  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const [WishlistShare, setWishlistShare] = useState([]);
  const [error, setError] = useState(false);
  const [allCompaniesData, setAllCompaniesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('authToken');

  const headers = {
    'Content-Type': 'application/json',
    'auth-token': token,
  };
  const handledelfav = async (e) => {
    try {
        const res = await axios.post("https://sharebb-production.up.railway.app/del-fav", {
            company: e,
        }, { headers });
        const data = res.status;
        if (data === 200) {
            setWishlistShare(WishlistShare.filter((item) => item !== e));
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
        const res = await axios.get('https://sharebb-production.up.railway.app/getuser', { headers });
        console.log(res.data.favourites);
        const favoriteCompanies = res.data.favourites;
        // const allCompaniesData = await axios.get('https://sharebb-production.up.railway.app/getdata');
        const storedData = sessionStorage.getItem('wishlistData');
        if (storedData) {
            setAllCompaniesData(JSON.parse(storedData));
            // setShare(JSON.parse(storedData));
        }
        else {
            // Fetch data from the server if not available in session storage
            const res = await axios.get('https://sharebb-production.up.railway.app/getdata');
            const data = res.data;
            setAllCompaniesData(data);
            // setShare(data);

            // Save data to session storage
            sessionStorage.setItem('wishlistData', JSON.stringify(data));
        }
        console.log(allCompaniesData);
        const shareData = favoriteCompanies.map((companyName) => {
            console.log(companyName);
            const filteredData = allCompaniesData.filter(item => item.Name === companyName);
            return filteredData[0];
        });
        //console.log(shareData);
        setWishlistShare(shareData);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching wishlist data', error);
        setError(true);
        setLoading(false);
    }
};

const inWishlist = () => {
  console.log(WishlistShare)
  // for(let i = 0;i<WishlistShare.length;i++){
  //     if(prop.name===WishlistShare[i].Name)
  //     return true
    
    
  // }
  return false;
}

useEffect(() => {

  getWishlistData();
}, [headers]);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scaleStyle = isHovered ? { transform: "scale(1.1)" } : {};
  const Indian = [
    "Reliance Industries",
    "Infosys",
    "HDFC Bank",
    "Tata Consultancy Services",
  ];

  return (
    <div
      className="card l-bg-web mb-3"
      style={{ transition: "all 0.3s", ...scaleStyle }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-statistic-3 p-4">
        <Link
          to={`/share/${prop.ticker}`}
          className="text-decoration-none text-white"
        >
          <div className="cardContainer">
          <div className="stockLeft">
            <div className="mb-4">
              <h3 className="card-title mb-0">{prop.name}</h3>
              <h6 className="card-title mb-0">{prop.ticker}</h6>
            </div>
            <div className="row align-items-end mb-2">
              <div className="col-8">
                <h2 className="d-flex align-items-center mb-0">
                  {Indian.includes(prop.name) ? "₹" : "$"} {prop.lastClose}
                </h2>
              </div>
            </div>
            <div className="col-7 text-right mt-4">
              <h4
                className={`${percentageChangeColor} font-weight-bold`}
                // style={{ fontSize: "25px", fontWeight:1000 }}
              >
                {prop.lastChange}% <i className={`fa ${arrowIconClass}`}></i>
              </h4>
            </div>
          </div>
          <div className="stockRight">
            <div className="text-right mt-3 star">
              {/* <button className="btn btn-primary " onClick={prop.handleAddFav}>
                Add to Favorites
              </button> */}
              <div> {inWishlist() && 
              <i
                class="fa-solid fa-star fa-2xl"
                style={{ color: "white" }}
                onClick={prop.handleDelFav}
              ></i>}
              </div>
              <div> {!inWishlist() && 
              <i
                class="fa-regular fa-star fa-2xl"
                style={{ color: "white" }}
                onClick={prop.handleAddFav}
              ></i>}
              </div>
            </div>
          </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Stock;
