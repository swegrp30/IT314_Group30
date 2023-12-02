import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      className="card l-bg-web mb-3 l-bg-web mb-3 text-decoration-none text-white"
      style={{ transition: "all 0.3s", ...scaleStyle }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-statistic-3 p-4">
        
          <div className="cardContainer">
            <div className="stockLeft">
              <div className="mb-4">
                <h3 className="card-title mb-0">{prop.name}</h3>
                <h6 className="card-title mb-0">{prop.ticker}</h6>
              </div>
              <div className="row align-items-end mb-2">
                <div className="col-10">
                  <h2 className="d-flex align-items-center mb-0">
                    {Indian.includes(prop.name) ? "₹" : "$"} {prop.lastClose}
                  </h2>
                </div>
              </div>
              <div className="col-6 text-right">
                <h3
                  className={`${percentageChangeColor} font-weight-bold`}
                  style={{ fontSize: "20px" }}
                >
                  {prop.lastChange}% <i className={`fa ${arrowIconClass}`}></i>
                </h3>
              </div>
              <div className="col-7 text-right mt-4">
              <Link
                to={`/share/${prop.name}`}
              >
                Check Trends   <i class="fa-solid fa-arrow-right fa-beat"></i>
              </Link>
            </div>
            </div>

            <div className="stockRight">
              <div className="text-right mt-3 star">
                <i
                  class="fa-solid fa-star fa-2xl"
                  style={{ color: "white" }}
                  onClick={prop.handleDelFav}
                ></i>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Stock;
