import React from "react";
import { ReactComponent as ProjectImage } from "../../../assets/images/header/header-1.svg";
import { ReactComponent as Icon1 } from "../../../assets/images/header/header-2.svg";
import { ReactComponent as Icon2 } from "../../../assets/images/header/header-3.svg";
import { ReactComponent as Icon3 } from "../../../assets/images/header/header-4.svg";
import { ReactComponent as Icon4 } from "../../../assets/images/header/header-6.svg";
import { ReactComponent as Icon5 } from "../../../assets/images/header/header-5.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/header/header-7.svg";

function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="p-2">
          <ProjectImage className="rounded" />
        </div>
        <div className="p-2">Project's name</div>
        <div className="flex p-2">
          <div className="mr-2">
            <Icon1 />
          </div>
          <div className="mr-2">
            <Icon2 />
          </div>
          <div className="mr-2">
            <Icon3 />
          </div>
          <div className="mr-2">
            <Icon4 />
          </div>
          <div>
            <Icon5 />
          </div>
        </div>
      </div>

      <div className="p-2 flex">
        <input
          className="rounded-lg px-3 py-2 border border-slate-600 bg-slate-900 text-white"
          placeholder="Token ID..."
          type="text"
        />
        <button className="flex items-center bg-purple-700 ml-2 px-3 py-2 rounded-lg cursor-pointer">
          <span className="mr-1">
            <SearchIcon />
          </span>
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
