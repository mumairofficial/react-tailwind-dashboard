import React from "react";
import { ReactComponent as Top1 } from "../../../assets/images/top-collections/top-1.svg";
import { ReactComponent as Top2 } from "../../../assets/images/top-collections/top-2.svg";
import { ReactComponent as Top3 } from "../../../assets/images/top-collections/top-3.svg";

function TopCollections() {
  return (
    <div className="flex text-xs items-center">
      <div className="mr-8">Top collections:</div>

      <div className="flex">
        <div className="flex border border-gray-300 dark:border-slate-600 rounded p-1 mr-2">
          <div className="mr-1">
            <Top1 className="rounded" />
          </div>
          <div className="text-purple-500 mr-1">Moonbird</div>
          <div>has 6 listing until +30% floor</div>
        </div>

        <div className="flex border border-gray-300 dark:border-slate-600 rounded p-1 mr-2">
          <div className="mr-1">
            <Top2 className="rounded" />
          </div>
          <div className="text-purple-500 mr-1">Moonbird</div>
          <div>has 6 listing until +30% floor</div>
        </div>

        <div className="flex border border-gray-300 dark:border-slate-600 rounded p-1 mr-2">
          <div className="mr-1">
            <Top3 className="rounded" />
          </div>
          <div className="text-purple-500 mr-1">Moonbird</div>
          <div>has 6 listing until +30% floor</div>
        </div>
      </div>
    </div>
  );
}

export default TopCollections;
