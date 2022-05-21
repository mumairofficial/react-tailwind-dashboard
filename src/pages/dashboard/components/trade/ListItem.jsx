import React from "react";

import { ReactComponent as OpenSeaIcon } from "../../../../assets/images/listings/table-open-sea.svg";
import { ReactComponent as TableIcon } from "../../../../assets/images/listings/table-icon.svg";
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
        <div className="mr-4">
          <TableIcon />
        </div>
      </div>

      <div className="flex items-center mr-4">
        <span className="mr-2">
          <EthIcon />
        </span>
        <span className="">{eth}</span>
      </div>
    </div>
  );
}

export default ListItem;
