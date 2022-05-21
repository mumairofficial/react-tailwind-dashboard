import React from "react";
import { ReactComponent as DropdownIcon } from "../../../assets/images/listings/dropdown-icon.svg";
import { ReactComponent as SwitchIcon } from "../../../assets/images/charts/switch-icon.svg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

// chart configuration
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

// react component
function LiveListingChart() {
  return (
    <div className="mx-2 mt-6">
      <div className="flex justify-between items-center mb-2">
        <div className="font-bold text-lg">Live Listing</div>
        <div className="flex text-sm">
          <div className="flex items-center mr-2 bg-slate-700 px-2 py-1 rounded-lg">
            <span className="mr-2">Group size</span>
            <span>0.01</span>
            <span className="ml-2">
              <DropdownIcon />
            </span>
          </div>

          <div className="flex items-center px-2 py-1 rounded-lg">
            <span className="mr-2">Ladder</span>
            <span className="ml-2">
              <SwitchIcon />
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-900">
        <Bar height={90} options={options} data={data} />
      </div>
    </div>
  );
}

export default LiveListingChart;
