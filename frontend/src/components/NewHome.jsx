import React from 'react';
import vectorImgBack1 from "../Images/vectorImgBack1.jpg";
import personStockImage from "../Images/personStock.svg";
import stockAnalysingImage from "../Images/stock.jpeg";
import computerImage from "../Images/personStock.svg";
import './NewHomepage.css'; // Import the CSS file
import video from "../Images/stock.mp4";
import Tour from "../Images/Tour.jpg"
const NewHome = () => {
  return (

    <>

<div>
                <h1 className='home-h1'>Stock market analysis for the <br /> serious part-time investor</h1>
                <h4 className='home-h4'>We use intuitive data visualizations and automated stock analysis to help <br /> you understand a stock's fundamentals within minutes.</h4>
            </div>

            <div>
                <h1 className='home-h1'>A quick guide to our product</h1>
                <img src={Tour} className="home-guide-image rounded mx-auto d-block" alt="" />
            </div>
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
              <h1>Empower Your Investment Journey</h1>
              <p>Stay updated with stock information. Our user-friendly interface provides seamless access to the latest market news and prediction.</p>
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