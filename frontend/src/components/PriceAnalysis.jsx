import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Stock from './Stock';
import Loader from './Loader';
import { toast } from 'react-toastify';
import { HStack } from '@chakra-ui/react';
import "../style/search.css";
import Search from './Search';
// ... (previous imports)

const PriceAnalysis = () => {
  const [share, setShare] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [filteredShares, setFilteredShares] = useState([]);
  const token = localStorage.getItem('authToken');

  const headers = {
    'Content-Type': 'application/json',
    'auth-token': token,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://sharebb-production.up.railway.app/getdata');
        const data = res.data;
        setShare(data);
        setFilteredShares(data); // Initialize filteredShares with all shares
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run only once when the component mounts

  useEffect(() => {
    // Filter shares based on the search input
    const filtered = share.filter((item) =>
      item.Name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredShares(filtered);
  }, [searchInput, share]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="row height  d-flex justify-content-center align-items-center ">
            <div className="col-md-6 ">
              <div className="form mt-5 mb-2 ">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Search Stock..."
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <span className="left-pan"></span>
              </div>
            </div>
          </div>

          <div className='row m-2'>
            {filteredShares.length>0 ? (filteredShares.map((item, index) => (
              <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
                <Stock
                  name={item.Name}
                  ticker={item.Ticker}
                  lastClose={item.LastClose}
                  lastChange={item.LastChange}
                />
              </div>
            ))) : (
              <div className="col-12 text-center">
                <p>No matching items found.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PriceAnalysis;
