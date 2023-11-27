
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/stock.css';

const Stock = (prop) => {
  const isPositiveChange = prop.lastChange > 0;
  const arrowIconClass = isPositiveChange ? "fa-arrow-up text-success" : "fa-arrow-down text-danger";
  const percentageChangeColor = isPositiveChange ? "text-success" : "text-danger";

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scaleStyle = isHovered ? { transform: 'scale(1.1)' } : {};
  const Indian = ['Reliance Industries','Infosys','HDFC Bank','Tata Consultancy Services']
  return (
    <div className="col-lg-4 col-md-6 col-sm-12"
      style={{ transition: 'all 0.3s', ...scaleStyle }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="card l-bg-blue-dark">
        <div className="card-statistic-3 p-4">
          <div className="card-icon card-icon-large">
            <i className="fas fa-users"></i>
          </div>
          <Link to={`/share/${prop.ticker}`}>
            <div className="mb-4">
              <h3 className="card-title mb-0">{prop.name}</h3>
              <h6 className="card-title mb-0">{prop.ticker}</h6>
            </div>
            <div className="row align-items-end mb-2 d-flex">
              <div className="col-8">
                <h2 className="d-flex align-items-center mb-0"> {Indian.includes(prop.name)?'₹':'$'} {prop.lastClose}</h2>
              </div>
              <div className="col-4 text-right" style={{ position: 'absolute', bottom: '10px', right: '0' }}>
                <span className={percentageChangeColor} style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  {prop.lastChange}% <i className={`fa ${arrowIconClass}`}></i>
                </span>
              </div>
            </div>
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stock;