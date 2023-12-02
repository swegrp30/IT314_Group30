
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Stock from './Stock';
import Loader from './Loader';
import { toast } from 'react-toastify';
import { HStack } from '@chakra-ui/react';
import "../style/search.css";
import Search from './Search';
const PriceAnalysis = () => {
  const [share, setShare] = useState([]);
  
  const [loading, setLoading] = useState(true);
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
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run only once when the component mounts

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
        
        <Search />
        
        <div className='row m-2'>
          {share.map((item, index) => (
            <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
              <Stock  
                name={share[index].Name}
                ticker={share[index].Ticker}
                lastClose={share[index].LastClose}
                lastChange={share[index].LastChange}
              />
            </div>
          ))}
        </div>
        
      </>
      )}
    </div>
  );
};

export default PriceAnalysis;