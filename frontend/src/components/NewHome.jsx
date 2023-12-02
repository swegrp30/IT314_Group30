import React from 'react';
import vectorImgBack1 from "../Images/vectorImgBack1.jpg";
import personStockImage from "../Images/personStock.svg";
import stockAnalysingImage from "../Images/stock.jpeg";
import computerImage from "../Images/personStock.svg";
import './NewHomepage.css'; // Import the CSS file
import video from "../Images/stock.mp4";
const NewHome = () => {
  return (

    <>
    <video autoPlay loop width="100%" height="100%" muted className=''>
        <source src={video} type="video/mp4" />
        </video>
   
    <div className='mt-3'>
      {/* Navbar (Assuming you already have one) */}
      {/* Add your existing navbar code here */}

      {/* Main Content */}
     
        
      <div className="container">
      
        {/* Section 1 */}
        <div className="row">
          <div className="col-md-6 pt-5">
            <div className="text-content ">
              <h1>Empower Your Investments</h1>
              <p>Unlock the potential of your investments with our cutting-edge predictive analytics. Leverage data-driven insights to make informed decisions and maximize your returns.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="main-image image-hover">
              <img src={vectorImgBack1} alt="Computer Screen" className="img-fluid" />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row">
          <div className="col-md-6">
            <div className="main-image image-hover">
              <img src={personStockImage} alt="Person with Stock Details" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 pt-5">
            <div className="text-content align-middle">
              <h1>Real-Time Data at Your Fingertips</h1>
              <p>Stay updated with real-time stock information. React to market changes instantly. Our user-friendly interface provides seamless access to the latest market trends.</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="row">
          <div className="col-md-6 pt-16">
            <div className="text-content">
              <h1>Powerful Data Analysis Tools</h1>
              <p>Analyze stock prices and trends with our sophisticated data analysis tools. Gain valuable insights into market patterns and investment opportunities.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="main-image image-hover">
              <img src={stockAnalysingImage} alt="Stock Analysis" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NewHome;