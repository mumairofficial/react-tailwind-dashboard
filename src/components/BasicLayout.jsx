import React from "react";
import SideNav from "./SideNav";

const BasicLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideNav />
      {children}
    </div>
  );
};

export default BasicLayout;
