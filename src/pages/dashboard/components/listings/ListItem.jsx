import React from "react";

function ListItem({ item }) {
  const { id, image, rank, time, multiplier, variation, eth } = item;

  return (
    <div className="flex justify-between my-2 px-3 py-3 bg-gray-500 dark:bg-slate-700 rounded-lg border border-transparent hover:border-purple-700">
      <div className="flex items-center">
        <div className="mr-2">
          <img src={image} />
        </div>
        <div className="mr-4">
          <span>Rank:</span>
          <span>{rank}</span>
        </div>

        <div className="mr-6 text-sm text-slate-400">{id}</div>

        <div className="text-sm text-slate-400">{time}</div>
      </div>

      <div className="flex items-center">
        <div className="mr-4">
          <span>icon</span>
        </div>
        <div className="mr-4">{multiplier}</div>
        <div
          className={`mr-4 ${
            variation < 50 ? "text-red-600" : "text-green-600"
          }`}
        >
          {variation}
        </div>
        <div className="mr-4">
          <span className="mr-2">EI</span>
          <span className="">{eth}</span>
        </div>
        <div>
          <button className="bg-purple-700 px-4 py-1 rounded-lg text-sm cursor-pointer">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
