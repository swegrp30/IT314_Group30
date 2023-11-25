// StockDetails.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Notes from "./Notes";
// import { chartData } from "./Data";
// import LineChart from './LineChart';
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
  Inject,
  DateTime,
  Tooltip,
  RangeTooltip,
  Crosshair,
  LineSeries,
  SplineSeries,
  CandleSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  RangeAreaSeries,
  Trendlines,
} from "@syncfusion/ej2-react-charts";
import {
  EmaIndicator,
  RsiIndicator,
  BollingerBands,
  TmaIndicator,
  MomentumIndicator,
  SmaIndicator,
  AtrIndicator,
  AccumulationDistributionIndicator,
  MacdIndicator,
  StochasticIndicator,
  Export,
} from "@syncfusion/ej2-react-charts";

import "../style/StockDetails.css"; // Import your custom styles

const StockDetails = () => {
  const [share, setShare] = useState({});
  const [chartData, setChartData] = useState();
  const [futureData, setFutureData] = useState();
  const [boolPred,setBoolPred]= useState(true);

  const primaryXAxis = {
    valueType: "DateTime",
  };
  const crosshair = { enable: true };
  const tooltip = { enable: true };
  const periodselector = [
    { text: "1M", interval: 1, intervalType: "Months" },
    { text: "3M", interval: 3, intervalType: "Months" },
    { text: "6M", interval: 6, intervalType: "Months" },
    { text: "1Y", interval: 1, intervalType: "Years" },
    { text: "2Y", interval: 2, intervalType: "Years", selected: true },
    { text: "All" },
  ];
  const token = localStorage.getItem("authToken");
  const headers = {
    "Content-Type": "application/json",
    "auth-token": token,
  };
  const params = useParams();
  const handleClick =()=>{
    let x = document.getElementById("myBtn").textContent;
    if(x=='Past Analysis'){
      document.getElementById("myBtn").textContent="Future Prediction";
    }
    else{
      document.getElementById("myBtn").textContent="Past Analysis";
    }
    setBoolPred(!boolPred)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:7000/getdata");
        const res2 = await axios.get(
          "http://localhost:7000/ml_data?company=tata",
          { headers }
        );

        const selectedShare = res.data.find(
          (item) => item.Ticker === params.id
        );
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
                <h4 className="stock-price">${share.LastClose}</h4>
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
                <span className="stock-value">{share.LastOpen}</span>
              </p>
              <p className="stock-label">
                Circulating Supply:{" "}
                <span className="stock-value">{share.LastVolume}</span>
              </p>
              <p className="stock-label">
                Market Cap:{" "}
                <span className="stock-value">
                  ${(share.LastVolume * share.LastClose).toFixed(2)}
                </span>
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <p className="stock-label">
                  Daily High:{" "}
                  <span className="stock-value">${share.LastHigh}</span>
                </p>
              </div>
              <div className="col-md-6">
                <p className="stock-label">
                  Daily Low:{" "}
                  <span className="stock-value">${share.LastLow}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="stock-divider" />
        <button className="btn btn-primary" id = "myBtn" onClick={handleClick}>Future Prediction</button>

        {boolPred ? (
          <div className="past">
            <h1 className="stock-analysis-title">
              Past Analysis - {share.Name}
            </h1>
            <small className="text-muted stock-last-updated">
              Last Updated On: {new Date(Date.now()).toLocaleString()}
            </small>

            <div className="container-fluid border-1 mt-4">
              <StockChartComponent
                primaryXAxis={primaryXAxis}
                crosshair={crosshair}
                tooltip={tooltip}
                periods={periodselector}
                title="Price Analysis"
              >
                <Inject
                  services={[
                    DateTime,
                    Tooltip,
                    RangeTooltip,
                    Crosshair,
                    LineSeries,
                    SplineSeries,
                    CandleSeries,
                    HiloOpenCloseSeries,
                    HiloSeries,
                    RangeAreaSeries,
                    Trendlines,
                    EmaIndicator,
                    RsiIndicator,
                    BollingerBands,
                    TmaIndicator,
                    MomentumIndicator,
                    SmaIndicator,
                    AtrIndicator,
                    Export,
                    AccumulationDistributionIndicator,
                    MacdIndicator,
                    StochasticIndicator,
                  ]}
                />
                <StockChartSeriesCollectionDirective>
                  <StockChartSeriesDirective
                    dataSource={chartData}
                    type="Candle"
                    xName="x"
                  ></StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
              </StockChartComponent>
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
              <StockChartComponent title=" Analysis">
                <Inject services={[LineSeries, DateTime]} />
                <StockChartSeriesCollectionDirective>
                  <StockChartSeriesDirective
                    dataSource={futureData}
                    type="Line"
                    xName="date"
                    yName="value"
                  ></StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
              </StockChartComponent>
            </div>
          </div>
        )}
      </div>
      <Notes />
    </>
  );
};

export default StockDetails;
