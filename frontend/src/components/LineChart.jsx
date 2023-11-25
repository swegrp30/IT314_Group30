import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];



const LineChart = (props) => {
  const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: props.label,
  datasets: [
    {
      label: "Price",
      mode:"nearest",
      borderColor: "rgb(0,255,0)",
      data: props.data,
    },
  ],
  options: {
    // All of these (default) events trigger a hover and are passed to all plugins,
    // unless limited at plugin options
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    plugins: {
      tooltip: {
        // Tooltip will only receive click events
        events: ['click']
      }
    }
  }
};

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;