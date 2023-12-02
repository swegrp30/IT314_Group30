// StockDetails.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Notes from "./Notes";
import Future from "./Future";
import Past from "./Past";

import "../style/StockDetails.css"; // Import your custom styles

const StockDetails = () => {
  const [share, setShare] = useState({});
  const [chartData, setChartData] = useState();
  const [futureData, setFutureData] = useState();
  const [boolPred, setBoolPred] = useState(true);

  const Indian = [
    "Reliance Industries",
    "Infosys",
    "HDFC Bank",
    "Tata Consultancy Services",
  ];
  const token = localStorage.getItem("authToken");
  const headers = {
    "Content-Type": "application/json",
    "auth-token": token,
  };
  const params = useParams();
  const handleClick = () => {
    let x = document.getElementById("myBtn").textContent;
    if (x == "Past Analysis") {
      document.getElementById("myBtn").textContent = "Future Prediction";
    } else {
      document.getElementById("myBtn").textContent = "Past Analysis";
    }
    setBoolPred(!boolPred);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://sharebb-production.up.railway.app/getdata"
        );
        const res2 = await axios.get(
          `https://sharebb-production.up.railway.app/ml_data?company=${params.id}`,
          { headers }
        );

        const selectedShare = res.data.find((item) => item.Name === params.id);
        setShare(selectedShare);
        setChartData(selectedShare["Historical Data"]);
        setFutureData(res2.data[0].abc);
        // console.log(res2.data[0].abc);
        // setFutureData(res2.)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // const interval = setInterval(() => {
    //     fetchData();
    // }, 1000);
    // return () => clearInterval(interval);
  }, []);
  const isPositiveChange = share.LastChange > 0;
  const arrowIconClass = isPositiveChange
    ? "fa-arrow-up text-success"
    : "fa-arrow-down text-danger";
  const percentageChangeColor = isPositiveChange
    ? "text-success"
    : "text-danger";

  return (
    <>
      <div className="container mt-4 stock-details-container">
        <div className="row">
          <div className="col-md-6">
            <div className="stock-header">
              <h3 className="stock-title">{share.Name}</h3>
              <h6 className="stock-title">{share.Ticker}</h6>
              <div className="stock-info">
                <h4 className="stock-price">
                  {Indian.includes(share.Name) ? "₹" : "$"}
                  {share.LastClose}
                </h4>
                <span
                  className={`stock-change ${
                    share.LastChange > 0 ? "text-success" : "text-danger"
                  }`}
                >
                  {share.LastChange}% <i className={`fa ${arrowIconClass}`}></i>
                </span>
              </div>
            </div>
            <div className="stock-data">
              <p className="stock-label">
                Opening Price:{" "}
                <span className="stock-value">
                  {Indian.includes(share.Name) ? "₹" : "$"}
                  {share.LastOpen}
                </span>
              </p>
              <p className="stock-label">
                Circulating Supply:{" "}
                <span className="stock-value">{share.LastVolume}</span>
              </p>
              <p className="stock-label">
                Market Cap:{" "}
                <span className="stock-value">
                  {Indian.includes(share.Name) ? "₹" : "$"}
                  {(share.LastVolume * share.LastClose).toFixed(2)}
                </span>
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <p className="stock-label">
                  Daily High:{" "}
                  <span className="stock-value">
                    {Indian.includes(share.Name) ? "₹" : "$"}
                    {share.LastHigh}
                  </span>
                </p>
              </div>
              <div className="col-md-6">
                <p className="stock-label">
                  Daily Low:{" "}
                  <span className="stock-value">
                    {Indian.includes(share.Name) ? "₹" : "$"}
                    {share.LastLow}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="stock-divider" />
        <button className="btn btn-primary" id="myBtn" onClick={handleClick}>
          Future Prediction
        </button>

        {boolPred ? (
          <div className="past">
            <h1 className="stock-analysis-title">
              Past Analysis - {share.Name}
            </h1>
            <small className="text-muted stock-last-updated">
              Last Updated On: {new Date(Date.now()).toLocaleString()}
            </small>

            <div className="container-fluid border-1 mt-4">
              <Past chartData={chartData} />
            </div>
          </div>
        ) : (
          <div className="future">
            <h1 className="stock-analysis-title">
              Future Prediction - {share.Name}
            </h1>
            <small className="text-muted stock-last-updated">
              Last Updated On: {new Date(Date.now()).toLocaleString()}
            </small>

            <div className="container-fluid border-1 mt-4">
              <Future futureData={futureData} />
            </div>
          </div>
        )}
      </div>
      <Notes />
    </>
  );
};

export default StockDetails;
