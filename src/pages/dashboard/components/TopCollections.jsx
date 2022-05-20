import React from "react";

function TopCollections() {
  return (
    <div className="flex text-xs items-center">
      <div className="mr-8">Top collections:</div>

      <div className="flex">
        <div className="flex border border-gray-300 rounded p-1 mr-2">
          <div className="rounded bg-blue-500 px-1 mr-1">im</div>
          <div className="text-purple-700 mr-1">Moonbird</div>
          <div>has 6 listing until +30% floor</div>
        </div>

        <div className="flex border border-gray-300 rounded p-1 mr-2">
          <div className="rounded bg-blue-500 px-1 mr-1">im</div>
          <div className="text-purple-700 mr-1">Moonbird</div>
          <div>has 6 listing until +30% floor</div>
        </div>

        <div className="flex border border-gray-300 rounded p-1 mr-2">
          <div className="rounded bg-blue-500 px-1 mr-1">im</div>
          <div className="text-purple-700 mr-1">Moonbird</div>
          <div>has 6 listing until +30% floor</div>
        </div>
      </div>
    </div>
  );
}

export default TopCollections;
