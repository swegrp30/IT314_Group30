import React from 'react'

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


const Future = (props) => {
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
  return (
    <div>
        <StockChartComponent title=" Analysis" tooltip={{enable:true, format: '<b>${point.x} : ${point.y}</b>'}}>
                <Inject services={[LineSeries, DateTime]} />
                <StockChartSeriesCollectionDirective>
                  <StockChartSeriesDirective
                    dataSource={props.futureData}
                    type="Line"
                    xName="date"
                    yName="value"
                  ></StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
              </StockChartComponent>
    </div>
  )
}

export default Future