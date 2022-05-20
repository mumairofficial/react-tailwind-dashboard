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
          className="rounded-lg px-3 py-2 border border-gray-300 bg-gray-700 text-white"
          placeholder="Token ID..."
          type="text"
        />
        <a
          className="bg-purple-500 px-3 py-3 rounded-lg"
          href="https://www.google.com"
          target={"_blank"}
        >
          search
        </a>
      </div>
    </div>
  );
}

export default Header;
