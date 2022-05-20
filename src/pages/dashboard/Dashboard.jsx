import React from "react";
import Header from "./components/Header";
import MiniHorizontalScrollableWidgets from "./components/MiniHorizontalScrollableWidgets";
import TopCollections from "./components/TopCollections";

function Dashboard() {
  return (
    <div>
      <Header />

      {/* top collections bar */}
      <TopCollections />

      {/* mini widgets h-scroll */}
      <MiniHorizontalScrollableWidgets />
    </div>
  );
}

export default Dashboard;
