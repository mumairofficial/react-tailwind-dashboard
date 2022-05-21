import React from "react";
import { ReactComponent as Icon1 } from "../../../assets/images/scroll-widgets/scroll-1.svg";
import { ReactComponent as Icon2 } from "../../../assets/images/scroll-widgets/scroll-2.svg";
import { ReactComponent as Icon3 } from "../../../assets/images/scroll-widgets/scroll-3.svg";
import { ReactComponent as Icon4 } from "../../../assets/images/scroll-widgets/scroll-4.svg";
import { ReactComponent as Icon5 } from "../../../assets/images/scroll-widgets/scroll-5.svg";
import { ReactComponent as Icon6 } from "../../../assets/images/scroll-widgets/scroll-6.svg";
import { ReactComponent as Icon7 } from "../../../assets/images/scroll-widgets/scroll-7.svg";
import { ReactComponent as Icon8 } from "../../../assets/images/scroll-widgets/scroll-8.svg";
import { ReactComponent as Icon9 } from "../../../assets/images/scroll-widgets/scroll-9.svg";

function MiniHorizontalScrollableWidgets() {
  return (
    <div className="flex overflow-x-scroll pt-6 pb-3">
      {[
        Icon1,
        Icon2,
        Icon3,
        Icon4,
        Icon5,
        Icon6,
        Icon7,
        Icon8,
        Icon9,
        Icon1,
        Icon2,
        Icon3,
      ].map((Icon) => (
        <div
          key={Icon}
          className="flex p-2 m-1 border dark:border-slate-700 bg-gray-700 dark:bg-slate-700 rounded-lg text-white"
        >
          <div className="w-10 h-full bg-gray-500 dark:bg-slate-600 rounded flex items-center justify-around">
            <div>
              <Icon />
            </div>
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
