import React from "react";

import { ReactComponent as OpenSeaIcon } from "../../../../assets/images/listings/table-open-sea.svg";
import { ReactComponent as ArrowDownIcon } from "../../../../assets/images/listings/table-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "../../../../assets/images/listings/table-arrow-up.svg";
import { ReactComponent as EthIcon } from "../../../../assets/images/listings/table-eth-icon.svg";

function ListItem({ item }) {
  const { id, ListIcon, rank, time, multiplier, variation, eth } = item;

  return (
    <div className="flex justify-between my-2 px-3 py-3 bg-gray-500 dark:bg-slate-700 rounded-lg border border-transparent hover:border-purple-700">
      <div className="flex items-center">
        <div className="mr-2">
          <ListIcon className="rounded" />
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
          <OpenSeaIcon />
        </div>
        <div className="mr-4">{multiplier}</div>
        <div
          className={`mr-4 ${
            variation < 50 ? "text-red-600" : "text-green-600"
          }`}
        >
          {variation < 50 ? (
            <div className="flex items-center">
              <ArrowDownIcon className="mr-1" />
              {variation}
            </div>
          ) : (
            <div className="flex items-center">
              <ArrowUpIcon className="mr-1" />
              {variation}
            </div>
          )}
        </div>

        <div className="flex mr-4">
          <span className="mr-2">
            <EthIcon />
          </span>
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
