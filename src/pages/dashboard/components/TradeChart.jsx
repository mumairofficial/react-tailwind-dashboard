import React from "react";
import { ReactComponent as DropdownIcon } from "../../../assets/images/listings/dropdown-icon.svg";
import { ReactComponent as SwitchIcon } from "../../../assets/images/charts/switch-icon.svg";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import faker from "faker";

// chart.js config
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: "A dataset",
      data: Array.from({ length: 100 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
      })),
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

// react component
function TradeChart() {
  return (
    <div className="mx-2 mt-6">
      <div className="flex justify-between items-center mb-2">
        <div className="font-bold text-lg">Trades</div>
        <div className="flex text-sm">
          <div className="flex items-center mr-2 bg-slate-700 px-2 py-1 rounded-lg">
            <span className="mr-2">Interval</span>
            <span>5M</span>
            <span className="ml-2">
              <DropdownIcon />
            </span>
          </div>

          <div className="flex items-center mr-2 bg-slate-700 px-2 py-1 rounded-lg">
            <span className="mr-2">Span</span>
            <span>4D</span>
            <span className="ml-2">
              <DropdownIcon />
            </span>
          </div>

          <div className="flex items-center px-2 py-1 rounded-lg">
            <span className="mr-2">Outliers</span>
            <span className="ml-2">
              <SwitchIcon />
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-900">
        <Scatter options={options} data={data} />
      </div>
    </div>
  );
}

export default TradeChart;
