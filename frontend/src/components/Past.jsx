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
    Zoom
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

const Past = (props) => {
    const primaryXAxis = {
        valueType: "DateTime",
        majorTickLines : {
          color : 'blue',
          width : 5
      },
      minorTickLines : {
          color : 'red',
          width : 0
      }
      };
      const crosshair = { enable: true ,lineType:'Both'};
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
                    dataSource={props.chartData}
                    type="Candle"
                    xName="x"
                  ></StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
              </StockChartComponent>
    </div>
  )
}

export default Past