import React from "react";

function ContentWrapper({ children }) {
  return (
    <div className="p-2 container-width bg-white dark:bg-slate-800 dark:text-white">
      {children}
    </div>
  );
}

export default ContentWrapper;
