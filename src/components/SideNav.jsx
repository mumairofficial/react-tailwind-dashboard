import React from "react";

import { ReactComponent as Icon1 } from "../assets/images/nav/nav-1.svg";
import { ReactComponent as Icon2 } from "../assets/images/nav/nav-2.svg";
import { ReactComponent as Icon3 } from "../assets/images/nav/nav-3.svg";
import { ReactComponent as Icon4 } from "../assets/images/nav/nav-4.svg";
import { ReactComponent as Icon5 } from "../assets/images/nav/nav-5.svg";
import { ReactComponent as Icon6 } from "../assets/images/nav/nav-6.svg";

function SideNav() {
  return (
    <div className="bg-slate-900 text-white pt-6" style={{ minWidth: "85px" }}>
      <div className="flex justify-around">
        <Icon1 />
      </div>

      <div className="mx-4 my-8 bg-slate-800" style={{ height: "1px" }}></div>

      <div className="flex justify-around py-3 my-4 bg-slate-800">
        <Icon2 />
      </div>
      <div className="flex justify-around py-3 my-4 hover:bg-slate-800">
        <Icon3 />
      </div>
      <div className="flex justify-around py-3 my-4 hover:bg-slate-800">
        <Icon6 />
      </div>
      <div className="flex justify-around py-3 my-4 hover:bg-slate-800">
        <Icon4 />
      </div>
      <div className="flex justify-around py-3 my-4 hover:bg-slate-800">
        <Icon5 />
      </div>
    </div>
  );
}

export default SideNav;
