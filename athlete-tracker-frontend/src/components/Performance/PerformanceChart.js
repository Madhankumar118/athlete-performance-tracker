import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PerformanceChart = ({ data }) => {
  const chartRef = React.useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => new Date(d.timestamp).toLocaleString()),
        datasets: [{
          label: 'Performance',
          data: data.map(d => d.value),
          borderColor: 'rgba(75,192,192,1)',
          fill: false,
        }]
      },
      options: {
        responsive: true,
      }
    });

    return () => {
      if(chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default PerformanceChart;
