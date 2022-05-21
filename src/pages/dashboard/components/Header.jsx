import React from "react";

function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="p-2">Image</div>
        <div className="p-2">Project's name</div>
        <div className="flex p-2">
          <div className="mr-2">icon</div>
          <div className="mr-2">icon</div>
          <div className="mr-2">icon</div>
          <div>icon</div>
        </div>
      </div>

      <div className="p-2">
        <input
          className="rounded-lg px-3 py-2 border border-slate-600 bg-slate-900 text-white"
          placeholder="Token ID..."
          type="text"
        />
        <button className="bg-purple-700 ml-2 px-3 py-2 rounded-lg cursor-pointer">
          search
        </button>
      </div>
    </div>
  );
}

export default Header;
