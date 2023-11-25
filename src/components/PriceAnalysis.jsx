
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Stock from './Stock';
import Loader from './Loader';
import { toast } from 'react-toastify';

const PriceAnalysis = () => {
  const [share, setShare] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('authToken');

  const headers = {
    'Content-Type': 'application/json',
    'auth-token': token,
  };

  const handleaddfav = async (e) => {
    try {
      const res = await axios.post('http://localhost:7000/add-fav', { company: e }, { headers });
      const data = res.status;
      if (data === 200) {
        toast.success('Added to Favourites');
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
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:7000/getdata');
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
        <div className='row m-2'>
          {share.map((item, index) => (
            <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
              <Stock
                name={share[index].Name}
                ticker={share[index].Ticker}
                lastClose={share[index].LastClose}
                lastChange={share[index].LastChange}
                handleAddFav={() => handleaddfav(item.Name)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceAnalysis;