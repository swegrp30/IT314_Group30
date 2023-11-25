import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Stock from './Stock';

const PriceAnalysis = () => {
    const [share,setShare] = useState([]);

    useEffect(() => {    
        const handleClick =async()=>{
        const res = await axios.get('http://localhost:7000/getdata');
        console.log(res.data)
        setShare(res.data);
        
    }
    handleClick();
    
  }, [share]);
  
  return (

    <div>
        <div className='row m-5'>
            
        {share.map((item,index)=>
        
               <Stock name={share[index].Name}
               ticker = {share[index].Ticker}
                       lastClose ={share[index].LastClose}
        lastChange = {share[index].LastChange}
        >
            </Stock>
            
            )}
        
        
        </div>  
    </div>
  )
}

export default PriceAnalysis