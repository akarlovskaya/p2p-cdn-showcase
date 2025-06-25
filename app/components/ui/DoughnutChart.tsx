import { useEffect, useRef } from "react";
import { Chart, ChartType } from "chart.js/auto";

declare module "chart.js" {
  interface PluginOptionsByType<TType extends ChartType> {
    doughnutCenterText?: {
      text?: string;
      color?: string;
      fontStyle?: string;
    };
  }
}

// Register the plugin to add text in the center of the doughnut chart
Chart.register({
  id: "doughnutCenterText",
  beforeDraw(chart) {
    if (chart.config.options.plugins.doughnutCenterText) {
      const { text, color, fontStyle } =
        chart.config.options.plugins.doughnutCenterText;
      const {
        ctx,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;

      ctx.save();
      const textX = Math.round((left + right) / 2);
      const textY = Math.round((top + bottom) / 2);

      ctx.font = fontStyle || "bold 10px Arial";
      ctx.fillStyle = color || "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, textX, textY);
      ctx.restore();
    }
  },
});

const DoughnutChart = ({ savedPercentage }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          //   labels: ["Saved", "Remaining"],
          datasets: [
            {
              data: [savedPercentage, 100 - savedPercentage],
              backgroundColor: [
                "#2F86A6", // Color for saved portion
                "#ccc", // Color for remaining portion
              ],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "80%", // makes the doughnut thinner/thicker
          plugins: {
            legend: {
              position: "bottom",
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.label}: ${context.raw}%`;
                },
              },
            },
            doughnutCenterText: {
              text: `${savedPercentage}%`,
              color: "#000",
              fontStyle: "bold",
            },
          },
        },
      });
    }

    // Cleanup function to destroy chart on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [savedPercentage]);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;
