import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { data } from "cheerio/dist/commonjs/api/attributes";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function BandwidthUsed({ userData }) {
  console.log("BandwidthUsed COMP userData", userData);
  if (!userData) {
    return <p>Loading data</p>;
  }

  // Prepare chart data
  const chartData = {
    // X-axis labels (months)
    labels: userData.map((entry) => entry.month), // ['January', 'February', 'March', 'April']

    // Y-axis datasets (one line per domain)
    datasets: userData[0].content?.domains?.map((domain) => ({
      label: domain.name,
      // Get bandwidth for this domain across all months
      data: userData.map(
        (monthData) =>
          monthData.content?.domains.find((d) => d.name === domain.name)
            ?.bandwidth || 0
      ),
      borderColor: {
        "streaminghub.com": "#2F86A6",
        "cloudstorage.net": "#059669",
        "officeapps.biz": "#3FA4C9",
      }[domain.name],
      backgroundColor: "transparent",
      borderWidth: 2,
      tension: 0.3, // Smooth curves
      pointRadius: 2,
      pointHoverRadius: 4,
    })),
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false, // for container fitting
    plugins: {
      legend: {
        position: "top", // Prevents legend overflow
      },
      title: {
        display: false,
        text: "Monthly Bandwidth Usage by Domain (GB)",
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.parsed.y} GB`,
        },
      },
    },
    scales: {
      y: {
        title: { display: true, text: "Bandwidth (GB)" },
        beginAtZero: true,
      },
      x: {
        title: { display: false, text: "Month" },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Bandwidth Used per Domain</h2>
      <div
        style={{
          width: "100%",
          height: "300px", // Fixed or responsive (e.g., '50vh')
          position: "relative", // Required for proper scaling
        }}
      >
        <Line data={chartData} options={options} />
      </div>
    </>
  );
}
