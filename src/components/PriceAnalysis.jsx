import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Stock from './Stock';
import { toast } from 'react-toastify';
const PriceAnalysis = () => {
  const [share, setShare] = useState([]);
  const token = localStorage.getItem('authToken');
  
  const headers = {
    "Content-Type": "application/json",
    "auth-token": token,
  };
  const handleaddfav = async (e) => {
    // console.log(prop.name);
    try {
      const res = await axios.post("http://localhost:7000/add-fav", {
        company: e,
      }, { headers });
      const data = res.status;
      if (data === 200) {
        toast.success("Added to Favourites");
      }
    } catch (err) {
      if (err.response) {
        // ✅ log status code here
        console.log(err.response.status);
        console.log(err.message);
        console.log(err.response.headers); // 👉️ {... response headers here}
        console.log(err.response.data); // 👉️ {... response data here}
      }
    }
  };
  
  useEffect(() => {
    const handleClick = async () => {
      const res = await axios.get('http://localhost:7000/getdata');
      console.log(res.data)
      setShare(res.data);

    }
    handleClick();

  }, [share]);

  return (

    <div>
      <div className='row m-5'>

        {share.map((item, index) =>
          <>
            <Stock
              name={share[index].Name}
              ticker={share[index].Ticker}
              lastClose={share[index].LastClose}
              lastChange={share[index].LastChange}
            >
            </Stock>
            <div className="col-12 text-right">
              <button className='btn btn-primary' onClick={()=>handleaddfav(item.Name)}>
                add-fav
              </button>
            </div>
          </>
        )}


      </div>
    </div>
  )
}

export default PriceAnalysis