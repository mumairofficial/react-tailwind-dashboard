import React from "react";
import SideNav from "./SideNav";

const BasicLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SideNav />
      {children}
    </div>
  );
};

export default BasicLayout;
