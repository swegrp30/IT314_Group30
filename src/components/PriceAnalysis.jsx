// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Stock from './Stock';
// import { toast } from 'react-toastify';
// import Loader from './Loader';
// import ErrorPage from './ErrorPage';
// const PriceAnalysis = () => {
//   const [share, setShare] = useState([]);
//   const token = localStorage.getItem('authToken');
//   const [loading, setLoading] = useState(true);
  
//   const headers = {
//     "Content-Type": "application/json",
//     "auth-token": token,
//   };
//   const handleaddfav = async (e) => {
//     // console.log(prop.name);
//     try {
//       const res = await axios.post("http://localhost:7000/add-fav", {
//         company: e,
//       }, { headers });
//       const data = res.status;
//       if (data === 200) {
//         toast.success("Added to Favourites");
//       }
//     } catch (err) {
//       if (err.response) {
//         // ✅ log status code here
//         console.log(err.response.status);
//         console.log(err.message);
//         console.log(err.response.headers); // 👉️ {... response headers here}
//         console.log(err.response.data); // 👉️ {... response data here}
//       }
//     }
//   };
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get('http://localhost:7000/getdata');
//         setShare(res.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         <ErrorPage />
//       } finally {
//         setLoading(false); // Set loading to false when data is fetched (or if there's an error)
//       }
//     };

//     fetchData();
//   }, []);

//   return (

//     <div>
//     {loading ? ( // Show Loader while data is being fetched
//       <Loader />
//     ) : (
//       <div className='row m-5'>

//         {share.map((item, index) =>
//           <>
//             <Stock
//               name={share[index].Name}
//               ticker={share[index].Ticker}
//               lastClose={share[index].LastClose}
//               lastChange={share[index].LastChange}
//             >
//             </Stock>
//             <div className="col-12 text-right">
//               <button className='btn btn-primary' onClick={()=>handleaddfav(item.Name)}>
//                 add-fav
//               </button>
//             </div>
//           </>
//         )}


//       </div>
//     </div>
//   )
// }

// export default PriceAnalysis



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Stock from './Stock';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
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
        // Check if data is available in session storage
        const storedData = sessionStorage.getItem('priceAnalysisData');
        if (storedData) {
          setShare(JSON.parse(storedData));
        } else {
          // Fetch data from the server if not available in session storage
          const res = await axios.get('http://localhost:7000/getdata');
          const data = res.data;
          setShare(data);

          // Save data to session storage
          sessionStorage.setItem('priceAnalysisData', JSON.stringify(data));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state if needed
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
        <div className='row m-5'>
          {share.map((item, index) => (
            <React.Fragment key={index}>
              <Stock
                name={share[index].Name}
                ticker={share[index].Ticker}
                lastClose={share[index].LastClose}
                lastChange={share[index].LastChange}
              />
              <div className='col-12 text-right'>
                <button className='btn btn-primary' onClick={() => handleaddfav(item.Name)}>
                  add-fav
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceAnalysis;
