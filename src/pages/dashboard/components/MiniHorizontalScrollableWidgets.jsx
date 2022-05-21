import React from "react";

function MiniHorizontalScrollableWidgets() {
  return (
    <div className="flex overflow-x-scroll pt-6 pb-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1].map((i) => (
        <div className="flex p-2 m-1 border dark:border-slate-700 bg-gray-700 dark:bg-slate-900 rounded-lg text-white">
          <div className="w-10 h-full bg-gray-500 dark:bg-slate-800 rounded flex items-center justify-around">
            <div>i</div>
          </div>
          <div className="mx-2">
            <div className="text-xs">Supply</div>
            <div>10,000</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MiniHorizontalScrollableWidgets;
